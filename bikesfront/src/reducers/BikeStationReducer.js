const INITIAL_STATE = []

const bikeStationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'BIKESTATIONS_GET_ALL_SUCCESS':
      return action.stations
    case 'BIKESTATIONS_GET_ALL_FAILURE':
      return []
    default:
      return state
  }
}

export const getAllBikeStations = stations => {
  return async dispatch => {
    
    dispatch({
      type: 'BIKESTATIONS_GET_ALL_SUCCESS',
      stations
    })
  }
}

export default bikeStationReducer



