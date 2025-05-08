import { ActivityIndicator, FlatList, Platform, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CategoryList from './CategoryList'
import { useQuery } from '@tanstack/react-query'
import { getCategories } from '@/api/fetch'
import { applyStyles } from '@/assets/styles'
import { spacing } from '@/constants/Dimentions'

const categoriesList = () => {
    const {data: categories, isLoading} = useQuery({queryKey:['category'], queryFn:getCategories})
    const cat = categories ?? []
    {isLoading && <View style={applyStyles('flex-1 justify-center item-center')}><ActivityIndicator/></View>}
    console.log('data=====>>>>>>', cat)
  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
        <View style={styles.container}>
        <Text>categoriesList</Text>
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
      }
})