const INITIAL_STATE = []

const bikeStationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'BIKESTATIONS_GET_ALL_SUCCESS':
      return action.stations.data.bikeRentalStations
    case 'BIKESTATIONS_GET_ALL_FAILURE':
      return []
    default:
      return state
  }
}

export const getAllBikeStations = stations => {
  return async dispatch => {
    
    if (!stations.loading) {
      dispatch({
        type: 'BIKESTATIONS_GET_ALL_SUCCESS',
        stations
      })
    } else {
      dispatch({
        type: 'BIKESTATIONS_GET_ALL_ATTEMPT'
      })
    }

  }
}

export default bikeStationReducer



