import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { fontSize, spacing } from '@/constants/Dimentions'
import { Colors } from '@/constants/Colors'
import TextInput from '@/components/TextInput'
import { useQuery } from '@tanstack/react-query'
import { getCategories } from '@/api/fetch'

const Home = () => {
  const {data: categories, isLoading} = useQuery({queryKey:['category'], queryFn:getCategories})
  return (
    <View style={styles.container}>
        <SafeAreaView style={styles.safeArea}>
            <ScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps="handled"
            >
              <View style={styles.view}>
                <View style={styles.nav}>
                      <View style={styles.leftnav}>
                          <View style={styles.navbar}>
                              <Image source={require('@/assets/icons/Icon.png')}/>
                          </View>
                              <View >
                                  <Text style={styles.navtext}>DELIVER TO</Text>
                                  <View style={styles.midnav}>
                                      <Text style={styles.midnavText}>Halal Lab office</Text>
                                      <Image source={require('@/assets/icons/Polygon1.png')} style={styles.midnavImage}/>
                                  </View>
                          </View>
                      </View>
                      <View>
                          <Image source={require('@/assets/icons/Cart.png')}/>
                      </View>
                </View>
                  <View style={styles.topText}>
                      <Text style={styles.topTextHey}>Hey You, </Text>
                      <Text style={styles.greeting}>Good Afternoon!</Text>
                  </View>
                  <View style={{ marginTop: 20 }} /> 
                  <View style={styles.inputContainer}>
                      <View style={styles.icon}>
                          <Image source={require('@/assets/icons/Search.png')} />
                      </View>
                      <TextInput placeholder='Search dishes, restaurants'style={styles.input}/>
                </View>
                <View>
                  hi
                </View>
              </View>
            </ScrollView>
        </SafeAreaView>
    </View>
  )
}
export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: Colors.light?.background
    },
    safeArea: {
        flex: 1,
        justifyContent: 'center',
        width: '100%',
      },
      view: {
        margin: spacing.md,
      },
      nav: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between'
      },
      navbar: {
        backgroundColor: Colors.light.placeholderText,
        borderRadius: 30,
        padding: 10,
        width: 48,
        height: 48,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
      },
      leftnav: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: spacing.xl
      },
      navtext: {
        color: Colors.light.buttonBackground,
        fontWeight: 'bold',
        fontSize: fontSize.sm,
        paddingTop: spacing.xs

      },
      midnav: {
        flexDirection: 'row',
        paddingTop: spacing.xs,
        gap: spacing.sm,
      },
      midnavText: {
        fontSize: fontSize.md,
        color: Colors.light.text
      },
      midnavImage: {
        color: Colors.light.text,
        marginTop: spacing.sm
      },
      topText: {
        marginTop: spacing.md,
        flexDirection: 'row',
      },
      topTextHey: {
        color: Colors.light.text,
        fontSize: fontSize.md,
      },
      greeting: {
        color: Colors.light.textBold,
        fontSize: fontSize.md,
        fontWeight: 'bold',
      },
      inputContainer: {
        position: 'relative',
        justifyContent: 'center',
      },
      icon: {
        position: 'absolute',
        left: 20,
        zIndex: 1,
        paddingBottom: spacing.sm,
        color:Colors.light.text
      },
      input: {
        paddingLeft: 60,
      },
})