import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      {/* <Stack.Screen name="auth" options={{headerShown: false}} />; */}
      <Stack.Screen name="(auth)/Signin" options={{ headerShown: false }} />;
      <Stack.Screen name="(auth)/Signup" options={{ headerShown: false }} />;

    </Stack>
  );
}
