// components/ProtectedRoute.tsx
// import { Redirect } from 'expo-router';
// import React, { useEffect, useState } from 'react';
// import { ActivityIndicator, View } from 'react-native';
// import { useAuthStore } from '@/api/AuthStore';

// export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
//   const { isAuthenticated, isCheckingAuth, checkAuth } = useAuthStore();
//   const [hasTriedAuth, setHasTriedAuth] = useState(false);

//   useEffect(() => {
//     const verifyAuth = async () => {
//       try {
//         await checkAuth();
//       } catch {
//         // handled in redirect below
//       } finally {
//         setHasTriedAuth(true);
//       }
//     };
//     verifyAuth();
//   }, []);

//   if (isCheckingAuth || !hasTriedAuth) {
//     return (
//       <View className="flex-1 justify-center items-center bg-white">
//         <ActivityIndicator size="large" />
//       </View>
//     );
//   }

//   if (!isAuthenticated) {
//     return <Redirect href="/(auth)/Signin" />;
//   }

//   return <>{children}</>;
// }
