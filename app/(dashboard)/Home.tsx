import { FlatList, Image, Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { fontSize, spacing } from '@/constants/Dimentions'
import { Colors } from '@/constants/Colors'
import TextInput from '@/components/TextInput'
import { useQuery } from '@tanstack/react-query'
import { getCategories, getResturant } from '@/api/fetch'
import CategoryList from '@/app/(dashboard)/categories/CategoryList'
import Layout from '@/components/Layout'
import { applyStyles } from '@/assets/styles'
import { scaledSize } from '@/assets/style-guide/typography'
import { useRouter } from 'expo-router'
import Resturant from './resturant/resturant'

const Home = () => {
  const {data: categories, isLoading} = useQuery({queryKey:['category'], queryFn:getCategories})
  const cat = categories ?? []
  const router = useRouter()
  console.log('data=====>>>>>>', cat)

  const {data} = useQuery({ queryKey: ['resturant'], queryFn: getResturant})
  const resturants = data ?? []
  console.log('data=====>>>>>>', resturants)


  return (
    <Layout style={applyStyles('w-full',{paddingHorizontal: scaledSize(16)})}
    touchable={false}>
        <SafeAreaView style={styles.AndroidSafeArea}>
          <ScrollView>
              <View style={applyStyles('flex-1 bg-red-500')}>
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
                <View style={{ marginTop: 20 }} /> 
                <View style={styles.categoryContainer}>
                  <View style={styles.categoryTextContainer}>
                    <Text style={styles.categoryText}>All Categories</Text>
                    <View style={styles.categoryNavContainer}>
                        <TouchableOpacity style={styles.categorySubNavContainer} onPress={()=> router.push('/categories/categoriesList')}>
                          <Text style={styles.categoryNavText}>See All</Text>
                          <Image source={require('@/assets/icons/Vector(1).png')} style={{marginTop: 4}}/>
                        </TouchableOpacity>
                    </View>
                  </View>
                  <View style={{ marginTop: 20 }} /> 
                  <View style={styles.categorys}>
                  <FlatList
                    data={cat.category}
                    renderItem={({ item }) => <CategoryList category={item} />}
                    keyExtractor={(item) => item._id.toString()}
                    horizontal={true} // This makes it scroll sideways
                    showsHorizontalScrollIndicator={false}
                    // ItemSeparatorComponent={() => <View style={{ width: 50 }}/>}
                   />

                  </View>
                </View>
                <View style={{ marginTop: 20 }} /> 
                <View style={styles.categoryContainer}>
                  <View style={styles.categoryTextContainer}>
                    <Text style={styles.categoryText}>Open Restaurants</Text>
                    <View style={styles.categoryNavContainer}>
                        <TouchableOpacity style={styles.categorySubNavContainer} onPress={()=> router.push('/categories/categoriesList')}>
                          <Text style={styles.categoryNavText}>See All</Text>
                          <Image source={require('@/assets/icons/Vector(1).png')} style={{marginTop: 4}}/>
                        </TouchableOpacity>
                    </View>
                  </View>
                  <View style={{ marginTop: 20 }} /> 
                  <View style={styles.categorys}>
                  <FlatList
                    data={resturants.resturant}
                    renderItem={({ item }) => <Resturant resturant={item} />}
                    keyExtractor={(item) => item._id.toString()}
                    // ItemSeparatorComponent={() => <View style={{ width: 50 }}/>}
                   />

                  </View>
                </View>
              </View>
          </ScrollView>
        </SafeAreaView>
    </Layout>
  )
}
export default Home

const styles = StyleSheet.create({
      nav: {
        // flex: 1,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between'
      },
      navbar: {
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
      categoryContainer: {
        width: '100%'
      },
      categoryTextContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
      },
      categoryNavContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingTop: spacing.xs
      },
      categorySubNavContainer: {
        flexDirection: 'row',
        gap: spacing.md,
      },
      categoryNavText: {
        color: Colors.light.text,
        fontSize: fontSize.md
      },
      categoryText: {
        justifyContent: 'flex-start',
        fontSize: fontSize.lg,
        color: Colors.light.textBold,
      },
      categorys: {
        paddingHorizontal: spacing.md,
      },
      AndroidSafeArea: {
          flex: 1,
          paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
        },
})