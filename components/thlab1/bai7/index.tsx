import { Button, ButtonText } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { HStack } from "@/components/ui/hstack";
import { ArrowLeftIcon, Icon } from "@/components/ui/icon";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import React from "react";
import {
  ScrollView,
  StyleProp,
  TextInput,
  View,
  ViewStyle,
} from "react-native";

const Bai7 = () => {
  const [name, setName] = React.useState<string>("");

  return (
    <VStack className="flex-1">
      <HStack className="bg-white justify-between py-4 px-2 items-center">
        <Icon as={ArrowLeftIcon} />
        <Text className="font-medium">Building a Form</Text>
        <Text className="text-blue-500 font-semibold">Instructions</Text>
      </HStack>

      <VStack className="mt-20 px-4">
        <Heading className="text-lg">What is your name?</Heading>
        <TextInput placeholder="John Doe" className="bg-gray-200 pl-4 rounded-lg" onChangeText={setName} value={name} />
        <Button variant="link" className="self-center" onPress={() => alert(`Hello ${name}`)}>
          <ButtonText>Say Hello</ButtonText>
        </Button>
      </VStack>
    </VStack>
  );
};

type SquareProps = {
  text?: string;
  style?: StyleProp<ViewStyle>;
};

const Square = ({ text, style }: SquareProps) => {
  return (
    <View
      style={[
        {
          backgroundColor: "red",
          width: 100,
          height: 100,
          justifyContent: "center",
          alignItems: "center",
        },
        style,
      ]}
    >
      <Text>{text}</Text>
    </View>
  );
};
export default Bai7;
