import { KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import Button from '@/components/Button';
import TextInput from '@/components/TextInput';
import { fontSize, spacing } from '@/constants/Dimentions';
import { Colors } from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';


const signinSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().required('Password is required').min(8, 'Password must be at least 8 characters long'),
});

const Signin = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#0E0D1B' }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.container}>
            {/* Top Header Section */}
            <View style={styles.topSection}>
              <TouchableOpacity style={styles.backButton}>
                <Ionicons name="chevron-back" size={24} color="#000" />
              </TouchableOpacity>
              <Text style={styles.header}>Log In</Text>
              <Text style={styles.subHeader}>Please sign in to your existing account</Text>
            </View>

            {/* White Form Section */}
            <View style={styles.formSection}>
              <Formik
                initialValues={{ email: '', password: '',  }}
                validationSchema={signinSchema}
                onSubmit={(values) => console.log(values)}
              >
                {({ handleChange, handleSubmit, values, errors, touched }) => (
                  <View style={styles.form}>
                    {/* <View>
                      <Text style={styles.label}>NAME</Text>
                      <TextInput
                        onChangeText={handleChange('name')}
                        value={values.name}
                        placeholder="John Doe"
                      />
                      {touched.name && errors.name && <Text style={styles.error}>{errors.name}</Text>}
                    </View> */}
                    <View style={{ marginTop: 20 }} />
                    <View>
                      <Text style={styles.label}>EMAIL</Text>
                      <TextInput
                        onChangeText={handleChange('email')}
                        value={values.email}
                        placeholder="example@gmail.com"
                      />
                      {touched.email && errors.email && <Text style={styles.error}>{errors.email}</Text>}
                    </View>
                    <View style={{ marginTop: 20 }} />
                    <View>
                      <Text style={styles.label}>PASSWORD</Text>
                      <TextInput
                        onChangeText={handleChange('password')}
                        value={values.password}
                        placeholder="* * * * * * * * * * * *"
                        secureTextEntry
                      />
                      {touched.password && errors.password && <Text style={styles.error}>{errors.password}</Text>}
                    </View>
                    <View style={{ marginTop:10 }} />
                    <View>
                      <View></View>
                      <TouchableOpacity onPress={() => router.push('/(auth)/VerifyOtp')}>
                        <Text style={styles.forgot}>Forgot Password</Text>
                      </TouchableOpacity>
                    </View>
                    {/* <View style={{ marginTop: 20 }} /> */}
                    <View style={styles.buttonWrapper}>
                      <Button title="SIGN UP" onPress={handleSubmit} disabled={!values.email || !values.password || Object.keys(errors).length > 0}/>
                    </View>
                  </View>
                )}
              </Formik>
              <View style={styles.navigate}>
                <Text style={styles.navigateText}>Don't have an account? </Text>
                <TouchableOpacity onPress={() => router.push('/(auth)/Signup')}>
                  <Text style={styles.push}> SIGN IN</Text>
                </TouchableOpacity>
                </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Signin;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0E0D1B',
  },
  topSection: {
    paddingTop: 20,
    paddingHorizontal: 20,
    paddingBottom: 40,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    backgroundColor: '#0E0D1B',
  },
  backButton: {
    backgroundColor: 'white',
    borderRadius: 30,
    padding: 10,
    width: 45,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  header: {
    fontSize: fontSize.xxl,
    color: 'white',
    fontWeight: '700',
    textAlign: 'center',
    marginTop: spacing.md,
  },
  subHeader: {
    fontSize: fontSize.md,
    color: '#C0C0C0',
    marginTop: 10,
    textAlign: 'center',
  },
  formSection: {
    backgroundColor: 'white',
    flexGrow: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingBottom: spacing.lg,
  },
  form: {
    padding: spacing.lg,
    paddingTop: spacing.xl,
  },
  label: {
    fontSize: 12,
    fontWeight: '600',
    marginBottom: 6,
    color: '#1B1B1B',
  },
  error: {
    color: 'red',
    fontSize: 12,
    marginBottom: spacing.sm,
  },
  buttonWrapper: {
    marginTop: 30,
  },
  forgot: {
    fontSize: fontSize.md,
    color: Colors.light.buttonBackground,
    textAlign: 'right',
  },
  navigate: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  navigateText: {
    fontSize: fontSize.md,
    color: Colors.light.text,
    textAlign: 'center',
  },
  push: {
    fontSize: fontSize.md,
    color: Colors.light.buttonBackground,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
