import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { Routes } from "../components/Navigation";
import Onboarding from "./Onboarding";
import Welcome from "./Welcome";
import { Login } from './Login';
import { SignUp } from './SignUp';
import { PasswordRecover } from './PasswordRecover';

export {default as Onboarding}  from "./Onboarding";
export {default as Welcome}  from "./Welcome";

const AuthenticationStack = createStackNavigator<Routes>();
export const AuthenticationNavigator = () => {
  return (
  <AuthenticationStack.Navigator  screenOptions={{
    headerShown: false,
  }}>
    <AuthenticationStack.Screen name="Onboarding" component={Onboarding}/>
    <AuthenticationStack.Screen name="Welcome" component={Welcome}/>
    <AuthenticationStack.Screen name="Login" component={Login}/>
    <AuthenticationStack.Screen name="SignUp" component={SignUp}/>
    <AuthenticationStack.Screen name="PasswordRecover" component={PasswordRecover}/>

  </AuthenticationStack.Navigator>
  );
};