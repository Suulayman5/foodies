import { StyleSheet,Image, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { applyStyles } from '@/assets/styles'


interface Resturant {
    _id: string;
    imageUrl: string;
    name: string;
    minPrice: string;
  }
const resturant = ({ resturant }: { resturant: Resturant }) => {
  return (
    <Link href={`/categories/${resturant._id}`} asChild>
      <TouchableOpacity style={applyStyles('')}>
        <View style={applyStyles('')}>
          {/* Top Image */}
          <View style={applyStyles('')}>
            <Image source={{ uri: resturant.imageUrl }} style={applyStyles('')} />
          </View>

          {/* Bottom Card Content */}
          <View style={applyStyles('')}>
            <Text style={applyStyles('')}>{resturant.name}</Text>
            <View style={applyStyles('')}>
              <Text style={applyStyles('')}>Starting</Text>
              <Text style={applyStyles('')}>₦ {resturant.minPrice}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </Link>
  )
}

export default resturant

const styles = StyleSheet.create({})