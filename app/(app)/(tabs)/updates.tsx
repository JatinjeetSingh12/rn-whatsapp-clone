import { View, Text } from "@/components/Themed";
import UpdatesHeader from "@/components/updates/UpdatesHeader";
import Colors from "@/constants/Colors";
import { AntDesign } from "@expo/vector-icons";
import { Box, HStack, VStack, Text as RNText } from "@gluestack-ui/themed";
import React from "react";
import { StatusBar, useColorScheme } from "react-native";
import FastImage from "react-native-fast-image";
import { SafeAreaView } from "react-native-safe-area-context";

const Page = () => {
  const colorScheme = useColorScheme();

  return (
    <View flex={1}>
      <StatusBar backgroundColor={Colors[colorScheme ?? "light"].background} />

      <UpdatesHeader />
      <Box mx={10}>
        <Text fontSize={"$xl"} bold my={20}>
          Status
        </Text>

        <HStack gap={10} >
          <Box  position="relative">
            <FastImage
              source={{
                uri: "https://qph.cf2.quoracdn.net/main-qimg-190bef3af6e815401e25f6a97c33df8b-lq",
              }}
              style={{
                width: 45,
                height: 45,
                borderRadius: 100,
              }}
            />
            <Box
              position="absolute"
              rounded={"$full"}
              right={0}
              bottom={-6}
              bg={"$black"}
            >
              <AntDesign
                name="pluscircle"
                color={Colors.dark.tabIconSelected}
                size={20}
              />
            </Box>
          </Box>
          <VStack >
            <Text bold>My Status</Text>
            <RNText fontSize={"$sm"} textAlign="center" color={"$secondary300"}>
              Tap to add status update
            </RNText>
          </VStack>
        </HStack>
      </Box>
    </View>
  );
};

export default Page;
