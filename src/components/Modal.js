import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated, Dimensions } from 'react-native'
import { searchPlanetary } from "../services/request/planetary"

const { height } = Dimensions.get('window')

const Modal = ({ show, close }) => {
    const [state, setState] = useState({
        opacity: new Animated.Value(0),
        container: new Animated.Value(height),
        modal: new Animated.Value(height)
    })
    const [planet, setPlanet] = useState('');

    const openModal = () => {
        Animated.sequence([
            Animated.timing(state.container, { toValue: 0, duration: 100, useNativeDriver: true }),
            Animated.timing(state.opacity, { toValue: 1, duration: 300, useNativeDriver: true }),
            Animated.spring(state.modal, { toValue: 0, bounciness: 5, useNativeDriver: true })
        ]).start()
    }

    const closeModal = () => {
        Animated.sequence([
            Animated.timing(state.modal, { toValue: height, duration: 250, useNativeDriver: true }),
            Animated.timing(state.opacity, { toValue: 0, duration: 300, useNativeDriver: true }),
            Animated.timing(state.container, { toValue: height, duration: 100, useNativeDriver: true })
        ]).start()
    }

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

    useEffect(() => {
        if (show) {
            openModal()
        } else {
            closeModal()
        }
    }, [show])

    return (
        <Animated.View style={[styles.container, {
            opacity: state.opacity,
            transform: [
                { translateY: state.container }
            ]
        }]}>
            <Animated.View style={[styles.modal, {
                transform: [
                    { translateY: state.modal }
                ]
            }]}>
                <View style={styles.indicator} />

                <Text style={[styles.title, styles.text]}>{planet.title}</Text>
                <Text style={styles.text}>{planet.explanation}</Text>
                <Text style={styles.text}>Copyright: {planet.copyright}</Text>

                <TouchableOpacity style={styles.btn} onPress={close}>
                    <Text style={{ color: '#11162A' }}>Close</Text>
                </TouchableOpacity>
            </Animated.View>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        position: 'absolute',
    },
    modal: {
        bottom: 0,
        position: 'absolute',
        height: '95%',
        backgroundColor: '#11162A',
        width: '100%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingLeft: 25,
        paddingRight: 25,
    },
    indicator: {
        width: 50,
        height: 5,
        backgroundColor: '#ccc',
        borderRadius: 50,
        alignSelf: 'center',
        marginTop: 5
    },
    title: {
        fontWeight: "bold",
        fontSize: 20
    },
    text: {
        marginTop: 50,
        textAlign: 'center',
        color: "#FFF"
    },
    btn: {
        width: '100%',
        height: 50,
        borderRadius: 10,
        backgroundColor: '#FFF',
        fontWeight: "bold",
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30
    }
})

export default Modal