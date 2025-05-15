import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Pressable,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function EmailScreen() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 bg-transparent">
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <LinearGradient
            colors={[Colors.light.blue900, Colors.light.blue700]}
            className="flex-1 relative"
          >
            <View className="flex-1 px-6 pt-4">
              <View className="flex-row items-center mb-8">
                <TouchableOpacity onPress={() => router.back()}>
                  <Ionicons name="arrow-back" size={24} color="white" />
                </TouchableOpacity>
                <Text className="text-white text-xl font-bold ml-4">
                  Enter Your Email
                </Text>
              </View>
              <Text className="text-white mb-8">
                Please enter your email address to receive a verification code.
              </Text>
              <View className="flex-row items-center border border-white rounded-lg mb-8 px-3">
                <Ionicons name="mail-outline" size={20} color="white" />
                <TextInput
                  placeholder="Enter your email"
                  placeholderTextColor="white"
                  className="flex-1 h-14 ml-3 text-white"
                />
              </View>
              <View className="justify-center items-center">
                <LinearGradient
                  colors={[Colors.light.blue700, Colors.light.blue300]}
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
                      Send Verification Code
                    </Text>
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
