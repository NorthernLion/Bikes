import gql from 'graphql-tag'

const ALL_BIKE_STATIONS = gql`
query {
  bikeParks {
    bikeParkId
    name
  }
}
`
export default ALL_BIKE_STATIONS

