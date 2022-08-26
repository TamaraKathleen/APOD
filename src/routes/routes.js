import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity, TextInput, Text, StyleSheet } from 'react-native'

import Home from "../pages/Home";
import PopupMenu from '../components/PopupMenu';
import About from "../pages/About";
import Settings from "../pages/Settings";
import OriginalSize from "../pages/OriginalSize";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const Tab = createNativeStackNavigator();

export default function Routes() {

    const [dateValue, setDateValue] = useState('')
    const [infoDate, setInfoDate] = useState({})

    async function search() {
        const result = await searchByDate(dateValue)
        setDateValue('')
        if (result) {
            setInfoDate(result)
        } else {
            Alert.alert("No information found")
            setInfoDate({})
        }
    }

    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Planetary" component={Home} options={{
                    headerStyle: {
                        backgroundColor: '#11162A',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    headerRight: () => (
                        <PopupMenu />
                    )
                }} />
                <Tab.Screen name="About" component={About} options={{
                    headerStyle: {
                        backgroundColor: '#11162A',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    }
                }} />
                <Tab.Screen name="Settings" component={Settings} options={{
                    headerStyle: {
                        backgroundColor: '#11162A',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    }
                }} />
                <Tab.Screen name="Original Size" component={OriginalSize} options={{
                    headerStyle: {
                        backgroundColor: '#11162A',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    }
                }} />
            </Tab.Navigator>
        </NavigationContainer>
    );

}

const styles = StyleSheet.create({
    input: {
        flexDirection: "row",

        top: 10,
        borderRadius: 8,
        backgroundColor: "#FFF"
    },
})
