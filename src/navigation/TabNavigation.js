// TabNavigation.js
import React from 'react';
import { View, TouchableOpacity, StyleSheet, useColorScheme } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Home from '../screens/Home';
import Dashboard from '../screens/dashboard/Dashboard';
import Lead from '../screens/leads/Lead';
import Product from '../screens/products/product';
import Profile from '../screens/profiles/Profile';
import Colors from '../constant/Color';
import List from '../screens/list/List';

const Tab = createBottomTabNavigator();


const CustomTabBarButton = ({ children, onPress, focused }) => (
  <TouchableOpacity
    style={{
      top: -20,
      justifyContent: 'center',
      alignItems: 'center',
      ...styles.shadow,
    }}
    onPress={onPress}
  >
    <View
      style={{
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: focused ? Colors.primaryColor : '#748c94',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {children}
    </View>
  </TouchableOpacity>
);


const TabNavigation = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          position: 'relative',
          bottom: 0,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: !isDarkMode?'#FFFFF':Colors.darkBackground,
          // backgroundColor:'red',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          height: 70,
          ...styles.shadow,
        },
        tabBarIconStyle: {
          justifyContent: 'center',
          height: 50,
        },
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}

        options={{

          tabBarIcon: ({ focused }) => (
            <FontAwesome name="home" size={30} color={focused ? Colors.primaryColor : '#748c94'} />
          ),
        }}
      />
      <Tab.Screen
        name="List"
        component={List}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome name="list" size={30} color={focused ? Colors.primaryColor : '#748c94'} />
          ),
          headerShown: false, 
        }}
      />
      <Tab.Screen
        name="Leads"
        component={Lead}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome name="plus" size={26} color={focused ? '#fff' : '#fff'} />
          ),
          tabBarButton: (props) => <CustomTabBarButton {...props} focused={props.accessibilityState.selected} />,
        }}
      />
      <Tab.Screen
        name="Product"
        component={Product}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome name="calendar" size={30} color={focused ? Colors.primaryColor : '#748c94'} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome name="user-o" size={30} color={focused ? Colors.primaryColor : '#748c94'} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: Colors.primaryColor,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
