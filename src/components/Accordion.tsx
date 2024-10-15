import { View, Text } from 'react-native';
import React from 'react';

type AccordionProps = {
  type: 'default';
};

const Accordion = ({ type }: AccordionProps) => {
  return (
    <View>
      <Text>Accordion</Text>
    </View>
  );
};

export default Accordion;
