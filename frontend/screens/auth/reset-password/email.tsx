import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Pressable,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { Colors } from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '@/navigation/RootNavigator';

export default function EmailScreen() {
  const [email, setEmail] = useState('');
  const router = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 bg-transparent">
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <LinearGradient
            colors={[Colors.light.blue900, Colors.light.blue700]}
            className="relative flex-1">
            <View className="flex-1 px-6 pt-4">
              <View className="mb-8 flex-row items-center">
                <TouchableOpacity onPress={() => router.goBack()}>
                  <Ionicons name="arrow-back" size={24} color="white" />
                </TouchableOpacity>
                <Text className="ml-4 text-xl font-bold text-white">Enter Your Email</Text>
              </View>
              <Text className="mb-8 text-white">
                Please enter your email address to receive a verification code.
              </Text>
              <View className="mb-8 flex-row items-center rounded-lg border border-white px-3">
                <Ionicons name="mail-outline" size={20} color="white" />
                <TextInput
                  placeholder="Enter your email"
                  placeholderTextColor="white"
                  className="ml-3 h-14 flex-1 text-white"
                />
              </View>
              <View className="items-center justify-center">
                <LinearGradient
                  colors={[Colors.light.blue700, Colors.light.blue300]}
                  className="w-full"
                  style={{
                    borderRadius: 10,
                  }}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}>
                  <Pressable
                    className="items-center py-3"
                    onPress={() => router.replace('ForgotPassword')}>
                    <Text className="text-lg font-bold text-white">Send Verification Code</Text>
                  </Pressable>
                </LinearGradient>
              </View>
            </View>
          </LinearGradient>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
