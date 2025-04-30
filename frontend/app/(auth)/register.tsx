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

export default function RegisterScreen() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1">
      <ScrollView className="flex-1" contentContainerStyle={{ flexGrow: 1 }}>
        <LinearGradient
          colors={[Colors.blue900, Colors.blue700]}
          className="flex-1 relative"
        >
          <View className="flex-1 justify-between align-center pt-5">
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
                colors={[Colors.blue700, Colors.blue300]}
                className="flex-row justify-between items-center pl-4 w-72"
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={{
                  borderRadius: 50,
                }}
              >
                <Text className="text-white font-bold text-2xl">
                  BOOKING NOW
                </Text>
                <View className="bg-[#FFF5D7] h-14 aspect-square rounded-full" />
              </LinearGradient>
            </View>
            {/* Card */}
            <LinearGradient
              colors={[Colors.blue900, Colors.blue700]}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
            >
              <View className="rounded-s-3xl px-6 py-8 border border-cyan-500">
                <Text className="text-white font-bold text-xl mb-2">
                  Sign Up
                </Text>
                <Text className="text-white mb-4">
                  SPARK - Book Sports Fields Online
                </Text>
                {/* Inputs */}
                {[
                  {
                    label: "Phone Number or Email",
                    placeholder: "Enter phone number or Email",
                  },
                  { label: "Full name", placeholder: "Enter your full name" },
                  {
                    label: "Password",
                    placeholder: "Enter password",
                    secure: true,
                  },
                  {
                    label: "Confirm Password",
                    placeholder: "Re-enter password",
                    secure: true,
                  },
                ].map(({ label, placeholder, secure }, idx) => (
                  <View key={idx} className="mb-4">
                    <Text className="text-white mb-1">{label}</Text>
                    <LinearGradient
                      colors={["#f471b5", "#2fffe2"]}
                      className="p-[1px]"
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 1 }}
                      style={{
                        borderRadius: 10,
                      }}
                    >
                      <TextInput
                        placeholder={placeholder}
                        placeholderTextColor="#ccc"
                        secureTextEntry={secure}
                        className="bg-[#0D2B57] text-white px-4 py-3 rounded-xl"
                      />
                    </LinearGradient>
                  </View>
                ))}
                <View className="justify-center items-center">
                  <LinearGradient
                    colors={[Colors.blue700, Colors.blue300]}
                    className="w-2/3 border border-blue-300 rounded-lg"
                    style={{
                      borderRadius: 10,
                    }}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                  >
                    <Pressable
                      className="py-3 items-center"
                      onPress={() => router.replace("/(auth)/login")}
                    >
                      <Text className="text-white font-bold text-lg">
                        SIGN UP
                      </Text>
                    </Pressable>
                  </LinearGradient>
                </View>
                <Text className="text-white text-center mt-6">
                  Already have an account?{" "}
                  <Text
                    className="text-blue-300 font-semibold"
                    onPress={() => router.replace("/(auth)/login")}
                  >
                    Log in
                  </Text>
                </Text>
              </View>
            </LinearGradient>
          </View>
        </LinearGradient>
      </ScrollView>
    </SafeAreaView>
  );
}
