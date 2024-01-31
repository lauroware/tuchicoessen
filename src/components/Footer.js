import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Footer = () => {
  return <View style={styles.footer}></View>;
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: "#000000",
    height: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  footerText: {
    color: "#fff",
  },
});

export default Footer;
