// Otp.tsx
import { StyleSheet, View } from 'react-native';
import React from 'react';
import { OtpInput } from 'react-native-otp-entry';
import { fontSize, spacing } from '@/constants/Dimentions';
import { Colors } from '@/constants/Colors';

type Props = {
  onChange: (text: string) => void;
};

const Otp = ({ onChange }: Props) => {
  return (
    <View>
      <OtpInput
        numberOfDigits={6}
        autoFocus={false}
        hideStick={true}
        focusColor="none"
        blurOnFilled={true}
        disabled={false}
        type="numeric"
        secureTextEntry={false}
        focusStickBlinkingDuration={500}
        onTextChange={onChange}
        onFilled={onChange}
        textInputProps={{
          accessibilityLabel: 'One-Time Password',
        }}
        textProps={{
          accessibilityRole: 'text',
          accessibilityLabel: 'OTP digit',
          allowFontScaling: false,
        }}
        theme={{
          containerStyle: styles.container,
          pinCodeContainerStyle: styles.pinCodeContainer,
          pinCodeTextStyle: styles.pinCodeText,
        }}
      />
    </View>
  );
};

export default Otp;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 60,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pinCodeContainer: {
    width: 40,
    height: 40,
    borderRadius: 10,
    marginHorizontal: spacing.sm,
    backgroundColor: Colors.light.inputBackground,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pinCodeText: {
    fontSize: fontSize.lg,
    fontWeight: 'bold',
  },
});
