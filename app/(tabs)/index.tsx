import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { fontFamily } from '@/constants/Fonts'
import { fontSize } from '@/constants/Dimentions'
import { useRouter } from 'expo-router'
import '../global.css'

const index = () => {
  const router = useRouter()
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
 
        <TouchableOpacity onPress={() => router.push('/(auth)/Signup')}><Text style={styles.text}>
        index
          </Text>
        </TouchableOpacity>
        <Text className='bg-red-400 text-blue-700'>index</Text>
        <Text>index</Text>
        <Text>index</Text>
        <Text>index</Text>
        <Text>index</Text>
        <Text>index</Text>
        <Text>index</Text>
        <Text>index</Text>
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