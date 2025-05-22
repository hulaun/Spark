import { View, Text, TouchableOpacity, TextInput, Pressable } from 'react-native';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { LinearGradient } from 'expo-linear-gradient';

import { Colors } from '@/constants/Colors';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/navigation/RootNavigator';

function ManagerSignUp() {
  const router = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log({ ...data });
    // You can now send `data` and `role` to your API
    router.replace('Login');
  };
  return (
    <View>
      {[
        {
          name: 'email',
          label: 'Phone Number or Email',
          placeholder: 'Enter phone number or Email',
        },
        {
          name: 'fullName',
          label: 'Full name',
          placeholder: 'Enter your full name',
        },
        {
          name: 'password',
          label: 'Password',
          placeholder: 'Enter password',
          secure: true,
        },
        {
          name: 'confirmPassword',
          label: 'Confirm Password',
          placeholder: 'Re-enter password',
          secure: true,
        },
        {
          name: 'venueName',
          label: 'Venue Name',
          placeholder: 'Enter your venue name',
        },
        {
          name: 'venueAddress',
          label: 'Venue Address',
          placeholder: 'Enter your venue address',
        },
      ].map(({ name, label, placeholder, secure }, idx) => (
        <View key={idx} className="mb-4">
          <Text className="mb-1 text-white">{label}</Text>
          <Controller
            control={control}
            name={name}
            rules={{ required: true }}
            render={({ field: { onChange, value } }) => (
              <LinearGradient
                colors={['#f471b5', '#2fffe2']}
                className="p-[1px]"
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={{ borderRadius: 10 }}>
                <TextInput
                  placeholder={placeholder}
                  placeholderTextColor="#ccc"
                  secureTextEntry={secure}
                  value={value}
                  onChangeText={onChange}
                  className="rounded-xl bg-[#0D2B57] px-4 py-3 text-white"
                />
              </LinearGradient>
            )}
          />
          {errors[name] && <Text className="text-red-400">This field is required</Text>}
        </View>
      ))}
      <View className="mt-4 items-center justify-center">
        <LinearGradient
          colors={[Colors.light.blue700, Colors.light.blue300]}
          className="w-2/3 rounded-lg border border-blue-300"
          style={{
            borderRadius: 10,
          }}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}>
          <Pressable className="items-center py-3" onPress={() => router.replace('Login')}>
            <Text className="text-lg font-bold text-white">SIGN UP</Text>
          </Pressable>
        </LinearGradient>
      </View>
    </View>
  );
}

export default ManagerSignUp;
