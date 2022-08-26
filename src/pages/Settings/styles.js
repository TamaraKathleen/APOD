import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#11162A',
        position: 'absolute',
    },
    switch: {
        top: -36,
        right: 30
    },
    title: {
        fontSize: 18,
        fontFamily: "Montserrat-ExtraBold",
        fontWeight: "bold",
        color: "#FFF",
        padding: 16,
        marginTop: 20,
        left: 32
    },
    text: {
        fontFamily: "Montserrat-Bold",
        marginTop: 5,
        color: "#FFF",
        fontSize: 18,
        padding: 12,
        left: 32
    },
    input: {
        height: 40,
        margin: 12,
        width: 90,
        top: -55,
        left: 270,
        borderWidth: 1,
        padding: 10,
        borderColor: "#FFF",
        borderRadius: 8
    },
})

export default styles;