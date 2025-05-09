import { ActivityIndicator,Image, FlatList, Platform, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import CategoryList from './CategoryList'
import { useQuery } from '@tanstack/react-query'
import { getCategories } from '@/api/fetch'
import { applyStyles } from '@/assets/styles'
import { spacing } from '@/constants/Dimentions'
import { useRouter } from 'expo-router'
import { Colors } from '@/constants/Colors'
import Layout from '@/components/Layout'
import { scaledSize } from '@/assets/style-guide/typography'

const categoriesList = () => {
    const {data: categories, isLoading} = useQuery({queryKey:['category'], queryFn:getCategories})
    const cat = categories ?? []
    {isLoading && <View style={applyStyles('flex-1 justify-center item-center')}><ActivityIndicator/></View>}
    console.log('data=====>>>>>>', cat)
    const router = useRouter()
    
  return (
    <Layout style={applyStyles('',{paddingTop: 10,paddingHorizontal: scaledSize(16)})}
    touchable={false}>
    <SafeAreaView style={styles.AndroidSafeArea}>
            <View style={applyStyles('flex-row justify-between items-center')}>
                <View style={applyStyles('flex-row justify-between items-center')}>
                    <TouchableOpacity style={styles.backButton} onPress={()=> router.back()}>
                        <Image source={require('@/assets/icons/Back(1).png')}/>
                    </TouchableOpacity>
                    {/* <View style={applyStyles('flex-row ml-24 justify-between p-12 rounded-xl border-1 border-shades-gray-300')}>
                        <Text>BURGER</Text>
                        <Image source={require('@/assets/icons/Polygon(11).png')} style={applyStyles('mt-8 ml-10')}/>
                    </View> */}
                </View>
                <View style={applyStyles('flex-row ')}>
                    <View style={styles.searchButton}>
                        <Image source={require('@/assets/icons/Search.png')}/>
                    </View>
                    <Image source={require('@/assets/icons/Filter.png')} style={applyStyles('ml-14')}/>
                </View>
            </View>
        <View style={styles.container}>
            <Text style={applyStyles('my-10')}>categoriesList</Text>
            <View style={styles.list}>
                <FlatList
                    data={cat.category}
                    renderItem={({ item }) => <CategoryList category={item} />}
                    keyExtractor={(item) => item._id.toString()}
                    numColumns={2}
                    showsHorizontalScrollIndicator={false}
                    ItemSeparatorComponent={() => <View style={{ marginBottom: 20 }}/>}
                />
            </View>
        </View>
    </SafeAreaView>
    </Layout>
  )
}

export default categoriesList

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    AndroidSafeArea: {
        flex: 1,
        backgroundColor: "white",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
      },
      list: {
        flex: 1,
        paddingTop: spacing.lg,
      },
          backButton: {
            backgroundColor: Colors.light.backButton,
            borderRadius: 30,
            padding: 10,
            width: 45,
            height: 45,
            alignItems: 'center',
            justifyContent: 'center',
          },
          searchButton: {
            backgroundColor: 'black',
            color: 'white',
            borderRadius: 30,
            padding: 10,
            width: 45,
            height: 45,
            alignItems: 'center',
            justifyContent: 'center',
          },
})