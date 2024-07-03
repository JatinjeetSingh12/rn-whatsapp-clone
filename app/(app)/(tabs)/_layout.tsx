import React from "react";
import { Stack, Tabs } from "expo-router";
import CustomBottomNavigationBar from "@/components/custom/CustomBottomNavigationBar";
import { Text, View } from "@/components/Themed";
import { useColorScheme } from "react-native";
import Colors from "@/constants/Colors";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { HStack } from "@gluestack-ui/themed";
import { Feather, MaterialIcons, SimpleLineIcons } from "@expo/vector-icons";

const authLayout = () => {
  const colorScheme = useColorScheme();

  const { top } = useSafeAreaInsets();

  return (
    <Tabs
      initialRouteName="chats"
      tabBar={(props) => <CustomBottomNavigationBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="chats"
      />
      <Tabs.Screen name="updates" />
      <Tabs.Screen name="communities" />
      <Tabs.Screen name="calls" />
    </Tabs>
  );
};

export default authLayout;
