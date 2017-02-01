
import { StyleSheet, Dimensions } from 'react-native';

const {height, width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    height: 350,
    width: width - 10,
    marginLeft: 5,
    marginTop: 100,
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    padding: 5
  },
});
