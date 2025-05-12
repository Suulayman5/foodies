import { Stack, Redirect } from 'expo-router';
import { useAuthStore } from '@/api/AuthStore';

export default function DashboardLayout() {
  const { isAuthenticated, user, isCheckingAuth } = useAuthStore();

  if (isCheckingAuth) return null;

  if (!isAuthenticated) {
    return <Redirect href="/Signin" />;
  }

  if (!user?.isVerified) {
    return <Redirect href="/VerifyOtp" />;
  }

  return <Stack screenOptions={{ headerShown: false }} />;
}
