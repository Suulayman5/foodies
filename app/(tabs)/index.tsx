import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import { fontFamily } from '@/constants/Fonts'
import { fontSize } from '@/constants/Dimentions'
import { useRouter } from 'expo-router'
import '../global.css'

const index = () => {
  const router = useRouter()
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ImageBackground
          source={require('../../assets/images/Onboarding_01.png')}
          style={{ width: '100%', height: '100%' }}
          resizeMode="cover"
        >
          {/* <Text style={styles.text}>Hello</Text> */}
          </ImageBackground>
          <Text
            style={{
              fontSize: fontSize.xl,
              fontFamily: fontFamily.bold,
              color: '#000',
              marginTop: 20,
            }}>
            Welcome to the App! 
          </Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: fontSize.lg,
    fontWeight: 'bold',
  },
})

export default index