import { HStack } from "@/components/ui/hstack";
import { ArrowLeftIcon, Icon } from "@/components/ui/icon";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import React from "react";
import { View } from "react-native";

const Bai1 = () => {
  return (
    <VStack className="flex-1">
      <HStack className="bg-white justify-between py-4 px-2">
        <Icon as={ArrowLeftIcon} />
        <HStack className="gap-10">
          <Text>Hello, world!</Text>
          <Text className="text-blue-500 font-semibold">Instructions</Text>
        </HStack>
      </HStack>

      <View className="bg-blue-100 px-2 w-[200px] h-[200px] justify-center items-center">
        <Text>Hello, world!</Text>
      </View>
    </VStack>
  );
};

export default Bai1;
