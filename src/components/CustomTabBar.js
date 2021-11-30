import React from 'react';
import ReciboIcon from '../assets/recibo_1.svg';
import ConfigIcon from '../assets/engrenagem.svg';
import ClienteIcon from '../assets/ajuda.svg';
import Search from '../assets/loupe.svg';
import styled from 'styled-components/native';

const TabArea = styled.SafeAreaView`
    height: 60px;
    background-color:#5f9ea0;
    flex-direction: row;

`;

const TabItem = styled.TouchableOpacity`
    flex: 1;
    justify-content: center;
    align-items: center;

`;

const TabItemCenter = styled.TouchableOpacity`
    width: 70px;
    height: 70px;
    justify-content: center;
    align-Items: center;
    background-color: #ccc;
    border-radius: 35px;
    border: 3px solid #009186;
    margin-top: -20px;
`;


export default function({state, navigation}){
    
    const goTo = (screenName) => {
        navigation.navigate(screenName);
    }
    
    return(
        <TabArea>
            
            <TabItem
                onPress={()=>goTo('Cliente')}
                
            >
                <ClienteIcon style={{opacity: state.index===0? 1: 0.5}} width='24' height='24' fill='#FFFFFF'/>
            </TabItem>
            
            <TabItem
                onPress={()=>goTo('Search')}
                
            >
                <Search style={{opacity: state.index===1? 1: 0.5}} width='24' height='24' fill='#FFFFFF'/>
            </TabItem>
            <TabItem
                onPress={()=>goTo('Recibo')}
                
            >
                <ReciboIcon style={{opacity: state.index===2? 1: 0.5}} width='24' height='24' fill='#FFFFFF'/>
            </TabItem>
            {/* <TabItemCenter
                onPress={()=>goTo('Recibo')}
                
            >
                <ReciboIcon width='24' height='24' fill='#FFFFFF'/>
            </TabItemCenter> */}
            
            <TabItem
                onPress={()=>goTo('Sign')}
                
            >
                <ConfigIcon style={{opacity: state.index===3? 1: 0.5}} width='24' height='24' fill='#FFFFFF'/>
            </TabItem>
            
        </TabArea>
    );
};