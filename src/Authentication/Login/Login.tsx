import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { RootStateOrAny, useSelector } from 'react-redux';
import {Button, Container} from '../../components';
import SocialLogin from '../../components/SocialLogin';
import { StackNavigationProps, Routes } from '../../components/Navigation';

import {CheckBox,TextInput} from '../../components';



const emailValidator= (email: string)=> /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);

export default function Login({navigation}: {navigation:StackNavigationProps<Routes,"Login">}) {
    const theme : ITheme = useSelector((state: RootStateOrAny)=>state.themeReducer.theme );
  const styles = getStyles(theme);
  
  return (
    <Container  footer={
      <SocialLogin  label='Don`t have an account? '
        button={
          <Button 
            label='Sign Up here'
            variant='link'
            width={100}
            onPress={()=>{  
              navigation.navigate("SignUp");
              }
            }
          />
        }
      />
      }>
      <View style={styles.container}>
        <View style={{  alignItems: 'center', marginVertical: 25 }}>
          <Text style={styles.title}>Welcome back</Text>
          <Text style={styles.article}> Use your credentials below and login to your account</Text>
        </View>
        <View>
          <TextInput placeholder='Enter your email' icon='envelope' validator={emailValidator}></TextInput>
          <TextInput placeholder='Enter your password' icon='lock'></TextInput>
        </View>
        <View style={{flexDirection: 'row' , justifyContent: 'space-between', alignItems: 'center', }}>
          <CheckBox label='Remember me' isChecked={false}/>
          <Button 
            label='Forgot password?'
            variant='link'
            width={150}
            onPress={()=>{  
              navigation.navigate("PasswordRecover");
              }
            }
          />
        </View>
      </View>
    </Container>
    
  )
}

const getStyles = (theme : ITheme) => StyleSheet.create({
    container:{
        //flex: 1,
        //backgroundColor: theme.backgroundColor,
        marginHorizontal: 25
    },
    title:{
      fontFamily: theme.Bold,
      fontSize: theme.hero/2,
      color: theme.textColor,
      marginVertical: 15
    },
    article:{
      fontFamily: theme.Regular,
      fontSize: theme.subtitle,
      color: theme.textColor,
      textAlign:'center'
    },
    
    
})