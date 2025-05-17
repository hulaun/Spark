import { View, Text, TextInput } from "react-native";
import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import MainHeader from "@/components/ui/MainHeader";
import VenueCard from "@/components/ui/VenueCard";
import CustomButton from "@/components/ui/CustomButton";
import {
  FontAwesome,
  FontAwesome6,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { useIsFocused } from "@react-navigation/native";

const Community = () => {
  const isFocused = useIsFocused();
  return (
    <SafeAreaProvider>
      {isFocused && (
        <StatusBar animated={true} backgroundColor="black" style="light" />
      )}
      <SafeAreaView className="flex-1 bg-black">
        <View className="flex-1 relative bg-black">
          {/* Content */}
          {/* Header */}
          <View className="px-4">
            <MainHeader />
          </View>

          <View className="bg-white px-4 h-full">
            <View className="flex-row justify-between items-center my-3">
              <Text className="font-bold text-lg">Community</Text>
            </View>
            <View className="mt-10 flex-row flex-wrap gap-4">
              <CustomButton
                icon={<FontAwesome name="exchange" size={20} />}
                text="Court transfer"
                className="mb-6 w-[48%]"
              />
              <CustomButton
                icon={<FontAwesome6 name="users-viewfinder" size={20} />}
                text="Find players"
                className="mb-6 w-[48%]"
              />
              <CustomButton
                icon={<MaterialCommunityIcons name="post-outline" size={20} />}
                text="Transfer posts"
                className="mb-6 w-[48%]"
              />
              <CustomButton
                icon={<Ionicons name="mail-unread-outline" size={24} />}
                text="Invitations"
                className="mb-6 w-[48%]"
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Community;
