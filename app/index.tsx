import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter(); // Verwende den Router-Hook, um zu navigieren

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hallo Balllo.</Text>

      {/* Button zum Navigieren zur Kamera-Seite */}
      <Button
        title="Go to Camera"
        onPress={() => router.push("/camera")}  // Navigiere zur "camera"-Seite
      />
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