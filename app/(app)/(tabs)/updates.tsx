import { updatesList } from "@/components/data/data";
import { View, Text } from "@/components/Themed";
import UpdatesHeader from "@/components/updates/UpdatesHeader";
import Colors from "@/constants/Colors";
import { AntDesign } from "@expo/vector-icons";
import { Box, HStack, VStack, Text as RNText } from "@gluestack-ui/themed";
import React from "react";
import { FlatList, StatusBar, useColorScheme ,Image} from "react-native";

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
            <Image
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

        <RNText color="$secondary300" mt={10}>View updates</RNText>
        <Box>
          <FlatList 
          keyExtractor={(_,index)=>index.toString()}
          data={updatesList}
          renderItem={({item})=>(
            <HStack my={10} gap={10}>
              <Image
              source={{uri:item.userProfileImg}}
              style={{width:50,height:50,borderRadius:100}}
              
              />
              <VStack gap={2} mt={5}>
                <Text fontSize={'$lg'} bold>{item.userName}</Text>
                <RNText fontSize={'$sm'} color="$secondary300">32 minutes ago</RNText>
              </VStack>
            </HStack>
          )}
          />
        </Box>
      </Box>
    </View>
  );
};

export default Page;
