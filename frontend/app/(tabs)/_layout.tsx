import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

import { IconSymbol } from "@/components/ui/IconSymbol";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { BlurView } from "expo-blur";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.blue500,
        tabBarInactiveTintColor: "#000",
        headerShown: false,
        tabBarBackground: () => (
          <BlurView
            intensity={50}
            tint="light"
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              borderTopLeftRadius: 24,
              borderTopRightRadius: 24,
              overflow: "hidden",
            }}
          />
        ),
        tabBarStyle: Platform.select({
          ios: {
            position: "absolute",
            borderTopWidth: 0, // hide border if using blur
            backgroundColor: "transparent", // important for blur to show through
            elevation: 0,
          },
          android: {
            backgroundColor: "white",
          },
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="house.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="paperplane.fill" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
