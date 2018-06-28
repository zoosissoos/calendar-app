import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteEvent } from '../actions';
import Radium from 'radium';


class EventRow extends Component {
  constructor(props) {
    super(props)
    this.state = {
      _id: null,
      title: null,
      description: null,
      dateModified: null
    }
  }

  componentDidMount() {
    let { _id, title, description, dateModified } = this.props.thisEvent

    this.setState({
      _id, 
      title, 
      description, 
      dateModified
    })
  }

  deleteEvent(id) {
    this.props.deleteEvent(id)
  }

  render() {
    if(this.state._id === null){
      return (
        <div>
          Loading
        </div>
      )
    } else {
      return (
        <div>
          <div>
            Title: { this.state.title }
          </div>
          <div>
            Description: { this.state.description }
          </div>
          <div>
            Date Modified: { this.state.dateModified.toLocaleString() }
          </div>
          <button 
               onClick={() => this.deleteEvent(this.state._id)} 
          >
               delete
          </button>
          <hr />
        </div>
      )
    }
  }  
}

function mapStateToProps({ events }) {
  return { events };
}

const connectedEventRow = connect(mapStateToProps, { deleteEvent }) (EventRow);
export default Radium(connectedEventRow);