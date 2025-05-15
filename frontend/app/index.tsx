import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";
import { Image, View } from "react-native";

const Splash = () => {
  const router = useRouter();

  React.useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/(tabs)");
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1" style={{ backgroundColor: "#000" }}>
        <LinearGradient
          colors={[Colors.light.blue900, Colors.light.blue700]}
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
