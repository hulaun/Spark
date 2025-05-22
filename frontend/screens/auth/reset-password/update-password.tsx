import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, TextInput, TouchableOpacity, Image, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/navigation/RootNavigator';

export default function SavePasswordScreen() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const router = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 bg-transparent">
        <LinearGradient
          colors={[Colors.light.blue900, Colors.light.blue700]}
          className="relative flex-1">
          <View className="flex-1 px-6 pt-4">
            {/* Header */}
            <View className="mb-8 flex-row items-center">
              <TouchableOpacity>
                <Ionicons name="arrow-back" size={24} color="white" />
              </TouchableOpacity>
              <Text className="ml-4 text-xl font-bold text-white">Save Password</Text>
            </View>

            {/* Instruction Text */}
            <Text className="mb-8 text-white">Please enter a new password for your account.</Text>

            {/* Password Input */}
            <View className="mb-4 flex-row items-center rounded-lg border border-white px-3">
              <MaterialCommunityIcons name="key" size={20} color="white" />
              <TextInput
                placeholder="New Password"
                placeholderTextColor="white"
                secureTextEntry={!showPassword}
                className="ml-3 h-14 flex-1 text-white"
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <Ionicons name={showPassword ? 'eye' : 'eye-off'} size={20} color="white" />
              </TouchableOpacity>
            </View>

            {/* Confirm Password Input */}
            <View className="mb-8 flex-row items-center rounded-lg border border-white px-3">
              <MaterialCommunityIcons name="key" size={20} color="white" />
              <TextInput
                placeholder="Confirm Password"
                placeholderTextColor="white"
                secureTextEntry={!showConfirmPassword}
                className="ml-3 h-14 flex-1 text-white"
              />
              <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
                <Ionicons name={showConfirmPassword ? 'eye' : 'eye-off'} size={20} color="white" />
              </TouchableOpacity>
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
                  onPress={() => router.replace('SavePassword')}>
                  <Text className="text-lg font-bold text-white">Save Password</Text>
                </Pressable>
              </LinearGradient>
            </View>
          </View>
        </LinearGradient>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
