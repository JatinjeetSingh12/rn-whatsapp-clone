import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { ScreenStack } from 'react-native-screens'

const appLayout = () => {
  return (
    <Stack screenOptions={{headerShown:false }}>
        <Stack.Screen name='(tabs)' />
    </Stack>
  )
}

export default appLayout