import { NativeSyntheticEvent, TextInputFocusEventData } from 'react-native';

export type InputProps = {
  type: 'default' | 'large' | 'small';
  value: string;
  placeholder: string;
  onChangeText: any;
  onKeyPress?: () => void;
  onFocus?: ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void) | undefined;
  onBlur?: ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void) | undefined;
  handleHelp?: () => void;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  helpIcon?: React.ReactNode;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters' | undefined;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
  label?: string;
  warningText?: string;
  isSecureTextEntry?: boolean;
  isFocused?: boolean;
  showHelp?: boolean;
  isValid?: boolean;
  isEmptyOnSubmit?: boolean;
  isFullWidth?: boolean;
};
