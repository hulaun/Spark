import { View, Text, Image, ScrollView, Pressable } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import {
  FontAwesome,
  Ionicons,
  MaterialIcons,
  Entypo,
} from "@expo/vector-icons";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function VenueDetail() {
  const router = useRouter();

  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 bg-white">
        <ScrollView>
          {/* Image with Back and Share */}
          <View className="relative">
            <Image
              source={require("@/assets/images/venue-card-bg.png")}
              className="w-full h-60"
              resizeMode="cover"
            />
            <Pressable
              className="absolute top-4 left-4 bg-white/80 p-2 rounded-full"
              onPress={() => router.back()}
            >
              <Ionicons name="arrow-back" size={20} color="black" />
            </Pressable>
            <Pressable className="absolute top-4 right-4 bg-white/80 p-2 rounded-full">
              <Ionicons name="share-social" size={20} color="black" />
            </Pressable>
          </View>
          {/* Title and Address */}
          <View className="p-4">
            <Text className="text-xl font-bold">San Bong Thong Nhat</Text>
            <Text className="text-sm text-gray-500 mb-2">BOOKING</Text>
            <View className="flex-row items-center space-x-1 mb-2">
              <FontAwesome name="star" size={16} color="#facc15" />
              <Text className="font-medium">4.8</Text>
              <Text className="text-gray-500">[4]</Text>
            </View>
            <View className="flex-row items-center gap-2 mb-4">
              <Ionicons name="location-outline" size={16} color="gray" />
              <Text className="text-gray-500 text-sm">
                12 Trần Hưng Đạo, Phường An Hải Tây, Quận Sơn Trà, Đà Nẵng
              </Text>
            </View>
            <View className="flex-row space-x-3 mb-4">
              <Pressable className="bg-blue-900 px-4 py-2 rounded-md">
                <Text className="text-white font-semibold">Get Direction</Text>
              </Pressable>
              <Pressable className="bg-blue-900 px-3 py-2 rounded-md">
                <Ionicons name="call" size={20} color="white" />
              </Pressable>
            </View>
            {/* Discounts */}
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              className="mb-4"
            >
              {Array(3)
                .fill(0)
                .map((_, index) => (
                  <View
                    key={index}
                    className="border rounded-md px-4 py-2 mr-2 border-blue-300 bg-blue-50"
                  >
                    <Text className="text-blue-800 font-medium">
                      Save 20.000vnd
                    </Text>
                    <Text className="text-xs text-gray-500">On all slots</Text>
                  </View>
                ))}
            </ScrollView>
            {/* Sports */}
            <Text className="font-semibold mb-2">Available Sports</Text>
            <View className="flex-row mb-4 gap-2">
              <Pressable className="bg-blue-900 px-4 py-2 rounded-full">
                <Text className="text-white font-medium">Pickleball</Text>
              </Pressable>
              <Pressable className="border px-4 py-2 rounded-full">
                <Text className="text-gray-700 font-medium">Cricket</Text>
              </Pressable>
              <Pressable className="border px-4 py-2 rounded-full">
                <Text className="text-gray-700 font-medium">Football</Text>
              </Pressable>
            </View>
            {/* Venue Info */}
            <Text className="font-semibold mb-2">Venue info</Text>
            <View className="flex-row items-center gap-2 mb-2">
              <Text className="bg-blue-900 text-white text-xs px-2 py-1 rounded-full">
                Pitch
              </Text>
              <Text className="text-gray-700">1 Nets</Text>
            </View>
            <Text className="text-gray-700">Equipment Provided</Text>
            <Text className="text-gray-700 mb-4">Artificial Turf</Text>
            {/* Amenities */}
            <Text className="font-semibold mb-2">Amenities</Text>
            <View className="space-y-2 mb-24">
              <View className="flex-row items-center gap-2">
                <MaterialIcons name="payment" size={20} color="#1e40af" />
                <Text className="text-gray-700">UPI Accepted</Text>
              </View>
              <View className="flex-row items-center gap-2">
                <FontAwesome name="credit-card" size={20} color="#1e40af" />
                <Text className="text-gray-700">Card Accepted</Text>
              </View>
              <View className="flex-row items-center gap-2">
                <MaterialIcons name="local-parking" size={20} color="#1e40af" />
                <Text className="text-gray-700">Free Parking</Text>
              </View>
              <View className="flex-row items-center gap-2">
                <Entypo name="air" size={20} color="#1e40af" />
                <Text className="text-gray-700">Toilets</Text>
              </View>
              <View className="flex-row items-center gap-2">
                <FontAwesome name="shower" size={20} color="#1e40af" />
                <Text className="text-gray-700">Showers</Text>
              </View>
            </View>
          </View>
        </ScrollView>
        {/* Bottom Button */}
        <View className="absolute bottom-0 left-0 right-0 bg-blue-900 py-4">
          <Pressable
            className="items-center"
            onPress={() => router.push("/(others)/venue-booking")}
          >
            <Text className="text-white font-bold text-lg">
              PROCEED TO SELECT A SLOT
            </Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
