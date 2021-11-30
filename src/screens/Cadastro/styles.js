import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    background-color: #009186;
    flex: 1;
    justify-content: center;
    align-items: center;
`;
// InputArea,CustomButton,CustomButtonText
export const InputArea = styled.View`
    padding: 15px;
    width: 100%;
    

`;
export const CustomButton = styled.TouchableOpacity`
    height: 60px;
    background-color: #5f9ea0;
    border-radius: 30px;
    justify-content: center;
    align-items: center;
    
`;

export const CustomButtonText = styled.Text`
    font-size: 18px;
    color: #fff;
`;