import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Image,
  Text,
  View,
  Button,
  Alert,
  TouchableHighlight
} from 'react-native';

import { styles } from '../styles/splash.js';

export default class App extends Component {

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (initialPosition) => {
        this.setState({initialPosition});
      },
      (error) => alert(error.message),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
  }


  render() {
    if (this.state) {
      return (
        <View style={styles.container}>
          <Text style={styles.welcome}>
            WhereOnEarth
          </Text>

          <Text style={styles.instructions}>
            Know where you are{"\n"}
            Know where you're not
          </Text>
          <Image
            style={styles.splash}
            source={require('../../images/logo.png')}
          />
          <TouchableHighlight
            onPress={() => Alert.alert(`Lat: ${this.state.initialPosition.coords.latitude} Long: ${this.state.initialPosition.coords.longitude}`)}>
            <Text style={styles.button}>
              Enter
            </Text>
          </TouchableHighlight>
        </View>
      );
    } else {
      return(
        <View></View>
      );
    }
  }
}

AppRegistry.registerComponent('WhereArtThou', () => App);
