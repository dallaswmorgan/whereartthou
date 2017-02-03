import { StyleSheet, Dimensions } from 'react-native';

const {height, width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    height: height,
    width: width,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#2F4858',
  },
  welcome: {
    fontSize: 30,
    fontFamily: 'Baskerville-Bold',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 100,
    color: '#55DDE0',
    textShadowColor: 'black',
    textShadowOffset: {width: 3, height: 3}
  },
  instructions: {
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'Baskerville',
    color: 'white',
    marginTop: 20,
    marginBottom: 5,
  },
  splash: {
    marginTop: 15,
    height: 250,
    width: 260
  },
  button: {
    fontSize: 26,
    color: 'white',
    marginTop: 50,
    fontFamily: 'Baskerville',
  }
});
