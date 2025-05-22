import React, { useState } from "react";
import { View, Text, ScrollView, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native-gesture-handler";

const dates = [
  { day: "Sun", date: "15 Sep" },
  { day: "Mon", date: "16 Sep" },
  { day: "Tue", date: "17 Sep" },
  { day: "Wed", date: "18 Sep" },
];

type SlotColor = "red" | "blue" | "white";

const SlotBar = ({
  initialSlots,
  onChange,
}: {
  initialSlots: SlotColor[];
  onChange?: (updated: SlotColor[]) => void;
}) => {
  const [slots, setSlots] = useState<SlotColor[]>(initialSlots);

  const handlePress = (index: number) => {
    setSlots((prev) => {
      const newSlots = [...prev];
      if (newSlots[index] === "white") {
        newSlots[index] = "blue"; // select
      } else if (newSlots[index] === "blue") {
        newSlots[index] = "white"; // deselect
      }
      // red is not clickable
      onChange?.(newSlots);
      return newSlots;
    });
  };

  const colorMap = {
    red: "bg-red-600",
    blue: "bg-blue-500",
    white: "bg-white",
  };

  return (
    <View className="flex-row overflow-hidden rounded-full border border-blue-500">
      {slots.map((color, i) => (
        <Pressable
          key={i}
          onPress={() => {
            if (color !== "red") handlePress(i);
          }}
          className={`h-10 flex-1 ${colorMap[color]}`}
          style={{
            borderLeftWidth: i === 0 ? 0 : 1,
            borderColor: "white",
          }}
        />
      ))}
    </View>
  );
};

export default function VenueBooking() {
  const [activeDayPart, setActiveDayPart] = useState<"Morning" | "Evening">(
    "Evening"
  );
  const [selectedDate, setSelectedDate] = useState("15 Sep");

  return (
    <SafeAreaView className="flex-1 bg-white">
      <LinearGradient
        colors={["#93B2D8", "#FFFFFF"]}
        className="px-4 pb-4 pt-6"
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
      >
        <View className="flex-row items-center space-x-2 mb-2">
          <View>
            <Text className="text-lg font-bold">San Bong Thong Nhat</Text>
            <Text className="text-gray-500 text-sm">BOOKING</Text>
          </View>
        </View>
        <Text className="font-bold text-lg">FORMAT</Text>
        <View className="flex-row space-x-2 my-2">
          <Text className="bg-blue-900 text-white px-4 py-2 rounded-full">
            Pickleball
          </Text>
          <Text className="border border-green-500 text-green-500 px-4 py-2 rounded-full">
            Food service
          </Text>
        </View>
      </LinearGradient>

      <ScrollView className="flex-1 px-4">
        <ScrollView horizontal className="flex-row mt-4 space-x-4">
          {dates.map(({ day, date }) => (
            <TouchableOpacity
              key={date}
              onPress={() => setSelectedDate(date)}
              className={`items-center px-4 py-2 rounded-lg ${
                selectedDate === date ? "bg-blue-900" : "bg-gray-200"
              }`}
            >
              <Text
                className={`font-bold ${
                  selectedDate === date ? "text-white" : "text-black"
                }`}
              >
                {day}
              </Text>
              <Text
                className={`${
                  selectedDate === date ? "text-white" : "text-black"
                }`}
              >
                {date}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <View className="my-4 p-3 border rounded-lg border-gray-300 flex-row items-center space-x-2">
          <View>
            <Text className="font-semibold text-sm">Save 20.000vnd</Text>
            <Text className="text-xs text-gray-500">On all slots</Text>
          </View>
        </View>

        <View className="flex-row justify-between px-4">
          {["Morning", "Evening"].map((part) => (
            <Pressable
              key={part}
              onPress={() => setActiveDayPart(part as "Morning" | "Evening")}
              className={`px-6 py-2 rounded-full ${
                activeDayPart === part ? "bg-blue-900" : "bg-gray-200"
              }`}
            >
              <Text
                className={`font-bold ${
                  activeDayPart === part ? "text-white" : "text-black"
                }`}
              >
                {part}
              </Text>
            </Pressable>
          ))}
        </View>

        <View className="mt-6 space-y-2">
          <Text className="text-sm text-black">1pm - 8pm</Text>
          <SlotBar
            initialSlots={["white", "white", "red", "red", "white", "white"]}
          />

          <Text className="text-sm text-black">9pm - 12pm</Text>
          <SlotBar
            initialSlots={["blue", "blue", "white", "red", "red", "white"]}
          />
        </View>
      </ScrollView>

      <View className="border-t border-gray-300">
        <View className="bg-blue-400 px-4 py-2 flex-row items-center space-x-2">
          <Text className="text-white text-sm">
            Offer applied You are saving 20.000vnd
          </Text>
        </View>
        <View className="bg-blue-900 flex-row justify-between items-center px-4 py-3">
          <View>
            <Text className="text-white font-bold text-lg">
              80.000vnd{" "}
              <Text className="line-through text-gray-400 text-base">
                100.000vnd
              </Text>
            </Text>
            <Text className="text-xs text-white">9 pm - 10 pm • 2 Slots</Text>
          </View>
          <Text className="text-white font-bold text-base">PROCEED →</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
