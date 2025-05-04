
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { OtpInput } from "react-native-otp-entry";
import { fontSize, spacing } from '@/constants/Dimentions';
import { Colors } from '@/constants/Colors';

const Otp = () => {
  return (
    <View>
        <OtpInput
  numberOfDigits={4}
  autoFocus={false}
  hideStick={true}
  focusColor="none"
  blurOnFilled={true}
  disabled={false}
  type="numeric"
  secureTextEntry={false}
  focusStickBlinkingDuration={500}
  onFocus={() => console.log("Focused")}
  onBlur={() => console.log("Blurred")}
  onTextChange={(text) => console.log(text)}
  onFilled={(text) => console.log(`OTP is ${text}`)}
  textInputProps={{
    accessibilityLabel: "One-Time Password",
  }}
  textProps={{
    accessibilityRole: "text",
    accessibilityLabel: "OTP digit",
    allowFontScaling: false,
  }}
  theme={{
    containerStyle: styles.container,
    pinCodeContainerStyle: styles.pinCodeContainer,
    pinCodeTextStyle: styles.pinCodeText,
  }}
/>
    </View>
  )
}

export default Otp

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 60,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    pinCodeContainer: {
        width: 62,
        height: 62,
        borderRadius: 10,
        marginHorizontal: spacing.md,
        backgroundColor: Colors.light.inputBackground,
        justifyContent: "center",
        alignItems: "center",
    },
    pinCodeText: {
        fontSize: fontSize.lg,
        fontWeight: "bold",
    },
})