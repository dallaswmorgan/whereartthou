
import { StyleSheet, Dimensions } from 'react-native';

const {height, width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    width: width - 10,
    height: 300,
    marginLeft: 5,
    marginTop: 100
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  bubble: {
    backgroundColor: 'rgba(255,255,255,0.7)',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20,
  },
  latlng: {
    width: 200,
    alignItems: 'stretch',
  },
  button: {
    width: 80,
    paddingHorizontal: 12,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    backgroundColor: 'transparent',
  },
});
