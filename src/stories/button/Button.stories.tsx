import {
  NEUTRAL_GRAY_200,
  PRIMARY_BLUE_900,
  NEUTRAL_WHITE_150,
  NEUTRAL_BLACK_900,
} from '../../colors';
import { Button } from '../../components/Button';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A customizable button component for React Native.',
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
      options: ['defaultSecondary', 'default', 'success', 'warning', 'danger'],
      control: {
        type: 'select',
      },
    },
    textColor: {
      description: 'The text color you want to display inside the button.',
    },
    disabled: {
      description: 'Boolean property to set disabled property on a button',
      type: 'boolean',
    },
    handlePress: {
      description: 'Function to call when the button is pressed.',
      action: 'clicked',
    },
    icon: {
      description:
        'Set this parameter to true if you want to see an icon as well as icon position, or false if you want to remove it.',
      control: { type: 'boolean' },
    },
    iconPosition: {
      description:
        'Set this parameter to right if you want to position your icon on right, and left if you want to be it on left.',
      control: { type: 'radio' },
      options: ['right', 'left'],
    },
    arrow: {
      description:
        'Set this parameter to true if you want to see an arrow as well as arrow position, or false if you want to remove it.',
      control: { type: 'boolean' },
    },
    arrowPosition: {
      description:
        'Set this parameter to right if you want to position your arrow on right, and left if you want to be it on left.',
      control: { type: 'radio' },
      options: ['right', 'left'],
    },
  },
};

export default meta;

// ! ---- Capsule style buttons ----

export const Active: StoryObj<typeof Button> = {
  args: {
    type: 'active',
    secondary: true,
  },
  render: (args) => <Button {...args}>{args.children}</Button>,
};

export const ActiveOutline: StoryObj<typeof Button> = {
  args: {
    type: 'activeOutline',
    secondary: true,
    textColor: PRIMARY_BLUE_900,
  },
  render: (args) => <Button {...args}>{args.children}</Button>,
};

export const DisabledOutline: StoryObj<typeof Button> = {
  args: {
    type: 'outline',
    secondary: true,
    textColor: NEUTRAL_GRAY_200,
    disabled: true,
  },
  render: (args) => <Button {...args}>{args.children}</Button>,
};

export const DisabledActive: StoryObj<typeof Button> = {
  args: {
    type: 'disabled',
    secondary: true,
    disabled: true,
  },
  render: (args) => <Button {...args}>{args.children}</Button>,
};

export const ActiveIcon: StoryObj<typeof Button> = {
  args: {
    type: 'active',
    secondary: true,
    icon: true,
    iconPosition: 'right',
  },
  render: (args) => <Button {...args}>{args.children}</Button>,
};

export const ActiveOutlineIcon: StoryObj<typeof Button> = {
  args: {
    type: 'activeOutline',
    secondary: true,
    textColor: PRIMARY_BLUE_900,
    icon: true,
    iconColor: PRIMARY_BLUE_900,
    iconPosition: 'right',
  },
  render: (args) => <Button {...args}>{args.children}</Button>,
};

export const DisabledActiveIcon: StoryObj<typeof Button> = {
  args: {
    type: 'disabled',
    secondary: true,
    disabled: true,
    icon: true,
    iconPosition: 'right',
  },
  render: (args) => <Button {...args}>{args.children}</Button>,
};

export const ActiveOutlineIconOnly: StoryObj<typeof Button> = {
  args: {
    type: 'activeOutline',
    secondary: true,
    icon: true,
    iconColor: PRIMARY_BLUE_900,
    iconPosition: 'right',
    iconOnly: true,
  },
  render: (args) => <Button {...args}>{args.children}</Button>,
};

export const DisabledActiveIconOnly: StoryObj<typeof Button> = {
  args: {
    type: 'disabled',
    secondary: true,
    disabled: true,
    icon: true,
    iconPosition: 'right',
    iconOnly: true,
  },
  render: (args) => <Button {...args}>{args.children}</Button>,
};

// ! ---- Brick style buttons ----

export const DefaultSecondary: StoryObj<typeof Button> = {
  args: {
    type: 'defaultSecondary',
    textColor: NEUTRAL_BLACK_900,
  },
  render: (args) => <Button {...args}>{args.children}</Button>,
};

export const Default: StoryObj<typeof Button> = {
  args: {
    type: 'default',
  },
  render: (args) => <Button {...args}>{args.children}</Button>,
};

export const Disabled: StoryObj<typeof Button> = {
  args: {
    textColor: NEUTRAL_WHITE_150,
    type: 'disabled',
    disabled: true,
  },
  render: (args) => <Button {...args}>{args.children}</Button>,
};

export const Warning: StoryObj<typeof Button> = {
  args: {
    type: 'warning',
  },
  render: (args) => <Button {...args}>{args.children}</Button>,
};
export const Danger: StoryObj<typeof Button> = {
  args: {
    type: 'danger',
  },
  render: (args) => <Button {...args}>{args.children}</Button>,
};

export const Success: StoryObj<typeof Button> = {
  args: {
    type: 'success',
  },
  render: (args) => <Button {...args}>{args.children}</Button>,
};

export const DefaultSecondaryIcon: StoryObj<typeof Button> = {
  args: {
    type: 'defaultSecondary',
    textColor: NEUTRAL_BLACK_900,
    icon: true,
    iconPosition: 'right',
    iconColor: NEUTRAL_BLACK_900,
  },
  render: (args) => <Button {...args}>{args.children}</Button>,
};

export const DisabledIcon: StoryObj<typeof Button> = {
  args: {
    type: 'disabled',
    disabled: true,
    icon: true,
    iconPosition: 'right',
  },
  render: (args) => <Button {...args}>{args.children}</Button>,
};

export const WarningIcon: StoryObj<typeof Button> = {
  args: {
    type: 'warning',
    icon: true,
    iconPosition: 'right',
  },
  render: (args) => <Button {...args}>{args.children}</Button>,
};

export const SuccessIcon: StoryObj<typeof Button> = {
  args: {
    type: 'success',
    icon: true,
    iconPosition: 'right',
  },
  render: (args) => <Button {...args}>{args.children}</Button>,
};

export const DangerIcon: StoryObj<typeof Button> = {
  args: {
    type: 'danger',
    icon: true,
    iconPosition: 'right',
  },
  render: (args) => <Button {...args}>{args.children}</Button>,
};

export const DefaultSecondaryIconArrow: StoryObj<typeof Button> = {
  args: {
    type: 'defaultSecondary',
    textColor: NEUTRAL_BLACK_900,
    icon: true,
    iconPosition: 'right',
    iconColor: NEUTRAL_BLACK_900,
    arrow: true,
    arrowPosition: 'left',
  },
  render: (args) => <Button {...args}>{args.children}</Button>,
};

export const DisabledIconArrow: StoryObj<typeof Button> = {
  args: {
    type: 'disabled',
    textColor: NEUTRAL_WHITE_150,
    icon: true,
    disabled: true,
    iconPosition: 'right',
    arrow: true,
    arrowPosition: 'left',
  },
  render: (args) => <Button {...args}>{args.children}</Button>,
};

export const WarningIconArrow: StoryObj<typeof Button> = {
  args: {
    type: 'warning',
    icon: true,
    iconPosition: 'right',
    arrow: true,
    arrowPosition: 'left',
  },
  render: (args) => <Button {...args}>{args.children}</Button>,
};

export const SuccessIconArrow: StoryObj<typeof Button> = {
  args: {
    type: 'success',
    icon: true,
    iconPosition: 'right',
    arrow: true,
    arrowPosition: 'left',
  },
  render: (args) => <Button {...args}>{args.children}</Button>,
};

export const DangerIconArrow: StoryObj<typeof Button> = {
  args: {
    type: 'danger',
    icon: true,
    iconPosition: 'right',
    arrow: true,
    arrowPosition: 'left',
  },
  render: (args) => <Button {...args}>{args.children}</Button>,
};

export const OutlineMoonIcon: StoryObj<typeof Button> = {
  args: {
    type: 'outline',
    textColor: NEUTRAL_BLACK_900,
    moon: true,
    arrowPosition: 'right',
    arrow: true,
    iconColor: PRIMARY_BLUE_900,
  },
  render: (args) => <Button {...args}>{args.children}</Button>,
};
