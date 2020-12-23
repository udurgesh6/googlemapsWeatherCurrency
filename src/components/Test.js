import {Map, GoogleApiWrapper, Marker} from 'google-maps-react';
import React, {useState, useEffect} from 'react';
import googleMapStyles from "./GoogleMapStyles";

function Test(props) {

    const [lat, setLat] = useState(19);
    const [long, setLong] = useState(81);

    var options = {
        enableHighAccuracy: true
    }
    
    function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            position => {
                setLat(JSON.stringify(position.coords.latitude));
                setLong(JSON.stringify(position.coords.longitude));
            },
            error,
            options
        )
    }, )

    return (
        <code>
            <Map
        google={props.google}
        zoom={15}
        style={props.mapStyles}
        initialCenter={{ lat: 0, lng: 0 }}
        center={{lat:lat, lng:long}}
        >

            <Marker position={{lat: lat, lng: long}}/>

        </Map>
        </code>
        
    )
}

Test.defaultProps = googleMapStyles;

export default GoogleApiWrapper(
    (props) => ({
      apiKey: 'AIzaSyCmcWJv8v6wCgaUzGK6uI9Bh9zdr5ruakg',    
    }
))(Test)
