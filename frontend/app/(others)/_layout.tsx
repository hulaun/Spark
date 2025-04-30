import { Stack } from "expo-router";

import { useColorScheme } from "@/hooks/useColorScheme";
import { StatusBar } from "expo-status-bar";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <>
      <Stack>
        <Stack.Screen
          name="splash"
          options={{
            title: "Splash",
            headerShown: false,
          }}
        />
      </Stack>
    </>
  );
}
