"use client"

import { View, Text, StyleSheet, Pressable } from "react-native"
import { useState } from "react"
import { useTheme } from "@/contexts/theme-context"
import { Icon, MoonIcon, SunIcon } from "@/components/ui/icon"

const leftKeys = [
  ["C", "DEL"],
  ["7", "8", "9"],
  ["4", "5", "6"],
  ["1", "2", "3"],
  ["0", "."],
]

const rightKeys = ["/", "*", "-", "+", "="]

export default function Calculator() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === "dark"

  const [display, setDisplay] = useState("0")
  const [equation, setEquation] = useState("")
  const [calculated, setCalculated] = useState(false)

  const styles = getStyles(isDark)

  const handlePress = (key: string) => {
    if (key === "C") return handleClear()
    if (key === "DEL") return handleDelete()
    if (key === "=") return handleEquals()
    if (["+", "-", "*", "/"].includes(key)) return handleOperatorPress(key)
    if (key === ".") return handleDecimal()
    if (key !== "") return handleNumberPress(key)
  }

  const handleNumberPress = (num: string) => {
    if (calculated) {
      setDisplay(num)
      setEquation("")
      setCalculated(false)
    } else {
      setDisplay(display === "0" ? num : display + num)
    }
  }

  const handleOperatorPress = (operator: string) => {
    if (calculated) {
      setEquation(display + operator)
      setCalculated(false)
    } else {
      setEquation(equation + display + operator)
    }
    setDisplay("0")
  }

  const handleClear = () => {
    setDisplay("0")
    setEquation("")
    setCalculated(false)
  }

  const handleDelete = () => {
    setDisplay(display.length > 1 ? display.slice(0, -1) : "0")
  }

  const handleDecimal = () => {
    if (!display.includes(".")) {
      setDisplay(display + ".")
    }
  }

  const handleEquals = () => {
    try {
      const fullEquation = equation + display
      const result = eval(fullEquation).toString()
      setDisplay(result)
      setEquation(fullEquation + "=")
      setCalculated(true)
    } catch {
      setDisplay("Error")
    }
  }

  return (
    <View style={styles.container}>
      <Pressable style={styles.themeToggle} onPress={toggleTheme}>
        {isDark ? <Icon as={MoonIcon} color="#fff" /> : <Icon as={SunIcon} color="#000" />}
      </Pressable>

      <View style={styles.displayContainer}>
        <Text style={styles.equation}>{equation}</Text>
        <Text style={styles.display}>{display}</Text>
      </View>

      <View style={styles.keypad}>
        <View style={styles.leftKeys}>
          {leftKeys.map((row, rowIndex) => (
            <View key={rowIndex} style={styles.row}>
              {row.map((key, colIndex) => (
                <Pressable
                  key={colIndex}
                  style={[
                    styles.key,
                    key === "C" || key === "DEL" ? styles.functionKey : styles.numberKey,
                    key === "0" ? styles.zeroKey : null,
                  ]}
                  onPress={() => handlePress(key)}
                >
                  <Text style={styles.keyText}>{key}</Text>
                </Pressable>
              ))}
            </View>
          ))}
        </View>

        <View style={styles.rightKeys}>
          {rightKeys.map((key, index) => (
            <Pressable
              key={index}
              style={[styles.key, styles.operatorKey]}
              onPress={() => handlePress(key)}
            >
              <Text style={styles.operatorKeyText}>{key}</Text>
            </Pressable>
          ))}
        </View>
      </View>
    </View>
  )
}

const getStyles = (isDark: boolean) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDark ? "#1E1E1E" : "#F5F5F5",
    },
    themeToggle: {
      position: "absolute",
      top: 50,
      left: 20,
      zIndex: 10,
      padding: 10,
    },
    displayContainer: {
      flex: 0.3,
      justifyContent: "flex-end",
      alignItems: "flex-end",
      padding: 20,
    },
    equation: {
      fontSize: 16,
      color: isDark ? "#8F8F8F" : "#6B6B6B",
      marginBottom: 5,
    },
    display: {
      fontSize: 48,
      fontWeight: "bold",
      color: "#00BCD4",
    },
    keypad: {
      flex: 0.7,
      flexDirection: "row",
    },
    leftKeys: {
      flex: 3,
      backgroundColor: isDark ? "#2C2C2C" : "#F0F0F0",
    },
    rightKeys: {
      flex: 1,
      backgroundColor: "#00BCD4",
      justifyContent: "space-around",
      alignItems: "center",
    },
    row: {
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      flex: 1,
    },
    key: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
      borderWidth: 0.5,
      borderColor: "#ccc",
    },
    numberKey: {
      backgroundColor: "transparent",
    },
    functionKey: {
      backgroundColor: isDark ? "#3D3D3D" : "#DCDCDC",
    },
    operatorKey: {
      backgroundColor: "#00BCD4",
      height: 70,
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
    },
    keyText: {
      fontSize: 28,
      color: isDark ? "#FFFFFF" : "#000000",
    },
    operatorKeyText: {
      fontSize: 28,
      color: "#FFFFFF",
    },
    zeroKey: {
      flex: 2,
    },
  })
