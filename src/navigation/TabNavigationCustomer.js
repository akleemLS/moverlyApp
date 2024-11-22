import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from '../screens/dashboard/Dashboard';
import List from '../screens/list/List';
import Profile from '../screens/profiles/Profile';
import AddLead from '../screens/pushIcon/AddLead';
import Calender from '../screens/calender/Calender';

const Tab = createBottomTabNavigator();

const TabNavigationCustomer = () => (
  <Tab.Navigator screenOptions={{ tabBarShowLabel: false }}>
    <Tab.Screen name="Dashboard" component={Dashboard} />
    <Tab.Screen name="List" component={List} />
    <Tab.Screen name="AddLead" component={AddLead} />
    <Tab.Screen name="Calendar" component={Calender} />
    <Tab.Screen name="Profile" component={Profile} />
  </Tab.Navigator>
);

export default TabNavigationCustomer;
