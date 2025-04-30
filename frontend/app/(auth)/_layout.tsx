import { Stack } from "expo-router";

import { useColorScheme } from "@/hooks/useColorScheme";
import { StatusBar } from "expo-status-bar";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <>
      <Stack>
        <Stack.Screen
          name="login"
          options={{
            title: "Login",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="register"
          options={{
            title: "register",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="reset-password/email"
          options={{
            title: "Fill email to reset password",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="reset-password/verify"
          options={{
            title: "Verity Code",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="reset-password/update-password"
          options={{
            title: "Change Password",
            headerShown: false,
          }}
        />
      </Stack>
      <StatusBar backgroundColor="#161622" style="light" />
    </>
  );
}
