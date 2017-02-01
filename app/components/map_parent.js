import React, { Component } from 'react';
import {
  Text,
  View,
  Alert,
} from 'react-native';
import Map from './map.js';
import Form from './form.js';

import { styles } from '../styles/map_parent_style.js';

export default class MapParent extends Component {
  constructor(props){
    super(props);
    this.state = {
      form: {
        alertMe: true,
        onEnter: false,
        onExit: false
      },
      map: {
        position: {},
        region: {
          latitude: '',
          longitude: '',
          latDelta: '',
          longDelta: ''
        },
        polygons: [],
        editing: null,
        creatingHole: false
      }
    };
    this.switchAlert = this.switchAlert.bind(this);
    this.switchOnEnter = this.switchOnEnter.bind(this);
    this.switchOnExit = this.switchOnExit.bind(this);
  }


  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
       (position) => {
         this.setState({
           map:{
             position
           }});
       },
       (error) => alert(error.message),
       {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
     );
   }

  switchAlert(){
    this.setState({
      alertMe: !this.props.alertMe
    });
  }

  switchOnEnter(){
    this.setState({
      onEnter: !this.state.onEnter
    });
  }

  switchOnExit(){
    this.setState({
      onExit: !this.state.onExit
    });
  }

  render() {
    if (Object.keys(this.state.map.position).length > 0) {
      return(
        <View style={styles.container}>
          <Form switchOnEnter={this.switchOnEnter}
                switchOnExit={this.switchOnExit}
                state={this.state}
                />
              <Map map={this.state.map}/>
        </View>
      );
    } else {
      return(
        <View></View>
      );
    }
  }
}
