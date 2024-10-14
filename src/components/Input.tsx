import React, { useState } from 'react';
import {
  Text,
  TextInput,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import { NEUTRAL_GRAY_200 } from '../utils/colors';
import { styles } from '../styles/input.styles';

type InputProps = {
  type: 'default' | 'large' | 'small';
  value: string;
  onChangeText: any;
  onKeyPress?: () => void;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  helpIcon?: React.ReactNode;
  placeholder: string;
  label?: string;
  isSecureTextEntry?: boolean;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters' | undefined;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
  isOnFocus?: boolean;
  isOnBlur?: boolean;
  showHelp?: boolean;
  handleHelp?: () => void;
  isValid?: boolean;
  isEmptyOnSubmit?: boolean;
  isFullWidth?: boolean;
};

// label?: string;
// placeholder: string;
// value: string;
// onChangeText: any;
// secureTextEntry: boolean;
// autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters' | undefined;
// showHelp: boolean;
// warningText?: string;
// handleHelp?: () => void;
// onFocus?: boolean;
// onKeyPress?: () => void;
// scrollToPosition?: (position: number) => void;
// onBlur?: boolean;
// keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
// isValid?: boolean;
// isEmptyOnSubmit?: boolean;

export const Input = ({
  iconLeft,
  iconRight,
  helpIcon,
  type,
  value,
  onChangeText,
  onKeyPress,
  placeholder,
  label,
  isSecureTextEntry,
  autoCapitalize,
  keyboardType,
  isOnFocus,
  isOnBlur,
  showHelp,
  handleHelp,
  isValid,
  isEmptyOnSubmit,
  isFullWidth,
  ...props
}: InputProps) => {
  const variantStyles: Record<InputProps['type'], ViewStyle | TextStyle> = {
    default: { width: 252 },
    small: { minWidth: 131, maxWidth: 205, minHeight: 42 },
    large: { minWidth: 175, maxWidth: 250, minHeight: 56 },
  };

  const [isFocused, setIsFocused] = useState<boolean>(false);

  return (
    <View style={[styles.container]}>
      {label ? (
        // * Dynamic styles for label container, because it stretches to full with
        <View
          style={
            type === 'default'
              ? [
                  styles.defaultLabelContainer,
                  variantStyles['default'],
                  { minHeight: 1 },
                  isFullWidth ? { maxWidth: '100%', width: '100%' } : null,
                ]
              : type === 'large'
              ? [
                  styles.defaultLabelContainer,
                  variantStyles['large'],
                  { minHeight: 1 },
                  isFullWidth ? { maxWidth: '100%', width: '100%' } : null,
                ]
              : type === 'small'
              ? [
                  styles.defaultLabelContainer,
                  variantStyles['small'],
                  { minHeight: 1 },
                  isFullWidth ? { maxWidth: '100%', width: '100%' } : null,
                ]
              : null
          }
        >
          <Text
            style={[
              styles.labelText,
              type === 'large' ? styles.largeText : null,
              type === 'small' ? styles.smallText : null,
            ]}
          >
            {label}
          </Text>

          {showHelp ? (
            <TouchableOpacity onPress={handleHelp} style={styles.helpIconContainer}>
              {helpIcon}
            </TouchableOpacity>
          ) : null}
        </View>
      ) : null}

      <View
        style={[
          styles.inputWrapper,
          variantStyles[type],
          isFocused ? styles.active : styles.inactive,
          (isValid === false && value) || isEmptyOnSubmit ? styles.error : null,
          iconLeft || iconRight
            ? styles.defaultGap
            : type === 'small'
            ? styles.smallGap
            : null,
          isFullWidth ? { width: '100%', maxWidth: '100%' } : null,
        ]}
      >
        {iconLeft ? iconLeft : null}

        <TextInput
          style={[
            styles.textInput,
            styles.text,
            type === 'large' ? styles.largeText : null,
            type === 'small' ? styles.smallText : null,
          ]}
          placeholder={placeholder ? placeholder : ''}
          placeholderTextColor={NEUTRAL_GRAY_200}
          value={value}
          onChangeText={onChangeText}
          autoComplete="off"
          secureTextEntry={isSecureTextEntry}
          onFocus={() => {
            if (isOnFocus) {
              setIsFocused(true);
            }
          }}
          onBlur={() => {
            if (isOnBlur) {
              setIsFocused(false);
            }
          }}
          onKeyPress={() => {
            if (onKeyPress) onKeyPress();
          }}
          autoCapitalize={autoCapitalize}
          autoCorrect={false}
          keyboardType={keyboardType}
          {...props}
        />
        {iconRight ? iconRight : null}
      </View>
    </View>
  );
};
