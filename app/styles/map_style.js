
import { StyleSheet, Dimensions } from 'react-native';

const {height, width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    width: width - 30,
    height: 340,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: 15,
    marginTop: 200,
  },
  label: {
    position: 'absolute',
    top: 15,
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    textShadowColor: 'black',
    textShadowOffset: {width: 2, height: 2}
  },
  map: {
    position: 'absolute',
    top: 30,
    marginTop: 20,
    height: 300,
    width: width - 30,
    borderRadius: 1,
    borderWidth: 1,
    borderColor: 'white'
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
    width: 70,
    paddingHorizontal: 12,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  buttonContainer: {
    position: 'absolute',
    top: 70,
    backgroundColor: 'transparent',
  }
});
