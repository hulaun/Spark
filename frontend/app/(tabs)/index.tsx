import React from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather, Ionicons } from "@expo/vector-icons";
import { SportIconType } from "@/types/SportIconType";
import { SportItem } from "@/types/SportItem";
import VenueCard from "@/components/ui/VenueCard";
import MainHeader from "@/components/ui/MainHeader";

const sportsIcons: Array<SportIconType> = [
  "football",
  "basketball",
  "tennisball-outline",
];

const sports: Array<SportItem> = [
  {
    name: "Football",
    icon: "football",
  },
  {
    name: "Basketball",
    icon: "basketball",
  },
  {
    name: "Tennis",
    icon: "tennisball-outline",
  },
];

const HomeScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-black">
      <View className="flex-1 relative">
        {/* Background Image */}
        <Image
          source={require("@/assets/images/main-bg.png")}
          className="absolute w-full h-full"
          resizeMode="cover"
        />

        {/* Content */}
        <ScrollView className="flex-1 px-4">
          {/* Header */}
          <MainHeader />

          {/* Search */}
          <View className="bg-gray-100 rounded-xl px-3 py-2 flex-row items-center mb-4">
            <TextInput
              placeholder="SEARCH"
              className="flex-1 text-sm"
              placeholderTextColor="#888"
            />
            <Feather name="search" size={18} color="#555" />
          </View>

          {/* Sports Scroll */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="flex-row mb-4"
          >
            {sportsIcons.map((sport, index) => (
              <Pressable
                key={index}
                className="bg-white mr-3 shadow px-4 py-3 rounded-xl items-center"
              >
                <Ionicons name={sport} size={24} />
              </Pressable>
            ))}
          </ScrollView>

          {/* Available Venues */}
          <View className="flex-row justify-between items-center mb-3">
            <Text className="font-bold text-lg text-white">
              Available Venues
            </Text>
            <View className="flex-row gap-2">
              <Pressable className="bg-red-500 rounded-full px-3 py-1">
                <Text className="text-white text-xs">14 Sep</Text>
              </Pressable>
              <Pressable className="bg-green-500 rounded-full px-3 py-1">
                <Text className="text-white text-xs">All Sports</Text>
              </Pressable>
            </View>
          </View>

          {[
            {
              name: "San Bong Thong Nhat",
              address: "11 Hai Phong Hoa Khanh, Hai Chau, Da Nang",
            },
            {
              name: "San bong Hoa Binh",
              address: "11 Hai Phong Hoa Khanh , Hai chau, Da Nang",
            },
            {
              name: "San bong Hoa Binh",
              address: "11 Hai Phong Hoa Khanh , Hai chau, Da Nang",
            },
          ].map((venue, index) => (
            <VenueCard key={index} venue={venue} sports={sports}></VenueCard>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
