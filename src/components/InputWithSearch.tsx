import { View, Text, TextInput, TouchableOpacity, Platform } from 'react-native';
import { styles } from '../styles/inputWithSearch.styles';
import { useState, useEffect } from 'react';
import { InputWithSearchProps } from '../types/input.types';

const contains = (option: { label: string; value: string }, query: string) => {
  const { label } = option;
  if (label.toLowerCase().includes(query)) {
    return true;
  }
  return false;
};

export const InputWithSearch = ({
  searchValue,
  placeholder,
  options,
  onChange,
  iconRight,
  iconClose,
  iconOpen,
  label,
  style,
  maxLength,
  multiline,
  ...props
}: InputWithSearchProps) => {
  const [isShowOptions, setIsShowOptions] = useState<boolean>(true);
  const [isInputShown, setIsInputShown] = useState<boolean>(false);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [data, setData] = useState<{ label: string; value: string }[]>([]);

  useEffect(() => {
    if (searchValue && searchValue !== '') {
      const formattedQuery = searchValue.toLowerCase();
      const filteredData = options.filter((option) => {
        return contains(option, formattedQuery);
      });
      setData(filteredData);
    }

    setData(options);
  }, [options]);

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

  return (
    <View style={[styles.container, isInputShown ? styles.containerActive : null, style]}>
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
              autoComplete="off"
              style={[
                styles.textInput,
                Platform.OS === 'web' ? ({ outlineStyle: 'none' } as any) : null,
              ]}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              maxLength={maxLength}
              multiline={multiline}
              {...props}
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
