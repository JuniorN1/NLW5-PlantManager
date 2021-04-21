import React from 'react';
import {
    StyleSheet, View,Text
} from 'react-native';
import { EnviromentButton } from '../components/EnviromentButton';
import { Header } from '../components/header';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
export function PlantSelect(){
    return(

        <View style={styles.container}>
            <View style={styles.header}>
                <Header/>
                <Text style={styles.title}>
                    Em qual ambiente
                </Text>
                <Text style={styles.subtitle}>
                    você quer colocar sua planta?
                </Text>
            </View>
            <EnviromentButton title="TEXTO"/>

        </View>

    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.background
    },
    header:{
        paddingHorizontal:30
    },
    title:{
        fontSize:17,
        color:colors.heading,
        fontFamily:fonts.heading,
        lineHeight:20,
        marginTop:15
    },
    subtitle:{
        fontSize:17,
        color:colors.heading,
        fontFamily:fonts.text,
        lineHeight:20,


    }
})