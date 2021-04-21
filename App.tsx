
import {
  Jost_400Regular,
  Jost_600SemiBold, useFonts
} from '@expo-google-fonts/jost';
import AppLoading from 'expo-app-loading';
import React from 'react';
import { Confirmation } from './src/pages/Confirmation';
import { UserIdentification } from './src/pages/UserIdentification';
import { Welcome } from './src/pages/welcome';


export default function App() {
  let [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <Confirmation/>
    // <UserIdentification/>
    // <Welcome/>
  );
}
