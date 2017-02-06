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
      prevPosition: {},
      currentPosition: {}

    };
    this.switchAlert = this.switchAlert.bind(this);
    this.switchOnEnter = this.switchOnEnter.bind(this);
    this.switchOnExit = this.switchOnExit.bind(this);
    this.finish = this.finish.bind(this);
    this.onPress = this.onPress.bind(this);
    this.handleWatchSubmit = this.handleWatchSubmit.bind(this);
    this.submittable = this.submittable.bind(this);
    this.cancel = this.cancel.bind(this);
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
    this.watchID = navigator.geolocation.watchPosition((currentPosition) => {
      this.setState({
                      prevPosition: this.state.currentPosition,
                      currentPosition: { lat: currentPosition.coords.latitude,
                                         lng: currentPosition.coords.longitude }
                   });
    });
   }

  switchAlert(){
    this.setState({
      form: {
        alertMe: !this.state.form.alertMe,
        onEnter: this.state.form.onEnter,
        onExit: this.state.form.onExit
      }
    });
  }

  switchOnEnter(){
    this.setState({
      form: {
        alertMe: this.state.form.alertMe,
        onEnter: !this.state.form.onEnter,
        onExit: this.state.form.onExit
      }
    });
  }

  switchOnExit(){
    this.setState({
      form: {
        alertMe: this.state.form.alertMe,
        onEnter: this.state.form.onEnter,
        onExit: !this.state.form.onExit
      }
    });
  }

  handleWatchSubmit() {
    if (this.submittable()) {
      let geoFences = [];
      this.state.polygons.forEach(polygon => {
        let fencePolygon = polygon.coordinates.map( coord => {
          return({ lat: coord.latitude, lng: coord.longitude })
        })
        const first = polygon.coordinates[0];
        fencePolygon.push({lat: first.latitude, lng: first.longitude});
        geoFences.push(fencePolygon);
      })
      this.setState({ geoFences });
    }
  }

  finish() {
    const { polygons, editing } = this.state;
    this.setState({
      polygons: [...polygons, editing],
      editing: null,
    });
  }

  cancel() {
    this.setState({
      editing: null
    })
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

  submittable(){
    if (this.state.form.onEnter === false && this.state.form.onExit === false)
      return false;
    if (this.state.polygons.length === 0)
      return false;
    return true;
  }

  render() {


    this.state.geoFences.forEach(fence => {
      let prevPoint = this.state.prevPosition;
      let currentPoint = this.state.currentPosition;
      if (this.containsLocation(currentPoint, fence) &&
          !this.containsLocation(prevPoint, fence) &&
          this.state.form.onEnter) {
            Alert.alert('You have ENTERED a fence');
      }
      if (this.containsLocation(prevPoint, fence) &&
            !this.containsLocation(currentPoint, fence) &&
            this.state.form.onExit) {
          Alert.alert('You have EXITED a fence')
      }

    })
    if (Object.keys(this.state.map.position).length > 0) {
      return(
        <View style={styles.container}>
          <Form style={styles.contents}
                switchOnEnter={this.switchOnEnter}
                switchOnExit={this.switchOnExit}
                state={this.state}
            />

          <Map style={styles.contents}
              finish={this.finish}
              onPress={this.onPress}
              map={this.state.map}
              polygons={this.state.polygons}
              region={this.state.region}
              editing={this.state.editing}
              cancel={this.cancel}
            />
          <TrackForm style={styles.contents}
              handleWatchSubmit={this.handleWatchSubmit}
              submittable={this.submittable}/>
        </View>
      );
    } else {
      return(
        <View></View>
      );
    }
  }
}
