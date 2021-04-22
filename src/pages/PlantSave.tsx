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
export function PlantSave(){
    return(
        <View style={styles.container}>
            <View style={styles.plantInfo}>
                <SvgFromUri
                    uri=""
                    height={150}
                    width={150}
                />
                <Text style={StyleSheet.plantName}>
                    Nom da Planta
                </Text>
                <Text style={styles.plantAbout}>
                    Sobre a planta Lorem ipsum, dolor sit amet 
                    consectetur adipisicing elit. Placeat, 
                    quis amet, veritatis in labore sit molestias 
                    quisquam quaerat laboriosam, inventore 
                    dignissimos! Deleniti, fuga dolores. Impedit eo
                    s eaque repellat ipsum ad.
                </Text>
            </View>
            <View style={styles.controllers}>
                <View style={styles.tipContainer}>
                    <Image
                        source={waterdrop}
                        style={styles.tipImage}
                    />
                    <Text
                        style={styles.tipText}
                    >
                        Lorem ipsum dolor sit amet 
                        consectetur adipisicing elit. 
                        Officia rem maiores quis aliquam 
                        cupiditate quisquam, culpa voluptas.
                        Laboriosam iure, rem saepe sit 
                        laborum similique animi numquam 
                        deserunt, suscipit cumque aspernatur
                         
                    </Text>
                </View>
                <Text
                    style={styles.alertLabel}
                >
                    Escolha o melhor horário para ser lembrado:
                </Text>
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

    }

})