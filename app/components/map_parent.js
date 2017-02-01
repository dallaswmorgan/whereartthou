import React, { Component } from 'react';
import {
  Text,
  View,
  Alert,
} from 'react-native';
import Map from './map.js';

import { styles } from '../styles/map_parent_style.js';

export default class MapParent extends Component {
  render() {
    return(
      <View style={styles.container}>
        <Text>Form</Text>
        <Map />
      </View>
    );
  }
}
