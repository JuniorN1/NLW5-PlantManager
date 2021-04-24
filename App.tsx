
import {
  Jost_400Regular,
  Jost_600SemiBold, useFonts
} from '@expo-google-fonts/jost';
import AppLoading from 'expo-app-loading';
import React, { useEffect } from 'react';
import Routes from './src/routes';

import * as Notifications from 'expo-notifications';
import { PlantsProps } from './src/libs/storage';
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default function App() {
  let [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold,
  });
 

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <Routes/>
  );
}
