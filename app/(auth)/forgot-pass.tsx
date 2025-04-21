"use client"

import { useState } from "react"
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
} from "react-native"
import { StatusBar } from "expo-status-bar"
import { Ionicons } from "@expo/vector-icons"
import { router } from "expo-router"

export default function ForgotPasswordScreen() {
  const [email, setEmail] = useState("")
  const [emailError, setEmailError] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleEmailChange = (text: string) => {
    setEmail(text)
    setEmailError(false)
  }

  const handleSendResetEmail = () => {
    // Validate email
    if (email.trim() === "") {
      setEmailError(true)
      return
    }

    // Show loading state
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      console.log("Send reset email to:", email)
      alert(`send reset email to: ${email}`)
      setIsSubmitting(false)
      // Show success message or navigate back
      // If using React Navigation: navigation.goBack()
    }, 1500)
  }

  const navigateToLogin = () => {
    console.log("Navigate back to login")
    // If using React Navigation: navigation.goBack()
    router.replace("/(auth)/login")
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.formContainer}>
          <Text style={styles.title}>Reset your password</Text>

          <View style={[styles.inputContainer, emailError && styles.inputError]}>
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
              editable={!isSubmitting}
            />
          </View>
          {emailError && <Text style={styles.errorText}>Please enter your email address</Text>}

          <TouchableOpacity
            style={[styles.button, isSubmitting && styles.buttonDisabled]}
            onPress={handleSendResetEmail}
            disabled={isSubmitting}
          >
            <Text style={styles.buttonText}>{isSubmitting ? "Sending..." : "Send Reset Email"}</Text>
          </TouchableOpacity>

          <View style={styles.footer}>
            <TouchableOpacity onPress={navigateToLogin}>
              <Text style={styles.footerLink}>Go back to Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  )
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
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "center",
  },
  inputContainer: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    marginBottom: 10,
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
  buttonDisabled: {
    backgroundColor: "#FFBE7D",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  footerLink: {
    color: "#4A90E2",
    fontSize: 14,
  },
})
