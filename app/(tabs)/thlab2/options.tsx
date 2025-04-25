import DetailListItem from "@/components/thlab2/DetailListItem";
import React from "react";
import { StyleSheet, View } from "react-native";

const Options = () => {
  return (
    <View style={styles.container}>
      <DetailListItem title="Update Profile" />
      <DetailListItem title="Change Language" />
      <DetailListItem title="Sign Out" />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});

export default Options;
