import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategorySwitchesScreen from '../screens/CategorySwitchesScreen';
import SwitchDetailsScreen from '../screens/SwitchDetailsScreen';

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='Categories'>
      <Stack.Screen name='Shop Categories' component={CategoriesScreen} />
      <Stack.Screen name='Switches' component={CategorySwitchesScreen} />
      <Stack.Screen name='Detail' component={SwitchDetailsScreen} />
    </Stack.Navigator>
  );
};

export default ShopNavigator;
