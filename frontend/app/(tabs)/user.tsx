import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { useAuth } from "@/context/AuthProvider";

const User = () => {
  const router = useRouter();
  const { isLogged, user } = useAuth();
  useEffect(() => {
    if (!isLogged) {
      router.push("/(auth)/login");
    }
  }, []);
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View>
          <Text>User</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default User;
