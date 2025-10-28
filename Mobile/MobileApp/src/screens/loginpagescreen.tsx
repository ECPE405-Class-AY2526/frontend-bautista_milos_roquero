import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  SafeAreaView,
  Alert,
} from "react-native";
import useAuthStore from "../store/authStore";

const LoginScreen = ({ navigation }: any) => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, loading } = useAuthStore();

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    const success = await login(email, password);
    if (success) {
      Alert.alert('Success', 'Login successful!');
      navigation.navigate('Dashboard');
    } else {
      Alert.alert('Error', 'Invalid credentials');
    }
  };
  
  return (
    <SafeAreaView style={styles.container}>
      {/* Logo */}
      <Image
        source={require("../assets/images/logo2.png")} 
        style={styles.logo}
        resizeMode="contain"
      />

      {/* Email */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email Address</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Enter your email address"
            placeholderTextColor="#999"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>
      </View>

      {/* Password */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            placeholderTextColor="#999"
            value={password}
            onChangeText={setPassword}
            secureTextEntry = {true}
          />
        </View>
      </View>

      {/* Forgot Password */}
      <View style={styles.optionsRow}>
        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>

      {/* Sign In Button */}
      <TouchableOpacity style={styles.signInButton}
      onPress={handleLogin}>
        <Text style={styles.signInText}>Login</Text>
      </TouchableOpacity>

      {/* Create Account */}
      <View style={styles.signupRow}>
        <Text style={styles.signupText}>Don’t have an account?</Text>
        <TouchableOpacity 
           onPress={() => navigation.navigate("SigninPage")}>
          
          <Text style={styles.createAccount}> Create Account</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 20,
  },
  logo: {
    width: 120,
    height: 120,
    marginVertical: 40,
  },
  inputContainer: {
    width: "100%",
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: "500",
    color: "#333",
    marginBottom: 8,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    paddingHorizontal: 12,
    backgroundColor: "#fff",
  },
  input: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 14,
    color: "#333",
  },
  optionsRow: {
    flexDirection: "row",
    justifyContent: "flex-end",
    width: "100%",
    marginBottom: 25,
    alignItems: "center",
  },
  forgotPassword: {
    fontSize: 13,
    color: "#2ce57fff",
  },
  signInButton: {
    backgroundColor: "#28a745",
    paddingVertical: 14,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
    marginBottom: 20,
  },
  signInText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
  },
  signupRow: {
    flexDirection: "row",
    marginTop: 10,
  },
  signupText: {
    fontSize: 13,
    color: "#333",
  },
  createAccount: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#2ce57fff",
  },
});
