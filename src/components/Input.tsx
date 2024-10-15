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
import { InputProps } from '../types/input.types';

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
  warningText,
  autoCapitalize,
  keyboardType,
  onFocus,
  onBlur,
  isFocused,
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
          isValid === false || isEmptyOnSubmit ? styles.error : null,
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
          onFocus={onFocus ? onFocus : undefined}
          onBlur={onBlur ? onBlur : undefined}
          onKeyPress={onKeyPress ? onKeyPress : undefined}
          autoCapitalize={autoCapitalize}
          autoCorrect={false}
          keyboardType={keyboardType}
          {...props}
        />
        {iconRight ? iconRight : null}
      </View>

      {warningText?.length ? <Text style={styles.warningText}>{warningText}</Text> : null}
    </View>
  );
};
