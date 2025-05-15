import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  Pressable,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MainHeader from "@/components/ui/MainHeader";
import { Feather, Ionicons } from "@expo/vector-icons";
import VenueCard from "@/components/ui/VenueCard";
import { SportItem } from "@/types/SportItem";

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
const Favorites = () => {
  return (
    <SafeAreaView className="flex-1 bg-black">
      <View className="flex-1 relative bg-black">
        {/* Content */}
        {/* Header */}
        <View className="px-4">
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
        </View>

        <View className="bg-white px-4 h-full">
          <View className="flex-row justify-between items-center my-3">
            <Text className="font-bold text-lg">Favourites</Text>
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
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Favorites;
