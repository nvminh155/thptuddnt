import { Button, ButtonText } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { router } from "expo-router";
import React from "react";

const Screen1 = () => {
  return (
    <VStack>
      <Text>Screen 1</Text>

      <Button onPress={() => router.replace("/ltlab4/stack/screen2")}>
        <ButtonText>GO to screen 2</ButtonText>
      </Button>
    </VStack>
  );
};

export default Screen1;
