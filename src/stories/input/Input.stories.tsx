import { Meta, StoryObj } from '@storybook/react';
import { Input } from '../../components/Input';
import SEARCH_ICON from '../../assets/search.png';
import HELP_ICON from '../../assets/help.png';
import PHONE_ICON from '../../assets/phone.png';
import { Image } from 'react-native';
import { PRIMARY_BLUE_900 } from '../../utils/colors';
import { styles } from '../../styles/input.styles';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A customizable Input component for React Native. Set a type, value, placeholer and onChangeText and you are good to go. See all other optional properties below.',
      },
    },
  },
  argTypes: {
    type: {
      control: 'radio',
      options: ['default', 'large'],
      description: 'Set a "style" type of input. It is "default" by default.',
    },
    value: {
      control: 'text',
      description: 'Set a value to the input component to make it controlled.',
    },

    onChangeText: {
      control: 'object',
      description: 'Add a function that will be triggered on onChangeText event.',
    },

    placeholder: {
      control: 'text',
      description: 'Set a placeholder property on your input.',
    },
    label: {
      control: 'text',
      description: 'Set a label on your input.',
    },
    onKeyPress: {
      control: 'object',
      description: 'Add a function that will be triggered on onKeyPress event.',
    },
    onFocus: {
      control: 'object',
      description:
        'Add a function that will be triggered on onFocus event. For example to set isFocused to true and change border styles while focused',
    },
    onBlur: {
      control: 'object',
      description:
        'Add a function that will be triggered on onBlur event. For example to set isFocused to false and change border styles while not in focus',
    },
    helpIcon: {
      control: 'object',
      description:
        'Add a help icon to your input. It is going to be in a row with a label',
    },
    handleHelp: {
      control: 'object',
      description:
        'Add a function that will be triggered on a help-icon button onPress event.',
    },
    iconLeft: {
      control: 'object',
      description: 'Add an icon on a left of your input.',
    },
    iconRight: {
      control: 'object',
      description: 'Add an icon on a right of your input.',
    },
    autoCapitalize: {
      control: 'radio',
      options: ['none', 'sentences', 'words', 'characters', undefined],
      description: 'Control auto-capitalize property of your input.',
    },
    keyboardType: {
      control: 'radio',
      options: ['default', 'email-address', 'numeric', 'phone-pad'],
      description: 'Control keyboard-type property of your input.',
    },
    warningText: {
      control: 'text',
      description: 'This is an optional property to add a warning text under your input.',
    },
    isSecureTextEntry: {
      control: 'boolean',
      description:
        'This is an optional boolean property to control secureTextEntry property your input.',
    },
    isFocused: {
      control: 'boolean',
      description:
        'Change input border styles depending on isFocused propery set to true or false, with help of onFocus and onBlur.',
    },
    isValid: {
      control: 'boolean',
      description:
        'Change input styles depending on isValid propery set to true or false, for example when an error occured.',
    },
    isEmptyOnSubmit: {
      control: 'boolean',
      description:
        'Change input styles depending on isEmptyOnSubmit propery set to true or false, for example when a value of input is empty while submitting a form.',
    },
    additionalStyle: {
      control: 'object',
      description: 'Set an additional style object for input component.',
    },
    maxLength: {
      control: 'number',
      description:
        'Set a number that will be responsible for maximum length of input component.',
    },
    multiline: {
      control: 'boolean',
      description: 'Set a multiline property on input component.',
    },

    testId: {
      control: 'text',
      description: 'Set a test id property on input component.',
    },
  },
};

export default meta;

export const Default: StoryObj<typeof Input> = {
  args: {
    type: 'default',
    placeholder: 'Search for care',
    iconLeft: (
      <Image
        resizeMode="contain"
        tintColor={PRIMARY_BLUE_900}
        style={styles.icon}
        source={{ uri: SEARCH_ICON }}
      />
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Default input component',
      },
    },
  },
  render: (args) => <Input {...args} />,
};

export const Large: StoryObj<typeof Input> = {
  args: {
    type: 'large',
    placeholder: 'Search for care',
    iconLeft: (
      <Image
        resizeMode="contain"
        tintColor={PRIMARY_BLUE_900}
        style={styles.icon}
        source={{ uri: SEARCH_ICON }}
      />
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Large input component',
      },
    },
  },
  render: (args) => <Input {...args} />,
};

export const DefaultFocused: StoryObj<typeof Input> = {
  args: {
    type: 'default',
    placeholder: 'Search for care',
    isFocused: true,
    iconLeft: (
      <Image
        resizeMode="contain"
        tintColor={PRIMARY_BLUE_900}
        style={styles.icon}
        source={{ uri: SEARCH_ICON }}
      />
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Default input component when focused',
      },
    },
  },
  render: (args) => <Input {...args} />,
};

export const DefaultLabeled: StoryObj<typeof Input> = {
  args: {
    type: 'default',
    placeholder: 'Search for care',
    iconLeft: (
      <Image
        resizeMode="contain"
        tintColor={PRIMARY_BLUE_900}
        style={styles.icon}
        source={{ uri: SEARCH_ICON }}
      />
    ),
    label: 'Name',
  },
  parameters: {
    docs: {
      description: {
        story: 'Default input component with label',
      },
    },
  },
  render: (args) => <Input {...args} />,
};

export const DefaultLabeledHelp: StoryObj<typeof Input> = {
  args: {
    type: 'default',
    placeholder: 'Search for care',
    iconLeft: (
      <Image
        resizeMode="contain"
        tintColor={PRIMARY_BLUE_900}
        style={styles.icon}
        source={{ uri: SEARCH_ICON }}
      />
    ),
    label: 'Name',
    helpIcon: (
      <Image resizeMode="contain" style={styles.icon} source={{ uri: HELP_ICON }} />
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Default input component with label, help icon and left icon inside it',
      },
    },
  },
  render: (args) => <Input {...args} />,
};

export const TwoIcons: StoryObj<typeof Input> = {
  args: {
    type: 'default',
    placeholder: 'Default placeholder',
    iconRight: (
      <Image
        source={{ uri: SEARCH_ICON }}
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
        story: 'Default input component with right and left icons inside it',
      },
    },
  },

  render: (args) => <Input {...args} />,
};

export const Error: StoryObj<typeof Input> = {
  args: {
    type: 'default',
    placeholder: 'Default placeholder',
    isValid: false,
  },

  parameters: {
    docs: {
      description: {
        story: 'Default input component with error state set to true',
      },
    },
  },

  render: (args) => <Input {...args} />,
};
