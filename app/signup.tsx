import { Link } from "expo-router";
import React, { useState } from "react";
import axios from "axios";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";

export default function SignupScreen() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    if (username && email && password) {
      try {
        const response = await axios.post(
        //   "http://192.168.0.112:5000/api/users/signup",
        "http://10.0.2.2:5000/api/users/signup",  
        {
            username,
            email,
            password,
          }
        );
        console.log(response);

        Alert.alert(
          "Signup successful!",
          `Welcome, ${response.data.username || username}!`
        );
      } catch (error) {
        {
          console.log("Error during signup:", error);
          Alert.alert(
            "Error",
            error as string
          );
        }
      }
    } else {
      Alert.alert("Error", "Please fill all fields");
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 40 : 20}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} bounces={false}>
        <View style={styles.topImageContainer}>
          <Image
            source={require("./assets/topVector.png")}
            style={styles.topImage}
          />
        </View>
        <View>
          <Text style={styles.signUpText}>Create a new account</Text>
        </View>
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <TouchableOpacity style={styles.button} onPress={handleSignup}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>

          <Link href="/login" style={styles.link}>
            Already have an account? Signin
          </Link>
        </View>
      </ScrollView>

      <Image
        source={require("./assets/Vector 2.png")}
        style={styles.bottomImage}
      />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    justifyContent: "space-between",
    paddingBottom: 90,
  },
  topImageContainer: {},
  topImage: {
    width: "100%",
    height: 130,
  },
  link: {
    fontSize: 16,
    color: "#007BFF",
    marginTop: 15,
    textAlign: "center",
  },

  helloText: {
    textAlign: "center",
    fontSize: 70,
    fontWeight: "500",
    color: "#262626",
  },
  signUpText: {
    textAlign: "center",
    fontSize: 18,
    color: "#262626",
  },
  formContainer: {
    padding: 20,
  },
  input: {
    width: "100%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 25,
    marginBottom: 15,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  button: {
    width: "100%",
    padding: 15,
    backgroundColor: "#28a745", // Changed color for signup button
    borderRadius: 25,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  bottomImage: {
    width: 100,
    height: 160,
    position: "absolute",
    bottom: 10,
    left: 10,
  },
});
