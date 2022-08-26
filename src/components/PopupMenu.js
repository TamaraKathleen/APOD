import React, { useState, useRef, useEffect } from 'react';
import { TouchableOpacity, View, Modal, SafeAreaView, StyleSheet, Text, Animated, Easing, Alert, TextInput } from "react-native"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

import { searchPlanetary } from "../services/request/planetary"

import Share from "react-native-share";

const PopupMenu = () => {
    const navigation = useNavigation();
    const [visible, setVisible] = useState(false);
    const scale = useRef(new Animated.Value(0)).current;

    const [planet, setPlanet] = useState('');
    

    useEffect(() => {
        async function fetchData() {
            try {
                const result = await searchPlanetary()
                setPlanet(result)
            } catch (error) {
                console.log("Error => ", error)
            }
        }
        fetchData()
    }, [])

    const options = [
        {
            title: "Original Size",
            icon: "panorama-variant-outline",
            action: () => navigation.navigate('Original Size')
        },
        {
            title: "Share app",
            icon: "share-variant-outline",
            action: () => myCustomShare()
        },
        {
            title: "Settings",
            icon: "cog-outline",
            action: () => navigation.navigate('Settings')
        },
        {
            title: "About",
            icon: "information-outline",
            action: () => navigation.navigate('About')
        },

    ]

    function resizeBox(to) {
        to === 1 && setVisible(true);
        Animated.timing(scale, {
            toValue: to,
            useNativeDriver: true,
            duration: 200,
            easing: Easing.linear
        }).start(() => to === 0 && setVisible(false));
    }

    const myCustomShare = async () => {
        const shareOptions = {
            message: planet.title,
            url: planet.hdurl
        }

        try {
            const ShareResponse = await Share.open(shareOptions)
        } catch (error) {
            console.log("Error => ", error)
        }
    }

    return (
        <View>
            <TouchableOpacity onPress={() => resizeBox(1)}>
                <Icon name="plus-circle-outline" size={26} color={"#FFF"} />
            </TouchableOpacity>
            <Modal transparent visible={visible}>
                <SafeAreaView
                    style={{ flex: 1 }}
                    onTouchStart={() => resizeBox(0)}>
                    <Animated.View style={styles.popup}>
                        {options.map((op, i) => (
                            <TouchableOpacity style={styles.option} key={i} onPress={op.action}>
                                <Text style={styles.text}>{op.title}</Text>
                                <Icon name={op.icon} size={26} color={"#11162A"} style={{ marginLeft: 10 }} />
                            </TouchableOpacity>
                        ))}
                    </Animated.View>
                </SafeAreaView>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    popup: {
        borderRadius: 8,
        borderColor: "#11162A",
        borderWidth: 1,
        backgroundColor: "#FFF",
        paddingHorizontal: 50,
        position: "absolute",
        top: 50,
        right: 20
    },
    option: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 7,
        borderBottomColor: "#11162A",
    },
    text: {
        fontSize: 16
    }
})

export default PopupMenu;
