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
        <Text style={styles.label}>
          Select when you would like to be notified
        </Text>
        <View style={styles.buttons}>
          <TouchableHighlight
            underlayColor= '#2F4858'
            onPress={() => this.props.switchOnEnter()}>
            <Text style={this.props.state.form.onEnter ? styles.trueButton : styles.falseButton}>
              On Enter
            </Text>
          </TouchableHighlight>
          <TouchableHighlight
           underlayColor= '#2F4858'
            onPress={() => this.props.switchOnExit()}>
            <Text style={this.props.state.form.onExit ? styles.trueButton : styles.falseButton}>
              On Exit
            </Text>
          </TouchableHighlight>
        </View>
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
