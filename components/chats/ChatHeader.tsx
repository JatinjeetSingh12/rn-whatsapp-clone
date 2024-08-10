import { useColorScheme,Image } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  HStack,
  Input,
  InputSlot,
  InputField,
  Box,
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
    <View pt={top + 8}>
      <HStack w={'90%'} alignSelf="center" alignItems="center" justifyContent="space-between">
        <Text fontSize={"$2xl"} bold>
          Talk Hub
        </Text>
            <Image 
            source={{uri:'https://cdn.pixabay.com/photo/2024/06/24/04/05/woman-8849047_1280.jpg'}}
            style={{width:35,height:35,borderRadius:100}}
            resizeMode="cover"

            />
      </HStack>
      <Input 
      alignSelf="center"
      w={'90%'}
        mt={18}
        borderWidth={0}
        bg={'$white'}
        rounded={"$xl"}
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
