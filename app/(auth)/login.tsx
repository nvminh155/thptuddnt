import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleEmailChange = (text: string) => {
    setEmail(text);
    setEmailError(text.trim() === "");
  };

  const handlePasswordChange = (text: string) => {
    setPassword(text);
    setPasswordError(text.trim() === "");
  };

  const handleLogin = () => {
    // Validate fields
    const isEmailEmpty = email.trim() === "";
    const isPasswordEmpty = password.trim() === "";

    setEmailError(isEmailEmpty);

    var regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/

    const isValidPass = regularExpression.test(password)
    if(!isValidPass) {
      // setPasswordError("Password is not valid")
      setPasswordError(!isValidPass)
      return;
    } 

    if (!isEmailEmpty && !isPasswordEmpty) {
      console.log("Login pressed with:", { email, password });
      // Implement actual login logic here
      alert(`user info\nemail: ${email}\npass: ${password}`);
    }
  };

  const navigateToSignup = () => {
    console.log("Navigate to signup");
    router.replace("/register");
    // If using React Navigation: navigation.navigate('Signup')
  };

  const navigateToForgotPassword = () => {
    console.log("Navigate to forgot password");
    router.replace("/forgot-pass");
    // If using React Navigation: navigation.navigate('ForgotPassword')
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <StatusBar style="auto" />
        <View style={styles.formContainer}>
          <View style={styles.logoContainer}>
            <Image
              source={require("@/assets/images/firebase_logo.png")}
              style={styles.logo}
              // Fallback to a flame emoji if the image fails to load
              onError={() => console.log("Image failed to load")}
            />
          </View>

          <Text style={styles.title}>Welcome back!</Text>

          <View
            style={[styles.inputContainer, emailError && styles.inputError]}
          >
            <View style={styles.iconContainer}>
              <Ionicons name="mail-outline" size={20} color="#777" />
            </View>
            <TextInput
              style={styles.input}
              placeholder="Enter email"
              value={email}
              onChangeText={handleEmailChange}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <Text style={styles.errorText}>
            {emailError ? "Email is a required field" : ""}
          </Text>

          <View
            style={[styles.inputContainer, passwordError && styles.inputError]}
          >
            <View style={styles.iconContainer}>
              <Ionicons name="lock-closed-outline" size={20} color="#777" />
            </View>
            <TextInput
              style={styles.input}
              placeholder="Enter password"
              value={password}
              onChangeText={handlePasswordChange}
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity
              style={styles.eyeIcon}
              onPress={() => setShowPassword(!showPassword)}
            >
              <Ionicons
                name={showPassword ? "eye-outline" : "eye-off-outline"}
                size={20}
                color="#777"
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.errorText}>
            {passwordError ? "Password is a required field" : ""}
          </Text>
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          <View style={styles.footer}>
            <TouchableOpacity onPress={navigateToSignup}>
              <Text style={styles.footerLink}>Create a new account?</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.footer}>
            <TouchableOpacity onPress={navigateToForgotPassword}>
              <Text style={styles.footerLink}>Forgot Password</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  formContainer: {
    width: "100%",
    maxWidth: 300,
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 10,
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: "contain",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  inputContainer: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    marginBottom: 5,
    height: 45,
    alignItems: "center",
  },
  inputError: {
    borderColor: "#FF6B6B",
  },
  iconContainer: {
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    height: "100%",
    paddingVertical: 8,
  },
  eyeIcon: {
    padding: 10,
  },
  errorText: {
    color: "#FF6B6B",
    fontSize: 12,
    marginBottom: 10,
    marginLeft: 5,
  },
  button: {
    backgroundColor: "#FF8C00",
    borderRadius: 5,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 15,
  },
  footerLink: {
    color: "#4A90E2",
    fontSize: 14,
  },
});
