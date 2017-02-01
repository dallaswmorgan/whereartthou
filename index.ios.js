/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, NavigatorIOS} from 'react-native';
import App from './app/components/app.js';
import Map from './app/components/map.js';
import { styles } from './app/styles/index_style.js';

export default class WhereArtThou extends Component {
  render(){
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'WhereOnEarth',
          component: App
        }}/>
    );
  }
}

AppRegistry.registerComponent('WhereArtThou', () => WhereArtThou);
