import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Entypo } from '@expo/vector-icons';

import ShopNavigator from './ShopNavigator';
import CartNavigator from './CartNavigator';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const BottomTabs = createBottomTabNavigator();

const TabsNavigator = () => {
  return (
    <BottomTabs.Navigator screenOptions={{ headerShown: false, tabBarShowLabel: false, tabBarStyle: styles.tabBar }}>
      <BottomTabs.Screen
        name='Shop'
        component={ShopNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabBarIcon}>
              <Entypo name='keyboard' size={24} color={focused ? '#8e44ad' : '#999999'} />
              <Text style={{ color: focused ? '#222222' : '#999999' }}>Shop</Text>
            </View>
          ),
        }}
      />
      <BottomTabs.Screen
        name='Cart'
        component={CartNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabBarIcon}>
              <Entypo name='bowl' size={24} color={focused ? '#d35400' : '#999999'} />
              <Text style={{ color: focused ? '#222222' : '#999999' }}>Goku</Text>
            </View>
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
};

export default TabsNavigator;

const styles = StyleSheet.create({
  tabBar: {
    shadowColor: '#333333',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 0.25,
    position: 'absolute',
    bottom: 25,
    left: 20,
    right: 20,
    borderRadius: 15,
    height: 90,
  },
  tabBarIcon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
