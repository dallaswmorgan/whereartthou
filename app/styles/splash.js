import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: 500,
    width: 400,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#2F4858',
  },
  welcome: {
    fontSize: 24,
    fontFamily: 'Baskerville-Bold',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 80,
    color: '#55DDE0'
  },
  instructions: {
    textAlign: 'center',
    fontFamily: 'Baskerville',
    color: 'white',
    marginTop: 20,
    marginBottom: 5
  },
  splash: {
    height: 200,
    width: 220
  },
  button: {
    color: 'white',
    marginTop: 10,
    fontFamily: 'Baskerville',
  }
});
