import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    View,
    KeyboardAvoidingView,
    TouchableNativeFeedback,
    Platform,
    Keyboard,
    Alert,
    
} from "react-native";
import { Button } from "../components/Button";
import colors from "../styles/colors";
import fonts from "../styles/fonts";
import AsyncStorage from '@react-native-async-storage/async-storage';
export function UserIdentification(){
    const navigation                = useNavigation();
    const [isFocused,setIsFocused]  = useState(false)
    const [isFilled,setIsFilled]    = useState(false)
    const [name,setName]            = useState<string>()
    async function handleSubmit(){
        if(!name)
            return Alert.alert('Me diz como chamar você 😭')
        try{ 
           await AsyncStorage.setItem("@plantmanager:user",name)
            navigation.navigate("Confirmation",{
                title:'Prontinho',
                subtitle:'Agora vamos começar a cuidar das suas plantinha com muito cuidado.',
                buttonTitle:'Começar',
                icon:'smile',
                nextScreen:'PlantSelect'
            })
        }catch{
            return Alert.alert('Não foi possivel salvar o seu nome! 😭')
        }
    }
    function handleInputBlur(){
        setIsFocused(false);
    }
    function handleInputFocus(){
        setIsFocused(true);
        setIsFilled(!!name);
    }
    function handlesInputChange(value:string){
        setIsFilled(!!value);
        setName(value);
    }

    return (
        <TouchableNativeFeedback 
            onPress={
                Keyboard.dismiss
            }
        >
            <SafeAreaView style={styles.container}>
                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios'?'padding':'height'}
                >
                    <View style={styles.content}>
                        <View style={styles.form}>
                            <View style={styles.header}>
                                <Text style={styles.emoji}>
                                    {isFilled?'😄':'😃'}
                                </Text>
                                <Text
                                    style={styles.title}
                                >
                                    Como podemos{'\n'}
                                    chamar você?
                                </Text>     
                            </View>              
                            <TextInput 
                                style={[
                                    styles.input,
                                ( isFocused || isFilled) 
                                    && 
                                    {
                                        borderColor:colors.green
                                    }
                                    
                                ]}
                                placeholder={
                                    "Digite um Nome"
                                }
                                onBlur={handleInputBlur}
                                onFocus={handleInputFocus}
                                onChangeText={handlesInputChange}
                            />
                            <View style={styles.footer}>
                                <Button 
                                    title={"Avançar"}
                                    onPress={handleSubmit}
                                />
                            </View>
                        </View>
                    </View>

                </KeyboardAvoidingView>
            </SafeAreaView>
        </TouchableNativeFeedback>
    )

}
const styles= StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        alignItems:'center',
        justifyContent:'space-around'

    },
    content:{
        flex:1,
        width:'100%'

    },
    form:{
        flex:1,
        justifyContent:'center',
        paddingHorizontal:54,
        alignItems:"center",
       

    },
    header:{
        alignItems:'center',

    },
    emoji:{
        fontSize:44,

    },
    title:{
        fontSize:24,
        lineHeight:32,
        textAlign:'center',
        color:colors.heading,
        fontFamily:fonts.heading,
        marginTop:20

    },

    input:{
        borderBottomWidth:1,
        borderColor:colors.gray,
        width:'100%',
        fontSize:18,
        marginTop:50,
        padding:10,
        textAlign:'center'
    },
    footer:{
        marginTop:40,
        width:'100%',
        paddingHorizontal:20
    }

});