import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Platform, StatusBar } from 'react-native';
import React from 'react';
import { fontFamily } from '@/constants/Fonts';
import { fontSize } from '@/constants/Dimentions';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import '../global.css';
import Button from '@/components/Button';

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* <ImageBackground
        source={require('../../assets/images/Onboarding_01.png')}
        style={StyleSheet.absoluteFill}
        resizeMode="cover"
      /> */}
      <View style={styles.overlay}>
        <Text style={styles.title}>Welcome to the App!</Text>
        <Button onPress={() => router.push('/(auth)/Signin')} title="Get Started" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 60,
    backgroundColor: 'rgba(255, 255, 255, 0.4)', // optional overlay
  },
  title: {
    fontSize: fontSize.xl,
    fontFamily: fontFamily.Light,
    color: '#000',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#000',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontFamily: fontFamily.Medium,
    fontSize: fontSize.md,
  },
});
