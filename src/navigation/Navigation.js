
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Login from '../screens/Auth/Login';
import TabNavigation from './TabNavigation';
import TabNavigationCustomer from './TabNavigationCustomer';
import TabNavigationAdmin from './TabNavigationAdmin';



const Navigation = () => {
    const [userRole, setUserRole] = React.useState('admin');
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Login'>
                <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
                <Stack.Screen name='Home' component={TabNavigation} options={{ headerShown: false }} /> 
                {/*              
                {/* {userRole === 'customer' && (
                    <Stack.Screen
                        name="Customer"
                        component={TabNavigationCustomer}
                        options={{ headerShown: false }}
                    />
                )}
                {userRole === 'admin' && (
                    <Stack.Screen
                        name="Admin"
                        component={TabNavigationAdmin}
                        options={{ headerShown: false }}
                    />
                )} */}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation

const styles = StyleSheet.create({})
