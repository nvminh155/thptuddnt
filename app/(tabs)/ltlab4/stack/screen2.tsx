import { Button, ButtonText } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { router } from "expo-router";
import React from "react";

const Screen2 = () => {
  return (
    <VStack>
      <Text>Screen 2</Text>

      <Button onPress={() => router.replace("/ltlab4/stack/screen1")}>
        <ButtonText>GO to screen 1</ButtonText>
      </Button>
    </VStack>
  );
};

export default Screen2;
