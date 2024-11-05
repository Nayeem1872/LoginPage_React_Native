import { Link } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';

export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username && password) {
      Alert.alert('Login successful!', `Welcome, ${username}!`);
    } else {
      Alert.alert('Error', 'Please enter username and password');
    }
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container} 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
      keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 20} 
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} bounces={false}>
        <View >
          <Image
            source={require("./assets/topVector.png")}
            style={styles.topImage}
          />
        </View>
        <View >
          <Text style={styles.helloText}>Hello</Text>
        </View>
        <View>
          <Text style={styles.signInText}>Sign in to your account</Text>
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
            placeholder="Password" 
            value={password} 
            onChangeText={setPassword} 
            secureTextEntry 
          />
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
        <Link
        href={{ pathname: "/signup", params: { name: "Bacon" } }}
        style={styles.link}
      >
        Don't have an account? Sign up
      </Link>
      </ScrollView>
  
      <Image
        source={require('./assets/Vector 2.png')}
        style={styles.bottomImage}
      />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'space-between',
    paddingBottom: 90,
  },
 
  topImage: {
    width: "100%",
    height: 130,
  },
  link: {
    fontSize: 16,
    color: "#007BFF",
    marginTop: 15,
    textAlign: 'center',
  },
  helloText: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "500",
    color: "#262626",
  },
  signInText: {
    textAlign: "center",
    fontSize: 18,
    color: "#262626",
  },
  formContainer: {
    padding: 20,
  },
  input: {
    width: '100%',
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 25,
    marginBottom: 15,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  button: {
    width: '100%',
    padding: 15,
    backgroundColor: '#007bff',
    borderRadius: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  bottomImage: {
    width: 100,
    height: 160,
    position: 'absolute',
    bottom: 10,
    left: 10,
  },
});
