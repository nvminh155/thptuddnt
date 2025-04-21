import { Button, ButtonText } from "@/components/ui/button";
import { HStack } from "@/components/ui/hstack";
import { ArrowLeftIcon, Icon } from "@/components/ui/icon";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import React from "react";
import { View } from "react-native";

const Bai2 = () => {
  return (
    <VStack className="flex-1">
      <HStack className="bg-white justify-between py-4 px-2">
        <Icon as={ArrowLeftIcon} />
        <HStack className="gap-10">
          <Text>Capturing Taps</Text>
          <Text className="text-blue-500 font-semibold">Instructions</Text>
        </HStack>
      </HStack>

      <Button
        onPress={() => {
          alert("hello!");
        }}
        className="bg-transparent"
        variant="link"
      >
        <ButtonText>Button 1</ButtonText>
      </Button>
    </VStack>
  );
};

export default Bai2;
