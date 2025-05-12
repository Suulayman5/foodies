import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { fontSize, spacing } from '@/constants/Dimentions'
import { Colors } from '@/constants/Colors'

interface Category {
  _id: string;
  imageUrl: string;
  name: string;
  minPrice: string;
}

const CategoryList = ({ category }: { category: Category }) => {
  return (
    <Link href={`/categories/${category._id}`} asChild>
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
              <Text style={styles.price}>₦ {category.minPrice}</Text>
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
    alignItems: 'center',
  },
  card: {
    alignItems: 'center',
    height: 190,
    justifyContent: 'flex-end',
  },
  imageWrapper: {
    width: 132,
    height: 120,
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
    width: 147,
    height: 144,
    borderRadius: spacing.lg,
    paddingVertical: spacing.md,
    padding: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
    flexDirection: 'column',
    zIndex: 1,
  },
  title: {
    fontSize: fontSize.md,
    fontWeight: 'bold',
    color: Colors.light.textBold,
    marginBottom: spacing.sm,
    marginTop: 60,
    textAlign: 'left',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: spacing.md,
  },
  starting: {
    fontSize: 14,
    color: Colors.light.text,
  },
  price: {
    fontSize: fontSize.md,
    color: Colors.light.textBold,
  },
});

