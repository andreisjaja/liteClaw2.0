
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainScreen from './app/screens/MainScreen';
import LoginScreen from './app/screens/LoginScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import BibliotecaScreen from './app/screens/BibliotecaScreen';
import CategoriaScreen from './app/screens/CategoriaSreen';
import UsuarioScreen from './app/screens/UsuarioScreen';
import { View, Text, Button, StyleSheet } from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainScreen">
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="BibliotecaScreen" component={BibliotecaScreen} />
        <Stack.Screen name="CategoriaScreen" component={CategoriaScreen} />
        <Stack.Screen name="UsuarioScreen" component={UsuarioScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
 
});