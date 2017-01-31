/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, View} from 'react-native';
import App from './app/components/app.js';
import Map from './app/components/map.js';

export default class WhereArtThou extends Component {
  render(){
    return (
      <View>
        < Map />
      </View>
    );
  }
}

AppRegistry.registerComponent('WhereArtThou', () => WhereArtThou);
