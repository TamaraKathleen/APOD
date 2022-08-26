import React from 'react';
import { Text, View, Image } from "react-native"
import logoNasa from "../../../assets/logoNasa.png"
import styles from "./styles"

export default function About() {
    return (
        <View style={styles.container}>
            <Text style={styles.text1}>Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer.</Text>
            <Text style={styles.text2}>Information from https://api.nasa.gov/</Text>
            <Image source={logoNasa} style={styles.image}/>
        </View>
    )
}