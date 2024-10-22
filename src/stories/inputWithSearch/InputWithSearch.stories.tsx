import { Meta, StoryObj } from '@storybook/react';
import { InputWithSearch } from '../../components/InputWithSearch';
import SEARCH_ICON from '../../assets/search.png';
import HELP_ICON from '../../assets/help.png';
import PHONE_ICON from '../../assets/phone.png';
import { Image } from 'react-native';
import { PRIMARY_BLUE_900 } from '../../utils/colors';
import { styles } from '../../styles/inputWithSearch.styles';

const meta: Meta<typeof InputWithSearch> = {
  title: 'Components/InputWithSearch',
  component: InputWithSearch,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A customizable Input with search component for React Native.',
      },
    },
  },
  argTypes: {
    options: {
      control: 'object',
      description:
        'Pass an object of options with labels and values, to display and choose the options.',
    },
    label: {
      control: 'text',
      description:
        'Set a label, that you want to see, default is "Input text goes here".',
    },
    searchValue: {
      control: 'text',
      description: 'Set a search value for your input component.',
    },
    onChange: {
      control: 'object',
      description:
        'Set an onChange function for your input, that will be triggered when the option is clicked. Pass the string value inside.',
    },
    iconClose: {
      control: 'object',
      description: 'Set a close icon.',
    },
    iconOpen: {
      control: 'object',
      description: 'Set an open icon.',
    },
    iconRight: {
      control: 'object',
      description: 'Set an icon taht will be inside the input component.',
    },
  },
};

export default meta;

export const Default: StoryObj<typeof InputWithSearch> = {
  args: {
    placeholder: 'Search for care',
    label: 'Input Text goes here',
    iconClose: (
      <Image
        resizeMode="contain"
        tintColor={PRIMARY_BLUE_900}
        style={styles.icon}
        source={{ uri: HELP_ICON }}
      />
    ),
    iconOpen: (
      <Image
        resizeMode="contain"
        tintColor={PRIMARY_BLUE_900}
        style={styles.icon}
        source={{ uri: PHONE_ICON }}
      />
    ),
    iconRight: (
      <Image
        resizeMode="contain"
        tintColor={PRIMARY_BLUE_900}
        style={styles.icon}
        source={{ uri: SEARCH_ICON }}
      />
    ),
    options: [
      { label: 'Option 1', value: 'value 1' },
      { label: 'Option 2', value: 'value 2' },
    ],
  },
  render: (args) => <InputWithSearch {...args} />,
};
