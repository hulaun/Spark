import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

function CustomButton({
  icon,
  text,
  className = "",
  textColor = "text-black",
}: any) {
  return (
    <TouchableOpacity
      className={
        className + " flex-row items-center p-4 bg-white rounded-xl shadow-lg"
      }
    >
      <View className="mr-3">{icon}</View>
      <Text className={`text-base font-medium ${textColor}`}>{text}</Text>
    </TouchableOpacity>
  );
}

export default CustomButton;
