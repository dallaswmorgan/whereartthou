import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  Alert,
  TouchableHighlight,
  Dimensions
} from 'react-native';

import { styles } from '../styles/splash_style.js';

import MapParent from './map_parent.js';

export default class App extends Component {
  constructor(props){
    super(props);

    this.enter = this.enter.bind(this);
  }

  enter(){
    this.props.navigator.replace({
      component: MapParent
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          WhereOnEarth
        </Text>

        <Text style={styles.instructions}>
          {"Know where you are\nKnow where you're not"}
        </Text>
        <Image
          style={styles.splash}
          source={require('../../images/logo.png')}
        />
        <TouchableHighlight
          underlayColor= '#2F4858'
          onPress={() => this.enter()}>
          <Text style={styles.button}>
            Enter
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}
