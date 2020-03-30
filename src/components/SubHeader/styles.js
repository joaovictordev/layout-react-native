import { StyleSheet } from 'react-native';
import { metrics, colors, fonts } from '../../styles';

export default styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    padding: metrics.padding,
    borderBottomWidth: 1,
    borderColor: colors.lighter,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  avatar: {
    height: 68,
    width: 68,
    borderRadius: 34,
    marginRight: metrics.padding
  },

  profileInfo: {
    flex: 1
  },

  username: {
    fontWeight: 'bold',
    fontSize: fonts.big,
    color: colors.darker,
    marginTop: 5
  },

  description: {
    fontSize: fonts.regular,
    color: colors.regular,
    marginTop: 5
  },

  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 10
  },

  firstButton: {
    marginRight: 10
  }

});
