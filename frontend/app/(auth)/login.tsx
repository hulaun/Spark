import { View, Text, TextInput, Image, Pressable } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "@/constants/Colors";

export default function LoginScreen() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1">
      <View className="relative flex-1">
        {/* Background Image */}
        <Image
          source={require("@/assets/images/login-bg.png")}
          className="w-full h-full absolute"
          resizeMode="cover"
        />
        <View className="flex-1 justify-start align-center px-5">
          <View className="items-center mb-28">
            <Image
              source={require("@/assets/images/spark.png")}
              className="w-1/2 mb-4"
              resizeMode="contain"
            />
          </View>
          <Text className="text-white text-2xl font-bold mb-6 text-center">
            LOG IN
          </Text>
          <View className="flex-row items-center border border-white rounded-2xl px-4 py-3 mb-4 bg-white/10">
            <Ionicons name="person-outline" size={20} color="white" />
            <TextInput
              placeholder="User name"
              placeholderTextColor="#fff"
              className="ml-3 text-white flex-1"
            />
          </View>
          <View className="flex-row items-center border border-white rounded-2xl px-4 py-3 mb-2 bg-white/10">
            <Ionicons name="lock-closed-outline" size={20} color="white" />
            <TextInput
              placeholder="Password"
              placeholderTextColor="#fff"
              secureTextEntry
              className="ml-3 text-white flex-1"
            />
          </View>
          <Text
            className="text-white text-right text-sm my-2"
            onPress={() => router.push("/(auth)/reset-password/email")}
          >
            Forgot Password
          </Text>
          <View className="justify-center items-center">
            <LinearGradient
              colors={[Colors.blue700, Colors.blue300]}
              className="w-2/3 m-4"
              style={{
                borderRadius: 10,
              }}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            >
              <Pressable
                className="py-3 items-center"
                onPress={() => router.replace("/(tabs)")}
              >
                <Text className="text-white font-bold text-lg">SIGN IN</Text>
              </Pressable>
            </LinearGradient>
          </View>
          <View className="flex-row justify-center space-x-6 mb-6">
            <Pressable>
              <Image
                source={require("@/assets/images/fb.png")}
                className="h-16 aspect-square"
              />
            </Pressable>
            <Pressable>
              <Image
                source={require("@/assets/images/insta.png")}
                className="h-16 aspect-square"
              />
            </Pressable>
            <Pressable>
              <Image
                source={require("@/assets/images/google.png")}
                className="m-2 h-12 aspect-square"
              />
            </Pressable>
          </View>
          <Text className="text-white text-center text-sm">
            You do not have an account ?{" "}
            <Text
              className="text-blue-300 font-semibold"
              onPress={() => router.replace("/(auth)/register")}
            >
              Register
            </Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
