/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Alert
} from 'react-native';

export default class WhereArtThou extends Component {

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log('POSITION HERE');
        console.log(position);
        var initialPosition = position;
        this.setState({initialPosition});
      },
      (error) => alert(error.message),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
    // this.watchID = navigator.geolocation.watchPosition((position) => {
    //   var lastPosition = JSON.stringify(position);
    //   this.setState({lastPosition});
    // });
  }

  render() {
    if (this.state) {
      console.log(this.state.initialPosition);
      return (
        <View style={styles.container}>
          <Text style={styles.welcome}>
            We have an app!
          </Text>

          <Text style={styles.instructions}>
            Look at all this cool stuff we can do
          </Text>
          <Text style={styles.instructions}>
            So many cool things
            like dallas endless skills
          </Text>
          <Button
            backgroundColor="red"
            onPress={() => Alert.alert(`Lat: ${this.state.initialPosition.coords.latitude} Long: ${this.state.initialPosition.coords.longitude}`)}
            title={"Press a button"}
            accessibilityLabel="This is a test b"/>
        </View>
      );
    } else {
      return(
        <View></View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'red'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  button: {
    fontWeight: 'bold',
    borderColor: 'black',
    borderWidth: 2,
  }
});

AppRegistry.registerComponent('WhereArtThou', () => WhereArtThou);
