import { Button, ButtonText } from "@/components/ui/button";
import { VStack } from "@/components/ui/vstack";
import { router } from "expo-router";
import React from "react";

export default function HomeScreen() {
  return (
    <VStack className="flex-1 gap-4">
      {Array.from({ length: 2 }, (_, i) => (
        <Button
          key={i + 1}
          onPress={() => {
            router.push(`/thlab${i + 1}` as any);
          }}
          className="mb-4"
        >
          <ButtonText>THLab {i + 1}</ButtonText>
        </Button>
      ))}

      <Button
        onPress={() => {
          router.push("/thlab2_drawer/contacts");
        }}
        className="mb-4"
      >
        <ButtonText>THLabDrawer</ButtonText>
      </Button>

      <Button
        onPress={() => {
          router.push("/ltlab4/stack/screen1");
        }}
        className="mb-4"
      >
        <ButtonText>Ly thuyet lab 4</ButtonText>
      </Button>
    </VStack>
  );
}
