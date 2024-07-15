import { View, Text } from "@/components/Themed";
import ChatHeader from "@/components/chats/ChatHeader";
import { chatsList } from "@/components/data/data";
import Colors from "@/constants/Colors";
import { AntDesign } from "@expo/vector-icons";
import { Box, Divider, HStack, Text as RNText } from "@gluestack-ui/themed";
import { StatusBar, useColorScheme, FlatList } from "react-native";
import FastImage from "react-native-fast-image";

const Page = () => {
  const colorScheme = useColorScheme();

  return (
    <View flex={1}>
      <StatusBar backgroundColor={Colors[colorScheme ?? "light"].background} />

      <ChatHeader />

      <Box mt={5}>
        <FlatList
          data={chatsList}
          ListFooterComponent={() => (
            <Box>
              <Divider bg={"$secondary600"} />
              <Box h={200}>
                <Box
                  gap={2}
                  mt={8}
                  flexDirection="row"
                  justifyContent="center"
                  alignItems="center"
                >
                  <AntDesign name="lock" size={12} color="#B0B0B0" />
                  <RNText
                    fontSize={"$xs"}
                    textAlign="center"
                    color={"$secondary300"}
                  >
                    You personal messages are{" "}
                    <RNText
                      fontSize={"$xs"}
                      color={Colors.light.tabIconSelected}
                    >
                      end-to-end encrypted
                    </RNText>{" "}
                  </RNText>
                </Box>
              </Box>
            </Box>
          )}
          renderItem={({ item }) => (
            <Box m={10} flexDirection="row">
              <HStack  gap={10} alignItems="center" flex={1}>
                <Box w={50} h={50}>
                  <FastImage
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: 100,
                    }}
                    source={{ uri: item.userProfileImg }}
                  />
                </Box>
                <Box flex={1} >
                  <HStack flex={1} justifyContent="space-between">
                    <Text bold>{item.userName}</Text>
                    <Text fontSize={"$xs"}>{item.time}</Text>
                  </HStack>
                  <RNText fontSize={"$sm"}   numberOfLines={1} color={"$secondary300"}>
                    {item.latestMessage }
                  </RNText>
                </Box>
              </HStack>
            </Box>
          )}
        />
      </Box>
    </View>
  );
};

export default Page;