import { StyleSheet, Dimensions } from 'react-native';
import { metrics, fonts, colors } from '../../../styles';

const { width } = Dimensions.get('window');

export default styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 3,
    marginBottom: metrics.padding,
    width: (width - 45) / 2,
    padding: metrics.padding
  },

  checkIcon: {
    position: 'absolute',
    top: metrics.padding,
    right: metrics.padding,
    color: colors.primary,
    zIndex: 1
  },

  image: {
    width: '100%',
    height: 100,
    resizeMode: 'contain',
  },

  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: colors.darker,
  },

  description: {
    textAlign: 'center',
    color: colors.regular,
    fontSize: fonts.smaller
  },

  price: {
    textAlign: 'center',
    color: colors.light,
    fontSize: fonts.regular,
    marginTop: 5
  },
});
