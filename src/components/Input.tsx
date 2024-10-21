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
  type = 'default',
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
  ...props
}: InputProps) => {
  const variantStyles: Record<InputProps['type'], ViewStyle | TextStyle> = {
    default: { height: 42 },
    large: { minHeight: 56 },
  };

  return (
    <View style={[styles.container]}>
      {label ? (
        <View style={styles.labelContainer}>
          <Text style={[styles.labelText]}>{label}</Text>
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
          isValid === false || isEmptyOnSubmit
            ? styles.error
            : isFocused
            ? styles.active
            : styles.inactive,

          iconLeft || iconRight ? styles.defaultGap : null,
        ]}
      >
        {iconLeft ? iconLeft : null}

        <TextInput
          style={[
            styles.textInput,
            styles.text,
            type === 'large' ? styles.largeText : null,
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

      {warningText ? <Text style={styles.warningText}>{warningText}</Text> : null}
    </View>
  );
};
