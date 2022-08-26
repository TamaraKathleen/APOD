import React, { useState, useEffect } from 'react';
import { ImageBackground, SafeAreaView, StatusBar, Text, TouchableHighlight, View } from "react-native";
import { searchPlanetary } from "../../services/request/planetary";
import ReactNativeZoomableView from '@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView';


import styles from "./styles"

export default function OriginalSize() {

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

    return (
        <SafeAreaView style={styles.container}>

            <StatusBar barStyle="light-content" backgroundColor='#11162A' />
            <View style={styles.zoomWrapper}>
                <ReactNativeZoomableView
                    zoomEnabled={true}
                    maxZoom={2}
                    minZoom={0.5}
                    zoomStep={0.5}
                    initialZoom={1}
                    style={styles.zoomableView}
                >
                    <ImageBackground
                        source={{ uri: planet.hdurl }}
                        style={styles.image}
                    />
                </ReactNativeZoomableView>
            </View>


            {/* <TouchableHighlight
                onPress={() => { }} style={styles.btnClickContain}
                underlayColor='#81b0ff'>
                <View
                    style={styles.btnContainer}>
                    <Icon
                        name='arrow-expand-all'
                        size={25}
                        color='#11162A'
                        style={styles.btnIcon} />
                    <Text style={styles.btnText}>You can zoom it</Text>
                </View>
            </TouchableHighlight> */}
        </SafeAreaView>
    )
}

