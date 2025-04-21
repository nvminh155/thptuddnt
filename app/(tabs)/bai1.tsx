import { HStack } from "@/components/ui/hstack";
import { ArrowLeftIcon, Icon } from "@/components/ui/icon";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import React from "react";
import { SectionList, StyleSheet, View } from "react-native";

const data = [
  {
    name: { title: "Mr.", first: "John", last: "Doe" },
  },
  {
    name: { title: "Ms.", first: "Jane", last: "Smith" },
  },
  {
    name: { title: "Dr.", first: "Alice", last: "Johnson" },
  },
  {
    name: { title: "Prof.", first: "Robert", last: "Brown" },
  },
  {
    name: { title: "Mrs.", first: "Emily", last: "Davis" },
  },
];

const groupPeopleByLastName = () => {
  const groupedData = data.reduce(
    (acc: { [key: string]: (typeof data)[number][] }, cur) => {
      const lastName = cur.name.last[0].toUpperCase();
      acc[lastName] ??= [];
      acc[lastName].push(cur);
      return acc;
    },
    {} as { [key: string]: (typeof data)[number][] }
  );

  return Object.entries(groupedData).map(([key, value]) => ({
    title: key,
    data: value,
  }));
};

const Bai8 = () => {
  return (
    <VStack className="flex-1">
      <HStack className="bg-white justify-between py-4 px-2 items-center">
        <Icon as={ArrowLeftIcon} />
        <Text className="font-medium">Long Lists</Text>
        <Text className="text-blue-500 font-semibold">Instructions</Text>
      </HStack>

      <SectionList
        className="flex-1 mt-20"
        sections={groupPeopleByLastName()}
        keyExtractor={(item, index) => `${item.name.title} ${index}`}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.title}>
              {item.name.title} {item.name.first} {item.name.last}
            </Text>
          </View>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />
    </VStack>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: "#fff",
    paddingVertical: 20,
  },
  title: {
    fontSize: 24,
  },
});

export default Bai8;
