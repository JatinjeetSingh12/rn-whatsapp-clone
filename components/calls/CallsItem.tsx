import { Image, useColorScheme } from 'react-native'
import React, { FC } from 'react'
import { Box, HStack, Text as RNText, useColorMode } from '@gluestack-ui/themed'
import { View, Text } from "@/components/Themed";
import { Feather, Ionicons } from '@expo/vector-icons';

type Props = {
    image: string;
    name: string,
    time: string,
    callPicked: boolean
}

const CallsItem: FC<Props> = ({ callPicked, time, name, image }) => {

    const colorScheme = useColorScheme()
    
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
                <HStack alignItems='center' justifyContent='space-between' flex={1} >
                    <Box flex={1} gap={4}>
                        <HStack alignItems='center' flex={1} justifyContent="space-between">
                            <Text fontSize={'$md'} bold>
                                {name}
                            </Text>
                        </HStack>
                        <HStack alignItems='center'>
                            <Feather name="arrow-down-left" size={16} color={callPicked ? "green" : "red"} />
                            <RNText fontSize={"$sm"} numberOfLines={1} color={"$secondary300"}>
                                {time}
                            </RNText>
                        </HStack>
                    </Box>
                    <Ionicons name="call-outline" size={24} color={colorScheme==="dark"?"white":"black"} />
                </HStack>
            </HStack>
        </Box>
    )
}

export default CallsItem