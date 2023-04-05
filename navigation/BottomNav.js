import { View, Text, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MateriScreen from '../screens/MateriScreen';
import QuizScreen from '../screens/QuizScreen';
import HomeScreen from '../screens/HomeScreen';

const Tab = createBottomTabNavigator();

const BottomNav = () => {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false
        }}>
            <Tab.Screen options={{
                tabBarIcon: (params) => {
                    if (params.focused === false) {
                        return (<Image
                            style={{ width: 24, height: 24 }}
                            source={require('../assets/menuNonActive/menunon1.png')}
                        />)
                    }
                    return (<Image
                        style={{ width: 24, height: 24 }}
                        source={require('../assets/menuActive/menu1.png')}
                    />)
                }
            }} name="Menu   " component={HomeScreen} />
            <Tab.Screen options={{
                tabBarIcon: (params) => {
                    if (params.focused === false) {
                        return (<Image
                            style={{ width: 24, height: 24 }}
                            source={require('../assets/menuNonActive/menunon2.png')}
                        />)
                    }
                    return (<Image
                        style={{ width: 24, height: 24 }}
                        source={require('../assets/menuActive/menu2.png')}
                    />)
                }
            }} name="Materi" component={MateriScreen} />
            <Tab.Screen options={{
                tabBarIcon: (params) => {
                    if (params.focused === false) {
                        return (<Image
                            style={{ width: 24, height: 24 }}
                            source={require('../assets/menuNonActive/menunon3.png')}
                        />)
                    }
                    return (<Image
                        style={{ width: 24, height: 24 }}
                        source={require('../assets/menuActive/menu3.png')}
                    />)
                }
            }} name="Quiz" component={QuizScreen} />
        </Tab.Navigator>
    )
}

export default BottomNav