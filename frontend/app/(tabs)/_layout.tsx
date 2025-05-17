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
        name="bookings"
        options={{
          title: "Bookings",
          tabBarIcon: ({ color }) => (
            <Svg width={28} height={28} viewBox="0 0 28 28" fill="none">
              <Path
                d="M17.875 1.83333H16.5V0.458333C16.5 0.205333 16.2947 0 16.0417 0C15.7887 0 15.5833 0.205333 15.5833 0.458333V1.83333H6.41667V0.458333C6.41667 0.205333 6.21133 0 5.95833 0C5.70533 0 5.5 0.205333 5.5 0.458333V1.83333H4.125C1.85075 1.83333 0 3.68408 0 5.95833V17.875C0 20.1493 1.85075 22 4.125 22H7.79167C8.04467 22 8.25 21.7947 8.25 21.5417C8.25 21.2887 8.04467 21.0833 7.79167 21.0833H4.125C2.35583 21.0833 0.916667 19.6442 0.916667 17.875V8.25H21.5417C21.7947 8.25 22 8.04467 22 7.79167V5.95833C22 3.68408 20.1493 1.83333 17.875 1.83333ZM21.0833 7.33333H0.916667V5.95833C0.916667 4.18917 2.35583 2.75 4.125 2.75H17.875C19.6442 2.75 21.0833 4.18917 21.0833 5.95833V7.33333ZM18.0877 10.7543L11.0229 17.8191C10.417 18.425 10.0833 19.2307 10.0833 20.0878V21.5417C10.0833 21.7947 10.2887 22 10.5417 22H11.9955C12.8526 22 13.6583 21.6663 14.2642 21.0604L21.329 13.9957C21.7617 13.563 22 12.9873 22 12.375C22 11.7627 21.7617 11.187 21.329 10.7543C20.4646 9.889 18.9521 9.889 18.0877 10.7543ZM20.68 13.3467L13.6152 20.4114C13.1826 20.8441 12.6069 21.0824 11.9946 21.0824H10.9991V20.0869C10.9991 19.4746 11.2374 18.8998 11.6701 18.4663L18.7348 11.4015C19.2537 10.8827 20.1602 10.8827 20.6791 11.4015C20.9385 11.6609 21.0815 12.0065 21.0815 12.3741C21.0815 12.7417 20.9394 13.0863 20.68 13.3467ZM4.58242 12.3741C4.58242 12.1211 4.78775 11.9157 5.04075 11.9157H13.2917C13.5447 11.9157 13.75 12.1211 13.75 12.3741C13.75 12.6271 13.5447 12.8324 13.2917 12.8324H5.04167C4.78867 12.8324 4.58242 12.6271 4.58242 12.3741ZM9.16575 16.9574C9.16575 17.2104 8.96042 17.4158 8.70742 17.4158H5.04167C4.78867 17.4158 4.58333 17.2104 4.58333 16.9574C4.58333 16.7044 4.78867 16.4991 5.04167 16.4991H8.70833C8.96133 16.4991 9.16667 16.7044 9.16667 16.9574H9.16575Z"
                fill={color}
              />
            </Svg>
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
