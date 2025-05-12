import {
    FlatList,
    Image,
    Platform,
    SafeAreaView,
    StatusBar,
    Text,
    View,
    TouchableOpacity,
    StyleSheet,
    ScrollView
  } from 'react-native';
  import React from 'react';
  import { applyStyles, spacing } from '@/assets/styles';
  import Layout from '@/components/Layout';
  import { useLocalSearchParams, useRouter } from 'expo-router';
  import { useQuery } from '@tanstack/react-query';
  import { getResturantById } from '@/api/fetch';
  import { Entypo } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';
import { fontSize } from '@/constants/Dimentions';
import { useState } from 'react';

  const Resturants = () => {
    
    const { id } = useLocalSearchParams();
    const { data } = useQuery({
      queryKey: ['resturantById', id],
      queryFn: () => getResturantById({ resturantId: Array.isArray(id) ? id[0] : id! }),
      enabled: !!id,
    });
  
    const resturant = data?.resturant ?? {};
    const items = resturant?.items ?? [];
    console.log('items resturant======>>>>>>>',items)
    const router = useRouter()
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

// Filtered items based on selected category
const filteredItems = selectedCategory
  ? items.filter(item => item.category === selectedCategory)
  : items;

    return (
      <SafeAreaView
        style={applyStyles('bg-white', {
          flex: 1,
          paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        })}
      >
        <ScrollView>
            <View style={applyStyles('flex-1 ')}>
            {/* Header Image with Icons */}
            <View style={applyStyles('relative')}>
                <Image
                source={{ uri: resturant?.imageUrl }}
                style={applyStyles('bg-gray-300', {
                    width: '100%',
                    height: 321,
                    borderRadius: 24,
                })}
                resizeMode="cover"
                />
                <TouchableOpacity style={applyStyles('absolute left-14 top-4 mt-40 p-2 rounded-full')} onPress={()=> router.back()}>
                <Image source={require('@/assets/icons/Back.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={applyStyles('absolute right-14 top-4 mt-40 bg-shades-gray-100 p-12 rounded-full')}>
                <Entypo name="dots-three-horizontal" size={20} />
                </TouchableOpacity>
            </View>
    
            {/* Restaurant Info */}
            <View style={applyStyles('px-20 mt-4')}>
            <View style={{ ...applyStyles('flex-row my-20  items-center'), }}>
                <View style={applyStyles('flex-row items-center pr-28')}>
                <Image source={require('@/assets/icons/Star.png')} style={applyStyles('mr-4',)} />
                <Text style={{ ...applyStyles('text-base'), color: Colors.light.titleText, fontWeight: 'bold' }}>3.7</Text>
                </View>

                <View style={applyStyles('flex-row items-center pr-28')}>
                <Image source={require('@/assets/icons/Delivery.png')} style={applyStyles('mr-8',)} />
                <Text style={{ ...applyStyles('text-sm'), color: Colors.light.titleText }}>Free</Text>
                </View>

                <View style={applyStyles('flex-row items-center pr-10')}>
                <Image source={require('@/assets/icons/Clock.png')} style={applyStyles('mr-8',)} />
                <Text style={{ ...applyStyles('text-sm'), color: Colors.light.titleText }}>20 min</Text>
                </View>
            </View>
                <Text style={applyStyles('text-xl text-titleText font-bold')}>{resturant?.name}</Text>
                <Text style={applyStyles('text-sm text-placeholderText mt-10')}>
                {resturant?.details}
                </Text>

    
            {/* Category Tabs (mocked) */}
            <View style={applyStyles('flex-row gap-2 p-5 mt-4')}>
                {resturant?.category?.map((cat) => (
                    <TouchableOpacity
                    key={cat._id}
                    onPress={() => setSelectedCategory(cat._id)} // or cat._id if your item links by _id
                    style={applyStyles(
                        selectedCategory === cat._id ? 'bg-buttonBackground text-shades-gray-300' : 'bg-gray-100',
                        'border-1 mt-18 border-shades-gray-300',
                        {
                        paddingVertical: 10,
                        paddingHorizontal: 14,
                        borderRadius: 20,
                        marginRight: 10,
                        }
                    )}
                    >
                    <Text style={applyStyles('text-titleText')}>
                        {cat.name}
                    </Text>
                    </TouchableOpacity>
                ))}
            </View>

                    
            {/* Food List */}
            <FlatList
                data={filteredItems}
                contentContainerStyle={applyStyles('px-5 pt-16 pb-10')}
                ListEmptyComponent={() => (
                <Text style={applyStyles('text-center text-gray-400 mt-10')}>No menu items found</Text>
                )}
                renderItem={({ item }) => (
                    <View
                    style={applyStyles('bg-white rounded-2xl p-2 mb-4 flex-col', {
                        shadowColor: '#000',
                        shadowOpacity: 0.05,
                        shadowOffset: { width: 0, height: 2 },
                        shadowRadius: 6,
                        elevation: 3,
                        width: 153,
                        height: 174
                    })}
                    >
                        {/* Image */}
                        <View
                        style={{
                            ...applyStyles('bg-shades-gray-200 rounded-xl mb-2 justify-center items-center'),
                            width: 114,
                            height: 74,
                            overflow: 'hidden',
                        }}
                        >
                        <Image
                            source={{ uri: item.imageUrl }}
                            style={{
                            width: '100%',
                            height: '100%',
                            resizeMode: 'cover',
                            }}
                        />
                        </View>
                    {/* Name */}
                    <Text style={applyStyles('text-base font-semibold mb-1 text-gray-900')}>
                        {item.name}
                    </Text>
                
                    {/* Subtitle */}
                    <Text style={applyStyles('text-sm text-gray-500 mb-1')}>
                        {resturant?.name || 'Cafecafachino'}
                    </Text>
                
                    {/* Bottom Row: Price + Button */}
                    <View style={applyStyles('flex-row justify-between items-center mt-1')}>
                        <Text style={applyStyles('text-base font-bold text-gray-900')}>
                        ₦ {item.price}
                        </Text>
                        <TouchableOpacity style={applyStyles('bg-orange-500 rounded-full p-2')}>
                        <Image
                            source={require('@/assets/icons/Group2513.png')}
                        />
                        </TouchableOpacity>
                    </View>
                    </View>
                )}
                numColumns={2}
                keyExtractor={(item) => item._id?.toString() ?? Math.random().toString()}
            />
            </View>
            </View>
        </ScrollView>
      </SafeAreaView>
    );
  };
  
  export default Resturants;

  const styles = StyleSheet.create({
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
  
  