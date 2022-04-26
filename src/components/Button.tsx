import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { RectButton } from 'react-native-gesture-handler';
import { useSelector , RootStateOrAny} from 'react-redux';


interface ButtonProps {
    label: string;
    variant: "primary"|"default"|"link";
    onPress: () => void;
    
}

export default function Button({label,variant, onPress}:ButtonProps) {
    const theme : ITheme = useSelector((state: RootStateOrAny)=>state.themeReducer.theme );
    const styles = getStyles(theme);
  return (
    <RectButton 
        style={[styles.container, {backgroundColor: variant==="primary" 
        ?  theme.PrimaryButtonColor 
        : variant==="link" 
        ? "transparent"
        : theme.buttonColor}]}
        {...{onPress}}
        >
        <View >
            <Text style={[styles.label,{color: variant=="primary" ? "#FFFFFF": "#000000"}]}>{label}</Text>
        </View>
    </RectButton>
  )
};

Button.defaultProps= {variant: "default"};

const getStyles = (theme : ITheme) => StyleSheet.create({
    container:{
        borderRadius: theme.buttonBorderRadius,
        height:50,
        width: 245,
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