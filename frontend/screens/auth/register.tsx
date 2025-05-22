import {
  View,
  Text,
  TextInput,
  Pressable,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '@/constants/Colors';
import { useState } from 'react';
import User from '../tabs/user';
import UserSignUp from '@/components/ui/UserSignUp';
import ManagerSignUp from '@/components/ui/ManagerSignUp';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/navigation/RootNavigator';

export default function RegisterScreen() {
  const [role, setRole] = useState<'user' | 'manager'>('user');
  const router = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <SafeAreaView className="flex-1">
      <LinearGradient colors={[Colors.light.blue900, Colors.light.blue700]} className="flex-1">
        <View className="flex-1 justify-between pt-5">
          {/* Header */}
          <View className="mb-6 items-center">
            <Image
              source={require('@/assets/images/spark.png')}
              className="h-16 w-48"
              resizeMode="contain"
            />
          </View>

          {/* Booking Toggle */}
          <View className="items-center justify-center pb-6">
            <LinearGradient
              colors={[Colors.light.blue700, Colors.light.blue300]}
              className="w-72 flex-row items-center justify-between pl-4"
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={{ borderRadius: 50 }}>
              <Text className="text-2xl font-bold text-white">BOOKING NOW</Text>
              <View className="aspect-square h-14 rounded-full bg-[#FFF5D7]" />
            </LinearGradient>
          </View>

          {/* Role Switch */}
          <View className="flex-row justify-center">
            <TouchableOpacity
              onPress={() => setRole('user')}
              className={`rounded-l-full px-4 py-2 `}
              style={{
                backgroundColor: role === 'user' ? '#3B82F6' : '#1E3A8A',
              }}>
              <Text className="font-semibold text-white">User</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setRole('manager')}
              className={`rounded-r-full px-4 py-2`}
              style={{
                backgroundColor: role === 'manager' ? '#3B82F6' : '#1E3A8A',
              }}>
              <Text className="font-semibold text-white">Manager</Text>
            </TouchableOpacity>
          </View>

          {/* Bottom Card: fixed to 50% height */}
          <LinearGradient
            colors={[Colors.light.blue900, Colors.light.blue700]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            className="h-2/3">
            <View className="flex-1 rounded-s-3xl border border-b-0 border-cyan-500 px-6 py-4">
              <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
                <Text className="mb-2 text-xl font-bold text-white">Sign Up</Text>
                <Text className="mb-4 text-white">SPARK - Book Sports Fields Online</Text>

                {/* Inputs */}
                {role === 'user' ? <UserSignUp /> : <ManagerSignUp />}

                <View className="mt-4">
                  <Text className="text-center text-white">
                    Already have an account?{' '}
                    <Text
                      className="font-semibold text-blue-300"
                      onPress={() => router.replace('Login')}>
                      Log in
                    </Text>
                  </Text>
                </View>
              </ScrollView>
            </View>
          </LinearGradient>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}
