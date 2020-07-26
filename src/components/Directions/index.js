import React from "react";
import MapViewDirections from "react-native-maps-directions";

const Directions = ({ destination, origin, onReady }) => (
  <MapViewDirections
    destination={destination}
    origin={origin}
    onReady={onReady}
    apikey="AIzaSyCI4DLp5qScnrPn03ELtpkSvA6LnRL-MCM"
    strokeWidth={3}
    strokeColor="#222"
  />
);

export default Directions;
