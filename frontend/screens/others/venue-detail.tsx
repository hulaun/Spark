import { View, Text, Image, ScrollView, Pressable } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import { FontAwesome, Ionicons, MaterialIcons, Entypo } from '@expo/vector-icons';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/navigation/RootNavigator';

export default function VenueDetail() {
  const router = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 bg-white">
        <ScrollView>
          {/* Image with Back and Share */}
          <View className="relative">
            <Image
              source={require('@/assets/images/venue-card-bg.png')}
              className="h-60 w-full"
              resizeMode="cover"
            />
            <Pressable
              className="absolute left-4 top-4 rounded-full bg-white/80 p-2"
              onPress={() => router.goBack()}>
              <Ionicons name="arrow-back" size={20} color="black" />
            </Pressable>
            <Pressable className="absolute right-4 top-4 rounded-full bg-white/80 p-2">
              <Ionicons name="share-social" size={20} color="black" />
            </Pressable>
          </View>
          {/* Title and Address */}
          <View className="p-4">
            <Text className="text-xl font-bold">San Bong Thong Nhat</Text>
            <Text className="mb-2 text-sm text-gray-500">BOOKING</Text>
            <View className="mb-2 flex-row items-center space-x-1">
              <FontAwesome name="star" size={16} color="#facc15" />
              <Text className="font-medium">4.8</Text>
              <Text className="text-gray-500">[4]</Text>
            </View>
            <View className="mb-4 flex-row items-center gap-2">
              <Ionicons name="location-outline" size={16} color="gray" />
              <Text className="text-sm text-gray-500">
                12 Trần Hưng Đạo, Phường An Hải Tây, Quận Sơn Trà, Đà Nẵng
              </Text>
            </View>
            <View className="mb-4 flex-row space-x-3">
              <Pressable className="rounded-md bg-blue-900 px-4 py-2">
                <Text className="font-semibold text-white">Get Direction</Text>
              </Pressable>
              <Pressable className="rounded-md bg-blue-900 px-3 py-2">
                <Ionicons name="call" size={20} color="white" />
              </Pressable>
            </View>
            {/* Discounts */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mb-4">
              {Array(3)
                .fill(0)
                .map((_, index) => (
                  <View
                    key={index}
                    className="mr-2 rounded-md border border-blue-300 bg-blue-50 px-4 py-2">
                    <Text className="font-medium text-blue-800">Save 20.000vnd</Text>
                    <Text className="text-xs text-gray-500">On all slots</Text>
                  </View>
                ))}
            </ScrollView>
            {/* Sports */}
            <Text className="mb-2 font-semibold">Available Sports</Text>
            <View className="mb-4 flex-row gap-2">
              <Pressable className="rounded-full bg-blue-900 px-4 py-2">
                <Text className="font-medium text-white">Pickleball</Text>
              </Pressable>
              <Pressable className="rounded-full border px-4 py-2">
                <Text className="font-medium text-gray-700">Cricket</Text>
              </Pressable>
              <Pressable className="rounded-full border px-4 py-2">
                <Text className="font-medium text-gray-700">Football</Text>
              </Pressable>
            </View>
            {/* Venue Info */}
            <Text className="mb-2 font-semibold">Venue info</Text>
            <View className="mb-2 flex-row items-center gap-2">
              <Text className="rounded-full bg-blue-900 px-2 py-1 text-xs text-white">Pitch</Text>
              <Text className="text-gray-700">1 Nets</Text>
            </View>
            <Text className="text-gray-700">Equipment Provided</Text>
            <Text className="mb-4 text-gray-700">Artificial Turf</Text>
            {/* Amenities */}
            <Text className="mb-2 font-semibold">Amenities</Text>
            <View className="mb-24 space-y-2">
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
          <Pressable className="items-center" onPress={() => router.navigate('VenueBooking')}>
            <Text className="text-lg font-bold text-white">PROCEED TO SELECT A SLOT</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
