import React from 'react';
import {
    StyleSheet,
    Text,
    Animated,
    View
} from 'react-native';
import {
    RectButton,
    RectButtonProps,
    Swipeable
} from 'react-native-gesture-handler';
import { SvgFromUri } from 'react-native-svg';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { Feather } from '@expo/vector-icons'
import format from 'date-fns/format';



interface PlantsProps extends RectButtonProps{
    data:{
        name:string;
        photo:string;
        hour:string;
        dateTimeNotification:Date;

    };
    handleRemove:()=>void;

}

export const PlantCardSecundary = ({data,handleRemove,...rest}:PlantsProps) =>{
    return(
        <Swipeable
            overshootRight={false}
            renderRightActions={()=>(
                <Animated.View>
                        <View>
                            <RectButton
                                style={styles.buttomRemove}
                                onPress={handleRemove}
                            >
                                <Feather
                                    name="trash"
                                    size={32}
                                    color={colors.white}
                                />
                            </RectButton>
                        </View>
                </Animated.View>

            )}
        >
            <RectButton 
                style={styles.container}
                {...rest}
            >
                <SvgFromUri 
                    uri={                    
                        data.photo                    
                    }
                    width={50}
                    height={50}
                />
                <Text style={styles.title}>
                    {data.name}
                </Text>
                <View
                    style={styles.details}
                >
                    <Text
                        style={styles.timeLabel}
                    >
                        Regar ás
                    </Text>
                    <Text
                        style={styles.time}
                    >
                      {format(new Date(data.dateTimeNotification),'HH:mm')}
                    </Text>
                </View>

            </RectButton>
        </Swipeable>
    )
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        paddingHorizontal:10,
        paddingVertical:25,
        borderRadius:20,
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:colors.shape,
        marginVertical:5
        
    },
    title:{
        flex:1,
        marginLeft:10,
        color:colors.heading,
        fontFamily:fonts.heading,
        fontSize:17,

    },
    details:{
        alignItems:'flex-end'
    },
    timeLabel:{      
        fontSize:16,
        fontFamily:fonts.text,
        color:colors.body_light

    },
    time:{
        marginTop:5,
        fontSize:16,
        fontFamily:fonts.heading,
    },
    buttomRemove:{

        width:100,
        height:85,
        backgroundColor:colors.red,
        marginTop:15,
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center',
        position:'relative',
        right:20,
        paddingLeft:15
    }


})