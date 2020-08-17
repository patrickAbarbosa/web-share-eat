import {
  PLACES
} from './types.js'

import ReturnApi from '../../return-api.json'

export const getPlaces = () => {
  return dispatch => {
    dispatch({ type: PLACES, payload: ReturnApi })
  }
}