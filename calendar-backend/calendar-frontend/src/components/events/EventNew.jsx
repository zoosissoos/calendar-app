// SurveyNew shows SurveyForm and SurveyFormReview
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import EventForm from './EventForm';
import EventFormReview from './EventFormReview';

class EventNew extends Component {
  state = { showFormReview: false };

  renderContent() {
    if (this.state.showFormReview) {
      return (
        <EventFormReview
          onCancel={() => this.setState({ showFormReview: false })}
        />
      );
    }

    return (
      <EventForm
        onEventSubmit={() => this.setState({ showFormReview: true })}
      />
    );
  }

  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    );
  }
}

export default reduxForm({
  form: 'eventForm'
})(EventNew);
