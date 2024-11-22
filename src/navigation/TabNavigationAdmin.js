import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from '../screens/dashboard/Dashboard';



import List from '../screens/list/List';
import Profile from '../screens/profiles/Profile';
import Calender from '../screens/calender/Calender';
import AddLead from '../screens/pushIcon/AddLead';
import MovingScreens from '../screens/dashboard/MovingScreens';
import ProductServices from '../screens/dashboard/ProductServices';
import ServicesServices from '../screens/dashboard/ServicesServices';
import OrderServices from '../screens/dashboard/OrderServices';
import EstimatesServices from '../screens/dashboard/EstimatesServices';
import LeadServices from '../screens/dashboard/LeadServices';

const Tab = createBottomTabNavigator();

const TabNavigationAdmin = () => (
  <Tab.Navigator screenOptions={{ tabBarShowLabel: false }}>
    <Tab.Screen name="Dashboard" component={Dashboard} />
    <Tab.Screen name="LeadServices" component={LeadServices} />
    <Tab.Screen name="EstimatesServices" component={EstimatesServices} />
    <Tab.Screen name="OrderServices" component={OrderServices} />
    <Tab.Screen name="ServicesServices" component={ServicesServices} />
    <Tab.Screen name="ProductServices" component={ProductServices} />
    <Tab.Screen name="MovingServices" component={MovingScreens} />
    <Tab.Screen name="List" component={List} />
    <Tab.Screen name="AddLead" component={AddLead} />
    <Tab.Screen name="Calendar" component={Calender} />
    <Tab.Screen name="Profile" component={Profile} />
  </Tab.Navigator>
);

export default TabNavigationAdmin;
