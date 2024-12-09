// AdminTabNavigation.js
import React from 'react';
import { View, TouchableOpacity, StyleSheet, useColorScheme } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Dashboard from '../screens/dashboard/Dashboard';

import Profile from '../screens/profiles/Profile';
import List from '../screens/list/List';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LeadServices from '../screens/dashboard/LeadServices';
import EstimatesServices from '../screens/dashboard/EstimatesServices';
import OrderServices from '../screens/dashboard/OrderServices';
import ServicesServices from '../screens/dashboard/ServicesServices';
import ProductServices from '../screens/dashboard/ProductServices';
import MovingScreens from '../screens/dashboard/movingSection/MovingScreens';
import ViewList from '../screens/list/ViewList';
import AddLead from '../screens/pushIcon/AddLead';
import Calender from '../screens/calender/Calender';
import createStyles from '../constant/CustomStyle';
import Color from '../constant/Color';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import EditProduct from '../screens/products/EditProduct';
import EditMovingService from '../screens/dashboard/movingSection/EditMovingService';
import MovingMaterial from '../screens/dashboard/movingMaterailSection/MovingMaterial';
import EditMovingMaterail from '../screens/dashboard/movingMaterailSection/EditMovingMaterail';
import Customer from '../screens/dashboard/customer/Customer';
import EditCustomer from '../screens/dashboard/customer/EditCustomer';
import ViewOrderStatus from '../screens/employee/dashboard/ViewOrderStatus';
import EmployeeDashboard from '../screens/employee/dashboard/EmployeeDashboard';
import EmployeeProfile from '../screens/employee/profile/EmployeeProfile';

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

const DashboardStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="EmployeeDashboard" component={EmployeeDashboard} />
    <Stack.Screen name="LeadServices" component={LeadServices} />
    <Stack.Screen name="EstimateServices" component={EstimatesServices} />
    <Tab.Screen name="OrderServices" component={OrderServices} />
    <Tab.Screen name="ServicesServices" component={ServicesServices} />
    <Tab.Screen name="ProductServices" component={ProductServices} />
    <Tab.Screen name="EditProduct" component={EditProduct}/>
    <Tab.Screen name="MovingServices" component={MovingScreens} />
    <Tab.Screen name="EditMovingService" component={EditMovingService} />
    <Tab.Screen name="MovingMaterail" component={MovingMaterial} />
    <Tab.Screen name="EditMovingMaterail" component={EditMovingMaterail} />
    <Tab.Screen name="Customer" component={Customer} />
    <Tab.Screen name="EditCustomer" component={EditCustomer} />
    <Tab.Screen name='ViewOrderStatus' component={ViewOrderStatus} />


  </Stack.Navigator>
);

const ListStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="List" component={List} />
    <Stack.Screen name="ListView" component={ViewList} />
    {/* Add other nested screens under List here if needed */}
  </Stack.Navigator>
);

const AddLeadStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="AddLeads" component={AddLead} />
    {/* Add other nested screens under AddLead here if needed */}
  </Stack.Navigator>
);

const CalendarStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Calender" component={Calender} />
    {/* Add other nested screens under Calendar here if needed */}
  </Stack.Navigator>
);

const ProfileStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Profile" component={EmployeeProfile} />
    <Stack.Screen name="ViewOrderStatus" component={ViewOrderStatus} />
  </Stack.Navigator>
);


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
        backgroundColor: focused ? Color.primaryColor : 'black',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {children}
    </View>
  </TouchableOpacity>
);


const EmployeeTabNavigation = () => {

  const isDarkMode = useColorScheme() === 'dark';
  const Styles = createStyles(isDarkMode);

  return (
    <View style={[{flex:1, backgroundColor: isDarkMode ? Colors.darker : Color.lightBackground,}]}>

      <Tab.Navigator
        screenOptions={({ route }) => ({

          tabBarShowLabel: false,
          tabBarHideOnKeyboard: true,
          tabBarStyle: {
            position: 'relative',
            bottom: 0,
            left: 20,
            right: 20,
            elevation: 1,
            backgroundColor:  isDarkMode ? Colors.darker : '#F5F5F5',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            height: 70,
            ...styles.shadow,
          },
          tabBarIconStyle: {
            justifyContent: 'center',
            height: 50,
          },
        })}
      >
        <Tab.Screen
          name="Dashboard"
          component={DashboardStack}
          options={{
            tabBarIcon: ({ focused }) => (
              <Ionicons name="home-outline" size={30} color={focused ? Color.primaryColor : 'black'} />
            ),
            headerShown: false

          }}
        />
        <Tab.Screen
          name="List"
          component={ListStack}
          options={{
            tabBarIcon: ({ focused }) => (
              <FontAwesome name="list" size={30} color={focused ? Color.primaryColor : 'black'} />
            ),
            headerShown: false
          }}

        />
        {/* <Tab.Screen
          name="Leads"
          component={AddLeadStack}
          options={{
            tabBarIcon: ({ focused }) => (
              <FontAwesome name="plus" size={26} color={focused ? '#fff' : '#fff'} />
            ),
            tabBarButton: (props) => <CustomTabBarButton {...props} focused={props.accessibilityState.selected} />,
          }}
        /> */}
        <Tab.Screen
          name="Calender"
          component={CalendarStack}
          options={{
            tabBarIcon: ({ focused }) => (
              <FontAwesome name="calendar" size={30} color={focused ? Color.primaryColor : 'black'} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileStack}
          options={{
            tabBarIcon: ({ focused }) => (
              <FontAwesome name="user-o" size={30} color={focused ? Color.primaryColor : 'black'} />
            ),
            headerShown: true
          }}
        />
      </Tab.Navigator>
    </View>
  );
};



export default EmployeeTabNavigation;

const styles = StyleSheet.create({
  
  shadow: {
    shadowColor: Color.primaryColor,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
