import React from "react";
import { 
    View,
    StyleSheet,
    Text, 
    SafeAreaView
} from "react-native";
import { Button } from "../components/Button";
import  colors from '../styles/colors';
import fonts from '../styles/fonts';

export function Confirmation(){


    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.emoji}>
                    😄
                </Text>
                <Text style={styles.title}>

                </Text>
                <Text style={styles.subTitle}>
                    Agora vamos começar a cuidar das suas
                    plantinha com muito cuidado.
                </Text>
            
            </View>
            <View style={styles.footer}> 
                <Button title={'s'}/>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'space-around'

    },
    content:{
        

    },
    emoji:{
        fontSize:32,
        

    },
    title:{
        fontSize:22,
        fontFamily:fonts.heading,
        textAlign:'center',
        color:colors.heading,
        lineHeight:38,
        marginTop:15

    },
    subTitle:{
        fontFamily:fonts.text,
        textAlign:'center',
        fontSize:17,
        paddingVertical:20,
        color:colors.heading

    },
    footer:{
        width:'100%',
        paddingHorizontal:75
    }
})