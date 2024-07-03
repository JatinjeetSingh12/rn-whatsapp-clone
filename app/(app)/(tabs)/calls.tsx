import { View, Text } from "@/components/Themed";
import Colors from "@/constants/Colors";
import React from "react";
import { StatusBar, useColorScheme } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Page = () => {
  const colorScheme = useColorScheme();

  return (
    <SafeAreaView edges={["top"]} style={{ flex: 1 }}>
      <StatusBar backgroundColor={Colors[colorScheme ?? "light"].background} />

      <View flex={1}>
      </View>
    </SafeAreaView>
  );
};

export default Page;