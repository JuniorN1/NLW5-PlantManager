import React from 'react';
import { NavigationContainer  } from '@react-navigation/native';
import StacksRoutes from './stacks.routes';


const Routes = () =>(
    <NavigationContainer>
        <StacksRoutes/>
    </NavigationContainer>
)

export default Routes;