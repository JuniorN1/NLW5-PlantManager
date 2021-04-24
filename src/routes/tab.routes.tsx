import React from 'react';
import { 
    createBottomTabNavigator
 } from '@react-navigation/bottom-tabs';
import colors from '../styles/colors';
import { PlantSelect } from '../pages/PlantSelect';
import { MaterialIcons } from '@expo/vector-icons'
import { MyPlants } from '../pages/MyPlants';
import { Platform } from 'react-native';
 const {Navigator,Screen} = createBottomTabNavigator();

 const AuthRoute=()=>{
     return(
        <Navigator
            tabBarOptions={
                {
                    activeTintColor:colors.green,
                    inactiveTintColor:colors.heading,
                    labelPosition:'beside-icon',
                    style:{
                        paddingVertical:Platform.OS === 'ios' ? 28 : 0,
                        height:88
                    }
                }
            }

        >
            <Screen 
                name="Nova Planta"
                component={PlantSelect}
                options={{
                    tabBarIcon:(({
                        size,color
                    })=>
                        (
                            <MaterialIcons
                                name="add-circle-outline"
                                size={size}
                                color={color}
                            />
                        )
                    )
                }}


            />
               <Screen 
                name="Minhas Plantas"
                component={MyPlants}
                options={{
                    tabBarIcon:(({
                        size,color
                    })=>
                        (
                            <MaterialIcons
                                name="format-list-bulleted"
                                size={size}
                                color={color}
                            />
                        )
                    )
                }}


            />

        </Navigator>


     )
 }

 export default AuthRoute;