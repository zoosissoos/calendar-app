import axios from 'axios';
import { FETCH_EVENTS, FETCH_MONTH_EVENTS, FETCH_DAY_EVENTS, DELETE_EVENT_SUCCESS } from './types';

//all events
export const fetchEvents = () => async dispatch => {
  const res = await axios.get('/api/events/all');
  console.log(res.data)
  
  dispatch({ type: FETCH_EVENTS, payload: res.data });
};

//specific month event search
export const fetchMonthEvents = (month, year) => async dispatch => {
  try {
    const res = await axios.get(`/api/events/${year}/${month}`);
    dispatch({ type: FETCH_MONTH_EVENTS, payload: res.data });
  }
  catch(e){
    console.log('there was an error')
    console.log(e)
  }
}

//specific day event seach
export const fetchDayEvents = (month, day, year) => async dispatch => {
  try {
    const res = await axios.get(`/api/events/${month}/${day}/${year}`);
    dispatch({ type: FETCH_DAY_EVENTS, payload: res.data });
  }
  catch(e){
    console.log('there was an error')
    console.log(e)
  }
}

//submits an event to database
export const submitEvent = (values, history) => async dispatch => {
  try {
    const res = await axios.post('/api/events', values);
    history.push('/');
    dispatch({ type: FETCH_EVENTS, payload: res.data });
  }
  catch(e){
    console.log('there was an error')
    console.log(e)
  }
};

//deletes event from database
export const deleteEvent = (id) => async dispatch => {
  try {
    const res = await axios.delete(`/api/events/${id}`);
    dispatch({ type: DELETE_EVENT_SUCCESS, payload: res.data });
  }
  catch(e){
    console.log('there was an error') 
    console.log(e)
  }
};