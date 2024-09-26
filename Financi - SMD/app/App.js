import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Usuario from './pages/Usuario';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Usuario">
        <Drawer.Screen name="Usuario" component={Usuario} />
      </Drawer.Navigator>
    </NavigationContainer>
  );

}
