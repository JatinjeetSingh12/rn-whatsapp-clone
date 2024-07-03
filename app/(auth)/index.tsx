import { View, Text } from "@/components/Themed";
import Colors from "@/constants/Colors";
import { Box, Button, ButtonText ,Center,Text as RNText} from "@gluestack-ui/themed";
import { router } from "expo-router";
import React from "react";
import { useColorScheme, Image } from "react-native";

const Page = () => {
  const colorScheme = useColorScheme();

  return (
    <View flex={1}>
      <Box gap={22} bottom={15} alignItems="center" justifyContent="center"  mx={15} flex={1}>
        <Image
          resizeMode="cover"
          style={{ width: "100%", height: 300 }}
          source={require("../../assets/images/welcome.png")}
        />
        <Center gap={8}>

        <Text fontSize={"$3xl"}>
          Welcome to WhatsApp
        </Text>
        <Text  fontSize={'$sm'}  opacity={0.8} textAlign="center">
          Read our <RNText color={'$cyan300'}  fontSize={'$sm'}>Privacy Policy</RNText>. Tap "Agree and Continue" to
          accept the <RNText fontSize={'$sm'} color={'$cyan300'}>Terms of Service</RNText>.{" "}
        </Text>
        </Center>
      </Box>
      <Button
        bg={Colors[colorScheme ?? "light"].tabIconSelected}
        m={20}
        $active-opacity={0.7}
        onPress={()=>{router.push('/login')}}
        borderRadius={"$full"}
      >
        <ButtonText >Agree and Continue</ButtonText>
      </Button>
    </View>
  );
};

export default Page;
