
import { StyleSheet, } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Auth/Login';
import AdminTabNavigation from './AdminTabNavigation';
import EmployeeTabNavigation from './EmployeeTabNavigation';



const Navigation = () => {
    const [userRole, setUserRole] = React.useState('employee');
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Login'>
                <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
                {/* <Stack.Screen name='Home' component={TabNavigation} options={{ headerShown: false }} /> */}

                {userRole === 'employee' && (
                    <Stack.Screen
                        name="Employee"
                        component={EmployeeTabNavigation}
                        options={{ headerShown: false }}
                    />
                )}
                {userRole === 'admin' && (
                    <Stack.Screen
                        name="Admin"
                        component={AdminTabNavigation}
                        options={{ headerShown: false }}
                    />
                )}

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation

const styles = StyleSheet.create({})
