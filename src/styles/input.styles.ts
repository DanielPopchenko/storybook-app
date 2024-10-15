import { StyleSheet } from 'react-native';
import {
  NEUTRAL_BLACK_900,
  NEUTRAL_WHITE_150,
  NEUTRAL_WHITE_50,
  PRIMARY_BLUE_900,
  SECONDARY_RED_700,
} from '../utils/colors';
export const styles = StyleSheet.create({
  container: {
    width: 'auto',
    flex: 1,
    height: 'auto',
  },
  inputWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',

    minHeight: 42,
    minWidth: 131,
    justifyContent: 'space-between',
    backgroundColor: NEUTRAL_WHITE_50,
    paddingHorizontal: 12,
    // paddingVertical: 12,
    overflow: 'hidden',

    borderRadius: 8,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: NEUTRAL_WHITE_150,
  },

  textInput: {
    flex: 1,
    justifyContent: 'center',
    height: '80%',
  },

  text: {
    color: NEUTRAL_BLACK_900,
    fontFamily: 'Manrope',
    fontSize: 11,
    fontStyle: 'normal',
    fontWeight: 500,
  },

  warningText: {
    color: 'red',
    fontSize: 12,
    marginTop: 5,
  },

  icon: {
    resizeMode: 'contain',
    height: 18,
    width: 18,
  },

  defaultLabelContainer: {
    maxWidth: 252,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },

  labelText: {
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: 700,
    color: NEUTRAL_BLACK_900,
    display: 'flex',
  },

  helpIconContainer: {
    height: 24,
    width: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  defaultGap: { gap: 8 },
  smallGap: { gap: 5 },
  active: {
    borderColor: PRIMARY_BLUE_900,
  },
  error: {
    borderColor: SECONDARY_RED_700,
  },
  inactive: {
    borderColor: NEUTRAL_WHITE_150,
  },
  largeText: {
    fontSize: 15,
    fontWeight: 500,
  },
  smallText: {
    fontSize: 11.25,
  },
});
