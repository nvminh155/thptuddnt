import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { fetchUserContact } from "../../utils/api";
import ContactThumbnail from "./ContactThumbnail";
import colors from "@/utils/colors";
const User = () => {
  const [user, setUser] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  //Load du lieu
  useEffect(() => {
    fetchUserContact()
      .then((users) => {
        setUser(users);
        setLoading(false);
        setError(false);
      })
      .catch((e) => {
        setLoading(false);
        setError(true);
      });
  });
  const { avatar, name, phone } = user;
  return (
    <View style={styles.container}>
      {loading && <ActivityIndicator size="large" />}
      {error && <Text>Error...</Text>}
      {!loading && !error && (
        <ContactThumbnail avatar={avatar} name={name} phone={phone} />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.blue,
  },
});
export default User;
