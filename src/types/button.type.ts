export type ButtonProps = {
  // ! make text a children prop
  children: string;
  textColor?: string;
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
  iconColor: string;
  arrow: boolean;
  moon: boolean;
  iconPosition?: 'right' | 'left';
  arrowPosition?: 'right' | 'left';
  secondary?: boolean;
  iconOnly?: boolean;
};
