import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React, { ReactNode } from 'react'
import { RootStateOrAny, useSelector } from 'react-redux';


interface ContainerProps{
    children: ReactNode;
    footer: ReactNode;
}
const {width, } = Dimensions.get("window");
export default function Container({children,footer}:ContainerProps)  {
    const theme : ITheme = useSelector((state: RootStateOrAny)=>state.themeReducer.theme );
    const styles = getStyles(theme);
    const height=width;
  return (
    <View style={{flex:1, backgroundColor:theme.containerBackgroundColor}}>
       
        <View style={{backgroundColor: theme.backgroundColor}}>
        <View style={{borderBottomLeftRadius: theme.BORDER_RADIUS, backgroundColor:theme.backgroundColor, overflow: 'hidden', height: width*0.4}}>
            <Image source={{uri: "https://fatalerror.xyz/outfit/images/pattern1.jpg", method: 'GET',}}
                style={{
                    width: width,
                    height: width,
                    borderBottomLeftRadius: theme.BORDER_RADIUS,
                }}
            />
        </View>
        </View>
        <View style={{flex:1, overflow: 'hidden'}}>
            <Image source={{uri: "https://fatalerror.xyz/outfit/images/pattern1.jpg", method: 'GET',}}
                style={{
                    ...StyleSheet.absoluteFillObject,
                    width: width,
                    height: width,
                    
                    top: -height*0.4
                }}
            />
            <View style={{borderTopLeftRadius:0, borderRadius: theme.BORDER_RADIUS, backgroundColor: theme.backgroundColor, flex:1,}}> 
                {children}
            </View>
        </View>
        <View style={{ flex:.2, paddingTop: 20}}>
            {footer}
           
        </View>
        
    </View>
  )
}

const getStyles = (theme : ITheme) => StyleSheet.create({

})