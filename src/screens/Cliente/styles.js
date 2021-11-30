import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #009186;

`;

export const ContainerInputs = styled.View`
    width: 90%;
    flex-direction: row;

`;

export const Scroll = styled.ScrollView`
    width: 100%;
    height: 100%;
    background-color: #009186;
    
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