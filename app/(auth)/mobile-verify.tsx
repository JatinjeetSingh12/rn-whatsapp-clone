import { View, Text } from "@/components/Themed";
import Colors from "@/constants/Colors";
import {
  Box,
  Button,
  ButtonText,
  Center,
  Input,
  InputField,
} from "@gluestack-ui/themed";
import { router } from "expo-router";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Page = () => {

    const [color,setColor] = useState("grey")

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View gap={10} flex={1}>
        <Box flex={1} gap={15}>
          <Center alignSelf="center" gap={15} mt={30} w={"90%"}>
            <Text fontSize={"$sm"} textAlign="center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
              natus.
            </Text>
            <Text fontSize={"$sm"} textAlign="center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
              natus.
            </Text>
          </Center>
          <Box flexDirection="row" alignSelf="center" w={"40%"}>
            <Input
              variant="underlined"
                borderColor={color}
              w={"100%"}
              alignItems="center"
              gap={1}
            >
              <InputField
                textAlign="center"
                placeholder="--- --- ---   --- --- --- "
                flex={1}
                color={Colors.dark.tabIconSelected}
                onFocus={()=>{setColor(Colors.dark.tabIconSelected)}}
              />
            </Input>
          </Box>
        </Box>
        <Button
          // onPress={()=>{router.push('/mobile-verify')}}
          bg={Colors.dark.tabIconSelected}
          m={20}
          $active-opacity={0.7}
          borderRadius={"$full"}
        >
          <ButtonText>Verify</ButtonText>
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default Page;
