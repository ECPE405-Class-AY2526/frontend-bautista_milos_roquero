import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAuth } from '../context/AuthContext';

// Import your screens
import LoginScreen from '../screens/loginpagescreen';
import SigninScreen from '../screens/signinpagescreen';
import DashboardScreen from '../screens/dashboardpagescreen';
import LandingScreen from '../screens/landingpagescreen';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const { user, token } = useAuth();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!token ? (
          // Public Stack
          <>
            <Stack.Screen name="Landing" component={LandingScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="SignUp" component={SigninScreen} />
          </>
        ) : (
          // Protected Stack
          <>
            {user?.role === 'Admin' ? (
              <Stack.Screen name="AdminDashboard" component={DashboardScreen} />
            ) : (
              <Stack.Screen name="Dashboard" component={DashboardScreen} />
            )}
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;