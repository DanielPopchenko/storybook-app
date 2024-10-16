import { Meta, StoryObj } from '@storybook/react';
import HELP_ICON from '../../assets/help.png';
import PHONE_ICON from '../../assets/phone.png';
import { Image } from 'react-native';
import { PRIMARY_BLUE_900 } from '../../utils/colors';
import { styles } from '../../styles/input.styles';
import Accordion from '../../components/Accordion';

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
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
export const Default: StoryObj<typeof Accordion> = {
  args: {
    data: [
      { id: '1', title: 'Accordion Name - 1', content: 'Text' },
      {
        id: '2',
        title: 'Accordion Name - 2',
        content:
          'Accordion Name - 2 Accordion Name - 2 Accordion Name - 2 Accordion Name - 2 Accordion Name - 2',
      },
      { id: '3', title: 'Accordion Name - 3', content: 'Text' },
    ],
    iconLeft: (
      <Image
        source={{ uri: PHONE_ICON }}
        resizeMode="contain"
        tintColor={PRIMARY_BLUE_900}
        style={styles.icon}
      />
    ),
    iconClose: (
      <Image
        source={{ uri: PHONE_ICON }}
        resizeMode="contain"
        tintColor={PRIMARY_BLUE_900}
        style={styles.icon}
      />
    ),
    iconOpen: (
      <Image
        source={{ uri: HELP_ICON }}
        resizeMode="contain"
        tintColor={PRIMARY_BLUE_900}
        style={styles.icon}
      />
    ),
  },
  render: (args) => <Accordion {...args} />,
};
