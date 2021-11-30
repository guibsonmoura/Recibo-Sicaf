import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #009186;
`;
export const ContainerProduto = styled.View`
    width: 100%;
    height: 200px;
    display: flex;
    padding: 10px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    
`;
export const Lixeira = styled.TouchableOpacity`
    width: 15%;
    height: 100%;
    display: flex;
    border: 2px solid black;
    background-color:#5f9ea0;
    justify-content: center;
    align-items: center;
`;
export const Botao = styled.TouchableOpacity`
    width: 80%;
    display: flex;
    justify-content: center;
    background-color:#5f9ea0;
    align-items: center;

`;

export const GerarRecibo = styled.TouchableOpacity`
    width: 80%;
    height: 60px;
    border-radius: 30px;
    background-color:#5f9ea0;
    align-items: center;
    justify-content: center;
    margin-top: 20px; 
    margin-bottom: 20px;
    
`;
export const ContainerBotao = styled.View`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items:center;
    padding: 10px;
`;
export const BotaoAnterior = styled.TouchableOpacity`
    display: flex;
    width: 30%;
    height: 30px;
    border-radius: 15px;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 20px;
    background-color: red;
    align-items: center;

`;
export const BotaProximo = styled.TouchableOpacity`
    display: flex; 
    width: 30%;
    height: 30px;
    border-radius: 15px;
    justify-content: center;
    align-items: center;
    background-color: red;
`;
export const TextoBotao = styled.Text`
    font-size: 14px;

`
export const Lista = styled.FlatList`
    flex: 1;

`;