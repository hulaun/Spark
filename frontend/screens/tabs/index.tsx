import React, { use, useEffect } from 'react';
import { View, Text, TextInput, Image, ScrollView, Pressable } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Feather, Ionicons } from '@expo/vector-icons';
import { SportIconType } from '@/types/SportIconType';
import { SportItem } from '@/types/SportItem';
import VenueCard from '@/components/ui/VenueCard';
import MainHeader from '@/components/ui/MainHeader';
import { useIsFocused } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { api } from '@/context/api';

const sportsIcons: Array<SportIconType> = ['football', 'basketball', 'tennisball-outline'];

const HomeScreen = () => {
  const [sports, setSports] = React.useState<Array<SportItem>>([]);

  useEffect(() => {
    const fetchSports = async () => {
      try {
        const response: any = await api.post('/sport');
        // setSports(response);
      } catch (error) {
        console.error('Error fetching sports:', error);
      }
    };

    fetchSports();
  }, []);
  const isFocused = useIsFocused();
  return (
    <SafeAreaProvider>
      {isFocused && <StatusBar animated={true} backgroundColor="black" style="light" />}
      {/* Background */}
      <SafeAreaView className="flex-1 bg-black">
        <View className="relative flex-1">
          {/* Background Image */}
          <Image
            source={require('@/assets/images/main-bg.png')}
            className="absolute h-full w-full"
            resizeMode="cover"
          />
          {/* Content */}
          <ScrollView className="flex-1 px-4">
            {/* Header */}
            <MainHeader />
            {/* Search */}
            <View className="mb-4 flex-row items-center rounded-xl bg-gray-100 px-3 py-2">
              <TextInput
                placeholder="SEARCH"
                className="flex-1 text-sm"
                placeholderTextColor="#888"
              />
              <Feather name="search" size={18} color="#555" />
            </View>
            {/* Sports Scroll */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mb-4 flex-row">
              {sportsIcons.map((sport, index) => (
                <Pressable
                  key={index}
                  className="mr-3 items-center rounded-xl bg-white px-4 py-3 shadow">
                  <Ionicons name={sport} size={24} />
                </Pressable>
              ))}
            </ScrollView>
            {/* Available Venues */}
            <View className="mb-3 flex-row items-center justify-between">
              <Text className="text-lg font-bold text-white">Available Venues</Text>
              <View className="flex-row gap-2">
                <Pressable className="rounded-full bg-red-500 px-3 py-1">
                  <Text className="text-xs text-white">14 Sep</Text>
                </Pressable>
                <Pressable className="rounded-full bg-green-500 px-3 py-1">
                  <Text className="text-xs text-white">All Sports</Text>
                </Pressable>
              </View>
            </View>
            {[
              {
                name: 'San Bong Thong Nhat',
                address: '11 Hai Phong Hoa Khanh, Hai Chau, Da Nang',
              },
              {
                name: 'San bong Hoa Binh',
                address: '11 Hai Phong Hoa Khanh , Hai chau, Da Nang',
              },
              {
                name: 'San bong Hoa Binh',
                address: '11 Hai Phong Hoa Khanh , Hai chau, Da Nang',
              },
            ].map((venue, index) => (
              <VenueCard key={index} venue={venue} sports={sports}></VenueCard>
            ))}
          </ScrollView>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default HomeScreen;
