import React from 'react';
import { NativeSyntheticEvent, TextInputFocusEventData, ViewStyle } from 'react-native';

export type InputProps = {
  type: 'default' | 'large';
  value: string;
  placeholder: string;
  onChangeText: React.Dispatch<React.SetStateAction<string>>;
  onKeyPress?: () => void;
  onFocus?: ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void) | undefined;
  onBlur?: ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void) | undefined;
  handleHelp?: () => void;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  helpIcon?: React.ReactNode;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
  label?: string;
  warningText?: string;
  isSecureTextEntry?: boolean;
  isFocused?: boolean;
  isValid?: boolean;
  isEmptyOnSubmit?: boolean;
  style?: ViewStyle;
  maxLength?: number;
  multiline?: boolean;
};

export type InputWithSearchProps = {
  placeholder: string;
  searchValue: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
  options: { label: string; value: string }[];
  iconRight?: React.ReactNode;
  iconOpen?: React.ReactNode;
  iconClose?: React.ReactNode;
  label: string;
  style?: ViewStyle;
  maxLength?: number;
  multiline?: boolean;
};
