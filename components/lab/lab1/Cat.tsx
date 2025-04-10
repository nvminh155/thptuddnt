import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

type TCatComponentProps = {
  age: number;
};

const CatComponent = ({ age }: TCatComponentProps) => {
  const [catName, setCatName] = React.useState<string>(""); //set name using usestate

  return (
    <View style={styles.container}>
      <Text style={styles.catHeading}>Cat Info</Text>
      <Text style={styles.catAge}>Age: {age}</Text>
      <Text style={styles.catName}>Cat's name {catName ?? "unknow"}</Text>

      <TextInput
        style={styles.catInput}
        value={catName}
        onChangeText={setCatName}
        placeholder="Set your cat's name"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  catHeading: {
    fontSize: 20,
    color: "blue",
    marginTop: 10,
  },
  catAge: {
    fontSize: 16,
    color: "red",
  },
  catName: {
    fontSize: 16,
    color: "green",
  },
  catInput: {
    fontSize: 16,
    height: 50,
    borderWidth: 1,
    borderColor: "black",
  },
});
export default CatComponent;
