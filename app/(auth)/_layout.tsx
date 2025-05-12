import { Stack, Redirect } from 'expo-router';
import { useAuthStore } from '@/api/AuthStore';

export default function AuthLayout() {
  const { isAuthenticated, user, isCheckingAuth } = useAuthStore();

  if (isCheckingAuth) return null;

  if (isAuthenticated && user?.isVerified) {
    return <Redirect href="/Home" />;
  }

  return <Stack screenOptions={{ headerShown: false }} />;
}
