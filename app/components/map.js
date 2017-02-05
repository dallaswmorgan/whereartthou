import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  TouchableHighlight,
  Alert
} from 'react-native';

import MapView from 'react-native-maps';
import { styles } from '../styles/map_style.js';

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;

class PolygonCreator extends React.Component {
  constructor(props) {
    super(props);
    this.latitude = props.map.position.coords.latitude;
    this.longitude = props.map.position.coords.longitude;
    this.latDelta = 0.0922;
    this.lngDelta = this.latDelta * ASPECT_RATIO;
    this.region = {
      latitude: this.latitude,
      longitude: this.longitude,
      latitudeDelta: this.latDelta,
      longitudeDelta: this.lngDelta
    };
    this.polygons = props.polygons;
    this.editing = props.editing;
  }

  componentWillReceiveProps(newProps){
    if (newProps.editing !== this.editing)
      this.editing = newProps.editing;
    if (this.polygons !== newProps.polygons)
      this.polygons = newProps.polygons;
  }

  render() {
    const mapOptions = {
      scrollEnabled: true,
    };

    if (this.editing) {
      mapOptions.scrollEnabled = false;
      mapOptions.onPanDrag = e => this.props.onPress(e);
    }

    return (
      <View style={styles.container}>
        <Text style={styles.label}>
          Place points on map to create desired fence
        </Text>
        <MapView
          style={styles.map}
          mapType={MapView.MAP_TYPES.HYBRID}
          initialRegion={this.region}
          showsUserLocation = {true}
          onPress={e => this.props.onPress(e)}
          {...mapOptions}
          >
          {this.polygons.map(polygon => (
            <MapView.Polygon
              key={polygon.id}
              coordinates={polygon.coordinates}
              strokeColor="#F00"
              fillColor="rgba(255,0,0,0.5)"
              strokeWidth={1}
              onPress={() => this.props.remove(polygon.id)}
              />
          ))}
          {this.editing && (
            <MapView.Polygon
              key={this.editing.id}
              coordinates={this.editing.coordinates}
              strokeColor="#000"
              fillColor="rgba(255,0,0,0.5)"
              strokeWidth={1}
              />
          )}
        </MapView>
        <View style={styles.buttonContainer}>
          {this.editing && (
            <TouchableOpacity
              onPress={() => this.props.finish()}
              style={[styles.bubble, styles.button]}
              >
              <Text>Finish</Text>
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.cancelButton}>
          {this.editing && (
            <TouchableOpacity
              onPress={() => this.props.cancel()}
              style={[styles.bubble, styles.button]}
              >
              <Text>Cancel</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  }
}

PolygonCreator.propTypes = {
  provider: MapView.ProviderPropType,
};

module.exports = PolygonCreator;
