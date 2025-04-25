import ContactListItem from "@/components/thlab2/contact-list-item";
import { Text } from "@/components/ui/text";
import { fetchContacts } from "@/utils/api";
import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, StyleSheet, View } from "react-native";

const Contacts = () => {
  const [contacts, setContacts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(false);

  useEffect(() => {
    fetchContacts()
      .then((data) => {
        setContacts(data);
      })
      .catch((err) => {
        console.error(err);
        setErr(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  //sort
  const contactsSorted = contacts.sort((a, b) => a.name.localeCompare(b.name));

  const renderContact = ({ item }: any) => {
    const { name, avatar, phone } = item;

    return (
      <ContactListItem
        name={name}
        avatar={avatar}
        phone={phone}
        onPress={() => {
          router.push({
            pathname: "/(tabs)/thlab2/profile",
            params: { user: JSON.stringify(item) },
          });
        }}
      />
    );
  };

  return (
    <View style={styles.container}>
      {loading && (
        <View className="flex-1 justify-center items-center">
          <ActivityIndicator color="blue" size="large" />
        </View>
      )}
      {err && <Text>Error...</Text>}
      {!loading && !err && (
        <FlatList
          data={contactsSorted}
          keyExtractor={({ phone }, i) => i + `${phone}`}
          renderItem={renderContact}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "s",
    flex: 1,
  },
});

export default Contacts;
