/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, View} from 'react-native';
import App from './app/components/app.js';

export default class WhereArtThou extends Component {
  render(){
    return (
      <View>
        <App />
      </View>
    );
  }
}

AppRegistry.registerComponent('WhereArtThou', () => WhereArtThou);
