import { Image, Text, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native';
import MOON_ICON from '../assets/moon.png';
import PHONE_ICON from '../assets/phone.png';
import ARROW_LEFT_ICON from '../assets/arrow-left.png';
import ARROW_RIGHT_ICON from '../assets/arrow-right.png';

import {
  NEUTRAL_GRAY_200,
  NEUTRAL_WHITE_50,
  PRIMARY_BLUE_900,
  PRIMARY_NAVYBLUE_100,
  PRIMARY_NAVYBLUE_900,
  SECONDARY_GREEN_700,
  SECONDARY_RED_700,
  SECONDARY_YELLOW_700,
} from '../colors';

import { ButtonProps } from '../types/button.type';
import { styles } from '../styles/button.styles';

// COMPONENT
export const Button = ({
  // ! figure out the type and use
  children = 'Hello Button',
  // TODO: done
  textColor = NEUTRAL_WHITE_50,
  handlePress,
  type = 'defaultSecondary',
  disabled,
  icon,
  iconColor = NEUTRAL_WHITE_50,
  arrow,
  moon = false,
  iconPosition,
  arrowPosition,
  secondary,
  iconOnly,
}: ButtonProps) => {
  const variantStyles: Record<ButtonProps['type'], ViewStyle | TextStyle> = {
    defaultSecondary: {
      backgroundColor: PRIMARY_NAVYBLUE_100,
    },
    default: {
      backgroundColor: PRIMARY_NAVYBLUE_900,
    },
    disabled: {
      backgroundColor: NEUTRAL_GRAY_200,
    },
    warning: {
      backgroundColor: SECONDARY_YELLOW_700,
    },
    danger: {
      backgroundColor: SECONDARY_RED_700,
    },
    success: {
      backgroundColor: SECONDARY_GREEN_700,
    },
    outline: {
      backgroundColor: 'transparent',
      borderStyle: 'solid',
      borderWidth: 1,
      borderColor: NEUTRAL_GRAY_200,
    },
    active: {
      backgroundColor: PRIMARY_BLUE_900,
      paddingHorizontal: 25,
    },
    activeOutline: {
      borderStyle: 'solid',
      borderWidth: 1,
      borderColor: PRIMARY_BLUE_900,
    },
  };

  // const sizeStyles: Record<ButtonProps['size'], ViewStyle | TextStyle> = {
  //   sm: {},
  //   md: {},
  //   lg: {},
  // };

  // ? Conditional styles
  const activeBtnStyles = secondary ? styles.activeButtonText : null;

  return (
    <View style={[styles.buttonContainer]}>
      <TouchableOpacity
        disabled={disabled}
        onPress={handlePress}
        style={[
          styles.button,
          secondary ? styles.secondary : null,
          icon || moon ? styles.gap : null,
          variantStyles[type],
          iconOnly ? styles.activeIconOnly : null,
        ]}
      >
        {icon && iconPosition === 'left' ? (
          <Image
            source={{ uri: PHONE_ICON }}
            resizeMode="contain"
            tintColor={iconColor}
          />
        ) : null}
        {arrow && arrowPosition === 'left' ? (
          <Image
            source={{ uri: ARROW_LEFT_ICON }}
            resizeMode="contain"
            tintColor={iconColor}
            style={styles.icon}
          />
        ) : null}
        {moon ? (
          <Image source={{ uri: MOON_ICON }} resizeMode="contain" style={styles.icon} />
        ) : null}
        <Text style={{ ...styles.buttonText, ...activeBtnStyles, color: textColor }}>
          {iconOnly ? null : children}
        </Text>

        {icon && iconPosition === 'right' ? (
          <Image
            source={{ uri: PHONE_ICON }}
            resizeMode="contain"
            tintColor={iconColor}
            style={styles.icon}
          />
        ) : null}
        {arrow && arrowPosition === 'right' ? (
          <Image
            source={{ uri: ARROW_RIGHT_ICON }}
            resizeMode="contain"
            tintColor={iconColor}
            style={styles.icon}
          />
        ) : null}
      </TouchableOpacity>
    </View>
  );
};
