import React from 'react';
import { Link } from 'react-router-dom';
import Radium from 'radium';

const Day = (props) => {
  if(props.thisDate !== 'spacer'){
    if(!props.events){
      //returns plain space if there are no events
      return (
        <div style={[styles.block, styles.day]}>
          <Link 
            to={`/events/${props.dateCode}`}
            style={styles.link}
          >
            { props.thisDate }       
          </Link>
        </div>  
      )
    }else{
      //returns space with event titles if there were events found
      return (
        <div style={[styles.block, styles.day]}>
          <Link 
            to={`/events/${props.dateCode}`}
            style={styles.link}
          >
            { props.thisDate }       
          </Link>
          <ul style={styles.list}>
            {props.events.map((event, index) => {
              return (
                <li key={index}>{event.title}</li>                
              )
            })}
          </ul>
        </div>
      )
    }
  } else {
    //spacer blocks that will fill in the week for the previous month and next month
    return (
      <div style={[styles.block, styles.spacer]}>
        <span />
      </div>
    )
  }
}

const styles = {
  link:{
    size:'10px',
    textDecoration: 'none', 
    backgroundColor:'black',
    color: 'white',
    padding: '4px'
  },
  block: {
    boxSizing: 'border-box',
    borderStyle: 'solid',
    borderColor: 'black',
    flex: '0 0 14.2%',
  },
  list: {
    marginTop: '5px'
  },
  spacer: {
    textAlign: 'center',
    backgroundColor: 'grey'
  }
}

export default Radium(Day);