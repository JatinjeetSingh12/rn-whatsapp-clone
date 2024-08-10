import React from 'react'
import { Stack } from 'expo-router'

const appLayout = () => {
  return (
    <Stack initialRouteName='(tabs)' screenOptions={{headerShown:false }}>
        <Stack.Screen name='(tabs)' />
        <Stack.Screen  name='chatScreen' />
    </Stack>
  )
}

export default appLayout