import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    maxHeight: 47,
    paddingHorizontal: 16,
    paddingVertical: 11,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
    borderRadius: 10,
  },
  gap: {
    gap: 10,
  },
  secondary: {
    paddingHorizontal: 25,
    borderRadius: 90,
  },
  activeButtonText: {
    fontWeight: 700,
  },
  activeIconOnly: {
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
    lineHeight: 150,
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
});
