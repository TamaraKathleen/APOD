import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    image: {
        width: 600,
        height: 900,
    },
    button: {
        height: 60,
        width: "100%",
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#11162A',
        marginVertical: 10,
        marginTop: 670,
        position: "absolute",
    },
    textButton: {
        fontWeight: "700",
        fontFamily: "Roboto",
        fontSize: 18,
        color: '#FFF',
    },
    input: {
        flexDirection: "row",
        height: 40,
        width: 90,
        top: 10,
        borderRadius: 8,
        backgroundColor: "#FFF"
    },
})

export default styles;