import { View, Text } from "@/components/Themed";
import ChatHeader from "@/components/chats/ChatHeader";
import ChatItem from "@/components/chats/ChatItem";
import MessageDummy from "@/components/custom/MessageDummy";
import { chatsList } from "@/components/data/data";
import Colors from "@/constants/Colors";
import { AntDesign } from "@expo/vector-icons";
import { Box, Divider, HStack, Text as RNText } from "@gluestack-ui/themed";
import { StatusBar, useColorScheme, FlatList, Platform, Image } from "react-native";

const Page = () => {
  const colorScheme = useColorScheme();

  return (
    <View flex={1}>
      <StatusBar backgroundColor={Colors[colorScheme ?? "light"].background} />

      <ChatHeader />

      {/* <MessageDummy>

        <FlatList keyExtractor={(_,index)=>index.toString()} data={Array.from({length:3})} renderItem={({})=>(<Text>Hello</Text>)} />
      </MessageDummy> */}

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
            <ChatItem
              image={item.userProfileImg}
              latestMessage={item.latestMessage}
              name={item.userName}
              time={item.time}
            />
          )}
        />
      </Box>
    </View>
  );
};

export default Page;