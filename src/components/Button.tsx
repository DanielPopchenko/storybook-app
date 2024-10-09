import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

import { ReactComponent as Phone } from '../assets/phone.svg';
import { ReactComponent as ArrowRight } from '../assets/arrow-right.svg';
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg';
import { ReactComponent as MoonPlus } from '../assets/moon-plus.svg';

const styles = StyleSheet.create({
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
  active: {
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
    color: '#fff',
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
});

type ButtonProps = {
  text: string;
  textColor?: TextStyle;
  handlePress?: () => void;
  type:
    | 'defaultSecondary'
    | 'default'
    | 'disabled'
    | 'warning'
    | 'danger'
    | 'success'
    | 'outline'
    | 'active'
    | 'activeOutline';
  disabled?: boolean;
  icon: boolean;
  arrow: boolean;
  moon: boolean;
  iconPosition?: 'right' | 'left';
  arrowPosition?: 'right' | 'left';
  active?: boolean;
  iconOnly?: boolean;
};

export const Button = ({
  text,
  textColor,
  handlePress,
  type = 'defaultSecondary',
  disabled,
  icon,
  arrow,
  moon = false,
  iconPosition,
  arrowPosition,
  active,
  iconOnly,
}: ButtonProps) => {
  const variantStyles: Record<ButtonProps['type'], ViewStyle | TextStyle> = {
    defaultSecondary: {
      backgroundColor: '#C9D5FF',
    },
    default: {
      backgroundColor: '#0023A0',
    },
    disabled: {
      backgroundColor: '#9DA5B2',
    },
    warning: {
      backgroundColor: '#F0BB00',
    },
    danger: {
      backgroundColor: '#BB002D',
    },
    success: {
      backgroundColor: '#127D00',
    },
    outline: {
      backgroundColor: 'transparent',
      borderStyle: 'solid',
      borderWidth: 1,
      borderColor: '#9DA5B2',
    },
    active: {
      backgroundColor: '#275DF6',
      paddingHorizontal: 25,
    },
    activeOutline: {
      borderStyle: 'solid',
      borderWidth: 1,
      borderColor: '#275DF6',
    },
  };

  // const sizeStyles: Record<ButtonProps['size'], ViewStyle | TextStyle> = {
  //   sm: {},
  //   md: {},
  //   lg: {},
  // };

  return (
    <View style={[styles.buttonContainer]}>
      <TouchableOpacity
        disabled={disabled}
        onPress={handlePress}
        style={[
          styles.button,
          active ? styles.active : null,
          icon || moon ? styles.gap : null,
          variantStyles[type],
          iconOnly ? styles.activeIconOnly : null,
        ]}
      >
        {icon && iconPosition === 'left' ? <Phone /> : null}
        {arrow && arrowPosition === 'left' ? <ArrowLeft /> : null}
        {moon ? <MoonPlus /> : null}
        <Text style={[styles.buttonText, active && styles.activeButtonText, textColor]}>
          {iconOnly ? null : text}
        </Text>
        {icon && iconPosition === 'right' ? <Phone /> : null}
        {arrow && arrowPosition === 'right' ? <ArrowRight /> : null}
      </TouchableOpacity>
    </View>
  );
};
