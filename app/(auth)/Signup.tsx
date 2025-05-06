import { KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import Button from '@/components/Button';
import TextInput from '@/components/TextInput';
import { fontSize, spacing } from '@/constants/Dimentions';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useAuthStore } from '@/api/AuthStore';

const signupSchema = Yup.object().shape({
  name: Yup.string().required('Name is required').min(2, 'Name must be at least 2 characters long'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().required('Password is required').min(8, 'Password must be at least 8 characters long'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), undefined], 'Passwords must match')
    .required('Confirm Password is required'),
});
const Signup = () => {
  const { signup, error, isLoading } = useAuthStore();

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
              <TouchableOpacity style={styles.backButton} onPress={() => router.push('/Signin')}>
                <Ionicons name="chevron-back" size={24} color="#000" />
              </TouchableOpacity>
              <Text style={styles.header}>Sign Up</Text>
              <Text style={styles.subHeader}>Please sign up to get started</Text>
            </View>

            {/* White Form Section */}
            <View style={styles.formSection}>
            <Formik
              initialValues={{ name: '', email: '', password: '', confirmPassword: '' }}
              validationSchema={signupSchema}
              onSubmit={(values) => {
                signup(values.email, values.password, values.name,);
                console.log('values=========>>>>>', values);
              }}
            >
                {({ handleChange, handleSubmit, values, errors, touched }) => (
                  <View style={styles.form}>
                    <View>
                      <Text style={styles.label}>NAME</Text>
                      <TextInput
                        onChangeText={handleChange('name')}
                        value={values.name}
                        placeholder="Itadori Yuji"
                      />
                      {touched.name && errors.name && <Text style={styles.error}>{errors.name}</Text>}
                    </View>
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
                        placeholder="* * * * * * * * *"
                        secureTextEntry
                      />
                      {touched.password && errors.password && <Text style={styles.error}>{errors.password}</Text>}
                    </View>
                    <View style={{ marginTop: 20 }} />
                    <View>
                      <Text style={styles.label}>RE-TYPE PASSWORD</Text>
                      <TextInput
                        onChangeText={handleChange('confirmPassword')}
                        value={values.confirmPassword}
                        placeholder="* * * * * * * * *"
                        secureTextEntry
                      />
                      {touched.confirmPassword && errors.confirmPassword && (
                        <Text style={styles.error}>{errors.confirmPassword}</Text>
                      )}
                    </View>
                    {/* <View style={{ marginTop: 20 }} /> */}
                    <View style={styles.buttonWrapper}>
                      <Button title="SIGN UP" loading={isLoading} onPress={handleSubmit} disabled={!values.name || !values.email || !values.password || !values.confirmPassword || Object.keys(errors).length > 0}/>
                    </View>
                  </View>
                )}
              </Formik>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Signup;
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
    // paddingBottom: spacing.md,
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
});
