import { Meta, StoryObj } from '@storybook/react';
import PHONE_ICON from '../../assets/phone.png';
import ARROW_RIGHT from '../../assets/arrow-right.png';
import ARROW_LEFT from '../../assets/arrow-left.png';
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
        component: 'A customizable Accordion component for React Native.',
      },
    },
  },
  argTypes: {
    data: {
      control: 'object',
      discription:
        'Set a data object to display accordion items. Each object (item) takes "title" and "content" inside.',
    },
    iconLeft: {
      control: 'object',
      discription: 'Set an icon that is going to be on left of your Accordion component.',
    },
    iconClose: {
      control: 'object',
      discription:
        'Set a close icon that is going to be displayed when Accordion component is opened.',
    },
    iconOpen: {
      control: 'object',
      discription:
        'Set an open icon that is going to be displayed when Accordion component is closed.',
    },
    style: {
      control: 'object',
      description: 'Set this property to add additional styles to your accordion.',
    },
  },
};

export default meta;

export const Default: StoryObj<typeof Accordion> = {
  args: {
    data: [
      { title: 'Accordion Name - 1', content: 'Text' },
      {
        title: 'Accordion Name - 2',
        content:
          'Accordion Name - 2 Accordion Name - 2 Accordion Name - 2 Accordion Name - 2 Accordion Name - 2',
      },
      { title: 'Accordion Name - 3', content: 'Text' },
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
        source={{ uri: ARROW_LEFT }}
        resizeMode="contain"
        tintColor={PRIMARY_BLUE_900}
        style={styles.icon}
      />
    ),
    iconOpen: (
      <Image
        source={{ uri: ARROW_RIGHT }}
        resizeMode="contain"
        tintColor={PRIMARY_BLUE_900}
        style={styles.icon}
      />
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Accordion component.',
      },
    },
  },
  render: (args) => <Accordion {...args} />,
};
