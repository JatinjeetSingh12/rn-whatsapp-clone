import { useColorScheme } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  HStack,
  Input,
  InputSlot,
  InputField,
} from "@gluestack-ui/themed";
import {
  AntDesign,
  Feather,
  MaterialIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import { View,Text } from "@/components/Themed";


const CallsHeader = () => {
  const { top } = useSafeAreaInsets();

  const colorScheme = useColorScheme();

  return (
    <View px={10} pt={top + 8}>
      <HStack justifyContent="space-between">
        <Text fontSize={"$2xl"} bold>
          Calls
        </Text>
        <HStack alignItems="center" gap={23}>
          <MaterialIcons
            name="qr-code-scanner"
            size={24}
            color={Colors[colorScheme ?? "light"].text}
          />
          <Feather
            name="camera"
            size={24}
            color={Colors[colorScheme ?? "light"].text}
          />
          <Feather
            name="search"
            size={24}
            color={Colors[colorScheme ?? "light"].text}
          />
          <SimpleLineIcons
            name="options-vertical"
            size={22}
            color={Colors[colorScheme ?? "light"].text}
          />
        </HStack>
      </HStack>
    </View>
  );
};

export default CallsHeader;
