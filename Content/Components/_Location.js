import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import * as Location from 'expo-location';

export default function _Location() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  // Get location-access from device
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  // Request the location
  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = "Lat: " + JSON.stringify(location.coords.latitude) + " Long: " + JSON.stringify(location.coords.longitude);
    console.log(text);
    this.props.latitude = JSON.stringify(location.coords.latitude);
    this.props.longitude = JSON.stringify(location.coords.longitude);
  }
  return (<View></View>);
}