import React from "react";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LandingScreen from './src/screens/landingpagescreen';
import LoginScreen from "./src/screens/loginpagescreen";
import DashboardScreen from './src/screens/dashboardpagescreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LandingPage">
        <Stack.Screen name="LandingPage" component={LandingScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="LoginPage" component={LoginScreen} options={{ title: "Login" }} />
        <Stack.Screen name="DashboardPage" component={DashboardScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
