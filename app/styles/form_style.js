import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    flex:1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  label: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
    textShadowColor: 'black',
    textShadowOffset: {width: 2, height: 2}
  },
  buttonContainer: {
    width: 200,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  button: {
    width: 75,
  },
  trueButton: {
    width: 75,
    backgroundColor: '#55DDE0',
    marginTop: 15,
    color: '#00171F',
    fontWeight: 'bold',
    paddingHorizontal: 6,
    borderRadius: 1,
    borderWidth: 1,
    borderColor: 'white'
  },
  falseButton: {
    width: 75,
    backgroundColor: 'gray',
    marginTop: 15,
    color: 'white',
    fontWeight: 'bold',
    paddingHorizontal: 6,
    borderRadius: 1,
    borderWidth: 1,
    borderColor: 'white'
  }
});
