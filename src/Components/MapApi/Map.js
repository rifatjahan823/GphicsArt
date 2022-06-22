import React from 'react'
import { GoogleMap, LoadScript,Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
  boxShadow: '0 0 11px rgba(33,33,33,.2)',
  border:"10px solid white"
};

const position = {
  lat:23.810331,
  lng: 90.412521
};

function Map() {
    const onLoad = marker => {
        console.log('marker: ', marker)
      }
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyCs3icx6eoh41aFX4fL_TwSdE1hMyHs56Y"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={position}
        zoom={10}
      >
    <Marker
      onLoad={onLoad}
      position={position}
    />
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(Map)