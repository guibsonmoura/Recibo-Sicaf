import React from 'react';

import styled from 'styled-components/native';

const InputArea = styled.View`
    width: 100%;
    height: 60px;
    background-color:#5f9ea0;
    flex-direction: row;
    border-radius: 30px;
    padding-left: 15px;
    align-items: center;
    margin-bottom: 15px;
`;
const Botao = styled.TouchableOpacity`
    
`;
const Input = styled.TextInput`
    flex: 1;
    margin-left: 15px;
    font-size: 16px;
    
`;

export default function({Icon,placeholder,value,onChangeText,password,keybordType}){
    return(
        <InputArea>
            <Icon width='24' height='24'/>
            <Input 
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={password}
                keybordType={keybordType}
            />
        </InputArea>
    );  
};