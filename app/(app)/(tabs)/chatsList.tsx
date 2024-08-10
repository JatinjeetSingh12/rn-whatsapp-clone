import { View } from '@gluestack-ui/themed';
import ChatHeader from "@/components/chats/ChatHeader";
import ChatItem from "@/components/chats/ChatItem";
import { chatsList } from "@/components/data/data";
import Colors from "@/constants/Colors";
import { AntDesign } from "@expo/vector-icons";
import { Box, Divider, HStack, Text as RNText } from "@gluestack-ui/themed";
import { StatusBar, useColorScheme, FlatList, Platform, Image } from "react-native";

const Page = () => {
  const colorScheme = useColorScheme();

  return (
    <View bg={'#FAFAFA'} flex={1}>
      <StatusBar backgroundColor={Colors[colorScheme ?? "light"].background} />

      <ChatHeader />

      <Box mt={5}>
        <FlatList
          data={chatsList}
          ListFooterComponent={() => (
              <Box h={200} />
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