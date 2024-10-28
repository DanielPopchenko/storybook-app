import React from 'react';
import { ViewStyle } from 'react-native';

export type ButtonProps = {
  children?: string;
  textColor?: string;
  onPress?: () => void;
  type:
    | 'defaultSecondary'
    | 'default'
    | 'disabled'
    | 'warning'
    | 'danger'
    | 'success'
    | 'outline'
    | 'active'
    | 'activeOutline'
    | 'card'
    | 'boxed'
    | 'tertiary'
    | 'play';
  isDisabled?: boolean;
  iconRight?: React.ReactNode;
  iconLeft?: React.ReactNode;
  isRounded?: boolean;
  isIconOnly?: boolean;
  fontSize?: number;
  testId?: string;
  additionalStyle?: ViewStyle;
};
