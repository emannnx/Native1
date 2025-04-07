import { NavigationContainer } from "@react-navigation/native";
import { View, Text, SafeAreaView } from "react-native";
import Welcome from "./Welcome";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Register from "./Register";
import Order from "./Order";
import OrderList from "./OrderList";

const HomePage = () => {
  const Drawer = createDrawerNavigator();
  const DrawerNavigator = () => (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Drawer.Screen name="Home" component={Welcome} />
      {/* <Drawer.Screen name="Register" component={Register} /> */}
      {/* <Drawer.Screen name="Home" component={HomePage} /> */}
      <Drawer.Screen name="Order" component={Order} />
      <Drawer.Screen name="OrderList" component={OrderList} />
    </Drawer.Navigator>
  );
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <DrawerNavigator />
    </SafeAreaView>
  );
};

export default HomePage;
