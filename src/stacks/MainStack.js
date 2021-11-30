import React from 'react';
import Preload from '../screens/Preload/index'
import Login from '../screens/Login/index'
import Produtos from '../screens/Produtos/index'
import Cadastro from '../screens/Cadastro/index'
import Pdf from '../screens/pdf/index'
import MainTab from '../stacks/MainTab';
import {createStackNavigator} from '@react-navigation/stack';

const stack = createStackNavigator();

export default function(){
    return(
        <stack.Navigator 
            initialRouteName = "Preload"
            screenOptions={{
                headerShown: false,
            }}
            >
            <stack.Screen name="Preload" component={Preload}/>
            <stack.Screen name="Login" component={Login}/>
            <stack.Screen name="Cadastro" component={Cadastro}/>
            <stack.Screen name="Produtos" component={Produtos}/>
            <stack.Screen name="Pdf" component={Pdf}/>
            <stack.Screen name='MainTab' component={MainTab}/>
        </stack.Navigator>
    );
};