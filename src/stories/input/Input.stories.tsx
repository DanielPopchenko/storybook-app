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
  argTypes: {},
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

export const DefaultIconRightLeft: StoryObj<typeof Input> = {
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
        source={{ uri: SEARCH_ICON }}
        resizeMode="contain"
        tintColor={PRIMARY_BLUE_900}
        style={styles.icon}
      />
    ),
  },

  render: (args) => <Input {...args} />,
};

export const SmallFullWidth: StoryObj<typeof Input> = {
  args: {
    type: 'small',
    placeholder: 'Default placeholder',
    isFullWidth: true,
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

export const LargeFullWidth: StoryObj<typeof Input> = {
  args: {
    type: 'large',
    placeholder: 'Default placeholder',
    isFullWidth: true,
  },

  render: (args) => <Input {...args} />,
};

export const Small: StoryObj<typeof Input> = {
  args: {
    type: 'small',
    placeholder: 'Default placeholder',
  },

  render: (args) => <Input {...args} />,
};

export const SmallError: StoryObj<typeof Input> = {
  args: {
    type: 'small',
    placeholder: 'Default placeholder',
    isValid: false,
  },

  render: (args) => <Input {...args} />,
};
