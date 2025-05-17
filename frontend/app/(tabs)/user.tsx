import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { useAuth } from "@/context/AuthProvider";
import { AntDesign, FontAwesome, MaterialIcons } from "@expo/vector-icons";
import Svg, { Path } from "react-native-svg";
import { StatusBar } from "expo-status-bar";

const User = () => {
  const router = useRouter();
  const { isLogged, user } = useAuth();
  useEffect(() => {
    if (!isLogged) {
      router.push("/(auth)/login");
    }
  }, []);
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        {/* Top Profile Card */}
        <View className="bg-gray-300 rounded-b-3xl p-6 items-center shadow-md">
          <View className="flex-row justify-end w-full gap-4">
            <TouchableOpacity>
              <AntDesign name="message1" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
              <FontAwesome name="bell-o" size={24} color="black" />
            </TouchableOpacity>
          </View>

          <Image
            source={{ uri: "https://picsum.photos/200/300" }}
            className="w-20 h-20 rounded-full my-4"
          />

          <Text className="text-lg font-semibold text-black">Van Lieu</Text>

          <View className="flex-row mt-4 gap-8">
            <View className="items-center">
              <Text className="text-base font-semibold text-black">8</Text>
              <Text className="text-sm text-gray-500">Post</Text>
            </View>
            <View className="items-center">
              <Text className="text-base font-semibold text-black">96</Text>
              <Text className="text-sm text-gray-500">Follower</Text>
            </View>
            <View className="items-center">
              <Text className="text-base font-semibold text-black">72</Text>
              <Text className="text-sm text-gray-500">Following</Text>
            </View>
          </View>
        </View>

        {/* Menu Buttons */}
        <View className="px-4 mt-10 flex-row flex-wrap gap-4">
          <Button
            icon={<MaterialIcons name="support-agent" size={20} />}
            text="Support"
            className="mb-6 w-[48%]"
          />
          <Button
            icon={<MaterialIcons name="policy" size={20} />}
            text="Privacy Policy"
            className="mb-6 w-[48%]"
          />
          <Button
            icon={<MaterialIcons name="privacy-tip" size={20} />}
            text="Terms of use"
            className="mb-6 w-[48%]"
          />
          <Button
            icon={<MaterialIcons name="logout" size={20} color="red" />}
            text="Logout"
            textColor="text-red-500"
            className="mb-6 w-[48%]"
          />
          <Button
            icon={
              <Svg width="25" height="22" viewBox="0 0 25 22" fill="none">
                <Path
                  d="M20.3125 0H4.6875C2.10312 0 0 2.46767 0 5.5V16.5C0 19.5323 2.10312 22 4.6875 22H19.7917C22.25 22 25 19.6472 25 16.5V5.5C25 2.46767 22.8969 0 20.3125 0ZM23.9583 14.6667H21.3542C21.0667 14.6667 20.8333 14.3917 20.8333 14.0556V7.94444C20.8333 7.60833 21.0667 7.33333 21.3542 7.33333H23.9583V14.6667ZM12.5 14.6667C10.7771 14.6667 9.375 13.0216 9.375 11C9.375 8.97844 10.7771 7.33333 12.5 7.33333C14.2229 7.33333 15.625 8.97844 15.625 11C15.625 13.0216 14.2229 14.6667 12.5 14.6667ZM1.04167 7.33333H3.64583C3.93333 7.33333 4.16667 7.60833 4.16667 7.94444V14.0556C4.16667 14.3917 3.93333 14.6667 3.64583 14.6667H1.04167V7.33333ZM1.04167 16.5V15.8889H3.64583C4.50729 15.8889 5.20833 15.0663 5.20833 14.0556V7.94444C5.20833 6.93367 4.50729 6.11111 3.64583 6.11111H1.04167V5.5C1.04167 3.14111 2.67708 1.22222 4.6875 1.22222H11.9792V6.17344C9.92917 6.47778 8.33333 8.514 8.33333 11C8.33333 13.486 9.92917 15.5222 11.9792 15.8266V20.7778H4.6875C2.67708 20.7778 1.04167 18.8589 1.04167 16.5ZM19.7917 20.7778H13.0208V15.8266C15.0708 15.5222 16.6667 13.486 16.6667 11C16.6667 8.514 15.0708 6.47778 13.0208 6.17344V1.22222H20.3125C22.3229 1.22222 23.9583 3.14111 23.9583 5.5V6.11111H21.3542C20.4927 6.11111 19.7917 6.93367 19.7917 7.94444V14.0556C19.7917 15.0663 20.4927 15.8889 21.3542 15.8889H23.9583V16.5C23.9583 18.909 21.7188 20.7778 19.7917 20.7778Z"
                  fill="black"
                />
              </Svg>
            }
            text="Pitch Manager"
            className="bg-blue-900 mb-6 w-[48%]"
            textColor="text-black"
          />
          <Button
            icon={<MaterialIcons name="bar-chart" size={20} color="black" />}
            text="Revenue"
            className="bg-green-500 mb-6 w-[48%]"
            textColor="text-black"
          />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

function Button({ icon, text, className = "", textColor = "text-black" }: any) {
  return (
    <TouchableOpacity
      className={
        className + " flex-row items-center p-4 bg-white rounded-xl shadow-lg"
      }
    >
      <View className="mr-3">{icon}</View>
      <Text className={`text-base font-medium ${textColor}`}>{text}</Text>
    </TouchableOpacity>
  );
}

export default User;
