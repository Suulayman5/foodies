import { Platform, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { applyStyles } from '@/assets/styles'
import Layout from '@/components/Layout'
import { useLocalSearchParams } from 'expo-router'

const Resturants = () => {
      const {id} = useLocalSearchParams()
    
  return (
    <Layout style={applyStyles('',{paddingTop: 10})}
    touchable={false}>
  <SafeAreaView style={styles.AndroidSafeArea}>
    <View style={applyStyles('flex-1')}>
      <Text>Resturants {id}</Text>
    </View>
    </SafeAreaView>
    </Layout>
  )
}

export default Resturants

const styles = StyleSheet.create({
      AndroidSafeArea: {
          flex: 1,
          paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
          alignItems: 'center',
        },
})