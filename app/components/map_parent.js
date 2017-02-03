import React, { Component } from 'react';
import {
  Text,
  View,
  Alert,
} from 'react-native';
import Map from './map.js';
import Form from './form.js';
import TrackForm from './track_form.js';
import GeoFencing from 'react-native-geo-fencing';

import { styles } from '../styles/map_parent_style.js';

let id = 0;

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
      },
      polygons: [],
      editing: null,
      geoFences: []
    };
    this.switchAlert = this.switchAlert.bind(this);
    this.switchOnEnter = this.switchOnEnter.bind(this);
    this.switchOnExit = this.switchOnExit.bind(this);
    this.finish = this.finish.bind(this);
    this.onPress = this.onPress.bind(this);
    this.handleWatchSubmit = this.handleWatchSubmit.bind(this);
  }


  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          map: {
            position
          },
        });
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

  handleWatchSubmit() {
    let geoFences = [];
    this.state.polygons.forEach(polygon => {
      let fencePolygon = polygon.coordinates.map( coord => {
        return({ lat: coord.latitude, lng: coord.longitude })
      })
      const first = this.state.polygons[0].coordinates[0];
      fencePolygon.push({lat: first.latitude, lng: first.longitude});
      geoFences.push(fencePolygon);
    })
    this.setState({ geoFences })
  }

  finish() {
    const { polygons, editing } = this.state;
    this.setState({
      polygons: [...polygons, editing],
      editing: null,
    });
  }

  onPress(e) {
    const editing = this.state.editing;
    let coordinate = e.nativeEvent.coordinate;
        if (!editing) {
      this.setState({
        editing: {
          id: id++,
          coordinates: [coordinate]
        },
      }
    );
    } else {
      this.setState({
        editing: {
          ...editing,
          coordinates: [
            ...editing.coordinates,
            coordinate
          ],
        }
      });
    }
  }

  render() {
    if (this.state.geoFences[0]) {
      console.log(GeoFencing);
      console.log('this should say true if you made a polygon around treasure island');
      console.log(this.state.geoFences[0]);
      let point = {lat: 37.825167, lng: -122.373791};
      debugger
      console.log(GeoFencing);
      GeoFencing.containsLocation(point, this.state.geoFences[0]).then(() => console.log(true)).catch(() => console.log(false));
    }

    if (Object.keys(this.state.map.position).length > 0) {
      return(
        <View style={styles.container}>
          <Form switchOnEnter={this.switchOnEnter}
                switchOnExit={this.switchOnExit}
                state={this.state}
            />
          <Map finish={this.finish}
            onPress={this.onPress}
            map={this.state.map}
            polygons={this.state.polygons}
            region={this.state.region}
            editing={this.state.editing}
            />
          <TrackForm
            handleWatchSubmit={this.handleWatchSubmit}/>
        </View>
      );
    } else {
      return(
        <View></View>
      );
    }
  }
}
