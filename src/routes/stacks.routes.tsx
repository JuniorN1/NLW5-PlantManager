import { createStackNavigator } from '@react-navigation/stack';
import React from "react";
import { Confirmation } from "../pages/Confirmation";
import { MyPlants } from '../pages/MyPlants';
import { PlantSave } from '../pages/PlantSave';
import { PlantSelect } from "../pages/PlantSelect";
import { UserIdentification } from "../pages/UserIdentification";
import { Welcome } from "../pages/welcome";
import colors from '../styles/colors';

const {Navigator,Screen} = createStackNavigator();

const AppRoutes:React.FC=()=>(
    <Navigator
        headerMode="none"
        screenOptions={
            {
                cardStyle:{
                    backgroundColor:colors.white
                }
            }
        }
    >
        <Screen 
            name="Welcome"
            component={Welcome}
        />
         
        <Screen 
            name="UserIdentification"
            component={UserIdentification}
        />
        <Screen 
            name="Confirmation"
            component={Confirmation}
        />
        <Screen 
            name="PlantSelect"
            component={PlantSelect}
        />
        <Screen 
            name="PlantSave"
            component={PlantSave}
        />
         <Screen 
            name="MyPlants"
            component={MyPlants}
        />

    </Navigator>
)
export default AppRoutes;