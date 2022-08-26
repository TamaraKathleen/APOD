import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#11162A"
    },
    zoomWrapper: {
      flex: 1,
      overflow: 'hidden',
    },
    zoomableView: {
      padding: 10,
      // backgroundColor: '#fff',
    },
    image: {
      flex: 1,
      width: '100%',
      height: 315,
      top: 160,
      marginBottom: 10,
    },
    btnClickContain: {
        width: 220,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'stretch',
        alignSelf: 'stretch',
        backgroundColor: '#FFF',
        borderRadius: 20,
        padding: 5,
        margin: 10,
        marginTop: 350,
        marginBottom: 10,
        left: 80
      },
      btnContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'stretch',
        alignSelf: 'stretch',
        borderRadius: 10,
      },
      btnIcon: {
        height: 25,
        width: 25,
      },
      btnText: {
        fontSize: 18,
        color: '#11162A',
        marginLeft: 10,
        marginTop: 2,
      }
})

export default styles;