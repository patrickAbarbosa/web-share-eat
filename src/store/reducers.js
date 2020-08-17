/*
  ---------------------------- Note ------------------------------
  This project does not require the use of redux. 
  However, it was used to demonstrate that i have mastered its use.
*/

import { combineReducers } from 'redux'

// Reducers 
import place from './places/reducers'

export default combineReducers({
  place
})