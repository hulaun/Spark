import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { VenueType } from "@/types/VenueType";
import { SportItem } from "@/types/SportItem";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const VenueCard = ({
  venue,
  sports,
}: {
  venue: VenueType;
  sports: Array<SportItem>;
}) => {
  const router = useRouter();
  return (
    <View className="bg-white rounded-2xl shadow mb-4 overflow-hidden min-h-40">
      <Pressable
        onPress={() => {
          router.push({
            pathname: "/(others)/venue-detail",
            // params: { venueId: venue.id },
          });
        }}
      >
        <View className="relative">
          <Image
            source={require("@/assets/images/venue-card-bg.png")}
            className="w-full h-40 rounded-2xl absolute"
            resizeMode="cover"
          ></Image>
          <View className="p-3">
            <View className="flex-row items-center justify-between">
              <Text className="font-semibold text-base text-white">
                {venue.name}
              </Text>
              <Pressable
                onPress={() => {
                  // Handle bookmark action here
                  console.log("Bookmark pressed for:", venue.name);
                }}
              >
                <Ionicons name="bookmark" size={16} color="#fff" />
              </Pressable>
            </View>
            <Text className="text-xs text-gray-100 pt-12">{venue.address}</Text>
            <View className="flex-row gap-2 mt-2 flex-wrap">
              {sports.map((sport, index) => (
                <View
                  key={index}
                  className="flex flex-row justify-between bg-transperent rounded-full px-3 py-1 gap-2 border border-white"
                >
                  <Ionicons name={sport.icon} size={16} color="#fff" />
                  <Text className="text-xs text-white">{sport.name}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default VenueCard;
