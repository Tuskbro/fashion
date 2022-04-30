import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { RootStateOrAny, useSelector } from 'react-redux';
import FontAwesome from '@expo/vector-icons/FontAwesome'
import { RectButton } from 'react-native-gesture-handler';



interface CheckBoxProps{
    label: string;
    isChecked: boolean;
}

export default function CheckBox({label,isChecked}: CheckBoxProps) {
  const theme : ITheme = useSelector((state: RootStateOrAny)=>state.themeReducer.theme );
  const styles = getStyles(theme);
  const [checked, setChecked] = useState<boolean>(false)

  const handleCheckboxPress = () => {
    setChecked(prev => {
      
      return !prev
      
    })
  }
  return (
    <RectButton onPress={()=>handleCheckboxPress()}>
    <View style={styles.container}>
     
      <View style={[styles.checkBox,{backgroundColor: checked? theme.PrimaryButtonColor: theme.buttonColor, }]}>
        <FontAwesome name='check' size={25} color={checked ? theme.PrimaryButtonTextColor : 'transparent'}></FontAwesome>
      </View>
      <Text style={styles.label}>{label}</Text>
      
    </View>
    </RectButton>
  )
}

const getStyles = (theme : ITheme) => StyleSheet.create({
  container:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label:{
    fontFamily: theme.Regular,
    fontSize: theme.article,
    color: theme.textColor,
  },
  checkBox:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 30, height: 30,
    borderRadius: theme.buttonBorderRadius/3,
    marginHorizontal:5,
  }
})