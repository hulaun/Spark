import { View, Text, TextInput, Image, Pressable } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { useForm, Controller } from 'react-hook-form';
import { useAuth } from '@/context/AuthProvider';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList, TabsParamList } from '@/navigation/RootNavigator';

export default function LoginScreen() {
  const router = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const { login } = useAuth();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (data: { email: string; password: string }) => {
    const status = await login(data.email, data.password);
    if (!status) {
      return;
    } else {
      alert('Login successful!');
      router.navigate('Tabs', { screen: 'Home' });
    }
  };

  return (
    <SafeAreaView className="flex-1">
      <View className="relative flex-1">
        {/* Background Image */}
        <Image
          source={require('@/assets/images/login-bg.png')}
          className="absolute h-full w-full"
          resizeMode="cover"
        />

        <View className="align-center flex-1 justify-start px-5">
          <View className="mb-28 items-center">
            <Image
              source={require('@/assets/images/spark.png')}
              className="mb-4 w-1/2"
              resizeMode="contain"
            />
          </View>

          <Text className="mb-6 text-center text-2xl font-bold text-white">LOG IN</Text>

          {/* Email Field */}
          <View className="mb-4 flex-row items-center rounded-2xl border border-white bg-white/10 px-4 py-3">
            <Ionicons name="person-outline" size={20} color="white" />
            <Controller
              control={control}
              name="email"
              rules={{ required: 'Email or phone is required' }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  placeholder="Email or Phone Number"
                  placeholderTextColor="#fff"
                  className="ml-3 flex-1 text-white"
                  value={value}
                  onBlur={onBlur}
                  onChangeText={onChange}
                />
              )}
            />
          </View>
          {errors.email && <Text className="mb-2 ml-2 text-red-400">{errors.email.message}</Text>}

          {/* Password Field */}
          <View className="mb-2 flex-row items-center rounded-2xl border border-white bg-white/10 px-4 py-3">
            <Ionicons name="lock-closed-outline" size={20} color="white" />
            <Controller
              control={control}
              name="password"
              rules={{ required: 'Password is required' }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  placeholder="Password"
                  placeholderTextColor="#fff"
                  secureTextEntry
                  className="ml-3 flex-1 text-white"
                  value={value}
                  onBlur={onBlur}
                  onChangeText={onChange}
                />
              )}
            />
          </View>
          {errors.password && (
            <Text className="mb-2 ml-2 text-red-400">{errors.password.message}</Text>
          )}

          <Text
            className="my-2 text-right text-sm text-white"
            onPress={() => router.push('ForgotPassword')}>
            Forgot Password
          </Text>

          {/* Submit Button */}
          <View className="items-center justify-center">
            <LinearGradient
              colors={[Colors.light.blue700, Colors.light.blue300]}
              className="m-4 w-2/3"
              style={{ borderRadius: 10 }}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}>
              <Pressable className="items-center py-3" onPress={handleSubmit(onSubmit)}>
                <Text className="text-lg font-bold text-white">SIGN IN</Text>
              </Pressable>
            </LinearGradient>
          </View>

          {/* Social Login */}
          <View className="mb-6 flex-row justify-center space-x-6">
            <Pressable>
              <Image source={require('@/assets/images/fb.png')} className="aspect-square h-16" />
            </Pressable>
            <Pressable>
              <Image source={require('@/assets/images/insta.png')} className="aspect-square h-16" />
            </Pressable>
            <Pressable>
              <Image
                source={require('@/assets/images/google.png')}
                className="m-2 aspect-square h-12"
              />
            </Pressable>
          </View>

          {/* Register Link */}
          <Text className="text-center text-sm text-white">
            You do not have an account?{' '}
            <Text
              className="font-semibold text-blue-300"
              onPress={() => router.replace('Register')}>
              Register
            </Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
