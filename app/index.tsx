import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import Camera from "./camera";

export default function Index() {
  const router = useRouter(); // Verwende den Router-Hook, um zu navigieren

  return (
    <View style={styles.container}>
      <Camera />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 180,
    alignItems: "center"
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  }
});