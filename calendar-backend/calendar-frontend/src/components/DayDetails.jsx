import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchDayEvents } from '../actions';
import { Link } from 'react-router-dom';
import Radium from 'radium';

import EventRow from './EventRow'

class DayDetails extends Component {
  constructor(props) {
    super(props)

    this.state = {
      month: null,
      day: null,
      year: null
    }
  }

  componentDidMount(){

    //parses and splits url and to get query parameters
    const parsedUrl = new URL(window.location.href);
    const splitPath = parsedUrl.pathname.split('/').slice(2)

    const month = splitPath[0]
    const day = splitPath[1]
    const year = splitPath[2]

    //sets state
    this.setState({
      month,
      day,
      year
    });

    //retrieves events for this day
    this.props.fetchDayEvents(month, day, year)
  }

  renderEvents() {

    const daysEvents = this.props.events
    console.log(daysEvents)
    if(this.props.events.length > 0) {
      return (
        <div style={styles.detailsContainer}>
          {daysEvents.map((singleEvent, index) => {
            console.log('singleEvent', singleEvent)
            return(
              <EventRow key={index} thisEvent={singleEvent}/>
            )            
          })}
          <div style={styles.buttonContainer}>
            <Link 
                to={"/"}
            >   
              Back   
            </Link>
            <Link 
                to={`/events/new/`}
            >   
              Add New Event   
            </Link>
          </div>         
        </div>
      )
    } else {
      return (
        <div style={styles.detailsContainer}>
          <div>
            There are no events for this day.
          </div>
          <div style={styles.buttonContainer}>
            <Link 
                to={"/"}
            >   
              Back   
            </Link>
            <Link 
                to={`/events/new/`}
            >   
              Add New Event   
            </Link>
          </div>
        </div>
      )

    }
  }

  render() {
    if(this.props.events){
      return (
        <div>
          { this.renderEvents() }
        </div>
      )
    }else{
      return (
        <div>
          Events Loading
        </div>
      )
    }
  }
};

const styles = {
  detailsContainer: {
    margin: '0 auto',
    backgroundColor: 'grey',
    width: '80vw',
    height: '90vh',
  }
}

function mapStateToProps({ events }) {
  return { events };
}


const connectedDayDetails = connect(mapStateToProps, { fetchDayEvents }) (DayDetails);
export default Radium(connectedDayDetails);