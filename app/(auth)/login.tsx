import { View, Text } from "@/components/Themed";
import Colors from "@/constants/Colors";
import { AntDesign } from "@expo/vector-icons";
import {
  Box,
  Center,
  Input,
  InputField,
  HStack,
  Button,
  ButtonText,
} from "@gluestack-ui/themed";
import { router } from "expo-router";
import React from "react";
import { StatusBar, useColorScheme } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Page = () => {

  const colorScheme = useColorScheme();



  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor={Colors[colorScheme ?? "light"].background} />
      <View  flex={1}>
        <Box gap={10} flex={1}>
          <Center w={'85%'}  alignSelf="center" mt={20} gap={10}>
            <Text textAlign="center" bold fontSize={"$xl"}>Enter your phone number</Text>
            <Text  fontSize={'$md'} textAlign="center" >WhatsApp will need to verify your phone number.</Text>
          </Center>
          <Box gap={10} w={"75%"} alignSelf="center">
            <Input
              variant="underlined"
              borderColor={Colors[colorScheme ?? "light"].tabIconSelected}
              w={"100%"}
              alignItems="center"
            >
              <InputField
                flex={1}
                textAlign="center"
                value="India"
                color={Colors.dark.tabIconSelected}
                editable={false}
              />
              <AntDesign
                name="caretdown"
                size={14}
                color={Colors.dark.tabIconSelected}
              />
            </Input>
            <HStack justifyContent="space-between">
              <Input
                variant="underlined"
                borderColor={Colors[colorScheme ?? "light"].tabIconSelected}
                w={"20%"}
                alignItems="center"
                gap={1}
              >
                <AntDesign name="plus" size={13} color="grey" />
                <InputField
                  flex={1}
                  value="91"
                  color={Colors.dark.tabIconSelected}
                  editable={false}
                />
              </Input>

              <Input
                variant="underlined"
                borderColor={Colors[colorScheme ?? "light"].tabIconSelected}
                w={"70%"}
                alignItems="center"
              >
                <InputField
                  flex={1}
                  value=""
                  color={Colors.dark.tabIconSelected}
                  placeholder="Phone Number"
                />
              </Input>
            </HStack>
          </Box>
        </Box>
        <Button
        onPress={()=>{router.push('/mobile-verify')}}
          bg={Colors[colorScheme ?? "light"].tabIconSelected}
          m={20}
          $active-opacity={0.7}
          borderRadius={"$full"}
        >
          <ButtonText>Next</ButtonText>
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default Page;
