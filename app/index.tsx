import React from "react";
import { Text, View, StyleSheet } from "react-native";
import MyCamera from "./camera";  // Der Import der Camera-Komponente

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hallo Balllo.</Text>
      <MyCamera />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
});