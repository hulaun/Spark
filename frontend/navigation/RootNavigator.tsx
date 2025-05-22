import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabsNavigator from './BottomTabsNavigator';
import LoginScreen from '@/screens/auth/login';
import RegisterScreen from '@/screens/auth/register';
import EmailScreen from '@/screens/auth/reset-password/email';
import SavePasswordScreen from '@/screens/auth/reset-password/update-password';
import ForgotPasswordScreen from '@/screens/auth/reset-password/verify';
import VenueBookingScreen from '@/screens/others/venue-booking';
import VenueDetailScreen from '@/screens/others/venue-detail';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AuthProvider from '@/context/AuthProvider';
import { useColorScheme } from 'react-native';
import { CustomDarkTheme, CustomLightTheme } from '@/constants/theme';

export type RootStackParamList = {
  Tabs: { screen?: keyof TabsParamList };
  Login: undefined;
  Register: undefined;
  ResetPassword: undefined;
  ForgotPassword: undefined;
  SavePassword: undefined;
  VenueBooking: undefined;
  VenueDetail: undefined;
};

export type TabsParamList = {
  Home: undefined;
  Community: undefined;
  Favorites: undefined;
  User: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  const colorScheme = useColorScheme();
  return (
    <SafeAreaProvider>
      <AuthProvider>
        <Stack.Navigator initialRouteName="Tabs" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Tabs" component={BottomTabsNavigator} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="ResetPassword" component={EmailScreen} />
          <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
          <Stack.Screen name="SavePassword" component={SavePasswordScreen} />
          <Stack.Screen name="VenueBooking" component={VenueBookingScreen} />
          <Stack.Screen name="VenueDetail" component={VenueDetailScreen} />
        </Stack.Navigator>
      </AuthProvider>
    </SafeAreaProvider>
  );
};

export default RootNavigator;
