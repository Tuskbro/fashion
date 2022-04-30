import { StyleSheet, Text, View, TextInput as RNTextInput } from 'react-native'
import React, { useState } from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import { useSelector, RootStateOrAny } from 'react-redux';


interface TextInputProps{
    placeholder: string;
    icon: string;
    validator: (input: string)=> boolean;
}

const Valid = true;
const Invalid= false;
const Pristine= null;
type InputState = typeof Valid | typeof Invalid | typeof Pristine

export default function TextInput({placeholder, icon}: TextInputProps) {
    const theme : ITheme = useSelector((state: RootStateOrAny)=>state.themeReducer.theme );
    const styles = getStyles(theme);
    const [validState, setValidState] = useState<InputState>(Pristine);
    const color = validState===Pristine ? "#8A8D90" : validState===Valid?  theme.PrimaryButtonColor : '#FF0058'
  return (
    <View style={[styles.container,{borderColor: color}]}>
      <FontAwesome style={styles.icon} name={icon} color={color} size={20}></FontAwesome>
      <RNTextInput underlineColorAndroid='transparent' placeholder={placeholder} ></RNTextInput>
      {(validState===Valid|| validState===Invalid)&&(
          <View style={{height:20,width:20, borderRadius: 25,backgroundColor:color}}>
              <FontAwesome style={styles.icon} name={validState===Valid? 'check' : 'close'} color={"#FFFFFF"} size={25}/>
          </View>
      )}
    </View>
  )
}

const getStyles = (theme : ITheme) => StyleSheet.create({
    container:{
        flexDirection: 'row',
        height: 50, 
        alignItems: 'center' ,
        borderWidth:1,
        borderRadius: theme.buttonBorderRadius,
        marginVertical: 10,
        
    },
    icon:{
        marginLeft:10,
        marginRight: 5,
    },

})