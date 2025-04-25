import ContactThumbnail from "@/components/thlab2/ContactThumbnail";
import { fetchContacts } from "@/utils/api";
import { router } from "expo-router";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from "react-native";

const keyExtractor = ({ phone }: any) => phone;
const Favorites = ({ navigation }: any) => {
  //state
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  //Load du lieu
  useEffect(() => {
    fetchContacts()
      .then((contacts) => {
        setContacts(contacts);
        setLoading(false);
        setError(false);
      })
      .catch((e) => {
        setLoading(false);
        setError(true);
      });
  });
  const renderFavoriteThumbnail = ({ item }: any) => {
    const { avatar } = item;
    return (
      <ContactThumbnail
        avatar={avatar}
        onPress={() => {
          console.log(item);
          router.navigate({
            pathname: "/(tabs)/thlab2/profile",
            params: { user: JSON.stringify(item) },
          });
        }}
      />
    );
  };

  const favorites = contacts.filter((contact: any) => contact.favorite);

  return (
    <View style={styles.container}>
      {loading && <ActivityIndicator size="large" />}
      {error && <Text>Error...</Text>}
      {!loading && !error && (
        <FlatList
          data={favorites}
          keyExtractor={keyExtractor}
          numColumns={3}
          contentContainerStyle={styles.list}
          renderItem={renderFavoriteThumbnail}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    justifyContent: "center",
    flex: 1,
  },
  list: {
    alignItems: "center",
  },
});

export default Favorites;
