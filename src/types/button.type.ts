import React from 'react';

export type ButtonProps = {
  // ! make text a children prop
  children: string;
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
};
