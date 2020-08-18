import {
  PLACES,
  SAVE_DIST
} from './types.js'

import ReturnApi from '../../return-api.json'

export const getPlaces = () => {
  return dispatch => {
    dispatch({ type: PLACES, payload: ReturnApi })
  }
}

export const saveDist = (props) => {
  return dispatch => {
    dispatch({ type: SAVE_DIST, payload: props })
  }
}