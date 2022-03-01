import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from './Screens/Home'
import Calculadora from './Screens/Calculadora'
import Conversor from './Screens/Conversor'
import Grados from './Screens/Grados'

const Drawer = createDrawerNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="LogIn" component={HomeScreen} />
        <Drawer.Screen name="Calculadora" component={Calculadora} />
        <Drawer.Screen name="Conversor" component={Conversor} />
        <Drawer.Screen name="Grados" component={Grados} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
