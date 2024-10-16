import { Text, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native';

import {
  NEUTRAL_GRAY_200,
  NEUTRAL_WHITE_50,
  NEUTRAL_WHITE_150,
  PRIMARY_BLUE_900,
  PRIMARY_NAVYBLUE_100,
  PRIMARY_NAVYBLUE_900,
  SECONDARY_GREEN_700,
  SECONDARY_RED_700,
  SECONDARY_YELLOW_700,
  NEUTRAL_BLACK_900,
  PRIMARY_BLUE_50,
} from '../utils/colors';

import { ButtonProps } from '../types/button.type';
import { styles } from '../styles/button.styles';

export const Button = ({
  children = 'Button Name',
  textColor = NEUTRAL_WHITE_50,
  onPress,
  type = 'defaultSecondary',
  isDisabled,
  iconRight,
  iconLeft,
  isRounded,
  isIconOnly,
  isFullWidth,
  ...props
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
    card: {
      borderStyle: 'solid',
      borderWidth: 1,
      borderColor: NEUTRAL_GRAY_200,

      display: 'flex',
      paddingHorizontal: 36.5,
      paddingVertical: 22,
      maxHeight: 99,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 12,
      flexShrink: 0,
      borderRadius: 5,
      flex: 1,
    },
    play: {
      borderRadius: 50,
      margin: 0,
      width: 'auto',
      height: 'auto',
      gap: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    boxed: {
      borderRadius: 10,
      borderWidth: 1,
      borderColor: NEUTRAL_WHITE_150,
      color: NEUTRAL_BLACK_900,
      backgroundColor: NEUTRAL_WHITE_50,
      minWidth: 322,
    },
    tertiary: {
      backgroundColor: PRIMARY_BLUE_50,
    },
  };

  // ? Conditional styles
  const activeBtnStyles =
    isRounded || type === 'card' || type === 'boxed' || type === 'tertiary'
      ? styles.buttonTextBold
      : null;
  const outlineTextStyle = type === 'outline' ? styles.outlineText : null;

  return (
    <View style={[styles.buttonContainer]}>
      <TouchableOpacity
        disabled={isDisabled}
        onPress={onPress}
        style={[
          styles.button,
          isRounded ? styles.rounded : null,
          variantStyles[type],
          iconLeft || iconRight ? styles.gap : null,
          isIconOnly || type === 'play' ? styles.iconOnly : null,
          isFullWidth ? styles.fullWidth : null,
          isFullWidth && !iconLeft && !iconRight ? styles.contentCentered : null,
        ]}
        {...props}
      >
        {type === 'card' ? iconLeft : null}
        <View
          style={[
            type !== 'card' ? styles.leftGroup : null,
            iconLeft ? styles.gap : null,
          ]}
        >
          {iconLeft && type !== 'card' ? iconLeft : null}

          {isFullWidth && !iconLeft && !iconRight ? null : (
            <Text
              style={{
                ...styles.buttonText,
                color: textColor,
                ...outlineTextStyle,
                ...activeBtnStyles,
              }}
            >
              {isIconOnly || type === 'play' ? null : children}
            </Text>
          )}
        </View>

        {isFullWidth && !iconLeft && !iconRight ? (
          <Text
            style={{
              ...styles.buttonText,
              color: textColor,
              ...outlineTextStyle,
              ...activeBtnStyles,
            }}
          >
            {isIconOnly || type === 'play' ? null : children}
          </Text>
        ) : null}

        {iconRight ? iconRight : null}
      </TouchableOpacity>
    </View>
  );
};
