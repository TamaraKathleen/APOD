import React, { useState } from 'react';
import { Text, View, Switch, TextInput } from "react-native"
import styles from "./styles"


export default function Settings() {
    const [isEnabled, setIsEnabled] = useState(false);
    const [number, onChangeNumber] = useState(null);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Notifications</Text>
            <View>
                <Text style={styles.text}>Daily notification</Text>
                <Switch
                    style={styles.switch}
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isEnabled ? "#FFFF" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>

            <View>
                <Text style={styles.text}>Time</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeNumber}
                    value={number}
                    placeholder="Time"
                    placeholderTextColor={"#FFF"}
                    keyboardType="numeric"
                />
            </View>
        </View>
    )
}