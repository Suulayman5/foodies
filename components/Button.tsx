import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator, StyleProp, ViewStyle } from 'react-native';
import { Colors } from '@/constants/Colors';
import { ButtonProps } from '@/utility/types';
import { fontSize } from '@/constants/Dimentions';

const Button: React.FC<ButtonProps> = ({ title, onPress, disabled = false, loading = false, variant = 'primary', style }) => {

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      style={[
        styles.button,
        { backgroundColor: Colors.light.buttonBackground, opacity: disabled || loading ? 0.5 : 1 },
        style as StyleProp<ViewStyle>
      ]}
    >
      {loading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <Text style={styles.text}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 62,
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: Colors.light.textButton,
    fontWeight: 'bold', 
    fontSize: fontSize.md,
  },
});
