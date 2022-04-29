import React, { useState } from 'react';
import { Component } from 'react/cjs/react.production.min';
import { StyleSheet, View, Button } from 'react-native';
import _Search_Bar from '../Components/_Search_Bar';
import _Map from '../Components/_Map';
import _Location from '../Components/_Location';

export default class NavigationScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: "",
      long: ""
    };
  }

  render() {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
    return (
      <View style={styles.container}>
        <Button title="B"></Button>
        <_Map></_Map>
        <View style={styles.input}>
          <_Search_Bar />
        </View>
        <_Location />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  input: {
    position: 'absolute',
    left: 150,
    top: -30,
    right: 150,
    alignSelf: 'center',
  },
});