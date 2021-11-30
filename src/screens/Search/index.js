import React from 'react';
import {Text,Alert,Button,FlatList,StyleSheet,View,TouchableOpacity} from 'react-native';
import IconPesquisa from '../../assets/loupe.svg';
import IconLixeira from '../../assets/lixeira.svg';
import {selectName} from '../../database/select';
import {remove} from '../../database/delete';
import {Container,Lixeira,BotaoLista,InputArea,Botao,Input} from './styles';
import {useNavigation} from '@react-navigation/native';

export default function(){
  const navigation = useNavigation();
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        marginTop: 0,
      },
      item: {
        
        
        
      },
      title: {
        fontSize: 32,
        marginBottom: 5,
        color: "#000"
      },
    });

    const [pesquisa, setPesquisa] = React.useState("");
    const [clientes , getClientes] = React.useState([]);
     
    const Item = ({ nome,cnpj }) => (
      <View style={styles.item}>
        <Text style={styles.title}>{nome}</Text>
        <Text style={styles.title}>{cnpj}</Text>
      </View>
    );
    
    const renderItem = ({ item }) => (
      <View style={{width: "100%",height: 330, flexDirection:"row",marginBottom: 20}}>
        <BotaoLista onPress={()=>{
          const cliente = {
            nome: item.nome,
            endereco: item.endereco,
            cnpj: item.cnpj,
            ie : item.ie,
            cidade: item.cidade,
            estado: item.estado,
            contato: item.contato
          }
          navigation.navigate("Recibo",cliente)
          setPesquisa("")
          getClientes([])
        }}>
          <View style={{width: "70%", height: 290, backgroundColor: "#5f9ea0", flexDirection: "row"}}>
            <Item nome={item.nome} cnpj={item.cnpj} />
          </View>
          
        </BotaoLista>
        <Lixeira onPress={async() => {
          let resultado = await remove(item.cnpj);
          click()
          console.log(resultado)    
        }}>
          <IconLixeira width='24' height='24'/>
        </Lixeira>  
      </View>      
      
      
    );
    
    const click = async ()=>{
        let resultName = await selectName(pesquisa);
        
        console.log(resultName)
        getClientes(resultName)
        
    };
    
    return(
        <Container>
            <InputArea>
                <Botao onPress={click}>
                    <IconPesquisa width='24' height='24'/>    
                </Botao>
                <Input
                    placeholder='Pesquise um cliente'
                    value={pesquisa}
                    onChangeText={(text)=>{setPesquisa(text)}}

                />
            </InputArea>            
            <FlatList
            data={clientes}
            renderItem={renderItem}
            style={{width: "100%",height: "100%", paddingLeft: 15, paddingRight: 15}}
            />
            
        </Container>
    )
}
