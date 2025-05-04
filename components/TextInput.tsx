import React from 'react';
import { StyleSheet, TextInput as RNTextInput, View, Text } from 'react-native';
import { spacing } from '@/constants/Dimentions';
import { Colors } from '@/constants/Colors';

interface Props {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
  style?: object;
  error?: string;
  onBlur?: () => void;
}

const TextInput = ({ value, onChangeText, placeholder, secureTextEntry = false, style , error, onBlur}: Props) => {
  return (
    <View>
      <RNTextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        style={[styles.input, style]}
        onBlur={onBlur}
      />
      {error && <Text style={{ color: 'red', marginTop: 5 }}>{error}</Text>}
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 62,
    backgroundColor: Colors.light.inputBackground,
    color: Colors.light.inputText,
    padding: spacing.sm,
    borderRadius: spacing.sm,
    marginBottom: 10,
  },
});
