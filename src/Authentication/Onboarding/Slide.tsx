import { Dimensions, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const {width,height} = Dimensions.get("window");
interface SlideProps {
    title: string;
    right?: boolean;
    
}
export const SLIDE_HEIGHT = .6 * height;

export default function Slide({title, right}:SlideProps) {

const transform = [
    {translateY: (SLIDE_HEIGHT-100)/2},
    {translateX: right ? width/2 -70 : -width/2+50},
    {rotate: right ? "-90deg" : "-90deg"}
];
    
  return (
    <View style={styles.container}>
        
        <View style={[styles.titleContainer, {transform}]}>
            <Text style={styles.title}>{title}</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        width: width,

    },
    titleContainer:{
        height:100,
        justifyContent: "center",
   
    },
    title:{
        fontSize: 80,
       // lineHeight: 80,
        color: "#FFFFFF",
        textAlign: "center",
        fontFamily: 'SFPro_Bold',
        zIndex:15,
        elevation:2,
        
    },
})