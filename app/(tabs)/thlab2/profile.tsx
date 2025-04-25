import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { fetchRandomContact } from "@/utils/api";
import ContactThumbnail from "@/components/thlab2/ContactThumbnail";
import DetailListItem from "@/components/thlab2/DetailListItem";
import colors from "@/utils/colors";
import { useLocalSearchParams } from "expo-router";

const Profile = () => {
  const { user } = useLocalSearchParams();
  const userData = JSON.parse(user as any);
  console.log(userData);

  if (!userData) throw new Error("user data not ");

  const { avatar, name, email, phone, cell } = userData;

  return (
    <View style={styles.container}>
      <View style={styles.avatarSection}>
        <ContactThumbnail avatar={avatar} name={name} phone={phone} />
      </View>
      <View style={styles.detailsSection}>
        <DetailListItem icon="mail" title="Email" subtitle={email} />
        <DetailListItem icon="phone" title="Work" subtitle={phone} />
        <DetailListItem icon="smartphone" title="Personal" subtitle={cell} />
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  avatarSection: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.blue,
  },
  detailsSection: {
    flex: 1,
    backgroundColor: "white",
  },
});
