import AsyncStorage from '@react-native-async-storage/async-storage';
import { format } from 'date-fns';

export interface PlantsProps{

    id:number;
    name: string;
    about: string;
    water_tips: string;
    photo: string;
    environments: string[],
    frequency: {
        times: number;
        repeat_every: string;
    },
    dateTimeNotification:Date
    
}

export interface EnviromentsProps{
    key:string;
    title:string;
}

interface StoragePlantProps{
    [id:string]:{
        data:PlantsProps;
    }
}

export async function savePlants(plant:PlantsProps):Promise<void> {
    try{
        const data = await AsyncStorage.getItem('@plantmanager:plants');
        const oldPlants = data? (JSON.parse(data) as StoragePlantProps):{};
        const newPlant ={
            [plant.id]:{
                data: plant
            }
        }
        await AsyncStorage.setItem('@plantmanager:plants',
            JSON.stringify({
                ...newPlant,
                ...oldPlants
            })
        );
    }catch(err){
        throw new Error(err);
    }
}

export async function loadPlants():Promise<StoragePlantProps> {
    try{
        const data = await AsyncStorage.getItem('@plantmanager:plants');
        const plants = data? (JSON.parse(data) as StoragePlantProps):{};
        return plants;
    }catch(err){
        throw new Error(err);
    }
}