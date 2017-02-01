import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableHighlight,
  TextInput,
  StyleSheet
} from 'react-native';

import { styles } from '../styles/form_style.js';

export default class Form extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
      <View style={styles.container}>
        <TouchableHighlight
          underlayColor= 'white'
          onPress={() => this.props.switchOnEnter()}>
          <Text style={this.props.state.onEnter ? styles.trueButton : styles.falseButton}>
            On Enter
          </Text>
        </TouchableHighlight>
        <TouchableHighlight
         underlayColor= 'white'
          onPress={() => this.props.switchOnExit()}>
          <Text style={this.props.state.onExit? styles.trueButton : styles.falseButton}>
            On Exit
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

// <TouchableHighlight
//  underlayColor= 'white'
//   // style={styles.buttonContainer}
//   onPress={() => this.switchAlert()}>
//   <Text style={this.state.alertMe ? styles.trueButton : styles.falseButton}>
//     Alert Me
//   </Text>
// </TouchableHighlight>
