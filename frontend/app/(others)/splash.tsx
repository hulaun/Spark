import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";

const Splash = () => {
  const router = useRouter();

  React.useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/(auth)/login");
    }, 700);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1" style={{ backgroundColor: "#000" }}>
        <LinearGradient
          colors={[Colors.blue900, Colors.blue700]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          className="flex-1"
        >
          <View className="flex-1 justify-center items-center relative">
            <Image
              source={require("@/assets/images/spark.png")}
              className="w-2/3 absolute"
              resizeMode="contain"
            />
          </View>
        </LinearGradient>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Splash;

const styles = StyleSheet.create({});
