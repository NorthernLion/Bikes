import gql from 'graphql-tag'

const ALL_BIKE_STATIONS = gql`
query {
  bikeRentalStations {
    name
    stationId
    bikesAvailable
    spacesAvailable
    state
    lon
    lat
  }
}
`
export default ALL_BIKE_STATIONS

