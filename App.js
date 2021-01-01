import React, { useRef } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Animated, Pressable, Vibration } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";

export default function App() {
  const ref = useRef(new Animated.Value(1)).current;

  const animaScale = () => {
    Vibration.vibrate(100)
    Animated.sequence([
      Animated.timing(ref, {
        toValue: 1.1,
        duration: 80,
        useNativeDriver: true,
      }),
      Animated.timing(ref, {
        toValue: 1,
        duration: 80,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={animaScale}>
        <Animated.View style={[styles.circle, { transform: [{ scale: ref }] }]} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  circle: {
    width: 150,
    height: 150,
    backgroundColor: "green",
    borderRadius: 100,
  },
});
