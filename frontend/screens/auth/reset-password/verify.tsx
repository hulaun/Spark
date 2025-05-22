import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons'; // for back arrow
import { useEffect, useRef, useState } from 'react';
import { Colors } from '@/constants/Colors';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/navigation/RootNavigator';

export default function ForgotPasswordScreen() {
  const [timer, setTimer] = useState(60);
  const inputs = useRef<Array<TextInput | null>>([]);
  const [otp, setOtp] = useState(Array(6).fill(''));

  const router = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleChange = (text: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text.length === 1 && index < inputs.current.length - 1) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === 'Backspace') {
      if (otp[index] === '') {
        if (index > 0) {
          inputs.current[index - 1]?.focus();
          const newOtp = [...otp];
          newOtp[index - 1] = '';
          setOtp(newOtp);
        }
      } else {
        const newOtp = [...otp];
        newOtp[index] = '';
        setOtp(newOtp);
      }
    }
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 bg-transparent">
        <LinearGradient
          colors={[Colors.light.blue900, Colors.light.blue700]}
          className="relative flex-1">
          <View className="flex-1 px-6 pt-4">
            <View className="mb-8 flex-row items-center">
              <TouchableOpacity onPress={() => router.replace('Login')}>
                <Ionicons name="arrow-back" size={24} color="white" />
              </TouchableOpacity>
              <Text className="ml-4 text-xl font-bold text-white">Forgot Password</Text>
            </View>

            <View className="mb-6 flex-row justify-between">
              {Array(6)
                .fill(0)
                .map((_, index) => (
                  <TextInput
                    key={index}
                    ref={(ref) => {
                      inputs.current[index] = ref;
                    }}
                    className="h-12 w-12 rounded-md bg-white text-center text-lg"
                    maxLength={1}
                    keyboardType="numeric"
                    value={otp[index]}
                    onChangeText={(text) => handleChange(text, index)}
                    onKeyPress={(e) => handleKeyPress(e, index)}
                  />
                ))}
            </View>

            <TouchableOpacity
              className="mb-4 items-center rounded-lg bg-[#00264d] py-4"
              onPress={() => router.replace('SavePassword')}>
              <Text className="text-lg font-semibold text-white">Submit</Text>
            </TouchableOpacity>

            <Text className="text-center text-gray-300">
              Didn't receive it? Retry in 00:{timer < 10 ? `0${timer}` : timer}
            </Text>
          </View>
        </LinearGradient>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
