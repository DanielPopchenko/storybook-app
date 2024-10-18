import { StyleSheet } from 'react-native';
import {
  NEUTRAL_WHITE_50,
  NEUTRAL_WHITE_150,
  NEUTRAL_BLACK_900,
  PRIMARY_BLUE_900,
} from '../utils/colors';

export const styles = StyleSheet.create({
  container: {
    width: 'auto',
    flex: 1,
    height: 'auto',

    borderRadius: 10,
    borderWidth: 1,
    borderColor: NEUTRAL_WHITE_150,
    padding: 16,
  },
  containerActive: {
    borderColor: PRIMARY_BLUE_900,
  },
  inputWrapper: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',

    minHeight: 42,
    justifyContent: 'space-between',
    backgroundColor: NEUTRAL_WHITE_50,
    paddingHorizontal: 12,
    overflow: 'hidden',

    borderRadius: 8,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: NEUTRAL_WHITE_150,

    marginVertical: 8,
  },

  icon: {
    resizeMode: 'contain',
    height: 18,
    width: 18,
    marginLeft: 8,
  },

  option: {
    borderBottomColor: NEUTRAL_WHITE_150,
    borderBottomWidth: 1,
    paddingVertical: 16,
  },
  labelContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  labelText: {
    color: NEUTRAL_BLACK_900,
    fontSize: 15,
    fontWeight: 500,
  },

  textInput: {
    flex: 1,
    justifyContent: 'center',
    height: '80%',
  },
});
