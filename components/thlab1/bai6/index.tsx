import { Button, ButtonText } from "@/components/ui/button";
import { HStack } from "@/components/ui/hstack";
import { ArrowLeftIcon, Icon } from "@/components/ui/icon";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import React from "react";
import { ScrollView, StyleProp, View, ViewStyle } from "react-native";

const Bai6 = () => {
  return (
    <VStack className="flex-1">
      <HStack className="bg-white justify-between py-4 px-2 items-center">
        <Icon as={ArrowLeftIcon} />
        <Text className="font-medium">Scrollable Content</Text>
        <Text className="text-blue-500 font-semibold">Instructions</Text>
      </HStack>

      <ScrollView className="flex-1 px-4" contentContainerStyle={{
        gap: 20
      }}>
        {Array.from({ length: 20 }, (_, index) => (
          <Square
            key={index}
            text={`Square ${index + 1}`}
          />
        ))}
      </ScrollView>
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
export default Bai6;
