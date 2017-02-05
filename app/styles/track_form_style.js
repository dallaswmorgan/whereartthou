import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginTop: 390,
    width: 115,
    height: 16,
  },
  trackButton: {
    position: 'absolute',
    width: 115,
    height: 30,
    left: 125,
    top: -100,
    backgroundColor: 'gray',
    color: 'white',
    fontWeight: 'bold',
    paddingHorizontal: 6,
    borderRadius: 1,
    borderWidth: 1,
    borderColor: 'white',
    padding: 6
  },
  submitTrackButton: {
    width: 115,
    height: 30,
    left: 125,
    top: -100,
    backgroundColor: '#22AAA1',
    color: 'black',
    fontWeight: 'bold',
    paddingHorizontal: 6,
    borderRadius: 1,
    borderWidth: 1,
    borderColor: 'white',
    padding: 7,
  },
  currentlyTracking: {
    width: 115,
    height: 17,
    left: 125,
    top: -100,
    backgroundColor: '#22AAA1',
    color: 'black',
    fontWeight: 'bold',
    paddingHorizontal: 6,
    borderRadius: 1,
    borderWidth: 1,
    borderColor: 'white'
  }
});
