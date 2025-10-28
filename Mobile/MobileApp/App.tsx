import React,{useEffect} from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context"; 
import useAuthStore from "./src/store/authStore";

import LandingScreen from "./src/screens/landingpagescreen";
import LoginScreen from "./src/screens/loginpagescreen";
import DashboardScreen from "./src/screens/dashboardpagescreen";
import SigninScreen from "./src/screens/signinpagescreen";

const Stack = createNativeStackNavigator();

export default function App() {
   const initializeAuth = useAuthStore(state => state.initializeAuth);

  useEffect(() => {
    initializeAuth();
  }, [initializeAuth]);
  return (
    <SafeAreaProvider> 
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="LandingPage"
            component={LandingScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="LoginPage"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SigninPage"
            component={SigninScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="DashboardPage"
            component={DashboardScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
