import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Platform, View } from 'react-native';
import { BlurView } from 'expo-blur';
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome,
  AntDesign,
  MaterialIcons,
} from '@expo/vector-icons';

import { Colors } from '@/constants/Colors'; // adjust if not using `@` alias
import HomeScreen from '@/screens/tabs/index';
import CommunityScreen from '@/screens/tabs/community';
import FavoritesScreen from '@/screens/tabs/favorites';
import UserScreen from '@/screens/tabs/user';
import LoginScreen from '@/screens/auth/login';
import { useAuth } from '@/context/AuthProvider'; // make sure your auth context is accessible

const Tab = createBottomTabNavigator();

const BottomTabsNavigator = () => {
  const { isLogged } = useAuth();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.light.blue500,
        tabBarInactiveTintColor: '#000',
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute',
            borderTopWidth: 0,
            backgroundColor: 'transparent',
            elevation: 0,
          },
          android: {
            backgroundColor: 'white',
          },
        }),
        tabBarBackground: () => (
          <BlurView
            intensity={50}
            tint="light"
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              borderTopLeftRadius: 24,
              borderTopRightRadius: 24,
              overflow: 'hidden',
            }}
          />
        ),
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Ionicons name="home-outline" size={28} color={color} />,
        }}
      />
      <Tab.Screen
        name="Community"
        component={CommunityScreen}
        options={{
          title: 'Community',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="search-web" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          title: 'Favorites',
          tabBarIcon: ({ color }) => <FontAwesome name="bookmark-o" size={28} color={color} />,
        }}
      />
      <Tab.Screen
        name="User"
        component={isLogged ? UserScreen : LoginScreen}
        options={{
          title: isLogged ? 'Account' : 'Login',
          tabBarIcon: ({ color }) =>
            isLogged ? (
              <AntDesign name="user" size={28} color={color} />
            ) : (
              <MaterialIcons name="login" size={28} color={color} />
            ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabsNavigator;
