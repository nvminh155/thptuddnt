import { Button, ButtonText } from "@/components/ui/button";
import { Input, InputField } from "@/components/ui/input";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import React from "react";
import { Image, ImageBackground, SafeAreaView } from "react-native";

const DesignUI = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");


  const handleLogin = () => {
    alert(`username: ${username}\npassword: ${password}`);
  }

  return (
    <SafeAreaView className="flex-1">
      <VStack className="flex-1 relative">
        <ImageBackground
          source={require("@/assets/images/bg.jpg")}
          resizeMode="cover"
          className="w-full h-full -z-10 absolute"
        />

        <VStack className="z-10 flex-1 justify-center items-center px-5">
          <Image
            source={require("@/assets/images/pokemon.jpg")}
            className="w-full h-[200px] z-10"
          />

          <Text className="italic text-yellow-5004 font-semibold self-end">REGISTER</Text>

          <VStack className="w-full gap-3">
            <Input className="bg-white">
              <InputField
                placeholder="USERNAME"
                onChangeText={setUsername}
                value={username}
              />
            </Input>
            <Input className="bg-white">
              <InputField
                placeholder="PASSWORD"
                type="password"
                onChangeText={setPassword}
                value={password}
              />
            </Input>

            <Button className="bg-red-500" onPress={handleLogin}>
              <ButtonText>LOGIN</ButtonText>
            </Button>
          </VStack>
        </VStack>
      </VStack>
    </SafeAreaView>
  );
};

export default DesignUI;
