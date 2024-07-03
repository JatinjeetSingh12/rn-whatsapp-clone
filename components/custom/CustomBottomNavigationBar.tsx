import { View, Text } from "@/components/Themed";
import Colors from "@/constants/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Center, HStack, Pressable } from "@gluestack-ui/themed";
import { Link } from "expo-router";
import React, { FC } from "react";
import { useColorScheme } from "react-native";

type Props = {
  state: any;
};

const data = [
  {
    text: "Chats",
    iconName: "android-messages",
    screenName: "chats",
  },
  {
    text: "Updates",
    iconName: "update",
    screenName: "updates",
  },
  {
    text: "Communities",
    iconName: "account-group-outline",
    screenName: "communities",
  },
  {
    text: "Calls",
    iconName: "phone-outline",
    screenName: "calls",
  },
];

const CustomBottomNavigationBar: FC<Props> = ({ state }) => {
  const colorScheme = useColorScheme();
  const currentTheme = Colors[colorScheme || "light"];

  const TabIcon: FC<{
    text: string;
    index: number;
    iconName: any;
    screenName: string;
  }> = ({ text, index, iconName, screenName }) => {
    const isSelected = state.index === index;

    return (
      <Link href={`/${screenName}`} asChild key={index}>
        <Pressable
          gap={isSelected ? 5 : 3}
          justifyContent="center"
          alignItems="center"
        >
          <Center
            w={65}
            h={35}
            justifyContent="center"
            alignItems="center"
            rounded="$full"
            bg={isSelected ? currentTheme.tabIconSelected : "transparent"}
            elevation={isSelected ? 2 : 0}
          >
            <MaterialCommunityIcons
              name={iconName}
              size={24}
              color={currentTheme.text}
            />
          </Center>
          <Text
            textAlign="center"
            fontSize="$sm"
            color={isSelected ? currentTheme.tabIconSelected : currentTheme.text}
            fontWeight={isSelected ? "bold" : "normal"}
          >
            {text}
          </Text>
        </Pressable>
      </Link>
    );
  };

  return (
    <View>
      <HStack py={5} w="$full" justifyContent="space-around">
        {data.map((item, index) => (
          <TabIcon
            key={index}
            iconName={item.iconName}
            index={index}
            text={item.text}
            screenName={item.screenName}
          />
        ))}
      </HStack>
    </View>
  );
};

export default CustomBottomNavigationBar;
