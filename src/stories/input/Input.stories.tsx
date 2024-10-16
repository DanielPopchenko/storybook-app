import { Meta, StoryObj } from '@storybook/react';
import { Input } from '../../components/Input';
import SEARCH_ICON from '../../assets/search.png';
import HELP_ICON from '../../assets/help.png';
import PHONE_ICON from '../../assets/phone.png';
import { Image } from 'react-native';
import { NEUTRAL_BLACK_900, PRIMARY_BLUE_900 } from '../../utils/colors';
import { styles } from '../../styles/input.styles';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A customizable button component for React Native.',
      },
    },
  },
  argTypes: {
    type: {
      control: 'radio',
      options: ['default', 'large'],
      description: 'Set a type of input you want to use. It equals "default" by default.',
    },
    value: {
      control: 'text',
      description: 'Bind a state value to the input component to make it controllable.',
    },

    onChangeText: {
      control: 'object',
      description: 'Add a function that will trigger on OnChangeText event.',
    },

    placeholder: {
      control: 'text',
      description: 'Set a placeholder property on your input.',
    },
    onKeyPress: {
      control: 'object',
      description:
        'This is an optional property to add a function that will be triggered on onKeyPress event.',
    },
    onFocus: {
      control: 'object',
      description:
        'This is an optional property to add a function that will be triggered on onFocus event.',
    },
    onBlur: {
      control: 'object',
      description:
        'This is an optional property to add a function that will be triggered on onBlur event.',
    },
    showHelp: {
      control: 'boolean',
      description:
        'This is an optional boolean property to choose wheather you want to add a help icon to your input.',
    },
    helpIcon: {
      control: 'object',
      description: 'This is an optional property to add a help icon to your input.',
    },
    handleHelp: {
      control: 'object',
      description:
        'This is an optional property to add a function that will be triggered on a button (help icon) onClick event, when showHelp is set on true.',
    },
    iconLeft: {
      control: 'object',
      description: 'This is an optional property to add icon on a left of your input.',
    },
    iconRight: {
      control: 'object',
      description: 'This is an optional property to add icon on a right of your input.',
    },
    autoCapitalize: {
      control: 'radio',
      options: ['none', 'sentences', 'words', 'characters', undefined],
      description:
        'This is an optional property to control autoCapitalize property of your input.',
    },
    keyboardType: {
      control: 'radio',
      options: ['default', 'email-address', 'numeric', 'phone-pad'],
      description:
        'This is an optional property to control keyboardType property of your input.',
    },
    label: {
      control: 'text',
      description: 'This is an optional property to add a label on your input.',
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
        'This is an optional boolean property to change input styles depending on isFocused propery set to true or false.',
    },
    isValid: {
      control: 'boolean',
      description:
        'This is an optional boolean property to change input styles depending on isValid propery set to true or false, for example when an error occured.',
    },
    isEmptyOnSubmit: {
      control: 'boolean',
      description:
        'This is an optional boolean property to change input styles depending on isEmptyOnSubmit propery set to true or false, for example when a value of input is empty while submitting a form.',
    },
  },
};

export default meta;

// ! Review if onChange is working properly
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
    // iconRight: (
    //   <Image
    //     resizeMode="contain"
    //     tintColor={PRIMARY_BLUE_900}
    //     style={styles.icon}
    //     source={{ uri: SEARCH_ICON }}
    //   />
    // ),
    // value: value,
    // onChange: () => setValue,
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
    showHelp: true,
    helpIcon: (
      <Image resizeMode="contain" style={styles.icon} source={{ uri: HELP_ICON }} />
    ),
  },
  render: (args) => <Input {...args} />,
};

export const DefaultIconRight: StoryObj<typeof Input> = {
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

  render: (args) => <Input {...args} />,
};

export const Error: StoryObj<typeof Input> = {
  args: {
    type: 'default',
    placeholder: 'Default placeholder',
    isValid: false,
  },

  render: (args) => <Input {...args} />,
};
