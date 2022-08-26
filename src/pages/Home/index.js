import React, { useEffect, useState } from 'react';
import { StatusBar, SafeAreaView, TouchableOpacity, Text, ImageBackground, View, TextInput } from 'react-native';
import { searchPlanetary } from "../../services/request/planetary"

import Modal from '../../components/Modal';

import styles from "./styles"

import { CardHomeShimmerEffect } from '../../components/CardHomeShimmerEffect';

import { searchByDate } from '../../services/request/planetary';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Home() {
    const [planet, setPlanet] = useState('');
    const [modal, setModal] = useState(false)
    const [tempo, setTempo] = useState(false);

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

    useEffect(() => {
        setTimeout(() => {
            setTempo(true);
        }, 3000)

    }, [])

    useEffect(() => {
        try {
            async function fetchData() {
                const result = await searchPlanetary()
                setPlanet(result)
            }
            fetchData()
        } catch (error) {
            console.log("Error => ", error)
        }

    }, [])


    return (
        <SafeAreaView style={styles.container}>

            <StatusBar barStyle="light-content" backgroundColor='#11162A' />
            {/* <TouchableOpacity onPress={() => { }} style={{ marginRight: 10 }}>
                <TextInput
                    placeholder="Search Date"
                    autoCapitalize="none"
                    value={dateValue}
                    style={styles.input}
                    onChangeText={setDateValue}
                    keyboardType="numeric"
                />

                <TouchableOpacity
                    onPress={search}>
                    <Icon name="magnify" size={26} color={"#11162A"} />
                </TouchableOpacity>
            </TouchableOpacity> */}
            {tempo ?
                <View>

                    <ImageBackground
                        source={{ uri: planet.hdurl }}
                        style={styles.image}
                        imageStyle={{
                            opacity: 1,
                            resizeMode: "cover",
                            height: '100%',
                        }}
                    />

                    <TouchableOpacity style={styles.button} onPress={() => setModal(true)}>
                        <Text style={styles.textButton}>{planet.title}</Text>
                    </TouchableOpacity>
                </View>
                :
                <>
                    <CardHomeShimmerEffect />
                </>
            }
            <Modal
                show={modal}
                close={() => setModal(false)}
            />
        </SafeAreaView>
    );
}

