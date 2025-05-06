import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import Button from '@/components/Button';
import { fontSize, spacing } from '@/constants/Dimentions';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import Otp from '@/components/Otp';
import { Colors } from '@/constants/Colors';
import { useMutation } from '@tanstack/react-query';
import Toast from 'react-native-toast-message';
import { useAuthStore } from '@/api/AuthStore';

const verifyOtpSchema = Yup.object().shape({
  otp: Yup.string()
    .matches(/^\d{6}$/, 'OTP must be a 6-digit number')
    .required('OTP is required'),
});

const VerifyOtp = () => {
  const router = useRouter();

const {verifyEmail, isLoading} = useAuthStore()

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
              <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
                <Ionicons name="chevron-back" size={24} color="#000" />
              </TouchableOpacity>
              <Text style={styles.header}>Verify OTP</Text>
              <Text style={styles.subHeader}>Please input your OTP</Text>
            </View>

            {/* White Form Section */}
            <View style={styles.formSection}>
              <Formik
                initialValues={{ otp: '' }}
                validationSchema={verifyOtpSchema}
                onSubmit={async (values) =>{
                  try {
                    await verifyEmail(values.otp)
                    router.push('/Home')
                  } catch (error) {
                    console.log('error verifying otp =======>>>>>>>', error)
                  }
                }}
              >
                {({ handleChange, handleSubmit, values, errors, touched }) => (
                  <View style={styles.form}>
                    <View style={styles.otpHeader}>
                      <Text style={styles.otpText}>CODE</Text>
                      <View style={styles.resendContainer}>
                        <TouchableOpacity style={styles.resendFlex}>
                          <Text style={styles.resend}>Resend</Text>
                          <Text> in.</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                    <View style={{ marginTop: 20 }} />
                    <Otp onChange={handleChange('otp')} />
                      {touched.otp && errors.otp && <Text style={styles.error}>{errors.otp}</Text>}
                    <View style={styles.buttonWrapper}>
                      <Button title="VERIFY" onPress={handleSubmit} loading={isLoading} />
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

export default VerifyOtp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0E0D1B',
  },
  topSection: {
    paddingTop: 60,
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
  error: {
    color: 'red',
    fontSize: 12,
    marginBottom: spacing.sm,
  },
  buttonWrapper: {
    marginTop: 30,
  },
  otpHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  otpText: {
    justifyContent: 'flex-start',
    color: Colors.light.text,
  },
  resendContainer: {
    justifyContent: 'flex-end',
  },
  resend: {
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
  resendFlex: {
    flexDirection: 'row',
  },
});
