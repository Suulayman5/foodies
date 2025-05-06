import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { fontSize, spacing } from '@/constants/Dimentions'
import { Colors } from '@/constants/Colors'

interface Category {
  id: string;
  imageUrl: string;
  name: string;
  minPrice: string;
}

const CategoryList = ({ category }: { category: Category }) => {
  return (
    <Link href={`/Category/${category.id}`} asChild>
      <TouchableOpacity style={styles.wrapper}>
        <View style={styles.card}>
          {/* Top Image */}
          <View style={styles.imageWrapper}>
            <Image source={{ uri: category.imageUrl }} style={styles.image} />
          </View>

          {/* Bottom Card Content */}
          <View style={styles.content}>
            <Text style={styles.title}>{category.name}</Text>
            <View style={styles.footer}>
              <Text style={styles.starting}>Starting</Text>
              <Text style={styles.price}>${category.minPrice}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </Link>
  )
}

export default CategoryList

const styles = StyleSheet.create({
  wrapper: {
    marginRight: 20,
  },
  card: {
    alignItems: 'center',
    width: 140,
  },
  imageWrapper: {
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: 'hidden',
    marginBottom: -20, // overlap with card
    zIndex: 2,
    backgroundColor: '#fff',
    elevation: 2,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  content: {
    backgroundColor: '#fff',
    width: '100%',
    borderRadius: 24,
    paddingVertical: 16,
    paddingHorizontal: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#222',
    marginBottom: 8,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  starting: {
    fontSize: 14,
    color: '#666',
  },
  price: {
    fontSize: 14,
    color: '#222',
    fontWeight: '500',
  },
})
