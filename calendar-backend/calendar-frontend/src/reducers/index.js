import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import eventsReducer from './eventsReducer';

export default combineReducers({
  events: eventsReducer,
  form: reduxForm,
});