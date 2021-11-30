import React from 'react';
import {Text,Alert} from 'react-native';
import InputCliente from '../../components/SignCliente'
import InputMenor from '../../components/input'
import {create} from '../../database/insert';
import {Container,ContainerInputs,Botao,Scroll} from './styles';

export default function(){
    
    const [nomeCliente, setNomeCliente] = React.useState("");
    const [cnpj, setCnpj] = React.useState("");
    const [ie, setIe] = React.useState("");
    const [cidade, setCidade] = React.useState("");
    const [estado, setEstado] = React.useState("");
    const [contato, setContato] = React.useState("");
    const [endereco, setEndereco] = React.useState("");

    const clickSalvar = ()=>{
        if(nomeCliente !== "" && cnpj !== "" && cidade !== "" && estado !== "" && contato !== ""){
            //salvar no banco de dados
            // InsertDataBase(nomeCliente, cnpj, ie, cidade, estado, contato)
            const cliente = {
                "nome": nomeCliente,
                "endereco": endereco,
                "cnpj": cnpj,
                "ie": ie,
                "cidade": cidade,
                "estado": estado,
                "contato": contato
            }
            create(cliente)
                .then( id => console.log('Car created with id: '+ id) )
                .catch( err => console.log("erro " + err) )
            // limpando dados
            setNomeCliente("")
            setCnpj("")
            setIe("")
            setCidade("")
            setEstado("")
            setContato("")
            setEndereco("")
        }else{
            Alert.alert("Sicaf Informa:",
                    'Preencha Todos os Campos Para Salvar um Cliente'
            )
        }
    }

    return(
        
        <Scroll >
            <Container>
                <InputCliente
                    placeholder='Nome Cliente'
                    value={nomeCliente}
                    onChangeText={(text)=>{setNomeCliente(text)}}
                    password = {false}
                />
                <ContainerInputs>
                    <InputMenor
                        placeholder='CPF/CNPj'
                        value={cnpj}
                        onChangeText={(text)=>{setCnpj(text)}}
                        teclado = 'numeric'
                        password = {false}
                    />    
                    <InputMenor
                        placeholder='Inscrição Estadual'
                        value={ie}
                        onChangeText={(text)=>{setIe(text)}}
                        teclado = 'numeric'
                        password = {false}
                    />    
                </ContainerInputs>    
                <ContainerInputs>
                    <InputMenor
                        placeholder='Cidade'
                        value={cidade}
                        onChangeText={(text)=>{setCidade(text)}}
                        teclado = 'default'
                        password = {false}
                    />
                    <InputMenor
                        placeholder='Estado'
                        value={estado}
                        onChangeText={(text)=>{setEstado(text)}}
                        teclado = 'default'
                        password = {false}
                    />
                </ContainerInputs>
                <InputCliente
                    placeholder='Endereco'
                    value={endereco}
                    onChangeText={(text)=>{setEndereco(text)}}
                    password = {false}
                />
                <InputCliente
                    placeholder='Contato'
                    value={contato}
                    onChangeText={(text)=>{setContato(text)}}
                    password = {false}
                />
                <Botao onPress={clickSalvar}>
                    <Text style={{color: "#fff",fontSize: 18}}>Salvar</Text>
                </Botao>
            </Container>
        </Scroll>
        
    );
};