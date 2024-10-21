import { StyleSheet } from 'react-native';
import {
  NEUTRAL_BLACK_900,
  NEUTRAL_GRAY_500,
  NEUTRAL_WHITE_100,
  NEUTRAL_WHITE_50,
} from '../utils/colors';

export const styles = StyleSheet.create({
  icon: {
    resizeMode: 'contain',
    height: 18,
    width: 18,
  },
  container: {
    padding: 16,
    backgroundColor: NEUTRAL_WHITE_100,
    borderRadius: 10,
  },
  item: {
    display: 'flex',
    padding: 16,
    backgroundColor: NEUTRAL_WHITE_50,
    borderRadius: 10,
  },
  margin: {
    marginTop: 8,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    display: 'flex',
  },
  title: {
    color: NEUTRAL_BLACK_900,
    fontSize: 15,
    fontWeight: '500',
  },
  text: {
    color: NEUTRAL_GRAY_500,
  },
  content: {
    // padding: 10,
    marginTop: 16,
  },
  grouped: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
