import { StyleSheet, Image, Platform, Text } from "react-native";

import { IconSymbol } from "@/components/ui/IconSymbol";
import { View } from "react-native";

export default function TabTwoScreen() {
  return (
    <View style={styles.titleContainer}>
      <Text>Explore</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
