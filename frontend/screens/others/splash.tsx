import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from '@/constants/Colors';

import { Image, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/navigation/RootNavigator';

const Splash = () => {
  const router = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  React.useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('Tabs', { screen: 'Home' });
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1" style={{ backgroundColor: '#000' }}>
        <LinearGradient
          colors={[Colors.light.blue900, Colors.light.blue700]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          className="flex-1">
          <View className="relative flex-1 items-center justify-center">
            <Image
              source={require('@/assets/images/spark.png')}
              className="absolute w-2/3"
              resizeMode="contain"
            />
          </View>
        </LinearGradient>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Splash;
