import { FETCH_EVENTS, FETCH_MONTH_EVENTS, FETCH_DAY_EVENTS, DELETE_EVENT_SUCCESS } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_EVENTS:
      return action.payload
    case FETCH_MONTH_EVENTS:
      return action.payload
    case FETCH_DAY_EVENTS:
      return action.payload
    case DELETE_EVENT_SUCCESS:
      return action.payload
    default:
      return state;
  }
}