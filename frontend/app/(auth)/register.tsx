import {
  View,
  Text,
  TextInput,
  Pressable,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "@/constants/Colors";
import { useState } from "react";
import User from "../(tabs)/user";
import UserSignUp from "@/components/ui/UserSignUp";
import ManagerSignUp from "@/components/ui/ManagerSignUp";

export default function RegisterScreen() {
  const router = useRouter();
  const [role, setRole] = useState<"user" | "manager">("user");

  return (
    <SafeAreaView className="flex-1">
      <LinearGradient
        colors={[Colors.light.blue900, Colors.light.blue700]}
        className="flex-1"
      >
        <View className="flex-1 justify-between pt-5">
          {/* Header */}
          <View className="items-center mb-6">
            <Image
              source={require("@/assets/images/spark.png")}
              className="h-16 w-48"
              resizeMode="contain"
            />
          </View>

          {/* Booking Toggle */}
          <View className="justify-center items-center pb-6">
            <LinearGradient
              colors={[Colors.light.blue700, Colors.light.blue300]}
              className="flex-row justify-between items-center pl-4 w-72"
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={{ borderRadius: 50 }}
            >
              <Text className="text-white font-bold text-2xl">BOOKING NOW</Text>
              <View className="bg-[#FFF5D7] h-14 aspect-square rounded-full" />
            </LinearGradient>
          </View>

          {/* Role Switch */}
          <View className="flex-row justify-center">
            <TouchableOpacity
              onPress={() => setRole("user")}
              className={`px-4 py-2 rounded-l-full `}
              style={{
                backgroundColor: role === "user" ? "#3B82F6" : "#1E3A8A",
              }}
            >
              <Text className="text-white font-semibold">User</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setRole("manager")}
              className={`px-4 py-2 rounded-r-full`}
              style={{
                backgroundColor: role === "manager" ? "#3B82F6" : "#1E3A8A",
              }}
            >
              <Text className="text-white font-semibold">Manager</Text>
            </TouchableOpacity>
          </View>

          {/* Bottom Card: fixed to 50% height */}
          <LinearGradient
            colors={[Colors.light.blue900, Colors.light.blue700]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            className="h-2/3"
          >
            <View className="flex-1 rounded-s-3xl border border-b-0 border-cyan-500 px-6 py-4">
              <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
                <Text className="text-white font-bold text-xl mb-2">
                  Sign Up
                </Text>
                <Text className="text-white mb-4">
                  SPARK - Book Sports Fields Online
                </Text>

                {/* Inputs */}
                {role === "user" ? <UserSignUp /> : <ManagerSignUp />}

                <View className="mt-4">
                  <Text className="text-white text-center">
                    Already have an account?{" "}
                    <Text
                      className="text-blue-300 font-semibold"
                      onPress={() => router.replace("/(auth)/login")}
                    >
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
