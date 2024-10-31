import { Meta, StoryObj } from '@storybook/react';
import { Image, View } from 'react-native';
import {
  PRIMARY_BLUE_900,
  NEUTRAL_BLACK_900,
  NEUTRAL_WHITE_50,
} from '../../utils/colors';
import { Button } from '../../components/Button';
import { styles } from '../../styles/button.styles';

import PHARMACY_ICON from '../../assets/pharmacy.png';
import PHONE_ICON from '../../assets/phone.png';
import ARROW_RIGHT_ICON from '../../assets/arrow-right.png';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A customizable Button component for React Native. Set a type and children, and you are good to go! See all other optional properties below.',
      },
    },
  },
  argTypes: {
    children: {
      description: 'Children prop sets text inside the button.',
      control: { type: 'text' },
    },
    type: {
      description: 'Choose a type of a button to set different styling variant.',
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
      description: 'Set a text color you want to see inside the button.',
    },
    fontSize: {
      description: 'Set a font size property, if you want to change it in button.',
    },
    isDisabled: {
      description: 'Set this boolean prop to configure disabled property on a button',
      type: 'boolean',
    },
    isRounded: {
      description:
        'Set this boolean property to conrtol if you want your button to be rounded or default style',
      type: 'boolean',
    },
    isIconOnly: {
      description:
        'Set this boolean property to conrtol if you want your button to be just a circle with icon inside.',
      type: 'boolean',
    },
    onPress: {
      description:
        'Set an onPress function that will be called when the button is pressed.',
      action: 'clicked',
    },
    iconLeft: {
      control: 'object',
      description: 'Set this property to add icon on a left of your button.',
    },
    iconRight: {
      control: 'object',
      description: 'Set this property to add icon on a right of your button.',
    },
    style: {
      control: 'object',
      description: 'Set this property to add additional styles to your button.',
    },
  },
};

export default meta;

export const Default: StoryObj<typeof Button> = {
  args: {
    type: 'default',
    children: 'Default Button',
  },
  parameters: {
    docs: {
      description: {
        story: 'The most used button, so the type is called default',
      },
    },
  },

  render: (args) => <Button {...args}>{args.children}</Button>,
};

export const Outline: StoryObj<typeof Button> = {
  args: {
    type: 'outline',
    children: 'Active Button',
  },
  parameters: {
    docs: {
      description: {
        story: 'That is outline button',
      },
    },
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
  parameters: {
    docs: {
      description: {
        story: 'That is active-outline button, with icons for example.',
      },
    },
  },
  render: (args) => <Button {...args}>{args.children}</Button>,
};

export const Warning: StoryObj<typeof Button> = {
  args: {
    type: 'warning',
    isRounded: true,
    iconRight: (
      <Image
        source={{ uri: ARROW_RIGHT_ICON }}
        resizeMode="contain"
        style={styles.icon}
        tintColor={NEUTRAL_WHITE_50}
      />
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'That is a warning button, with an icon for example.',
      },
    },
  },
  render: (args) => <Button {...args}>{args.children}</Button>,
};

export const DangerWrapped: StoryObj<typeof Button> = {
  args: {
    type: 'danger',
    isRounded: true,
    iconRight: (
      <Image
        source={{ uri: ARROW_RIGHT_ICON }}
        resizeMode="contain"
        tintColor={NEUTRAL_WHITE_50}
        style={styles.icon}
      />
    ),
  },
  parameters: {
    docs: {
      description: {
        story:
          'That is a danger button, with an icon for example and wrapped with view, to show that width is dynamic.',
      },
    },
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
  parameters: {
    docs: {
      description: {
        story: 'That is a tetriary button, with icons for example.',
      },
    },
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
  parameters: {
    docs: {
      description: {
        story:
          'That is a card button. It should have left icon set, to behave and look like it is supposed to!',
      },
    },
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
  parameters: {
    docs: {
      description: {
        story: 'That is a boxed button, with icons for example',
      },
    },
  },
  render: (args) => <Button {...args}>{args.children}</Button>,
};

export const IconOnlyDefault: StoryObj<typeof Button> = {
  args: {
    type: 'default',
    iconRight: (
      <Image
        source={{ uri: PHARMACY_ICON }}
        resizeMode="contain"
        style={styles.icon}
        tintColor={NEUTRAL_WHITE_50}
      />
    ),

    isIconOnly: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          'That is an icon-only button, in default button style. It should have right! icon set, to behave and look like it is supposed to.',
      },
    },
  },
  render: (args) => <Button {...args}>{args.children}</Button>,
};

export const IconOnlyOutline: StoryObj<typeof Button> = {
  args: {
    type: 'outline',
    iconRight: (
      <Image
        source={{ uri: PHONE_ICON }}
        resizeMode="contain"
        style={styles.icon}
        tintColor={NEUTRAL_BLACK_900}
      />
    ),
    isIconOnly: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          'That is an icon-only button, in outline button style. It should have right! icon set, to behave and look like it is supposed to.',
      },
    },
  },
  render: (args) => <Button {...args}>{args.children}</Button>,
};
