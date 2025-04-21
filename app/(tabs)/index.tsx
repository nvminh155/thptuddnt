import { Button, ButtonText } from "@/components/ui/button";
import { VStack } from "@/components/ui/vstack";
import { router } from "expo-router";
import React from "react";

export default function HomeScreen() {
  return (
    <VStack className="flex-1 gap-4">
      {Array.from({ length: 8 }, (_, i) => (
        <Button
          key={i + 1}
          onPress={() => {
            router.push(`/thlab1/bai${i + 1}` as any);
          }}
          className="mb-4"
        >
          <ButtonText>Bai {i + 1}</ButtonText>
        </Button>
      ))}
    </VStack>
  );
}
