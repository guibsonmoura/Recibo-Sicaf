import React from 'react';
import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';

const InputArea = styled.View`
    width: 48%;
    height: 60px;
    margin-right: 15px;
    margin-bottom: 40px;
    flex-direction: row;
    
`;

const Input = styled.TextInput`
    width: 100%;
    font-size: 16px;
    
`;

export default function({placeholder,teclado,value,onChangeText,password}){
    return(
        <InputArea>
            <Input
                placeholder={placeholder}
                value={value}
                style={styles.input}
                onChangeText={onChangeText}
                keyboardType = {teclado}
                secureTextEntry={password}
            />
        </InputArea>
    );
};

const styles = StyleSheet.create({
    input: {
        
        borderBottomWidth: 2,
    }
})