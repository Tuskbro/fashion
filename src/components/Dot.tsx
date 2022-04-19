import { StyleSheet, Text, View } from 'react-native'
import React, { useRef } from 'react'
import Animated, { Extrapolate,  interpolate,  interpolateNode,  useAnimatedStyle, } from 'react-native-reanimated';


interface DotProps{
    index: number;
    currentIndex: Animated.Node<number>;
}



export default function Dot({index, currentIndex}: DotProps) {
    
    
      
      const opacity = interpolateNode(currentIndex, { inputRange: [index -1, index, index+1], outputRange: [0.5, 1, 0.5], extrapolate: Extrapolate.CLAMP })
    
      const scale =  interpolateNode(currentIndex, { inputRange: [index - 1, index, index+1], outputRange: [1, 1.5, 1], extrapolate: Extrapolate.CLAMP  })
  return (
    <Animated.View
      style={[{
        opacity,
          backgroundColor: "#2CD9B0",
          elevation: 5,
          width: 8,
          height:8,
          borderRadius:4,
          marginHorizontal:3,
          transform: [
             { scale:scale,}
          ],
      },]}
    />
  )
}

const styles = StyleSheet.create({})