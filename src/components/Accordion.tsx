import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import {
  NEUTRAL_BLACK_900,
  NEUTRAL_GRAY_500,
  NEUTRAL_WHITE_100,
  NEUTRAL_WHITE_50,
} from '../utils/colors';

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
}: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  // !!! styles for icons and views
  return (
    <View style={[styles.item, length > 1 ? styles.margin : null]}>
      <TouchableOpacity onPress={() => setIsOpen(!isOpen)}>
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

type AccordionProps = {
  data: { id: string; title: string; content: any }[];
  iconLeft: React.ReactNode;
  iconOpen: React.ReactNode;
  iconClose: React.ReactNode;
};

const Accordion = ({ data, iconLeft, iconClose, iconOpen, ...props }: AccordionProps) => {
  return (
    <View style={styles.container} {...props}>
      {data.map((item) => (
        <AccordionItem
          key={item.id}
          title={item.title}
          content={item.content}
          length={data.length}
          iconLeft={iconLeft}
          iconClose={iconClose}
          iconOpen={iconOpen}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    resizeMode: 'contain',
    height: 18,
    width: 18,
  },
  container: {
    padding: 16,
    backgroundColor: NEUTRAL_WHITE_100,
    borderRadius: 10,
  },
  item: {
    display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'flex-start',
    // flexDirection: 'column',
    padding: 16,
    backgroundColor: NEUTRAL_WHITE_50,
    borderRadius: 10,
  },
  margin: {
    marginTop: 8,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    display: 'flex',
  },
  title: {
    color: NEUTRAL_BLACK_900,
    fontSize: 15,
    fontWeight: 500,
  },
  text: {
    color: NEUTRAL_GRAY_500,
  },
  content: {
    // padding: 10,
    marginTop: 16,
  },
  grouped: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export default Accordion;
