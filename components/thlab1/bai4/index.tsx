import { Button, ButtonText } from "@/components/ui/button";
import { HStack } from "@/components/ui/hstack";
import { ArrowLeftIcon, Icon } from "@/components/ui/icon";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import React from "react";

const Bai4 = () => {
  const [pressCount, setPressCount] = React.useState(0);

  return (
    <VStack className="flex-1">
      <HStack className="bg-white justify-between py-4 px-2 items-center">
        <Icon as={ArrowLeftIcon} />
        <Text className="font-medium">State & Props</Text>
        <Text className="text-blue-500 font-semibold">Instructions</Text>
      </HStack>

      <Text className="text-center text-lg">
        You've pressed the button {pressCount} time(s)
      </Text>
      <Button
        onPress={() => setPressCount(pressCount + 1)}
        className="bg-transparent"
        variant="link"
      >
        <ButtonText className="text-blue-500 font-semibold text-xl ">
          Press me!
        </ButtonText>
      </Button>
    </VStack>
  );
};

export default Bai4;
