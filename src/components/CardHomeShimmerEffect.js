import React from "react";
import { View, Image, } from "react-native";
import styles from "../pages/Home/styles";
import shimmerGif from "../../assets/shimmerGif.gif"

export function CardHomeShimmerEffect() {
  return (
    <View style={styles.container}>
      <View style={styles.pessoaArea}>
        <Image source={shimmerGif} style={[styles.image, { overlayColor: "#FFF" }]} />
      </View>
    </View>
  );
}