import React,{useEffect} from 'react';
import {View,Text,Alert,FlatList,PermissionsAndroid,Platform} from 'react-native';
import {Container,Botao,GerarRecibo,Lista,ContainerProduto,TextoBotao,Lixeira,ContainerBotao,BotaoAnterior,BotaProximo} from './styles'
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import IconLixeira from '../../assets/lixeira.svg';
import {useNavigation,useRoute } from '@react-navigation/native';

export default function(){
    const route = useRoute();
    const navigation = useNavigation();
    const [produtos, setProdutos] = React.useState([])
    const dadaosRecibo = route.params
      
    
    const listaProdutos = () => {
      setProdutos(dadaosRecibo.produtos)
    }
    const Item = ({nomeProduto,quantidade,preco}) => (
        <View style={{flexDirection: "column"}}>
          <Text style={{fontSize: 13}}>Produto: {nomeProduto}</Text>
          <Text style={{fontSize: 13}}>Quantidade: {quantidade}</Text>
          <Text style={{fontSize: 13}}>Preço: R${preco}</Text>
        </View>
      );
    
    const isPermitted = async () => {
        if (Platform.OS === 'android') {
          try {
            const granted = await PermissionsAndroid.request(
              PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
              {
                title: 'External Storage Write Permission',
                message: 'Este app necessita de permissão para acessar seus arquivos',
              },
            );
            return granted === PermissionsAndroid.RESULTS.GRANTED;
          } catch (err) {
            alert('Write permission err', err);
            return false;
          }
        } else {
          return true;
        }
      };
    const createPDF = async () => {
        let empresa = await AsyncStorage.getItem('empresa')
        let slogan = await AsyncStorage.getItem('slogan')
        let cnpj = await  AsyncStorage.getItem('cnpj')
        let contato = await AsyncStorage.getItem('contato')
        let endereco = await AsyncStorage.getItem('endereco')
        let bairro = await AsyncStorage.getItem('bairro')
        let data = new Date().getDate();
        let pdf = ''
        let mes = new Date().getMonth() + 1;
        let anos = new Date().getFullYear();
        const cabecalho = `
        <table style="border: 2px solid black;width: 100%;">
          <tr style="display: flex;width: 100%; border-bottom: 2px solid black; flex-direction: row; ">
            <td style="display: flex;border-right: 2px solid black; flex-direction: column; width: 80%; height: 150px; align-items:center; justify-content: center;">
              <h1 style="margin:0; padding: 0;">${empresa}</h1>
              <h2 style="margin:0; padding: 0;">${slogan}</h2>
              <p style="margin:0; padding: 0;font-size: 15px;"><strong>CNPJ:</strong> ${cnpj}</p>
              <p style="margin:0; padding: 0; font-size: 15px;"><strong>Contato:</strong> ${contato}</p">
              <p style="margin:0; padding: 0;font-size: 15px;"><strong>Endereço:</strong> ${endereco}  / <strong>Bairro</strong>: ${bairro}</p>
            </td>
            <td style="display: flex;flex-direction: column; justify-content:center; align-items: center;">
              <h1 style="margin-left:15px; padding: 0;">Recibo</h1>
              <p style="font-size: 15px;margin-left:15px;"><strong>Data:</strong> ${data}/${mes}/${anos}</p>
              </td>
          </tr>
          <tr style="display: flex; flex-direction: row; border-bottom: 2px solid black;width: 100%;">
            <td style=" width:100%; height: 200px; display: flex; flex-direction: column; ">
              <p style="margin-top: 10px;font-size: 20px; margin-left: 15px;"><strong>Nota de Serviço </strong></p>
              <p style="font-size: 15px;margin-left: 15px; margin-top: 20px; margin-bottom: 0;"><strong>Nome:</strong> ${dadaosRecibo.cliente.nome}</p>
              <p style="font-size:15px; margin-left:15px;margin-top: 0; margin-right:0;margin-bottom:0; padding:0;"><strong>Endereço:</strong> ${dadaosRecibo.cliente.endereco}</p>
              <p style="font-size:15px; margin-left:15px;margin-top: 0; margin-right:0;margin-bottom:0; padding:0;"><strong>Contato:</strong> ${dadaosRecibo.cliente.contato}</p>
              <div style="display: flex; flex-direction: row;justify-content: space-between; width: 100%;">
                <p style="font-size:15px; margin-left:15px;margin-top: 0; margin-right:0;margin-bottom:0; padding:0;"><strong>Cidade:</strong> ${dadaosRecibo.cliente.cidade}</p>
                <p style="font-size:15px; margin-left:15px;margin-top: 0; margin-right:50px;margin-bottom:0; padding:0;"><strong>Estado:</strong> ${dadaosRecibo.cliente.estado}</p>
              </div>
              <div style="display:flex;flex-direction: row; justify-content: space-between; width: 100%;">
                <p style="font-size:15px; margin-left:15px;margin-top: 0; margin-right:0;margin-bottom:0; padding:0;"><strong>CNPJ/CPF:</strong> ${dadaosRecibo.cliente.cnpj}</p>
                <p style="font-size:15px; margin-left:15px;margin-top: 0; margin-right:50px;margin-bottom:0; padding:0;"><strong>IE:</strong> ${dadaosRecibo.cliente.ie}</p>
              </div>
            </td>
          </tr>
          <tr style="width: 100%; height:50px;">
            <td style="display:flex;flex-direction: row;border-bottom: 2px solid black;">
              <div style="width: 50%;">
                <p style="font-size: 18px"><strong>Descrição</strong></p>
              </div>
              <div style="width: 15%;">
                <p style="font-size: 18px;"><strong>P.Unitário</strong></p></div>
              <div style="width: 15%;"><p><strong>Quantidade</strong></p></div>
              <div style="width:15%;">
                <p style="font-size: 18px"><strong>Total</strong></p>
              </div>
            </td>
          </tr>`
        
        pdf = cabecalho
        var totalGeral = 0
        for(i=0; i < dadaosRecibo.produtos.length; i++){
          console.log("entrei no for")
          let total = parseFloat(dadaosRecibo.produtos[i].prc) * parseFloat(dadaosRecibo.produtos[i].qtd)
          totalGeral = totalGeral + total
          let produto = `
          <tr style="width: 100%;">
            <td style="display: flex; flex-direction: row;border-bottom: 2px solid black;">
              <div style="width: 50%;margin:0;padding:0;">
                <p style="font-size: 15px;">${dadaosRecibo.produtos[i].nome}</p>
              </div>
              <div style="width: 15%;margin:0;padding:0;">
                <p style="font-size: 15px">R$: ${dadaosRecibo.produtos[i].prc}</p>
              </div>
              <div style="width: 15%;margin:0;padding:0;text-align: center;">
                <p style="font-size: 15px">${dadaosRecibo.produtos[i].qtd}</p>
              </div>
              <div style="width:15%;margin:0;padding:0;">
                <p>R$:${total.toFixed(2)}</p>
              </div>
            </td>
          </tr>`

          pdf = pdf + produto
        }
        pdf = pdf + `
          <tr style="width: 100%; ">
            <td style="display:flex; flex-direction: row;">
              <div style="width: 80%">
                <p style="font-size: 16px; font-weight: bold;">Total</p>
              </div>
              <div ">
                <p style="font-size: 16px; font-weight: bold;">R$: ${totalGeral.toFixed(2)}</p>
              </div>
            </td>
          </tr>`
        pdf = pdf + '</table>'

        if (await isPermitted()) {
          console.log('entrou no if')
          let options = {
            //Content to print
            html: pdf,
            //File Name
            fileName: dadaosRecibo.nomeRecibo,
            //File directory

          }
          
          let file = await RNHTMLtoPDF.convert(options);
          
          dadosRecibo={
            path: file.filePath,
            produtos: dadaosRecibo.produtos,
            cliente: dadaosRecibo.cliente
          }
          
          console.log(file.filePath);
          setProdutosNota([])
          console.log("pdf criado")
          setRecibo("")
          navigation.navigate("PDF",dadosRecibo)
          // navigation.navigate("Pdf",dadosRecibo)         
          
        }
        else{
          Alert.alert('Sicaf Informa','Recibo não gerado')
        }
      };
    const gerarRecibo = async () => {
        await createPDF() 
        
    }
    const renderItem = ({item}) => {
        return(
            <View style={{width: "100%",height: 100,marginBottom: 10,flexDirection: "row"}}>
                <Botao onPress={()=>{console.log('apenas cliquei')}}>
                    <Item nomeProduto={item.nome} quantidade={item.qtd} preco={item.prc}/>
                </Botao>
                <Lixeira onPress={
                  () => {
                    var indice = dadaosRecibo.produtos.indexOf({item})
                    
                    dadaosRecibo.produtos.splice(indice, 1)
                    setProdutos(dadaosRecibo.produtos)
                    listaProdutos()
                    console.log(produtos)
                    
                }}>
                    <IconLixeira width='24' height='24'/>
                </Lixeira>
            </View>
        )
    }
    
    return(
        <Container>
            <FlatList
              data={produtos}
              renderItem={renderItem}
            />
            
            <GerarRecibo onPress={()=>{console.log('tudo certo até aqui')}}>
                <TextoBotao>Gerar Recibo</TextoBotao>
            </GerarRecibo>
        </Container>
    )
}