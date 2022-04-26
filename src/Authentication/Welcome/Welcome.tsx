import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React from 'react'
import { RootStateOrAny, useSelector } from 'react-redux';
import { red } from 'react-native-redash';
import {Button} from '../../components/index';


const { width, height } = Dimensions.get('window')

export default function Welcome() {
  const theme : ITheme = useSelector((state: RootStateOrAny)=>state.themeReducer.theme );
  const styles = getStyles(theme);
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image resizeMode='contain'  style={styles.image} source={{uri: "https://fatalerror.xyz/outfit/images/onboarding/d1c6a8ec-c56e-11ec-9d64-0242ac120002.png", method: 'GET',}}></Image>
      </View>
      <View style={{backgroundColor: '#f5e5bf', flex:1, }}>
      <View style={styles.content}>
        <Text style={styles.title}>Let`s get started</Text>
        <Text style={styles.body}>Login to your account below or sign up for an amazing experience</Text>
        <Button label='Have an account? Login' variant='primary'></Button>
        <Button label='Join us, it`s Free'></Button>
        <Button label='Forgot password?' variant='link'></Button>
      </View>
      </View>
    </View>
  )
}

const getStyles = (theme : ITheme) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.backgroundColor,
  },
  imageContainer:{
    backgroundColor: '#f5e5bf',
    flex: 1,
    alignItems: 'center',
    borderBottomRightRadius: theme.BORDER_RADIUS,

  },
  image:{
    width: width,
    height: width/0.8,
  },
  content:{
    borderTopLeftRadius: theme.BORDER_RADIUS,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flex: 1,
    backgroundColor: theme.backgroundColor,
    paddingTop: 50,
    paddingHorizontal: 44,
    paddingBottom: 20,
  },
  title:{
    //marginTop: 75,
    fontFamily: theme.Bold,
    fontSize: theme.title,
  },
  body:{
    fontFamily: theme.Regular,
    fontSize: theme.article,
    textAlign: 'center'
  }
})