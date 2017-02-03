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
      geoFences: [],
      lastPosition: null
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
    this.watchID = navigator.geolocation.watchPosition((position) => {
      const lastPosition = JSON.stringify(position);
      let that = this;
      this.state.geoFences.forEach( fence => {
        if (that.containsLocation(lastPosition, fence)) {
          Alert.alert('you have entered a geofence');
        }
      })
      this.setState({lastPosition});
    });
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

  containsLocation(point, polygon) {
    // ray-casting algorithm based on
    // http://www.ecse.rpi.edu/Homepages/wrf/Research/Short_Notes/pnpoly.html

    let x = point['lat'], y = point['lng'];

    let inside = false;
    for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
        let xi = polygon[i]['lat'], yi = polygon[i]['lng'];
        let xj = polygon[j]['lat'], yj = polygon[j]['lng'];

        let intersect = ((yi > y) != (yj > y))
            && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
        if (intersect) inside = !inside;
    }

    return inside;
};

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
    debugger
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
            lastPosition={this.state.lastPosition}
            />
          <TrackForm
            lastPosition={this.state.lastPosition}
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
