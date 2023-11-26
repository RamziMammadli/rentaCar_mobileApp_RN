
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StackRouter from "./src/navigation/Stack/StackRouter";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <>
    <StackRouter/>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
