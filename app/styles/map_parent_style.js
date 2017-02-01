
import { StyleSheet, Dimensions } from 'react-native';

const {height, width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    width: width,
  }
});
