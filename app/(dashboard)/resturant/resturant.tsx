import { Image, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import { applyStyles } from '@/assets/styles';
import { Colors } from '@/constants/Colors';

interface Resturant {
  _id: string;
  imageUrl: string;
  name: string;
  category: string[];
}

const Resturant = ({ resturant }: { resturant: Resturant }) => {
  return (
    <Link href={`/resturant/${resturant._id}`} asChild>
      <TouchableOpacity style={applyStyles('w-full mb-6 overflow-hidden')}>
        {/* Top Image */}
        <Image
          source={{ uri: resturant.imageUrl }}
          style={applyStyles('', {
            width: '100%',
            height: 140,
            borderRadius: 12,
            backgroundColor: '#98A8B8',
          })}
          resizeMode="cover"
        />

        {/* Bottom Content */}
        <View style={applyStyles('p-4')}>
          <Text style={{ ...applyStyles('text-xl py-2 font-semibold text-titleText'), color: Colors.light.titleText }}>{resturant.name}</Text>
          <Text style={{ ...applyStyles(''), color: Colors.light.placeholderText }}>{resturant.category.map(cat => cat.name).join(' - ')}</Text>

          <View style={{ ...applyStyles('flex-row gap-4 my-8 items-center'), }}>
            <View style={applyStyles('flex-row items-center pr-20')}>
              <Image source={require('@/assets/icons/Star.png')} style={applyStyles('mr-4',)} />
              <Text style={{ ...applyStyles('text-base'), color: Colors.light.titleText, fontWeight: 'bold' }}>3.7</Text>
            </View>

            <View style={applyStyles('flex-row items-center pr-20')}>
              <Image source={require('@/assets/icons/Delivery.png')} style={applyStyles('mr-8',)} />
              <Text style={{ ...applyStyles('text-sm'), color: Colors.light.titleText }}>Free</Text>
            </View>

            <View style={applyStyles('flex-row items-center pr-10')}>
              <Image source={require('@/assets/icons/Clock.png')} style={applyStyles('mr-8',)} />
              <Text style={{ ...applyStyles('text-sm'), color: Colors.light.titleText }}>20 min</Text>
            </View>
          </View>
        </View>
     <View style={{marginBottom: 30}}/>
      </TouchableOpacity>
    </Link>
  );
};

export default Resturant;
