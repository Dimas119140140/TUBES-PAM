import * as React from 'react';
import { Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screen/homescreen';
import CartScreen from './screen/cartscreen';
import ProfileScreen from './screen/profilescreen';

// import { FontAwesome5 } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === 'Home') {
              return (
                <AntDesign name="home" size={24} color="black" />
              );
            } else if (route.name === 'Cart') {
              return (
                <AntDesign name="shoppingcart" size={24} color="black" />
              );
            } else if (route.name === 'Profile') {
              return (
                <AntDesign name="user" size={24} color="black" />
              );
            }
          },
          tabBarInactiveTintColor: 'gray',
          tabBarActiveTintColor: 'tomato',
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
        />
        <Tab.Screen name="Cart" component={CartScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        
      </Tab.Navigator>
    </NavigationContainer>
  );
}
