import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { fontFamily } from '@/constants/Fonts';
import { fontSize, spacing } from '@/constants/Dimentions';
import Button from '@/components/Button';
import { Colors } from '@/constants/Colors';

const { height } = Dimensions.get('window');

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.topContent}>
          <Image
            source={require('@/assets/images/food-136461.png')}
            resizeMode="contain"
            style={styles.image}
          />
        </View>
        <View style={styles.overlay}>
        <TouchableOpacity style={styles.skipContainer}>
            <Text style={styles.skip} onPress={()=> router.push('/Home')}>SKIP</Text>
          </TouchableOpacity>
          <View style={styles.header}>
            <Text style={styles.headerText}>All your favorites</Text>
            <Text style={styles.subHeader}>Get all your loved foods in one once place,</Text>
            <Text style={styles.subHeader}>you just place the order we do the rest</Text>
          </View>
          <Button onPress={() => router.push('/(auth)/Signin')} title="Get Started" />
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    justifyContent: 'space-between',
  },
  topContent: {
    alignItems: 'center',
    justifyContent: 'center',
    height: height * 0.55,
  },
  image: {
    width: '90%',
    height: '80%',
    marginTop: spacing.xl,
    padding: spacing.lg,
  },
  overlay: {
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.xl * 1.5,
    alignItems: 'center',
  },
  header: {
    marginBottom: spacing.xl,
    alignItems: 'center',
  },
  headerText: {
    fontWeight: '900',
    fontSize: fontSize.xl,
    marginBottom: spacing.md,
    textAlign: 'center',
  },
  subHeader: {
    color: Colors.light.text,
    fontSize: fontSize.md,
    textAlign: 'center',
  },
  skipContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%', 
    paddingHorizontal: spacing.md,
  },
  skip: {
    marginTop: spacing.lg,
    color: Colors.light.buttonBackground,
    fontWeight: '500',
  },
});
