import { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles/accordion.styles';
import { AccordionProps, AccordionItemProps } from '../types/accordion.types';

const AccordionItem = ({
  title,
  content,
  length,
  iconOpen,
  iconClose,
  iconLeft,
  ...props
}: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <View style={[styles.item, length > 1 ? styles.margin : null]}>
      <TouchableOpacity onPress={() => setIsOpen(!isOpen)} {...props}>
        <View style={styles.header}>
          <View style={styles.grouped}>
            {iconLeft ? iconLeft : null}
            <Text style={[styles.title, iconLeft ? { marginLeft: 12 } : null]}>
              {title}
            </Text>
          </View>
          {isOpen ? iconClose : !isOpen ? iconOpen : null}
        </View>
      </TouchableOpacity>
      {isOpen ? (
        <View style={styles.content}>
          <Text style={styles.text}>{content}</Text>
        </View>
      ) : null}
    </View>
  );
};

const Accordion = ({ data, iconLeft, iconClose, iconOpen, ...props }: AccordionProps) => {
  return (
    <View style={styles.container}>
      {data.map((item) => (
        <AccordionItem
          key={item.title}
          title={item.title}
          content={item.content}
          length={data.length}
          iconLeft={iconLeft}
          iconClose={iconClose}
          iconOpen={iconOpen}
          {...props}
        />
      ))}
    </View>
  );
};

export default Accordion;
