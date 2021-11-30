import React from 'react';
import { StyleSheet, Dimensions,Alert, View } from 'react-native';
import Share from 'react-native-share';
import {useNavigation,useRoute } from '@react-navigation/native';
import {CustomButton,CustomButtonText} from './styles';
import Pdf from 'react-native-pdf';

export default function(){
    
    const route = useRoute()
    const navigation = useNavigation()
    let dadosPdf = route.params
        
    const source = { uri: dadosPdf.path, cache: true };    
    const click = ()=>{
        Share.open({
            title: 'Compartilhar Recibo',
            url:`file://${dadosPdf.path}`,
            message: ''
        })
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            err && console.log(err);
        });
    }
    return(
        <View style={styles.container}>
            <View style={{width: "100%", heigth: 100}}>
                <CustomButton onPress={click}>
                    <CustomButtonText>Compartilhar</CustomButtonText>
                </CustomButton>
            </View>
            
            <Pdf
                source={source}
                onLoadComplete={(numberOfPages,filePath) => {
                    console.log(`Number of pages: ${numberOfPages}`);
                }}
                onPageChanged={(page,numberOfPages) => {
                    console.log(`Current page: ${page}`);
                }}
                onError={(error) => {
                    console.log(error);
                }}
                onPressLink={(uri) => {
                    console.log(`Link pressed: ${uri}`);
                }}
            style={styles.pdf}/>
            
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: "#009186w",
        marginTop: 25,
    },
    pdf: {
        flex:1,
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height,
    }
});