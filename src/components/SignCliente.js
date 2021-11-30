import React from 'react';
import styled from 'styled-components/native';
import {StyleSheet,TextInput} from 'react-native';

const InputArea = styled.View`
    width: 95%;
    height: 60px;
    flex-direction: row;
    margin-bottom: 40px;
    
`;
const Input = styled.TextInput`
    flex: 1;
    font-size: 16px;
    margin-left: 10px;
`;


export default function({placeholder,value,onChangeText,password}){
    return(
        <InputArea>
            <Input
                placeholder={placeholder}
                value={value}
                style={styles.input}
                onChangeText={onChangeText}
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