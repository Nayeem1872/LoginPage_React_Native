import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View style={styles.container}>
      <Image
        source={require("./assets/wel.png")}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.text}>Welcome to the App!</Text>
      <Link
        href={{ pathname: "/login", params: { name: "Bacon" } }}
        style={styles.link}
      >
        Go to Login
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f9f9f9", // Light background for better contrast
  },
  image: {
    width: 250, // Set the width of the image
    height: 250, // Set the height of the image
    marginBottom: 10, // Space between image and text
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333", // Darker text for better readability
    marginBottom: 20, // Space between text and link
  },
  link: {
    fontSize: 16,
    color: "#007BFF", 
    textDecorationLine: "none", 
  },
});
