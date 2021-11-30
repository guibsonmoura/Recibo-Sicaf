import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #009186;

`;

export const Scroll = styled.ScrollView`
    width: 100%;
    height: 100%;
    background-color: #009186;
`;

export const ContainerInputs = styled.View`
    width: 95%;
    flex-direction: row;

`;
export const Pesquisa = styled.TouchableOpacity`
    width: 15%;
    height: 50px;
    background-color: #5f9ea0;
    margin-top: 10px;
    margin-left: 90%;
    margin-bottom: -20px;
    border-radius: 25px;
    justify-content: center;
    align-items: center;
`;

export const Botao = styled.TouchableOpacity`
    width: 90%;
    height: 60px;
    background-color: #5f9ea0;
    margin-top: 30px;
    margin-bottom: 30px;
    border-radius: 30px;
    justify-content: center;
    align-items: center;

`;