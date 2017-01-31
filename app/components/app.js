import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Alert
} from 'react-native';

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
    height: 500,
    width: 400,
    justifyContent: 'center',
    alignItems: 'stretch',
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
