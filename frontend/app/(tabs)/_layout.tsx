import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

import { IconSymbol } from "@/components/ui/IconSymbol";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { BlurView } from "expo-blur";
import {
  AntDesign,
  FontAwesome,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import Svg, { Path } from "react-native-svg";
import { useAuth } from "@/context/AuthProvider";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const { isLogged } = useAuth();
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.light.blue500,
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
            <Ionicons size={28} name="home-outline" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="community"
        options={{
          title: "Community",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="search-web" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          title: "Favorites",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="bookmark-o" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="user"
        options={{
          title: isLogged ? "Account" : "Login",
          tabBarIcon: ({ color }) =>
            isLogged ? (
              <AntDesign name="user" size={28} color={color} />
            ) : (
              <MaterialIcons size={28} name="login" color={color} />
            ),
        }}
      />
    </Tabs>
  );
}
