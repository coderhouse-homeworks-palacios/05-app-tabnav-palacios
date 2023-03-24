import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import CartScreen from '../screens/CartScreen';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const CartNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Cart'
        component={CartScreen}
        options={{
          title: 'Goku eating noodles',
        }}
      />
    </Stack.Navigator>
  );
};

export default CartNavigator;

const styles = StyleSheet.create({});
