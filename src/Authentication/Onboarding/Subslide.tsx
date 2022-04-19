import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Animated from 'react-native-reanimated';
import {Button} from '../../components/index';


interface SubslideProps {
    subtitle: string;
    description: string;
    last?: boolean;
    onPress: () => void;  
    
}

export default function Subslide({subtitle, description,last, onPress}:SubslideProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <Text style={styles.description}>{description}</Text>
      <Button 
        label={last ? "Let`s get started": "Next"} 
        variant={last? "primary": "default"}
        {...{onPress}}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 44,
    },
    subtitle:{
        fontSize: 24,
        lineHeight: 24,
        fontFamily: 'SFPro_Semibold',
        marginBottom: 12,
        color: "#0C0D34",
        textAlign: 'center',

    },
    description:{
        fontSize: 16,
        lineHeight: 16,
        fontFamily: 'SFPro_Regular',
        color: "#0C0D34",
        textAlign: 'center',
        marginBottom: 12,
        
    },
})