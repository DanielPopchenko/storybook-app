import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { styles } from '../styles/inputWithSearch.styles';
import { useState } from 'react';
import { InputWithSearchProps } from '../types/input.types';

export const InputWithSearch = ({
  value,
  placeholder,
  options,
  onSearch,
  onChange,
  iconRight,
  iconClose,
  iconOpen,
  label,
}: InputWithSearchProps) => {
  const [isShowOptions, setIsShowOptions] = useState<boolean>(false);

  const handleOnChange = (string: string) => {
    onChange(string);
  };

  return (
    <View style={[styles.container, isShowOptions ? styles.containerActive : null]}>
      <TouchableOpacity onPress={() => setIsShowOptions(!isShowOptions)}>
        <View style={styles.labelContainer}>
          <Text style={[styles.labelText]}>{label ? label : 'Input text goes here'}</Text>
          {isShowOptions ? iconClose : iconOpen}
        </View>
      </TouchableOpacity>

      {isShowOptions ? (
        <View>
          <View style={styles.inputWrapper}>
            <TextInput
              value={value}
              onChange={onSearch}
              placeholder={placeholder}
              style={styles.textInput}
            />
            {iconRight ? iconRight : null}
          </View>
          <View>
            {options
              ? options.map((option) => (
                  <TouchableOpacity
                    onPress={() => handleOnChange(option.value)}
                    key={option.value}
                    style={styles.option}
                  >
                    <Text>{option.label}</Text>
                  </TouchableOpacity>
                ))
              : null}
          </View>
        </View>
      ) : null}
    </View>
  );
};
