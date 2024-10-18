import { Meta, StoryObj } from '@storybook/react';
import { Image, View } from 'react-native';
import {
  NEUTRAL_GRAY_200,
  PRIMARY_BLUE_900,
  NEUTRAL_WHITE_150,
  NEUTRAL_BLACK_900,
  NEUTRAL_WHITE_50,
} from '../../utils/colors';
import { Button } from '../../components/Button';
import { styles } from '../../styles/button.styles';

import PHARMACY_ICON from '../../assets/pharmacy.png';
import PHONE_ICON from '../../assets/phone.png';
import ARROW_RIGHT_ICON from '../../assets/arrow-right.png';
import PLAY_ICON from '../../assets/play.png';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A customizable Button component for React Native.',
      },
    },
  },
  argTypes: {
    children: {
      description:
        'Children is a prop to set a text that you want to see inside the button',
      control: { type: 'text' },
    },
    // ! Add types and check how they work together
    type: {
      description: 'Choose a type of a button to see different styling',
      options: [
        'defaultSecondary',
        'default',
        'disabled',
        'warning',
        'danger',
        'success',
        'outline',
        'active',
        'activeOutline',
        'card',
        'boxed',
        'tertiary',
        'play',
      ],
      control: {
        type: 'select',
      },
    },
    textColor: {
      description: 'The text color you want to display inside the button.',
    },
    isDisabled: {
      description: 'Boolean property to set disabled property on a button',
      type: 'boolean',
    },
    onPress: {
      description: 'Function to call when the button is pressed.',
      action: 'clicked',
    },
  },
};

export default meta;

export const Outline: StoryObj<typeof Button> = {
  args: {
    type: 'outline',
    children: 'Active Button',
  },
  render: (args) => <Button {...args}>{args.children}</Button>,
};

export const activeOutline: StoryObj<typeof Button> = {
  args: {
    type: 'activeOutline',
    isRounded: true,
    textColor: PRIMARY_BLUE_900,
    iconLeft: (
      <Image
        source={{ uri: PHONE_ICON }}
        resizeMode="contain"
        tintColor={PRIMARY_BLUE_900}
        style={styles.icon}
      />
    ),
    iconRight: (
      <Image
        source={{ uri: ARROW_RIGHT_ICON }}
        resizeMode="contain"
        tintColor={PRIMARY_BLUE_900}
        style={styles.icon}
      />
    ),
  },
  render: (args) => <Button {...args}>{args.children}</Button>,
};

export const MainWarning: StoryObj<typeof Button> = {
  args: {
    type: 'danger',
    isRounded: true,
    textColor: NEUTRAL_WHITE_150,
    iconRight: (
      <Image
        source={{ uri: ARROW_RIGHT_ICON }}
        resizeMode="contain"
        tintColor={NEUTRAL_WHITE_150}
        style={styles.icon}
      />
    ),
  },
  render: (args) => <Button {...args}>{args.children}</Button>,
};

export const MainWarningWrapped: StoryObj<typeof Button> = {
  args: {
    type: 'danger',
    isRounded: true,
    textColor: NEUTRAL_WHITE_150,
    iconRight: (
      <Image
        source={{ uri: ARROW_RIGHT_ICON }}
        resizeMode="contain"
        tintColor={NEUTRAL_WHITE_150}
        style={styles.icon}
      />
    ),
  },
  render: (args) => (
    <View style={{ width: 250, height: 'auto' }}>
      <Button {...args}>{args.children}</Button>
    </View>
  ),
};

export const Tertiary: StoryObj<typeof Button> = {
  args: {
    type: 'tertiary',
    textColor: PRIMARY_BLUE_900,
    iconRight: (
      <Image
        source={{ uri: ARROW_RIGHT_ICON }}
        resizeMode="contain"
        tintColor={PRIMARY_BLUE_900}
        style={styles.icon}
      />
    ),
    iconLeft: (
      <Image
        source={{ uri: PHONE_ICON }}
        resizeMode="contain"
        tintColor={PRIMARY_BLUE_900}
        style={styles.icon}
      />
    ),
  },
  render: (args) => <Button {...args}>{args.children}</Button>,
};

export const Card: StoryObj<typeof Button> = {
  args: {
    type: 'card',
    textColor: NEUTRAL_BLACK_900,
    iconLeft: (
      <Image source={{ uri: PHARMACY_ICON }} resizeMode="contain" style={styles.icon} />
    ),
  },
  render: (args) => <Button {...args}>{args.children}</Button>,
};

export const CardDisabled: StoryObj<typeof Button> = {
  args: {
    isDisabled: true,
    type: 'card',
    textColor: NEUTRAL_GRAY_200,
    iconLeft: (
      <Image
        source={{ uri: PHARMACY_ICON }}
        tintColor={NEUTRAL_GRAY_200}
        resizeMode="contain"
        style={styles.icon}
      />
    ),
  },
  render: (args) => <Button {...args}>{args.children}</Button>,
};

export const SecondaryDisabledIconOnly: StoryObj<typeof Button> = {
  args: {
    type: 'disabled',
    isRounded: true,
    isDisabled: true,
    isIconOnly: true,
    iconRight: (
      <Image
        source={{ uri: PHONE_ICON }}
        resizeMode="contain"
        tintColor={NEUTRAL_WHITE_50}
        style={styles.icon}
      />
    ),
  },
  render: (args) => <Button {...args}>{args.children}</Button>,
};

export const MainDisabled: StoryObj<typeof Button> = {
  args: {
    textColor: NEUTRAL_WHITE_150,
    type: 'disabled',
    isDisabled: true,
  },
  render: (args) => <Button {...args}>{args.children}</Button>,
};

export const Boxed: StoryObj<typeof Button> = {
  args: {
    type: 'boxed',
    textColor: NEUTRAL_BLACK_900,
    iconLeft: (
      <Image
        source={{ uri: PHONE_ICON }}
        resizeMode="contain"
        tintColor={PRIMARY_BLUE_900}
        style={styles.icon}
      />
    ),
    iconRight: (
      <Image
        source={{ uri: ARROW_RIGHT_ICON }}
        resizeMode="contain"
        tintColor={PRIMARY_BLUE_900}
        style={styles.icon}
      />
    ),
  },
  render: (args) => <Button {...args}>{args.children}</Button>,
};

export const Play: StoryObj<typeof Button> = {
  args: {
    type: 'play',
    iconRight: (
      <Image source={{ uri: PLAY_ICON }} resizeMode="contain" style={styles.playIcon} />
    ),
  },
  render: (args) => <Button {...args}>{args.children}</Button>,
};

export const PlayBlack: StoryObj<typeof Button> = {
  args: {
    type: 'play',
    iconRight: (
      <Image
        source={{ uri: PLAY_ICON }}
        resizeMode="contain"
        style={styles.playIcon}
        tintColor={NEUTRAL_BLACK_900}
      />
    ),
  },
  render: (args) => <Button {...args}>{args.children}</Button>,
};
