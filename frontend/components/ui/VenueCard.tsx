import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { VenueType } from '@/types/VenueType';
import { SportItem } from '@/types/SportItem';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/navigation/RootNavigator';

const VenueCard = ({ venue, sports }: { venue: VenueType; sports: Array<SportItem> }) => {
  const router = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View className="mb-4 min-h-40 overflow-hidden rounded-2xl bg-white shadow">
      <Pressable
        onPress={() => {
          router.navigate(
            'VenueDetail'
            // params: { venueId: venue.id },
          );
        }}>
        <View className="relative">
          <Image
            source={require('@/assets/images/venue-card-bg.png')}
            className="absolute h-40 w-full rounded-2xl"
            resizeMode="cover"></Image>
          <View className="p-3">
            <View className="flex-row items-center justify-between">
              <Text className="text-base font-semibold text-white">{venue.name}</Text>
              <Pressable
                onPress={() => {
                  // Handle bookmark action here
                  console.log('Bookmark pressed for:', venue.name);
                }}>
                <Ionicons name="bookmark" size={16} color="#fff" />
              </Pressable>
            </View>
            <Text className="pt-12 text-xs text-gray-100">{venue.address}</Text>
            <View className="mt-2 flex-row flex-wrap gap-2">
              {sports.map((sport, index) => (
                <View
                  key={index}
                  className="bg-transperent flex flex-row justify-between gap-2 rounded-full border border-white px-3 py-1">
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
