import { FlatList, Platform, SafeAreaView, StatusBar, StyleSheet, Text, Image, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { useQuery } from '@tanstack/react-query'
import { getCategoriesById } from '@/api/fetch'
import { applyStyles } from '@/assets/styles'
import { scaledSize } from '@/assets/style-guide/typography'
import Layout from '@/components/Layout'
import { Colors } from '@/constants/Colors'
import { fontSize, spacing } from '@/constants/Dimentions'

const Categories = () => {
  const {id} = useLocalSearchParams()
const {data} = useQuery({
  queryKey: ['categoryById', id],
  queryFn: () => getCategoriesById({ categoryId: Array.isArray(id) ? id[0] : id! }),
  enabled: !!id
})

const ham = data ?? []

const pan = ham.category?.items
console.log('names=====>>>>>>',pan)

const router = useRouter()
  return (
    <Layout style={applyStyles('',{paddingTop: 10,paddingHorizontal: scaledSize(16)})}
        touchable={false}>
      <SafeAreaView style={styles.AndroidSafeArea}>
        <View style={applyStyles('mt-8 w-full')}>
             <View style={applyStyles('flex-row justify-between items-center')}>
                <View style={applyStyles('flex-row justify-between items-center')}>
                    <TouchableOpacity style={styles.backButton} onPress={()=> router.back()}>
                      <Image source={require('@/assets/icons/Back(1).png')}/>
                    </TouchableOpacity>
                    <View style={applyStyles('flex-row ml-24 justify-between p-12 rounded-xl border-1 border-shades-gray-300')}>
                        <Text>BURGER</Text>
                        <Image source={require('@/assets/icons/Polygon(11).png')} style={applyStyles('mt-8 ml-10')}/>
                    </View>
              </View>
              <View style={applyStyles('flex-row ')}>
                    <View style={styles.searchButton}>
                      <Image source={require('@/assets/icons/Search.png')}/>
                    </View>
                    <Image source={require('@/assets/icons/Filter.png')} style={applyStyles('ml-14')}/>
                </View>
              </View>
          <TouchableOpacity style={applyStyles('w-full h-full pt-20')}>
          <FlatList
            data={pan}
            renderItem={({ item }) => (
                <TouchableOpacity style={applyStyles('mr-20 ml-10 items-center')}>
                  <View style={applyStyles('mt-18')}>
                    <View style={styles.card}>
                      {/* Top Image */}
                      <View style={styles.imageWrapper}>
                        <Image source={{ uri: item.imageUrl }} style={styles.image} />
                      </View>
            
                      <View style={styles.content}>
                        <Text style={styles.title}>{item.name}</Text>
                        <View style={styles.footer}>
                          <Text style={styles.price}>₦ {item.price}</Text>
                          <Text style={applyStyles('')}>
                            <Image source={require('@/assets/icons/Group2513.png')} style={applyStyles('ml-14')}/>
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
            )}
            numColumns={2}
            keyExtractor={(item) => item._id.toString()}
            ItemSeparatorComponent={() => <View style={{ marginBottom: 20, justifyContent: 'center', alignItems: 'center' }}/>}
            
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </Layout>
  )
}

export default Categories

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
  itemContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  AndroidSafeArea: {
      flex: 1,
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      alignItems: 'center',
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
    // wrapper: {
    //     marginRight: 20,
    //     alignItems: 'center',
    //   },
      card: {
        alignItems: 'center',
        height: 180,
        width: 160,
        justifyContent: 'flex-end',
      },
      imageWrapper: {
        width: 142,
        height: 84,
        borderRadius: 15,
        backgroundColor: '#98A8B8',
        elevation: 5,
        position: 'absolute',
        top: 0,
        zIndex: 2,
      },
      image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        borderRadius: 15,
      },
      content: {
        backgroundColor: '#fff',
        width: 160,
        height: 130,
        borderRadius: spacing.lg,
        paddingVertical: spacing.md,
        padding: 12,
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 2 },
        elevation: 8,
        flexDirection: 'column',
        zIndex: 1,
      },
      title: {
        fontSize: fontSize.lg,
        fontWeight: 'bold',
        color: Colors.light.textBold,
        marginBottom: spacing.sm,
        marginTop: 20,
        textAlign: 'left',
      },
      footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: spacing.md,
      },
      price: {
        fontSize: fontSize.md,
        color: Colors.light.textBold,
        fontWeight: 'bold',
      },
})