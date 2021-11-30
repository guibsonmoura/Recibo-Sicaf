import React,{useEffect} from 'react';
import {Text,Alert} from 'react-native';
import Logo from '../../assets/sicafLogo.svg';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {Container,LoginIcon} from "./styles";

import {db} from '../../database/database';


export default function(){

    const navigation = useNavigation();
    const createTable = async () => {
        
        await db.transaction( async (tx) => {
            await tx.executeSql(
                "CREATE TABLE IF NOT EXISTS clientes (id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT, endereco VARCHAR(200),cpfcnpj VARCHAR(200), ie VARCHAR(200), cidade VARCHAR(200), estado VARCHAR(200), contato VARCHAR(200))",
                [],
                ()=>{
                    console.log("banco de dados criado com sucesso")
                }
            )
        })
    }

    useEffect(()=>{
        try{
            createTable();
        }catch(error){
            Alert.alert('Sicaf Informa:',
                    `error: ${error}`
            )
        }
        
        const checkEmpresa = async () => {
            const empresa = await AsyncStorage.getItem('empresa')
            if(empresa != null){
                navigation.reset({
                    routes: [{name: "MainTab"}]
                })
                
            }else{
                navigation.navigate('Login');
            }
        }
        checkEmpresa()
    },[]);
    return(
        <Container>
            <Logo width='100%' height='160'/>
            <LoginIcon size='large' color='#fff'/>
        </Container>
    );
};