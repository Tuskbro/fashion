import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { RectButton } from 'react-native-gesture-handler';


interface ButtonProps {
    label: string;
    variant: "primary"|"default";
    onPress: () => void;
    
}

export default function Button({label,variant, onPress}:ButtonProps) {
  return (
    <RectButton 
        style={[styles.container, {backgroundColor: variant=="primary" ? "#BEECC4": "#E1EDE1"}]}
        {...{onPress}}
        >
        <View >
            <Text style={[styles.label,{color: variant=="primary" ? "#FFFFFF": "#000000"}]}>{label}</Text>
        </View>
    </RectButton>
  )
};

Button.defaultProps= {variant: "default"};

const styles = StyleSheet.create({
    container:{
        borderRadius: 25,
        height:50,
        width: 245,
        justifyContent: "center",
        alignItems: 'center',
        elevation: 5,
    },
    label:{
        fontSize: 15,
        textAlign: 'center',
        fontFamily: "SFPro_Semibold"
    },
})