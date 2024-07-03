import React from "react";
import { Redirect, Stack } from "expo-router";

const authLayout = () => {

  const session = true;


  if(session){
    return <Redirect href={'/(app)/(tabs)/chats'} />
  }
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen   name="index" />
      <Stack.Screen name="login" />
      <Stack.Screen name="mobile-verify" />
    </Stack>
  );
};

export default authLayout;