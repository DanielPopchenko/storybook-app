import { Meta, StoryObj } from '@storybook/react';
import { InputWithSearch } from '../../components/InputWithSearch';
import SEARCH_ICON from '../../assets/search.png';
import ARROW_LEFT from '../../assets/arrow-left.png';
import ARROW_RIGHT from '../../assets/arrow-right.png';
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
        component:
          'A customizable Input with search component for React Native. This is just a visual representation.',
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
      description: 'Set a label, that you want to see above your input.',
    },
    placeholder: {
      control: 'text',
      description: 'Set a placehoder, that you want to see in your input.',
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

export const Default: StoryObj<typeof InputWithSearch> = {
  args: {
    placeholder: 'Search for care',
    label: 'Input Text goes here',
    iconClose: (
      <Image
        resizeMode="contain"
        tintColor={PRIMARY_BLUE_900}
        style={styles.icon}
        source={{ uri: ARROW_LEFT }}
      />
    ),
    iconOpen: (
      <Image
        resizeMode="contain"
        tintColor={PRIMARY_BLUE_900}
        style={styles.icon}
        source={{ uri: ARROW_RIGHT }}
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
      { label: 'Karry', value: 'value 1' },
      { label: 'Larry', value: 'value 2' },
      { label: 'Mary', value: 'value 3' },
      { label: 'Bob', value: 'value 4' },
    ],
  },

  parameters: {
    docs: {
      description: {
        story: 'Default input with search component',
      },
    },
  },
  render: (args) => <InputWithSearch {...args} />,
};
