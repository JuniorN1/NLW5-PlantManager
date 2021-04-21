import React from 'react';
import {
    StyleSheet, View,Text
} from 'react-native';
import { Header } from '../components/header';
import colors from '../styles/colors';
export function PlantSelect(){
    return(

        <View style={styles.container}>
            <Header/>
            <Text>
                Em qual ambiente
            </Text>
            <Text>
                você quer colocar sua planta?
            </Text>
        </View>

    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.background
    }
})