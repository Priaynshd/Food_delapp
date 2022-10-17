// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import splashScreen from './Screens/splashScreen';
import loginScreen from './Screens/LoginScreen';
import Home from './Screens/homeScreen';
const Stack = createStackNavigator();
function NavStack() {
  return (
     <Stack.Navigator
     initialRouteName="splashScreen"
        screenOptions={{
          headerShown: false
      }}
      >
      <Stack.Screen 
        name="Home" 
        component={Home} 
      />
      <Stack.Screen 
        name="splashScreen" 
        component={splashScreen} 
      />
      <Stack.Screen 
       name="loginScreen" 
       component={loginScreen} 
      />
    </Stack.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <NavStack />
    </NavigationContainer>
  );
}