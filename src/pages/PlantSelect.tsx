import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    FlatList
} from 'react-native';
import { 
    EnviromentButton 
} from '../components/EnviromentButton';
import { Header } from '../components/header';
import { PlantCardPrimary } from '../components/PlantCardPrimary';
import api from '../services/api';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
interface EnviromentsProps{
    key:string;
    title:string;
}
interface PlantsProps{
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
export function PlantSelect(){
    const [enviroments,setEnviroments] = useState<EnviromentsProps[]>([]);
    const [plants,setPlants] = useState<PlantsProps[]>([])
    const [enviromentsSelected,setEnviromentsSelected] = useState('all');
    function handlesEnviromentsSelected(enviroments:string){
        setEnviromentsSelected(enviroments)
    }
    useEffect(()=>{
        (async function fetchEnviroment() {
            const { data } = await api
            .get("plants_environments?_sort=title&_order=asc");
            setEnviroments([
                {
                    key:'all',
                    title:'Todos'
                },
                ...data
            ]);
        })()
  

    },[]);
    useEffect(()=>{
        (async function fetchPlants() {
            const { data } = await api
            .get("plants?_sort=name&_order=asc");
            setPlants(data);
        })()
  

    },[]);
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
            <View>
                <FlatList
                    data={enviroments}                
                    renderItem={({item})=>(
                        <EnviromentButton                                         
                            title={item.title}    
                            active={item.key === enviromentsSelected} 
                            onPress={()=>handlesEnviromentsSelected(item.key)}                       
                        />
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.enviromentList}
                />
            </View>
            <View style={styles.plants}>
                <FlatList
                    data={plants}                
                    renderItem={({item})=>(
                        <PlantCardPrimary
                            data={item}                        
                        />
                    )}                   
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                  
                />
            </View>
          
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
    },
    enviromentList:{
        height:40,
        justifyContent:'center',
        paddingBottom:5,
        marginLeft:32,
        marginVertical:32,
  
    },
    plants:{
        flex:1,
        paddingHorizontal:32,
        justifyContent:'center'
    },

})