import { Stack } from "expo-router";

import { useColorScheme } from "@/hooks/useColorScheme";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function TabLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack>
        <Stack.Screen
          name="venue-detail"
          options={{
            title: "Venue Detail",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="venue-booking"
          options={{
            title: "Venue Booking",
            headerShown: false,
          }}
        />
      </Stack>
      <StatusBar backgroundColor="#fff" style="dark" />
    </GestureHandlerRootView>
  );
}
