import React from 'react';
import { 
    StyleSheet,
    Text,
    Image,
    View
 } from 'react-native';
import colors from '../styles/colors';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import userImg from '../assets/watering.png';
import fonts from '../styles/fonts';

import LottieView from 'lottie-react-native';
import LoadAnimation from '../assets/load.json';


export function Load(){
    return(
        <View style={styles.container}>
            <LottieView
                source={LoadAnimation}
                autoPlay
                loop
                style={styles.animation}

            />

        </View>
    )
}



const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    animation:{
        backgroundColor:'transparent',
        width:200,
        height:200 
    }

})