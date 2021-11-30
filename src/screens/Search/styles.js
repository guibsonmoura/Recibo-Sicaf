import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    justify-content: center;
    align-items: center;
    padding-top: 15px;
    background-color: #009186;
`;
export const InputArea = styled.View`
    width: 95%;
    height: 60px;
    background-color:#5f9ea0;
    flex-direction: row;
    border-radius: 30px;
    padding-left: 10px;
    align-items: center;
    margin-bottom: 15px;
`;
export const Botao = styled.TouchableOpacity`
    width: 13%;
    height: 50px;
    background-color: #009186;
    border-radius: 25px;
    justify-content: center;
    align-items: center;
    
`;
export const Input = styled.TextInput`
    flex: 1;
    margin-left: 15px;
    font-size: 16px;
    
`;

export const BotaoLista = styled.TouchableOpacity`
    width: 70%;
    height: 100%;
    background-color:#5f9ea0;
    
    
`;
export const Lixeira = styled.TouchableOpacity`
    width: 30%;
    height: 100%;
    background-color:#5f9ea0;
    justify-content: center;
    align-items: center;
    border: 1px;
    margin-bottom: 20px;
`