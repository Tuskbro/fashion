import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Onboarding from './src/Authentication/Onboarding/index';

const AuthenticationStack = createStackNavigator();
const AuthenticationNavigator = () => {



  return (
  <AuthenticationStack.Navigator  screenOptions={{
    headerShown: false,
  }}>
    <AuthenticationStack.Screen name="Onboarding" component={Onboarding}/>
  </AuthenticationStack.Navigator>
  );
};

export default function App() {

  let [fontsLoaded, error] = useFonts({
    
      'SFPro_Bold': require('./assets/fonts/SFProDisplay-Bold.ttf'),
      'SFPro_Semibold': require('./assets/fonts/SFProDisplay-Semibold.ttf'),
      'SFPro_Regular': require('./assets/fonts/SFProDisplay-Regular.ttf'),
      'SFPro_Heavy': require('./assets/fonts/SFProDisplay-Heavy.ttf'),


      
  })
  if (!fontsLoaded)
  {
    return <AppLoading/>
  }
  return (
    
    <NavigationContainer >
      <AuthenticationNavigator/>
    </NavigationContainer>
    
    
  );
};


