import React from "react";
import { Tabs } from "expo-router";
import CustomBottomNavigationBar from "@/components/custom/CustomBottomNavigationBar";



const authLayout = () => {

  return (
    <Tabs
      initialRouteName="chatsList"
      tabBar={(props) => <CustomBottomNavigationBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tabs.Screen name="updates" />
      <Tabs.Screen name="chatsList" />
      <Tabs.Screen name="add" />
      <Tabs.Screen name="calls" />
      <Tabs.Screen name="settings" />
    </Tabs>
  );
};

export default authLayout;