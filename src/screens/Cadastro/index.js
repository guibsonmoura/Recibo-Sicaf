import React from 'react';
import {Alert,ScrollView} from 'react-native';
import Logo from '../../assets/sicafLogo.svg';
import SignInput from '../../components/SigCadastro';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Container, InputArea,CustomButton,CustomButtonText} from "./styles";

export default function(){

    const navigation = useNavigation();
    const [empresa, setEmpresa] = React.useState("");
    const [slogan, setSlogan] = React.useState("");
    const [cnpj, setCnpj] = React.useState("");
    const [contato, setContato] = React.useState("");
    const [endereco, setEndereco] = React.useState("");
    const [bairro, setBairro] = React.useState("");

    const CadastroClick = () => {
        if(empresa !== '' && slogan !== '' && cnpj !== '' && endereco !== '' && bairro !== ''){
                AsyncStorage.setItem('empresa',empresa)
                AsyncStorage.setItem('slogan',slogan)
                AsyncStorage.setItem('cnpj',cnpj)
                AsyncStorage.setItem('contato',contato)
                AsyncStorage.setItem('endereco',endereco)
                AsyncStorage.setItem('bairro',bairro)
                navigation.reset({
                    routes: [{name: "MainTab"}]
                })
        }else{
            Alert.alert('Sicaf Informa:',
                    'Preencha Todos os Campos Antes de Proseguir'
            )
        }
    }

    return(
        <Container>
            <ScrollView style={{width: "100%", height: "100%"}}>
            <Logo width='100%' height='160'/>
                <InputArea>
                    <SignInput 
                        
                        placeholder='Nome Fantasia da Empresa'
                        value={empresa}
                        onChangeText = {(text) => setEmpresa(text)}
                        password = {false}
                        teclado = 'text'
                    />
                    <SignInput 
                        
                        placeholder='Digite o Slogan'
                        value={slogan}
                        onChangeText = {(text) => setSlogan(text)}
                        password = {false}
                        teclado = 'text'
                    />
                    <SignInput 
                        
                        placeholder='Digite o CNPj'
                        value={cnpj}
                        onChangeText = {(text) => setCnpj(text)}
                        password = {false}
                        teclado = 'numeric'
                    />
                    <SignInput 
                        
                        placeholder='Digite um Contato'
                        value={contato}
                        onChangeText = {(text) => setContato(text)}
                        password = {false}
                        teclado = 'text'
                    />
                    <SignInput 
                        
                        placeholder='Digite o Endereço'
                        value={endereco}
                        onChangeText = {(text) => setEndereco(text)}
                        password = {false}
                        keybordType = 'text'
                    />
                    <SignInput 
                        
                        placeholder='Digite o Bairro'
                        value={bairro}
                        onChangeText = {(text) => setBairro(text)}
                        password = {false}
                        keybordType = 'text'
                    />
                    <CustomButton onPress={CadastroClick}>
                        <CustomButtonText> Cadastrar</CustomButtonText>
                    </CustomButton>
                </InputArea>
            </ScrollView>
        </Container>
    );
};