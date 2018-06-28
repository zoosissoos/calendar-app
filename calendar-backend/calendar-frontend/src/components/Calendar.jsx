import React, { Component } from 'react';
import Radium from 'radium';
import _ from 'lodash';
import { connect } from 'react-redux';
import { fetchMonthEvents } from '../actions';
import Day from './Day';

class Calendar extends Component {

  constructor(props){
    super(props);
    this.state = {
      date: new Date(),
      datesDisp: []
    }
  }

  componentDidMount() {
    const today = this.state.date
    const month = today.getMonth();
    const year = today.getFullYear()

    this.props.fetchMonthEvents(month, year)
    this.getDays(month, year);
  }

  //gets Integer code for first day of the week the month falls on
  getStart(year, month) {
    let start = new Date(year, month, 1).getDay()
    return start
  }

  getDays(month, year) {
    let numDays;

    //determines how many days are in the month
    switch(month) {
      case 1: if((year) % 4 === 0 ) {
                numDays = 29;
                break;
              } else {
                numDays = 28;
                break;
              }
      case 0:
      case 2:
      case 4:
      case 6:
      case 7:
      case 9:
      case 11: numDays = 31;
                break;
      case 3:
      case 5:
      case 8:
      case 10: numDays = 30;
                break;
      default: numDays = 0;
    }

    let dateArr = _.range(1, numDays + 1)
  
    //determines how many spacers to add before and after month starting date
    let start = this.getStart(year, month)
    for(let i = 0; i < start; i++ ) {
      dateArr.unshift('spacer');
    }

    while(dateArr.length % 7 !== 0){
      dateArr.push('spacer');
    }

    //sets the date display
    this.setState({
      datesDisp: dateArr
    })
  }

  //helper to filter events for specific day
  returnEvents(x, arr) {
    const test = [x]
    let filtArr = arr.filter(itm => {
      return test.indexOf(itm.day) > -1;
    });
    return filtArr
  }


  //renders days with spaces
  renderDays() {
    const today = this.state.date
    const month = today.getMonth();
    const year = today.getFullYear();
    const eventsList = this.props.events

    if(eventsList.length > 0 ){
      //maps through dates to display and checks if there are any events
      return this.state.datesDisp.map((d, index) => {
        let theseEvents = this.returnEvents(d, eventsList)
        if(theseEvents.length > 0){
          return(       
            <Day key={index} thisDate={ `${d}` } dateCode={`${month}/${d}/${year}`} events={theseEvents}/>
          )
        }        
        return(       
          <Day key={index} dateCode={`${month}/${d}/${year}`} thisDate={ `${d}` }/>
        )
      }) 
    }
     
    return(       
      <div>
        <span />
      </div>
    )   
  }

  render() {
    if(this.state.datesDisp.length > 0){
      return (
        <div style={styles.cal}>
          {this.renderDays()}
        </div>
      )
    } else {
      return (
        <div>
          Currently Loading
        </div>
      )
    }
  }
}

const styles = {
  cal: {
    boxSizing: 'border-box',
    width: '80vw',
    height: '90vh',
    color: 'black',
    margin: '0 auto',
    display: 'flex',
    flexFlow: 'row wrap',
    position: 'relative',
    justifyContent: 'space-evenly'
  }
}

function mapStateToProps({ events }) {
  return { events };
}


const connectedCalendar = connect(mapStateToProps, { fetchMonthEvents }) (Calendar);
export default Radium(connectedCalendar);

