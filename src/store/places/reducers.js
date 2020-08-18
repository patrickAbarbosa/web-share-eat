import {
  PLACES,
  SAVE_DIST
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
  
    case SAVE_DIST:
      const dist = {
        name: action.payload.name,
        price: action.payload.price,
        description: action.payload.description 
      }
      
      state.places[action.payload.place].menuItems.push(dist)
      
      return { ...state }
      
    default:
      return state
  }
}
