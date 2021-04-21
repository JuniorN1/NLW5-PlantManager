import React from "react";
import {createStackNavigator} from '@react-navigation/stack'
import colors from '../styles/colors';
import { Welcome } from "../pages/welcome";
import { UserIdentification } from "../pages/UserIdentification";
import { Confirmation } from "../pages/Confirmation";

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
            name="User"
            component={UserIdentification}
        />
          <Screen 
            name="Confirmation"
            component={Confirmation}
        />

    </Navigator>
)