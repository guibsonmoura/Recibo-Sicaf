import React from 'react';
import Cliente from '../screens/Cliente/index';
import Recibo from '../screens/Recibo/index';
import Empresa from '../screens/Empresa/index';
import CustomTabBar from '../components/CustomTabBar';
import Pesquisa from '../screens/Search/index';
import Sign from '../screens/Login/index';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function(){
    return(
        <Tab.Navigator
            tabBar = { props => <CustomTabBar {...props} />}
            screenOptions={{
                headerShown: false,
            }}
            initialRouteName='Cliente'
        >
            <Tab.Screen name='Cliente' component={Cliente}/>
            <Tab.Screen name='Search' component={Pesquisa}/>
            <Tab.Screen name='Recibo' component={Recibo}/>
            <Tab.Screen name='Sign' component={Sign}/>
        </Tab.Navigator>
    )
    
}