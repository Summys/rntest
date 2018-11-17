import { StyleSheet } from 'react-native'
import Colors from '../../Theme/Colors';

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.loginBackground,
        borderRadius: 25,
        height: 350,
        paddingHorizontal: '4%',
        paddingVertical: '2%',
        marginHorizontal: '2.5%',
        justifyContent: 'space-around'
    }
})

export default styles