import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles/accordion.styles';

type AccordionItemProps = {
  title: string;
  content: any;
  length: number;
  iconLeft: React.ReactNode;
  iconOpen: React.ReactNode;
  iconClose: React.ReactNode;
};

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

  // !!! styles for icons and views
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

interface IData {
  id: string;
  title: string;
  content: any;
}

type AccordionProps = {
  data: IData[];
  iconLeft: React.ReactNode;
  iconOpen: React.ReactNode;
  iconClose: React.ReactNode;
};

const Accordion = ({ data, iconLeft, iconClose, iconOpen, ...props }: AccordionProps) => {
  return (
    <View style={styles.container}>
      {data.map((item) => (
        <AccordionItem
          key={item.id}
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
