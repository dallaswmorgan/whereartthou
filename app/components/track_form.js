import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableHighlight
} from 'react-native';

import { styles } from '../styles/track_form_style.js';

export default class TrackForm extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
      <View style={styles.container}>
        <TouchableHighlight
          underlayColor='white'
          onPress={() => this.props.handleWatchSubmit()}>
          <Text style={styles.trackButton}>
            Start Tracking
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}
