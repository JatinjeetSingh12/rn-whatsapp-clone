import React from 'react'
import { Box,  Text, HStack } from '@gluestack-ui/themed'
import { Image } from '@gluestack-ui/themed'

import { AntDesign, Ionicons } from '@expo/vector-icons'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const ChatScreenHeader = () => {
  const { top } = useSafeAreaInsets()
  return (
    <Box borderBottomLeftRadius={40} justifyContent='center' borderBottomRightRadius={40} pt={top} bg='$white'>
      <Box alignItems='center' px={10} mb={25} flexDirection='row' justifyContent='space-between'>

        <HStack alignItems='center' gap={15}>
          
          <Ionicons name="arrow-back" size={24} color="black" />
          <HStack alignItems='center' gap={8}>
            <Image alt='profile-image' style={{width:40,height:40,borderRadius:100}}  source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqGK3diR3Zi-mnOXEaj-3ewmFyRYVxGzVzZw&s"}}  />
            <Box>
            <Text bold color='black'>Sebastian Rudiger</Text>
            <Text color='green' fontSize={'$sm'}>Online</Text>
            </Box>
          </HStack>
        </HStack>
        <HStack gap={20}>
          <AntDesign name="videocamera" size={24} color="grey" />
          <Ionicons name="call-outline" size={24} color="grey" />
        </HStack>
      </Box>
    </Box>
  )
}

export default ChatScreenHeader