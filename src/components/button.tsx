import React from 'react';
import { TouchableOpacity,Text ,StyleSheet,TouchableOpacityProps } from 'react-native';
import colors from '../styles/colors';

interface ButtonProps {
    title:string;
}

export function Button({title} : ButtonProps){

    return (
        <TouchableOpacity 
        activeOpacity={0.7}
        style={styles.button}
    >
        <Text style={styles.buttonText}>
           {title}
        </Text>
    </TouchableOpacity>


    )
}

const styles = StyleSheet.create({
    button:{
        backgroundColor:colors.green,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:16,
        marginBottom:10,
        height:56,
        width:56
    },
    buttonText:{
        color:colors.white,
        fontSize:24
    }
})