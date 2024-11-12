// TabNavigation.js
import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Home from '../screens/Home';
import Dashboard from '../screens/dashboard/Dashboard';
import Lead from '../screens/leads/Lead';
import Product from '../screens/products/product';
import Profile from '../screens/profiles/Profile';
import Colors from '../constant/Color';


const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({ children, onPress }) => (
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
        backgroundColor: Colors.primaryColor,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {children}
    </View>
  </TouchableOpacity>
);

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
        
          position: 'absolute',
          bottom: 2,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: '#ffffff',
          borderRadius: 15,
          height: 70,
          ...styles.shadow,
        },
        tabBarIconStyle: {
           
            justifyContent: 'center', // Center icons vertically
            height:50    // Center icons horizontally
          },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome name="home" size={30} color={focused ? '#696e6f' : '#748c94'} />
          ),
        }}
      />
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome name="list" size={30} color={focused ? '#e32f45' : '#748c94'} />
          ),
        }}
      />
      <Tab.Screen
        name="Leads"
        component={Lead}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome name="plus" size={26} color="#fff" />
          ),
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
        }}
      />
      <Tab.Screen
        name="Product"
        component={Product}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome name="calendar" size={30} color={focused ? '#e32f45' : '#748c94'} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome name="user" size={30} color={focused ? '#e32f45' : '#748c94'} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({
  shadow: {
    // shadowColor: '#7F5DF0',
        shadowColor:Colors.primaryColor,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
