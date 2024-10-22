import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { styles } from '../styles/inputWithSearch.styles';
import { useState, useEffect } from 'react';
import { InputWithSearchProps } from '../types/input.types';

export const InputWithSearch = ({
  searchValue,
  placeholder,
  options,
  // onSearch,
  onChange,
  iconRight,
  iconClose,
  iconOpen,
  label,
}: InputWithSearchProps) => {
  const [isShowOptions, setIsShowOptions] = useState<boolean>(true);
  const [isInputShown, setIsInputShown] = useState<boolean>(false);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [data, setData] = useState<{ label: string; value: string }[]>([]);

  useEffect(() => {
    setData(options);
  }, []);

  const handleOnChange = (query: string) => {
    onChange(query);
    setIsShowOptions(true);
    const formattedQuery = query.toLowerCase();
    const filteredData = options.filter((option) => {
      return contains(option, formattedQuery);
    });

    setData(filteredData);
  };

  const handleOnPress = (query: string) => {
    handleOnChange(query);
    setIsShowOptions(false);
  };

  const contains = (option: { label: string; value: string }, query: string) => {
    const { label } = option;
    if (label.toLowerCase().includes(query)) {
      return true;
    }
    return false;
  };

  return (
    <View style={[styles.container, isInputShown ? styles.containerActive : null]}>
      <TouchableOpacity onPress={() => setIsInputShown(!isInputShown)}>
        <View style={styles.labelContainer}>
          <Text style={[styles.labelText]}>{label ? label : 'Input text goes here'}</Text>
          {isInputShown ? iconClose : iconOpen}
        </View>
      </TouchableOpacity>

      {isInputShown ? (
        <View>
          <View style={[styles.inputWrapper, isFocused ? styles.active : null]}>
            <TextInput
              value={searchValue}
              onChangeText={(value) => handleOnChange(value)}
              placeholder={placeholder}
              style={styles.textInput}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />

            {iconRight ? iconRight : null}
          </View>

          <View>
            {isShowOptions
              ? data.map((item) => (
                  <TouchableOpacity
                    onPress={() => handleOnPress(item.label)}
                    key={item.value}
                    style={styles.option}
                  >
                    <Text>{item.label}</Text>
                  </TouchableOpacity>
                ))
              : null}
          </View>
        </View>
      ) : null}
    </View>
  );
};
