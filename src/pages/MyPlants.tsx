import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    FlatList,
    Image,
    ScrollView
} from 'react-native';
import { Header } from '../components/header';
import colors from '../styles/colors';
import waterdrop from '../assets/waterdrop.png';
import { loadPlants, PlantsProps } from '../libs/storage';
import { formatDistance } from 'date-fns';
import { pt } from 'date-fns/locale';
import fonts from '../styles/fonts';
import { PlantCardSecundary } from '../components/PlantCardSecundary';
import { Load } from '../components/Load';
export function MyPlants(){
    const [myPlants,setMyPlants] = useState<PlantsProps[]>([]);
    const [loading, setLoading] = useState(true);  
    const [nextWaterd,setNextWaterd] = useState<string>();

    useEffect(()=>{
        (async () => {
            const plantsStoraged = await loadPlants();
            const nextTime = formatDistance(
                new Date(plantsStoraged[0].dateTimeNotification).getTime(),
                new Date(),
                {locale: pt}
            )
            setNextWaterd(
                `Não esqueça de regar a ${plantsStoraged[0].name} á ${nextTime} horas.`
            )
             setMyPlants(plantsStoraged);
            setLoading(false)

        })()
    },[])

    if(loading)
        return <Load/>
    return(
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.container}
        >
            <View style={styles.container}>
                <Header/>
                <View
                    style={styles.spotlight}
                >
                    <Image 
                        source={waterdrop}
                        style={styles.spotlightImage}
                    />
                    <Text
                        style={styles.spotlightText}
                    >
                        {nextWaterd}
                    </Text>
                </View>
                <View
                    style={styles.plants}
                >
                    <Text
                        style={
                            styles.plantsTitle
                        }
                    >
                        Próximas regadas
                    </Text>
                    <FlatList
                        data={myPlants}
                        keyExtractor={(item)=>String(item.id)}
                        renderItem={
                            ({item})=>(
                            <PlantCardSecundary data={item}/>
                            )
                        }
                        showsVerticalScrollIndicator={false}
                

                    />

                </View>
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:30,
        paddingTop:50,
        backgroundColor:colors.background

    },
    spotlight:{
        backgroundColor:colors.blue_light,
        paddingHorizontal:20,
        borderRadius:20,
        height:110,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'

    },
    spotlightImage:{
        width:60,
        height:60,


    },
    spotlightText:{
        flex:1,
        color:colors.blue,
        paddingHorizontal:20,
     

    },
    plants:{
        flex:1,
        width:'100%',


    },
    plantsTitle:{
        fontSize:24,
        fontFamily:fonts.heading,
        color:colors.heading,
        marginVertical:20
    }
})