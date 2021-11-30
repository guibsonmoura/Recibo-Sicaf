
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from './src/stacks/MainStack';
import UserContextProvider from './src/context/UserContext';
export default function(){
  return(
    <UserContextProvider>
      <NavigationContainer>
        <MainStack/>
      </NavigationContainer>
    </UserContextProvider>
    
    );
};