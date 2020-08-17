import {
  PLACES
} from './types.js'

const INITIAL_STATE = {
  places: null
}

export default (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case PLACES:
      return {
        ...state,
        places: action.payload 
      }
  
    default:
      return state
  }
}
