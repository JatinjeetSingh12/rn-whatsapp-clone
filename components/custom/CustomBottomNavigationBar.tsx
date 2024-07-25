import { View, Text } from "@/components/Themed";
import Colors from "@/constants/Colors";
import { AntDesign, MaterialCommunityIcons, SimpleLineIcons } from "@expo/vector-icons";
import { Center, HStack, Pressable } from "@gluestack-ui/themed";
import { Link } from "expo-router";
import React, { FC } from "react";
import { useColorScheme } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = {
  state: any;
};

const data = [
  {
    text: "Updates",
    iconName: "update",
    screenName: "updates",
    center: false
  },
  {
    text: "Chats",
    iconName: "android-messages",
    screenName: "chats",
    center: false
  },
  {
    text: "Calls",
    iconName: "phone-outline",
    screenName: "calls",
    center: true
  },
  {
    text: "Calls",
    iconName: "phone-outline",
    screenName: "calls",
    center: false
  },
  {
    text: "settings",
    iconName: "phone-outline",
    screenName: "calls",
    center: false
  },
];

const CustomBottomNavigationBar: FC<Props> = ({ state }) => {
  const colorScheme = useColorScheme();
  const currentTheme = Colors[colorScheme || "light"];

  const TabIcon: FC<{
    text: string;
    index: number;
    iconName: any;
    center:boolean
    screenName: string;
  }> = ({ text, index, iconName, screenName,center }) => {
    const isSelected = state.index === index;

    return (
      <Link style={{position:'relative'}} href={`/${screenName}`} asChild key={index}>
        {center?
        
        <Pressable
        position="absolute"
        justifyContent="center"
        alignItems="center"
        rounded={'$full'}
        w={60}
        h={60}
        bottom={30}
        bg={'$red500'}
        shadowColor="$black"
        shadowOffset={{width:0,height:10}}
        shadowOpacity={0.25}
        shadowRadius={10}
        >

          <AntDesign name="plus" size={24} color="white" />
        </Pressable>
        :
        <Pressable
        justifyContent="center"
        alignItems="center"
        >
          {text === 'settings' ?
            <SimpleLineIcons name="settings" size={18} color="black" /> :
            <MaterialCommunityIcons
            name={iconName}
            size={24}
            color={isSelected?'red':'grey'}
            />
          }
        </Pressable>
          }
      </Link>
    );
  };

  return (
    <SafeAreaView edges={['bottom']} style={{
      backgroundColor: 'white'
      // backgroundColor:'red'
    }}
    >
      <HStack position="relative" bg="white" mt={5} w="$full" justifyContent="space-around">
        {data.map((item, index) => (
          <TabIcon
            key={index}
            iconName={item.iconName}
            index={index}
            text={item.text}
            screenName={item.screenName}
            center={item.center}
          />
        ))}
      </HStack>
    </SafeAreaView>
  );
};

export default CustomBottomNavigationBar;
