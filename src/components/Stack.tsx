import { PropsWithChildren } from 'react';
import { View, ViewStyle } from 'react-native';

type StackProps = PropsWithChildren & {
  orientation: 'horizontal' | 'vertical';
};

export const Stack = ({ orientation, children }: StackProps) => {
  const orientationStyles: Record<StackProps['orientation'], ViewStyle> = {
    horizontal: {
      display: 'flex',
      flexDirection: 'row',
      gap: 2,
    },
    vertical: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
    },
  };

  return <View style={[orientationStyles[orientation]]}>{children}</View>;
};
