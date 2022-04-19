import {  Dimensions, StyleSheet, Text, View, Image } from 'react-native';
import React , {useState, useEffect, useRef, createRef} from 'react';
import Animated, {  interpolateNode, interpolateColors, multiply, divide, Extrapolate} from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import Slide, { SLIDE_HEIGHT } from './Slide';
import {slides} from '../../../assets/data/slides'
import Subslide from './Subslide';
import { Dot } from '../../components';


const {width, height} = Dimensions.get("window");

export default function Onboarding() {

  const scrolling = useRef(new Animated.Value(0)).current;
  const scrollRef = useRef<ScrollView>(null); 

  const color =  interpolateColors(scrolling, {
    inputRange: slides.map((_,i)=> i* width),
    outputColorRange: slides.map(slide => slide.color),
  }) ;

  return (
    <View style={styles.container}>
   
      <Animated.View style={styles.sliderBG} >
        {slides.map(({imgUri},index)=>{
          const opacity = interpolateNode(scrolling, { inputRange: [(index -1)*width, index*width, (index+1)*width], outputRange: [0, 1, 0], extrapolate: Extrapolate.CLAMP })
          return(
            <Animated.View style={[styles.underlay,{opacity, backgroundColor: color }]} key={index} >
              <Animated.Image 
              source={{uri: imgUri,method: 'GET',}}  
              resizeMode='cover' 
              style={[styles.picture,{backgroundColor: color } ]}
              onError={({nativeEvent: { error }}) => console.log({error})}
              />
            
          </Animated.View>
          )
        })}
       
        <Animated.ScrollView 
          ref={scrollRef}
          style={[styles.slider, ]}
          horizontal
          snapToInterval={width} 
          decelerationRate={0.6}
          showsHorizontalScrollIndicator={false}
          bounces={false}
          onScroll={Animated.event(
            [{
              nativeEvent: {
                contentOffset: {
                  x: scrolling,
                },
              },
             
            }],
          
            { useNativeDriver: true, },
          )}
          scrollEventThrottle={16}
        >
          
          {slides.map(({title,imgUri},index)=>(
            
            <Slide key={index} right={!!(index%2)} {...{title,imgUri}}/>
            
          ))}
        </Animated.ScrollView>  

        <View style={{marginLeft:width-75, marginTop:SLIDE_HEIGHT-75, zIndex:0, overflow: 'hidden' , ...StyleSheet.absoluteFillObject,}}>
          <Image source={require('../../../assets/NegativAngel.png')} resizeMode={'cover'} style={{width:75, height: 75, overflow: 'hidden'}}/>
        </View>
        
        
      </Animated.View> 

      <Animated.View style={[styles.footer, ]}>
        <View style={styles.pagination}>
          {slides.map((_,index)=>(
            <Dot key={index} currentIndex={divide(scrolling,width)} {...{index}}/>
          ))}
        </View>

        <Animated.View style={[styles.footerContent,{
          transform: [{
            translateX: multiply(scrolling,-1)  
          },]
        }]}> 
          {slides.map(({subtitle, description},index)=>(
            <Subslide 
              key={index} 
              last={index===slides.length-1} {...{subtitle, description }}
              onPress={
                ()=>{  
                   scrollRef.current?.scrollTo({x: width*(index+1), animated:true});
                }
              }  
            />
          ))}
        </Animated.View>

      </Animated.View>

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
    },
    slider:{
      height: SLIDE_HEIGHT,
    },
    sliderBG:{
      height: SLIDE_HEIGHT,
    },
    footer:{
      justifyContent:'flex-end',
      borderTopLeftRadius: 75,   
      flex:1, 
      backgroundColor: "white", 
    },
    footerContent:{
      width:width*slides.length, 
      flex:1,
      flexDirection:'row',  
    },
    pagination:{
      ...StyleSheet.absoluteFillObject,
      height: 75,
      flexDirection: 'row',
      justifyContent:'center',
      alignItems:'center',
    },
    underlay:{
      ...StyleSheet.absoluteFillObject,
      justifyContent: 'center',
      alignItems: 'center',
      height: SLIDE_HEIGHT+75,
    },
    picture:{
      marginTop:15,
      alignSelf: 'center',
     ...StyleSheet.absoluteFillObject,
      width: (SLIDE_HEIGHT+75)*0.8,
      height: SLIDE_HEIGHT+75,
      overflow: 'hidden', 
    },
 
})