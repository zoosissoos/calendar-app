import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Calendar from './Calendar';
import DayDetails from './DayDetails';
import EventNew from './events/EventNew';


class App extends Component {

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Calendar} />
            <Route path="/events/:month/:day/:year" component={DayDetails} />
            <Route path="/events/new" component={EventNew} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);