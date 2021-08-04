import React from 'react';

import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    TextInput
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from './LoginPage'
import SignUpPage from './SignUpPage';
import Detail from '../component/Detail'
export default class Main extends React.Component {
    constructor() {
        super()
    }
    render() {
        const Stack = createStackNavigator();
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="LoginPage" component={LoginPage} />
                    <Stack.Screen name="SignUpPage" component={SignUpPage} />
                    <Stack.Screen name="Detail" component={Detail} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}