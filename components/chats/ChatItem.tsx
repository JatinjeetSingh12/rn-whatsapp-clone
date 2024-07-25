import { View, Text } from "@/components/Themed";
import { Box, Divider, HStack, Text as RNText } from "@gluestack-ui/themed";
import React, { FC } from 'react'
import { Image } from "react-native";

type Props = {
  name: string;
  image: string;
  latestMessage: string;
  time: string;

}

const ChatItem: FC<Props> = ({ image, latestMessage, name, time }) => {
  return (
    <Box m={10} flexDirection="row">
      <HStack gap={10} alignItems="center" flex={1}>
        <Box w={50} h={50}>
          <Image
            style={{
              width: "100%",
              height: "100%",
              borderRadius: 100,
            }}
            source={{ uri: image }}
          />
        </Box>
        <Box flex={1} >
          <HStack alignItems="center" flex={1} justifyContent="space-between">
            <Text fontSize={'$md'} bold>{name}</Text>
            <Text fontSize={"$xs"}>{time}</Text>
          </HStack>
          <RNText fontSize={"$sm"} numberOfLines={1} color={"$secondary300"}>
            {latestMessage}
          </RNText>
        </Box>
      </HStack>
    </Box>
  )
}

export default ChatItem