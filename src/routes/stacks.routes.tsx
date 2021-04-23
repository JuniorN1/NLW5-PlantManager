import { createStackNavigator } from '@react-navigation/stack';
import React from "react";
import { Confirmation } from "../pages/Confirmation";
import { MyPlants } from '../pages/MyPlants';
import { PlantSave } from '../pages/PlantSave';
import { UserIdentification } from "../pages/UserIdentification";
import { Welcome } from "../pages/welcome";
import colors from '../styles/colors';
import AuthRoute from './tab.routes';

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
            component={AuthRoute}
        />
        <Screen 
            name="PlantSave"
            component={PlantSave}
        />
         <Screen 
            name="MyPlant"
            component={AuthRoute}
        />

    </Navigator>
)
export default AppRoutes;