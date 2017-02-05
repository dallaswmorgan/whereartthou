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
    const onPress = this.props.submittable() ? () => this.props.handleWatchSubmit() : null;
    return(
      <View style={styles.container}>
        <TouchableHighlight
          underlayColor='transparent'
          onPress={onPress}>
          <Text style={this.props.submittable() ? styles.submitTrackButton : styles.trackButton}>
            Start Tracking
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}
