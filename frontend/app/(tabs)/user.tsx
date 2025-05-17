import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { useAuth } from "@/context/AuthProvider";
import { AntDesign, FontAwesome, MaterialIcons } from "@expo/vector-icons";
import Svg, { Path } from "react-native-svg";
import { StatusBar } from "expo-status-bar";
import CustomButton from "@/components/ui/CustomButton";
import { useIsFocused } from "@react-navigation/native";

const User = () => {
  const router = useRouter();
  const { isLogged, user } = useAuth();
  useEffect(() => {
    if (!isLogged) {
      router.push("/(auth)/login");
    }
  }, []);
  const isFocused = useIsFocused();
  return (
    <SafeAreaProvider>
      {isFocused && (
        <StatusBar animated={true} backgroundColor="lightgrey" style="dark" />
      )}
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
          <CustomButton
            icon={
              <Svg width={20} height={20} viewBox="0 0 20 20" fill="none">
                <Path
                  d="M17.875 1.83333H16.5V0.458333C16.5 0.205333 16.2947 0 16.0417 0C15.7887 0 15.5833 0.205333 15.5833 0.458333V1.83333H6.41667V0.458333C6.41667 0.205333 6.21133 0 5.95833 0C5.70533 0 5.5 0.205333 5.5 0.458333V1.83333H4.125C1.85075 1.83333 0 3.68408 0 5.95833V17.875C0 20.1493 1.85075 22 4.125 22H7.79167C8.04467 22 8.25 21.7947 8.25 21.5417C8.25 21.2887 8.04467 21.0833 7.79167 21.0833H4.125C2.35583 21.0833 0.916667 19.6442 0.916667 17.875V8.25H21.5417C21.7947 8.25 22 8.04467 22 7.79167V5.95833C22 3.68408 20.1493 1.83333 17.875 1.83333ZM21.0833 7.33333H0.916667V5.95833C0.916667 4.18917 2.35583 2.75 4.125 2.75H17.875C19.6442 2.75 21.0833 4.18917 21.0833 5.95833V7.33333ZM18.0877 10.7543L11.0229 17.8191C10.417 18.425 10.0833 19.2307 10.0833 20.0878V21.5417C10.0833 21.7947 10.2887 22 10.5417 22H11.9955C12.8526 22 13.6583 21.6663 14.2642 21.0604L21.329 13.9957C21.7617 13.563 22 12.9873 22 12.375C22 11.7627 21.7617 11.187 21.329 10.7543C20.4646 9.889 18.9521 9.889 18.0877 10.7543ZM20.68 13.3467L13.6152 20.4114C13.1826 20.8441 12.6069 21.0824 11.9946 21.0824H10.9991V20.0869C10.9991 19.4746 11.2374 18.8998 11.6701 18.4663L18.7348 11.4015C19.2537 10.8827 20.1602 10.8827 20.6791 11.4015C20.9385 11.6609 21.0815 12.0065 21.0815 12.3741C21.0815 12.7417 20.9394 13.0863 20.68 13.3467ZM4.58242 12.3741C4.58242 12.1211 4.78775 11.9157 5.04075 11.9157H13.2917C13.5447 11.9157 13.75 12.1211 13.75 12.3741C13.75 12.6271 13.5447 12.8324 13.2917 12.8324H5.04167C4.78867 12.8324 4.58242 12.6271 4.58242 12.3741ZM9.16575 16.9574C9.16575 17.2104 8.96042 17.4158 8.70742 17.4158H5.04167C4.78867 17.4158 4.58333 17.2104 4.58333 16.9574C4.58333 16.7044 4.78867 16.4991 5.04167 16.4991H8.70833C8.96133 16.4991 9.16667 16.7044 9.16667 16.9574H9.16575Z"
                  fill="black"
                />
              </Svg>
            }
            text="Bookings"
            className="mb-6 w-[48%]"
          />
          <CustomButton
            icon={<MaterialIcons name="policy" size={20} />}
            text="Privacy Policy"
            className="mb-6 w-[48%]"
          />
          <CustomButton
            icon={<MaterialIcons name="privacy-tip" size={20} />}
            text="Terms of use"
            className="mb-6 w-[48%]"
          />
          <CustomButton
            icon={<MaterialIcons name="logout" size={20} color="red" />}
            text="Logout"
            textColor="text-red-500"
            className="mb-6 w-[48%]"
          />
          {isLogged && user!.role === "manager" ? (
            <CustomButton
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
          ) : null}
          {isLogged && user!.role === "manager" ? (
            <CustomButton
              icon={<MaterialIcons name="bar-chart" size={20} color="black" />}
              text="Revenue"
              className="bg-green-500 mb-6 w-[48%]"
              textColor="text-black"
            />
          ) : null}
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default User;
