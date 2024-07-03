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


const ChatHeader = () => {
  const { top } = useSafeAreaInsets();

  const colorScheme = useColorScheme();

  return (
    <View px={10} pt={top + 8}>
      <HStack justifyContent="space-between">
        <Text fontSize={"$2xl"} bold>
          WhatsApp
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
          <SimpleLineIcons
            name="options-vertical"
            size={22}
            color={Colors[colorScheme ?? "light"].text}
          />
        </HStack>
      </HStack>
      <Input
        mt={18}
        borderWidth={0}
        bg={Colors[colorScheme ?? "light"].searchBar}
        rounded={"$full"}
      >
        <InputSlot>
          <AntDesign
            name="search1"
            size={24}
            color={Colors[colorScheme ?? "light"].text}
            style={{ paddingLeft: 10 }}
          />
        </InputSlot>
        <InputField flex={1} placeholder="Sarch" />
      </Input>
    </View>
  );
};

export default ChatHeader;
