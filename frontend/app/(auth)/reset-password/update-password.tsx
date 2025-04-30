import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Pressable,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";

export default function SavePasswordScreen() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const router = useRouter();

  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 bg-transparent">
        <LinearGradient
          colors={[Colors.blue900, Colors.blue700]}
          className="flex-1 relative"
        >
          <View className="flex-1 px-6 pt-4">
            {/* Header */}
            <View className="flex-row items-center mb-8">
              <TouchableOpacity>
                <Ionicons name="arrow-back" size={24} color="white" />
              </TouchableOpacity>
              <Text className="text-white text-xl font-bold ml-4">
                Save Password
              </Text>
            </View>

            {/* Instruction Text */}
            <Text className="text-white mb-8">
              Please enter a new password for your account.
            </Text>

            {/* Password Input */}
            <View className="flex-row items-center border border-white rounded-lg mb-4 px-3">
              <MaterialCommunityIcons name="key" size={20} color="white" />
              <TextInput
                placeholder="New Password"
                placeholderTextColor="white"
                secureTextEntry={!showPassword}
                className="flex-1 h-14 ml-3 text-white"
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <Ionicons
                  name={showPassword ? "eye" : "eye-off"}
                  size={20}
                  color="white"
                />
              </TouchableOpacity>
            </View>

            {/* Confirm Password Input */}
            <View className="flex-row items-center border border-white rounded-lg mb-8 px-3">
              <MaterialCommunityIcons name="key" size={20} color="white" />
              <TextInput
                placeholder="Confirm Password"
                placeholderTextColor="white"
                secureTextEntry={!showConfirmPassword}
                className="flex-1 h-14 ml-3 text-white"
              />
              <TouchableOpacity
                onPress={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                <Ionicons
                  name={showConfirmPassword ? "eye" : "eye-off"}
                  size={20}
                  color="white"
                />
              </TouchableOpacity>
            </View>

            <View className="justify-center items-center">
              <LinearGradient
                colors={[Colors.blue700, Colors.blue300]}
                className="w-full"
                style={{
                  borderRadius: 10,
                }}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
              >
                <Pressable
                  className="py-3 items-center"
                  onPress={() =>
                    router.replace("/(auth)/reset-password/verify")
                  }
                >
                  <Text className="text-white font-bold text-lg">
                    Save Password
                  </Text>
                </Pressable>
              </LinearGradient>
            </View>
          </View>
        </LinearGradient>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
