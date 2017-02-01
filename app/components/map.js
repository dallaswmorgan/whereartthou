import React, { Component } from 'react';
import {
  Text,
  View,
  Alert
} from 'react-native';
import MapView from 'react-native-maps';

import { styles } from '../styles/map_style.js';

export default class Map extends Component {

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({position});
      },
      (error) => alert(error.message),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
  }


  render() {
      return (
        <View style={styles.container}>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}>
             <MapView.Polygon
              coordinates={[
                {latitude: 37.6, longitude: -122.4},
                {latitude: 37.8, longitude: -122.4},
                {latitude: 37.7, longitude: -122.5}]}/>
          </MapView>
        </View>
    );

  }
}
