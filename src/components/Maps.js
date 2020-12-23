import {Map, GoogleApiWrapper, Marker} from 'google-maps-react';
import React from 'react';
import googleMapStyles from "./GoogleMapStyles";

export class Maps extends React.Component {
    render() {

        return (
            <Map
                google={this.props.google}
                zoom={15}
                style={this.props.mapStyles}
                initialCenter={{ lat: 9.761927, lng: 79.95244 }}

            >
                <Marker position={{ lat: 9.761927, lng: 79.95244 }}/>
            </Map>
            
        )
    }
}

Maps.defaultProps = googleMapStyles;


export default GoogleApiWrapper({
    apiKey: 'AIzaSyCmcWJv8v6wCgaUzGK6uI9Bh9zdr5ruakg'
})(Maps);
