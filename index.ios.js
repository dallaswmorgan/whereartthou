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
  render() {
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
          onPress={() => Alert.alert('you pressed a button!')}
          title={"Press a button"}
          accessibilityLabel="This is a test button"
          />
      </View>
    );
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
