// AdminTabNavigation.js
import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, StyleSheet, useColorScheme, Keyboard } from 'react-native';
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
import CalendarScreen from '../screens/calender/Calendar';
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
import { t } from 'i18next';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const DashboardStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="DashboardMain" component={Dashboard} />
    <Stack.Screen name="LeadServices" component={LeadServices} />
    <Stack.Screen name="EstimateServices" component={EstimatesServices} />
    <Stack.Screen name="OrderServices" component={OrderServices} />
    <Stack.Screen name="ServicesServices" component={ServicesServices} />
    <Stack.Screen name="ProductServices" component={ProductServices} />
    <Stack.Screen name="EditProduct" component={EditProduct} />
    <Stack.Screen name="MovingServices" component={MovingScreens} />
    <Stack.Screen name="EditMovingService" component={EditMovingService} />
    <Stack.Screen name="MovingMaterail" component={MovingMaterial} />
    <Stack.Screen name="EditMovingMaterail" component={EditMovingMaterail} />
    <Stack.Screen name="Customer" component={Customer} />
    <Stack.Screen name="EditCustomer" component={EditCustomer} />
  </Stack.Navigator>
);

const ListStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="List" component={List} />
    <Stack.Screen name="ListView" component={ViewList} />
  </Stack.Navigator>
);

const CalendarStack = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const Styles = createStyles(isDarkMode);
  const handleSearchTextChange =()=>{}
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: { backgroundColor: isDarkMode ? Colors.darker : Colors.lighter },
        headerTintColor: isDarkMode ? '#fff' : '#000',
        headerSearchBarOptions: {
          placeholder: 'Search events...',
          placeholderTextColor: isDarkMode ? '#aaa' : '#555',
          textInputBackgroundColor: isDarkMode ? '#444' : '#fff',
          onChangeText: handleSearchTextChange,
        },
      }}
    >
      <Stack.Screen name={t("Calender")} component={CalendarScreen} headerSearch={handleSearchTextChange} />
    </Stack.Navigator>
  );
};

const ProfileStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: true,
      headerStyle: { backgroundColor: Color.primaryColor },
      headerTintColor: 'white',
    }}
  >
    <Stack.Screen name={t("Profile")} component={Profile} />
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
        backgroundColor: focused ? Color.primaryColor : Color.black,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {children}
    </View>
  </TouchableOpacity>
);

const AdminTabNavigation = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const Styles = createStyles(isDarkMode);
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardVisible(true);
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardVisible(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);


  return (
    <View style={[{flex:1},Styles.container]}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarShowLabel: false,
          tabBarHideOnKeyboard: true,
          tabBarStyle: {
            position: 'relative',
            bottom: isKeyboardVisible ? -90 : 0, // Dynamically hide the tab bar
            left: 20,
            right: 20,
            elevation: 3,
            // backgroundColor: isDarkMode ? Colors.darker : '#F5F5F5',
            backgroundColor: isDarkMode ? 'black' : 'white',
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            height: isKeyboardVisible ? 0 : 90, // Set height to 0 when the keyboard is visible
            ...styles.shadow,
          },
          tabBarIconStyle: {
            justifyContent: 'center',
            height: 70,
          },
        })}
      >
        <Tab.Screen
          name={t("Dashboard")}
          component={DashboardStack}
          options={{
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name="home-outline"
                size={30}
                color={focused ? Color.primaryColor : isDarkMode ? Color.lightBackground : Color.darkBackground}
              />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="List"
          component={ListStack}
          options={{
            tabBarIcon: ({ focused }) => (
              <FontAwesome
                name="list"
                size={30}
                color={focused ? Color.primaryColor : isDarkMode ? Color.lightBackground : Color.darkBackground}
              />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name={t("Calender")}
          component={CalendarStack}
          options={{
            tabBarIcon: ({ focused }) => (
              <FontAwesome
                name="calendar"
                size={30}
                color={focused ? Color.primaryColor : isDarkMode ? Color.lightBackground : Color.darkBackground}
              />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name={t("Profile")}
          component={ProfileStack}
          options={{
            tabBarIcon: ({ focused }) => (
              <FontAwesome
                name="user-o"
                size={30}
                color={focused ? Color.primaryColor : isDarkMode ? Color.lightBackground : Color.darkBackground}
              />
            ),
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

export default AdminTabNavigation;

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
