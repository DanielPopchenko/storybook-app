// export const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     width: 'auto',
//     display: 'flex',
//     flexDirection: 'row',
//   },
//   md: { maxWidth: 252, maxHeight: 42 },
//   inputContainer: {
//     flex: 1,
//     display: 'flex',
//     gap: 6,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
// borderRadius: 7.5,
// borderColor: NEUTRAL_WHITE_150,
// borderWidth: 1,
// borderStyle: 'solid',
//   },
//   // outlined: {}
//   gap: {
//     gap: 6,
//   },

//   // ! FIGURE OUT THE STYLES FOR ICONS AND INPUT !!!!
//   input: {
//     flex: 1,
//     width: 'auto',
//     height: '100%',
//     padding: 12,
//     backgroundColor: NEUTRAL_WHITE_50,
//   },
//   text: {
//     color: NEUTRAL_BLACK_900,
//     fontFamily: 'Manrope',
//     fontSize: 11.25,
//     fontStyle: 'normal',
//     fontWeight: 500,
//   },
//   // !
//   focused: {
//     borderColor: SECONDARY_GREEN_900,
//   },
// });

// export const styles = StyleSheet.create({
//   container: {
//     width: '100%',
//     marginBottom: 8,
//   },
//   // container: {
//   //   display: 'flex',
//   //   flex: 2,
//   //   flexDirection: 'row',
//   //   alignItems: 'center',
//   //   backgroundColor: NEUTRAL_WHITE_50,
//   //   borderRadius: 7.5,
//   //   borderColor: NEUTRAL_WHITE_150,
//   //   borderWidth: 1,
//   //   borderStyle: 'solid',
//   //   maxWidth: 253,
//   //   maxHeight: 42,
//   // },
//   inputContainer: {
//     display: 'flex',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     width: '100%',
//     paddingHorizontal: 16,
//     backgroundColor: NEUTRAL_WHITE_50,
//     borderRadius: 7.5,
//     borderColor: NEUTRAL_WHITE_150,
//     borderWidth: 1,
//     borderStyle: 'solid',
//     maxWidth: 253,
//     maxHeight: 42,
//   },
//   input: {
//     flex: 1,
//     justifyContent: 'center',
//     height: '80%',
//   },
// });

import { StyleSheet } from 'react-native';
import {
  NEUTRAL_BLACK_900,
  NEUTRAL_WHITE_150,
  NEUTRAL_WHITE_50,
  PRIMARY_BLUE_900,
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
    borderColor: 'red',
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
