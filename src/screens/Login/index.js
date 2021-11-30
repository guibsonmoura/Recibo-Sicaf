import React from 'react';
import {Alert,ScrollView} from 'react-native';
import Logo from '../../assets/sicafLogo.svg';
import SignInput from '../../components/SiginInput';
import {useNavigation} from '@react-navigation/native';
import User from '../../assets/user.svg';
import Key from '../../assets/key.svg';
import Root from '../../../root.json'
import {Container, InputArea,CustomButton,CustomButtonText} from "./styles";

export default function(){

    const navigation = useNavigation();
    const [usuario, setUsuario] = React.useState("");
    const [senha, setSenha] = React.useState("");

    const loginClick = () => {
        if(Root.user === usuario && Root.senha === senha){
            navigation.reset({
                routes: [{name: "Cadastro"}]
            })
        }else{
            Alert.alert('Sicaf Informa:',
                    'Senha Incorreta!'
            )
        }
    }

    return(
        <Container>
            <ScrollView style={{width: "100%", height: "100%"}}>
            <Logo width='100%' height='160'/>
                <InputArea>
                    <SignInput 
                        IconSvg={User}
                        placeholder='Digite o Usuário'
                        value={usuario}
                        onChangeText = {(text) => setUsuario(text)}
                        password = {false}
                    />
                    <SignInput 
                        IconSvg={Key}
                        placeholder='Digite a Senha'
                        value={senha}
                        onChangeText = {(text) => setSenha(text)}
                        password = {true}
                    />
                    <CustomButton onPress={loginClick}>
                        <CustomButtonText> Login</CustomButtonText>
                    </CustomButton>
                </InputArea>
            </ScrollView>
        </Container>
    );
};