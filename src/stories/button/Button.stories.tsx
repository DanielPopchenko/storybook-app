// stories/Button.stories.tsx
import { Button } from '../../components/Button';
import { Meta, StoryObj } from '@storybook/react';
// import phoneUrl, { ReactComponent as Phone } from '../../assets/phone.svg';
// import { ReactComponent as ArrowLeft } from '../../assets/arrow-left.svg';
// import { ReactComponent as ArrowRight } from '../../assets/arrow-right.svg';

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
    text: {
      description: 'The text to display inside the button.',
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

// text,
//   textColor,
//   handlePress,
//   type = 'defaultSecondary',
//   disabled,
//   icon,
//   arrow,
//   moon = false,
//   iconPosition,
//   arrowPosition,
//   active,
//   iconOnly,

export default meta;

// ! ---- Capsule style buttons ----

export const Active: StoryObj<typeof Button> = {
  args: {
    text: 'Button Name',
    type: 'active',
    active: true,
  },
};

export const ActiveOutline: StoryObj<typeof Button> = {
  args: {
    text: 'Button Name',
    type: 'activeOutline',
    active: true,
    textColor: { color: '#275DF6' },
  },
};

export const DisabledOutline: StoryObj<typeof Button> = {
  args: {
    text: 'Button Name',
    type: 'outline',
    active: true,
    textColor: { color: '#9DA5B2' },
    disabled: true,
  },
};

export const DisabledActive: StoryObj<typeof Button> = {
  args: {
    text: 'Button Name',
    type: 'disabled',
    active: true,
    disabled: true,
    textColor: { color: '#FDFEFE' },
  },
};

export const ActiveIcon: StoryObj<typeof Button> = {
  args: {
    text: 'Button Name',
    type: 'active',
    active: true,
    icon: true,
    iconPosition: 'right',
  },
};

export const ActiveOutlineIcon: StoryObj<typeof Button> = {
  args: {
    text: 'Button Name',
    type: 'activeOutline',
    active: true,
    textColor: { color: '#275DF6' },
    icon: true,
    iconPosition: 'right',
  },
};

export const DisabledActiveIcon: StoryObj<typeof Button> = {
  args: {
    text: 'Button Name',
    type: 'disabled',
    active: true,
    disabled: true,
    textColor: { color: '#FDFEFE' },
    icon: true,
    iconPosition: 'right',
  },
};

export const ActiveOutlineIconOnly: StoryObj<typeof Button> = {
  args: {
    type: 'activeOutline',
    active: true,
    icon: true,
    iconPosition: 'right',
    iconOnly: true,
  },
};

export const DisabledActiveIconOnly: StoryObj<typeof Button> = {
  args: {
    type: 'disabled',
    active: true,
    disabled: true,
    icon: true,
    iconPosition: 'right',
    iconOnly: true,
  },
};

// ! ---- Brick style buttons ----

export const DefaultSecondary: StoryObj<typeof Button> = {
  args: {
    text: 'Button Name',
    type: 'defaultSecondary',
    textColor: { color: '#131638' },
  },
};

export const Default: StoryObj<typeof Button> = {
  args: {
    text: 'Button Name',
    // textColor: { color: '#fff' },
    type: 'default',
  },
};

export const Disabled: StoryObj<typeof Button> = {
  args: {
    text: 'Button Name',
    textColor: { color: '#DFDFDF' },
    type: 'disabled',
    disabled: true,
  },
};

export const Warning: StoryObj<typeof Button> = {
  args: {
    text: 'Button Name',
    // textColor: { color: '#FDFEFE' },
    type: 'warning',
  },
};
export const Danger: StoryObj<typeof Button> = {
  args: {
    text: 'Button Name',
    // textColor: { color: '#FDFEFE' },
    type: 'danger',
  },
};

export const Success: StoryObj<typeof Button> = {
  args: {
    text: 'Button Name',
    type: 'success',
  },
};

export const DefaultSecondaryIcon: StoryObj<typeof Button> = {
  args: {
    text: 'Button Name',
    type: 'defaultSecondary',
    textColor: { color: '#131638' },
    icon: true,
    iconPosition: 'right',
  },
};

export const DisabledIcon: StoryObj<typeof Button> = {
  args: {
    text: 'Button Name',
    // textColor: { color: '#DFDFDF' },
    type: 'disabled',
    disabled: true,
    icon: true,
    iconPosition: 'right',
  },
};

export const WarningIcon: StoryObj<typeof Button> = {
  args: {
    text: 'Button Name',
    // textColor: { color: '#FDFEFE' },
    type: 'warning',
    icon: true,
    iconPosition: 'right',
  },
};

export const SuccessIcon: StoryObj<typeof Button> = {
  args: {
    text: 'Button Name',
    // textColor: { color: '#FDFEFE' },
    type: 'success',
    icon: true,
    iconPosition: 'right',
  },
};

export const DangerIcon: StoryObj<typeof Button> = {
  args: {
    text: 'Button Name',
    // textColor: { color: '#FDFEFE' },
    type: 'danger',
    icon: true,
    iconPosition: 'right',
  },
};

export const DefaultSecondaryIconArrow: StoryObj<typeof Button> = {
  args: {
    text: 'Button Name',
    type: 'defaultSecondary',
    textColor: { color: '#131638' },
    icon: true,
    iconPosition: 'right',
    arrow: true,
    arrowPosition: 'left',
  },
};

export const DisabledIconArrow: StoryObj<typeof Button> = {
  args: {
    text: 'Button Name',
    type: 'disabled',
    textColor: { color: '#FDFEFE' },
    icon: true,
    iconPosition: 'right',
    arrow: true,
    arrowPosition: 'left',
  },
};

export const WarningIconArrow: StoryObj<typeof Button> = {
  args: {
    text: 'Button Name',
    type: 'warning',
    icon: true,
    iconPosition: 'right',
    arrow: true,
    arrowPosition: 'left',
  },
};

export const SuccessIconArrow: StoryObj<typeof Button> = {
  args: {
    text: 'Button Name',
    type: 'success',
    icon: true,
    iconPosition: 'right',
    arrow: true,
    arrowPosition: 'left',
  },
};

export const DangerIconArrow: StoryObj<typeof Button> = {
  args: {
    text: 'Button Name',
    type: 'danger',
    icon: true,
    iconPosition: 'right',
    arrow: true,
    arrowPosition: 'left',
  },
};

export const OutlineMoonIcon: StoryObj<typeof Button> = {
  args: {
    text: 'Button Name',
    type: 'outline',
    textColor: { color: '#131638' },
    moon: true,
    arrowPosition: 'right',
    arrow: true,
  },
};
