import React, { Component } from 'react';

import ALL_BIKE_STATIONS from '../../graphql/allBikeStations'

import { useQuery } from 'react-apollo-hooks'



const Fromto =  (props) => {
    props.getAllBikeStations(useQuery(ALL_BIKE_STATIONS))

    return(<p>niri</p>)
}

export default Fromto