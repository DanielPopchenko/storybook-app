import { StyleSheet } from 'react-native';
import { NEUTRAL_BLACK_900 } from '../utils/colors';

export const styles = StyleSheet.create({
  button: {
    display: 'flex',
    flexDirection: 'row',
    minHeight: 47,
    width: 'auto',
    paddingHorizontal: 16,
    paddingVertical: 11,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexShrink: 0,
    borderRadius: 10,
  },
  outlineText: {
    color: NEUTRAL_BLACK_900,
  },
  gap: {
    gap: 10,
  },
  leftGroup: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rounded: {
    paddingHorizontal: 25,
    borderRadius: 90,
  },
  card: {
    display: 'flex',
    paddingHorizontal: 36.5,
    paddingVertical: 22,
    maxHeight: 99,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
    borderRadius: 5,
    flex: 1,
  },
  buttonTextBold: {
    fontWeight: 700,
  },
  iconOnly: {
    borderRadius: 50,
    paddingHorizontal: 11,
    margin: 0,
    gap: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    textAlign: 'center',
    fontFamily: 'Manrope, sans-serif',
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: 500,
  },
  buttonContainer: {
    alignItems: 'flex-start',
    flex: 1,
    width: 'auto',
    height: 'auto',
  },
  icon: {
    width: 25,
    height: 25,
  },
  playIcon: {
    width: 115,
    height: 115,
  },
  fullWidth: {
    width: '100%',
    textAlign: 'center',
  },
  contentCentered: {
    justifyContent: 'center',
  },
});
