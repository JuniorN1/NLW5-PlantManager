import React, { useEffect, useState } from 'react';
import {
    ActivityIndicator, 
    FlatList, 
    StyleSheet,
    Text, 
    View,
    Platform,
    ScrollView,
    Image
} from 'react-native';
import {
    EnviromentButton
} from '../components/EnviromentButton';
import { Header } from '../components/header';
import { Load } from '../components/Load';
import { PlantCardPrimary } from '../components/PlantCardPrimary';
import api from '../services/api';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import {SvgFromUri} from 'react-native-svg';
import waterdrop from '../assets/waterdrop.png'
import { Button } from '../components/Button';
import DateTimePicker ,{ Event } from '@react-native-community/datetimepicker'
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { useRoute } from '@react-navigation/core';
interface PlantsProsp{
    plant:{
        id:number;
        name: string;
        about: string;
        water_tips: string;
        photo: string;
        environments: string[],
        frequency: {
            times: number;
            repeat_every: string;
        }
    }
}
export function PlantSave(){
    const route = useRoute();
    const {plant}    = route.params as PlantsProsp;
    const [selectedDateTime,setSelectedDateTime] = useState(new Date)
    const [showDatePicker,setShowDatePicker]     =useState(Platform.OS ==='ios')
    function handleChangeTime(event:Event,dateTime:Date|undefined){
        if(Platform.OS === 'android'){
            setShowDatePicker(oldState=>!oldState)
        }
    }
    return(
        <View style={styles.container}>
            <View style={styles.plantInfo}>
                <SvgFromUri
                    uri={plant.photo}
                    height={150}
                    width={150}
                />
                <Text style={styles.plantName}>
                   {plant.name}
                </Text>
                <Text style={styles.plantAbout}>
                   {plant.about}
                </Text>
            </View>
            <View style={styles.controller}>
                <View style={styles.tipContainer}>
                    <Image
                        source={waterdrop}
                        style={styles.tipImage}
                    />
                    <Text
                        style={styles.tipText}
                    >
                        {plant.water_tips}
                    </Text>
                </View>
                <Text
                    style={styles.alertLabel}
                >
                    Escolha o melhor horário para ser lembrado:
                </Text>
                <DateTimePicker 
                    value={selectedDateTime}
                    mode="time"
                    display="spinner"
                    onChange={handleChangeTime}
                />
                <Button 
                    title="Cadastrar planta"
                    onPress={()=>{}}
                />

            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'space-between',
        backgroundColor:colors.shape,
    },
    plantInfo:{
        flex:1,
        paddingHorizontal:30,
        paddingVertical:50,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:colors.shape
    },
    controller:{
        backgroundColor:colors.white,
        paddingHorizontal:20,
        paddingTop:20,
        paddingBottom:getBottomSpace() || 20

    },
    plantName:{
        fontFamily:fonts.heading,
        fontSize:24,
        color:colors.heading,
        marginTop:15
    },
    plantAbout:{
        textAlign:'center',
        fontFamily:fonts.text,
        color:colors.heading,
        fontSize:17,
        marginTop:10
    },
    tipContainer:{
        flexDirection:'row',
        justifyContent:"space-between",
        alignItems:"center",
        backgroundColor:colors.blue_light,
        padding:20,
        borderRadius:20,
        position:'relative',
        bottom:60
    },
    tipImage:{
        width:56,
        height:56,
    
    },
    tipText:{
        flex:1,
        marginLeft:20,
        fontFamily:fonts.text,
        color:colors.blue,
        fontSize:17,
        textAlign:'justify'
    },
    alertLabel:{
        textAlign:'center',
        fontFamily:fonts.complement,
        color:colors.heading,
        marginBottom:5,
       
    }

})