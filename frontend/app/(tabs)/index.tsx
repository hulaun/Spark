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

const HomeScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-black">
      <ScrollView className="px-4">
        {/* Header */}
        <View className="flex-row justify-between items-center mb-4">
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
              <Text className="text-sm font-semibold text-white">
                Nhu Nguyen
              </Text>
            </View>
          </View>
        </View>

        {/* Search */}
        <View className="bg-gray-100 rounded-xl px-3 py-2 flex-row items-center">
          <TextInput
            placeholder="SEARCH"
            className="flex-1 text-sm"
            placeholderTextColor="#888"
          />
          <Feather name="search" size={18} color="#555" />
        </View>

        {/* Sport Category */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="flex-row mb-4"
        >
          {["Football", "Cricket", "Basketball", "Swimming"].map(
            (sport, index) => (
              <Pressable
                key={index}
                className="bg-white mr-3 shadow px-4 py-3 rounded-xl items-center"
              >
                {/* <Image
                  source={require("@/assets/images/sport.png")}
                  className="h-8 w-8 mb-1"
                  resizeMode="contain"
                /> */}
                <Text className="text-xs font-semibold">{sport}</Text>
              </Pressable>
            )
          )}
        </ScrollView>

        {/* Available Venues */}
        <View className="flex-row justify-between items-center mb-3">
          <Text className="font-bold text-lg">Available Venues</Text>
          <View className="flex-row gap-2">
            <Pressable className="bg-red-500 rounded-full px-3 py-1">
              <Text className="text-white text-xs">14 Sep</Text>
            </Pressable>
            <Pressable className="bg-green-500 rounded-full px-3 py-1">
              <Text className="text-white text-xs">All Sports</Text>
            </Pressable>
          </View>
        </View>

        {/* Venue Cards */}
        {[
          {
            name: "San Bong Thong Nhat",
            address: "11 Hai Phong Hoa Khanh, Hai Chau, Da Nang",
            // image: require("@/assets/images/venue1.png"),
          },
          {
            name: "San bong Hoa Binh",
            address: "11 Hai Phong Hoa Khanh , Hai chau, Da Nang",
            // image: require("@/assets/images/venue2.png"),
          },
        ].map((venue, index) => (
          <View
            key={index}
            className="bg-white rounded-2xl shadow mb-4 overflow-hidden"
          >
            {/* <Image
              source={venue.image}
              className="w-full h-40"
              resizeMode="cover"
            /> */}
            <View className="p-3">
              <Text className="font-semibold text-base">{venue.name}</Text>
              <Text className="text-xs text-gray-500">{venue.address}</Text>
              <View className="flex-row gap-2 mt-2">
                <Text className="text-xs bg-gray-200 rounded-full px-2 py-1">
                  Football
                </Text>
                <Text className="text-xs bg-gray-200 rounded-full px-2 py-1">
                  Badminton
                </Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
