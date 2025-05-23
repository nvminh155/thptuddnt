import React from "react";
import { StyleSheet, View, TouchableOpacity, Image, Text } from "react-native";

import PropTypes from "prop-types";
import { Icon, PhoneIcon } from "../ui/icon";

const ContactThumbnail = ({ name, phone, avatar, textColor="white", onPress }: any) => {
  const colorStyle = {
    color: textColor,
  };

  const ImageComponent = onPress ? TouchableOpacity : View;

  return (
    <View style={styles.container}>
      <ImageComponent onPress={onPress}>
        <Image
          source={{
            uri: avatar,
          }}
          style={styles.avatar}
        />
      </ImageComponent>

      {name !== "" && <Text style={[styles.name, colorStyle]}>{name}</Text>}

      {phone  && (
        <View style={styles.phoneSection}>
          <Icon as={PhoneIcon} style={{ color: 'white', width: 24, height: 24 }} />
          <Text style={[styles.phone, colorStyle]}>{phone}</Text>
        </View>
      )}
    </View>
  );
};

ContactThumbnail.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
  phone: PropTypes.string,
  onPress: PropTypes.func,
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    marginHorizontal: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderColor: "white",
    borderWidth: 2,
  },
  name: {
    fontSize: 20,
    marginTop: 24,
    marginBottom: 2,
    fontWeight: "bold",
  },
  phoneSection: {
    flexDirection: "row",
    marginTop: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  phone: {
    marginLeft: 6,
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ContactThumbnail;
