import {  StyleSheet, Text, View } from 'react-native'
import React, { ReactNode } from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import { RootStateOrAny, useSelector } from 'react-redux';
import { RectButton } from 'react-native-gesture-handler';

interface SocialLoginProps{
    label: string,
    button: ReactNode,
}

export default function SocialLogin({label,button}: SocialLoginProps) {
    const theme : ITheme = useSelector((state: RootStateOrAny)=>state.themeReducer.theme );
    const styles = getStyles(theme);
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <RectButton  style={styles.button}>
            <FontAwesome name='google' size={30}></FontAwesome>
        </RectButton >
        <RectButton  style={styles.button}>
            <FontAwesome name='facebook' size={30}></FontAwesome>
        </RectButton >
        <RectButton  style={styles.button}>
            <FontAwesome name='vk' size={30}></FontAwesome>
        </RectButton >
        <RectButton  style={styles.button}>
            <FontAwesome name='apple'  size={30}></FontAwesome>
        </RectButton >

      </View>
      <View style={styles.linkContainer}>
        <Text style={styles.label}>{label}</Text>
        {button}
      </View>
    </View>
  )
}

const  getStyles = (theme : ITheme) =>  StyleSheet.create({
    container:{
        marginVertical:15,
        justifyContent:'space-evenly',
        flex:1,
    },
    buttonContainer:{
        flexDirection: 'row',
        justifyContent:'space-evenly',
        paddingHorizontal: 44,
        marginVertical:10,
    },
    button:{
        borderRadius: theme.buttonBorderRadius,
        backgroundColor: theme.buttonColor,
        height: 50,
        width: 50,
        alignItems:'center',
        justifyContent:'center',
        elevation: 5,
    },
   
    label:{
        fontSize: theme.article,
        fontFamily: theme.Regular,
        color: theme.backgroundColor,
    },
    linkContainer:{
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'center',
    }
})