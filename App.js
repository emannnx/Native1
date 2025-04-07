import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import "react-native-gesture-handler";
import "react-native-reanimated";
import StartUp from "./Screens/StartUp";
import Register from "./Screens/Register";
import HomePage from "./Screens/HomePage";
import Order from "./Screens/Order";
import OrderList from "./Screens/OrderList";
import OrderComplete from "./Screens/OrderComplete";

const Stack = createNativeStackNavigator();

// Stack Navigator (Handles main screens)
const StackNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Welcome" component={StartUp} />
    <Stack.Screen name="Register" component={Register} />
    <Stack.Screen name="Home" component={HomePage} />
    <Stack.Screen name="Order" component={Order} />
    <Stack.Screen name="OrderList" component={OrderList} />
    <Stack.Screen name="OrderComplete" component={OrderComplete} />
  </Stack.Navigator>
);

// Drawer Navigator (Wraps the StackNavigator)

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
