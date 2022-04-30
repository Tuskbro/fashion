import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { RectButton } from 'react-native-gesture-handler';
import { useSelector , RootStateOrAny} from 'react-redux';


interface ButtonProps {
    label: string;
    variant: "primary"|"default"|"link";
    onPress: () => void;
    width?: number;
    
}

export default function Button({label,variant, onPress, width}:ButtonProps) {
    const theme : ITheme = useSelector((state: RootStateOrAny)=>state.themeReducer.theme );
    const styles = getStyles(theme);
  return (
    <RectButton 
        style={[styles.container, { width: width, backgroundColor: variant==="primary" 
        ?  theme.PrimaryButtonColor 
        : variant==="link" 
        ? "transparent"
        : theme.buttonColor}]}
        {...{onPress}}
        >
        <View >
            <Text style={[styles.label,{color: variant=="primary" ? "#FFFFFF": variant==="link" 
        ? theme.linkColor
        : "#000000"}]}>{label}</Text>
        </View>
    </RectButton>
  )
};

Button.defaultProps= {variant: "default"};
Button.defaultProps= {width: 245};

const getStyles = (theme : ITheme) => StyleSheet.create({
    container:{
        borderRadius: theme.buttonBorderRadius,
        height:50,
        
        justifyContent: "center",
        alignItems: 'center',
        elevation: 5,
    },
    label:{
        fontSize: theme.article,
        textAlign: 'center',
        fontFamily: theme.Semibold,
    },
})