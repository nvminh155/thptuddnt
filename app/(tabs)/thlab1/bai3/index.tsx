import { Button, ButtonText } from "@/components/ui/button";
import { HStack } from "@/components/ui/hstack";
import { ArrowLeftIcon, Icon } from "@/components/ui/icon";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import React from "react";
import {
  GestureResponderEvent,
  StyleProp,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";

const Bai3 = () => {
  return (
    <VStack className="flex-1">
      <HStack className="bg-white justify-between py-4 px-2">
        <Icon as={ArrowLeftIcon} />
        <HStack className="gap-10">
          <Text>Capturing Taps</Text>
          <Text className="text-blue-500 font-semibold">Instructions</Text>
        </HStack>
      </HStack>

      <CustomButton
        text="Say hello"
        buttonStyle={{
          backgroundColor: "red",
          alignSelf: "center",
          marginBottom: 20,
        }}
        onPressCB={() => alert("hello!")}
      />

      <CustomButton
        text="Say goodbye"
        buttonStyle={{
          alignSelf: "center",
        }}
        onPressCB={() => alert("goodbye!")}
      />
    </VStack>
  );
};

type CustomButtonProps = {
  text?: string;
  buttonStyle?: StyleProp<ViewStyle>;
  onPressCB?: (e: GestureResponderEvent) => void;
};

const CustomButton = ({ text, buttonStyle, onPressCB }: CustomButtonProps) => {
  return (
    <TouchableOpacity style={[{
      backgroundColor: "blue",
      width: 200,
      height: 50,
      justifyContent: "center",
      alignItems: "center",
    }, buttonStyle]} onPress={(e) => onPressCB?.(e)}>
      <Text className="text-center">{text}</Text>
    </TouchableOpacity>
  );
};

export default Bai3;
