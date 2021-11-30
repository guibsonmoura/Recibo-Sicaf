import React ,{useEffect}from 'react';
import {Text,View,Alert} from 'react-native';
import {useNavigation,useRoute } from '@react-navigation/native';
import InputClinte from '../../components/SignCliente';
import InputMenor from '../../components/input';
import Search from '../../assets/loupe.svg';

import {Container,Scroll,ContainerInputs,Botao,Pesquisa} from './styles'


export default function(){
    const [recibo, setRecibo] = React.useState("");
    const [produto, setProduto] = React.useState("");
    const [quantidade, setQuantidade] = React.useState("");
    const [preco , setPreco] = React.useState("");
    const [produtosNota, setProdutosNota] = React.useState([]);

    const route = useRoute();
    const navigation = useNavigation();

    let cliente = route.params

    const incluirProduto = ()=>{
      if( produto !== '' && quantidade !== '' && preco !== ''){
        setProdutosNota((prev)=>([...prev,{nome: produto, qtd: quantidade, prc: preco }]))
        
        console.log(produtosNota)
        setProduto("")
        setQuantidade("")
        setPreco("")
      }else{
        Alert.alert('Sicaf Informa:',
            'Preencha todos so campos para incluir o produto'
        )
      }
      
    }
    
    const continuarProcesso = () =>{
      if(cliente !== undefined){
        if (recibo !== ''){

        dados = {
          cliente: route.params,
          nomeRecibo: recibo,
          produtos: produtosNota

        }
        navigation.navigate("Produtos",dados)
        setProdutosNota([])
        
          
        }else{
          Alert.alert('Sicaf Informa:',
              'Insira o nome do recibo antes de continuar'                 
          )
        }
      
      }else{
        Alert.alert('Sicaf Informa:',
          'Selecione um cliente antes de continuar'
        )
      }
  }
    return(
        <Scroll>
            <Container>
                <Pesquisa onPress={()=>navigation.navigate("Search")}>
                    <Search width='24' height='24'/>
                </Pesquisa>
                <InputClinte
                    placeholder='Nome do Recibo'
                    value={recibo}
                    onChangeText={(text)=>{setRecibo(text)}}
                    password = {false}
                />
                <InputClinte
                    placeholder='Descrição Produto/Serviço'
                    value={produto}
                    onChangeText={(text)=>{setProduto(text)}}
                    password = {false}
                />
                <ContainerInputs>
                    <InputMenor
                        placeholder='Quantidade'
                        value={quantidade}
                        onChangeText={(text)=>{setQuantidade(text)}}
                        password = {false}
                        teclado = 'numeric'
                    />
                    <InputMenor
                        placeholder='Preço'
                        value={preco}
                        onChangeText={(text)=>{setPreco(text)}}
                        password = {false}
                        teclado = 'numeric'
                    />
                </ContainerInputs>
                <Botao onPress={incluirProduto}>
                    <Text style={{color: "#fff",fontSize: 18}}>Incluir Produto</Text>                   
                </Botao>
                <Botao onPress={continuarProcesso}>
                    <Text style={{color: "#fff",fontSize: 18}}>Continuar Processo</Text>                   
                </Botao>
            </Container>
        </Scroll>
        
        )
    
}