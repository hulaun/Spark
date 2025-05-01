import { View, Text } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const MainHeader = () => {
  return (
    <View className="flex-row justify-between items-center mb-4 mt-2">
      <View>
        <Text className="text-[10px] text-gray-400">YOUR LOCATION</Text>
        <View className="flex-row items-center gap-1">
          <Ionicons name="location-sharp" size={14} color="white" />
          <Text className="text-sm font-semibold text-white">Da Nang</Text>
        </View>
      </View>
      <View className="items-end">
        <Text className="text-[10px] text-gray-400">WELCOME BACK!</Text>
        <View className="flex-row items-center gap-1">
          <Ionicons name="person" size={14} color="white" />
          <Text className="text-sm font-semibold text-white">Nhu Nguyen</Text>
        </View>
      </View>
    </View>
  );
};

export default MainHeader;
