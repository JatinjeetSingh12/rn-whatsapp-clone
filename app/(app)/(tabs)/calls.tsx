import CallsHeader from "@/components/calls/CallsHeader";
import CallsItem from "@/components/calls/CallsItem";
import ChatItem from "@/components/chats/ChatItem";
import { callsList } from "@/components/data/data";
import { View, Text } from "@/components/Themed";
import Colors from "@/constants/Colors";
import { AntDesign } from "@expo/vector-icons";
import { Box, Divider ,Text as RNText} from "@gluestack-ui/themed";
import React from "react";
import { FlatList, StatusBar, useColorScheme } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Page = () => {
  const colorScheme = useColorScheme();

  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor={Colors[colorScheme ?? "light"].background} />


      <CallsHeader />
      <Box mt={5}>
        <FlatList
          data={callsList}
          ListFooterComponent={() => (
            <Box mt={10}>
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
                    You personal calls are{" "}
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
           <CallsItem 
           callPicked={item.callPicked}
           image={item.userProfileImg}
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