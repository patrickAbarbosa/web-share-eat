import {
  PLACES,
  PLACE
} from './types.js'

const INITIAL_STATE = {
  places: null,
  place: null
}

export default (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case PLACES:
      return {
        ...state,
        places: action.payload 
      }
    
    case PLACES:
      return {
        ...state,
        places: action.payload 
      }
    
    case PLACE:
      return {
        ...state,
        place: action.payload 
      }
  
    default:
      return state
  }
}
