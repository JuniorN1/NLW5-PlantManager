import React from 'react';
import { 
    StyleSheet,
    Text,
   
    View
 } from 'react-native';
import colors from '../styles/colors';
import { 
    RectButton,
    RectButtonProps
 } from 'react-native-gesture-handler';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import fonts from '../styles/fonts';
import { PlantSelect } from '../pages/PlantSelect';
import {SvgFromUri} from 'react-native-svg';



interface PlantsProps extends RectButtonProps{
    data:{
        name:string;
        photo:string;
    };

}

export const PlantCardPrimary = ({data,...rest}:PlantsProps) =>{
    return(
        <RectButton 
            style={styles.container}
            {...rest}
        >
            <SvgFromUri 
                uri={                    
                    data.photo                    
                }
                width={70}
                height={70}
            />
            <Text style={styles.text}>
                {data.name}
            </Text>
        </RectButton>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        maxWidth:'45%',
        backgroundColor:colors.shape,
        borderRadius:20,
        paddingVertical:10,
        alignItems:'center',
        margin:10
        
    },
    text:{
        color:colors.green_dark,
        fontFamily:fonts.heading,
        marginVertical:16
    }

})