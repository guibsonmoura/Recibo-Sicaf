import React from 'react';
import styled from 'styled-components/native';

const InputArea = styled.View`
    width: 100%;
    height: 60px;
    background-color: #00822e;
    flex-direction: row;
    border-radius: 30px;
    padding-left: 15px;
    align-items: center;
    margin-bottom: 15px;
`;
const Input = styled.TextInput`
    flex: 1;
    font-size: 16px;
    margin-left: 10px;
`;

export default function({IconSvg,placeholder,value,onChangeText,password,teclado}){
    return(
        <InputArea>
            <IconSvg width='24' height='24' />
            <Input 
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                keyboardType={teclado}
                secureTextEntry={password}
            />
        </InputArea>
    );  
};