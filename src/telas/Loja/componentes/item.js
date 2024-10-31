import React from "react";
import { Card, Text } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from "@react-native-async-storage/async-storage";

import styles from './formatacao';
import { TouchableOpacity, Alert } from "react-native";

export default function Item({item:{id, imagem, titulo, subTitulo, valor, disponivel}}){

    async function addListaDesejos(id, titulo, imagem){

        //Produto favoritado
        const addProduto = [{
            id: id,
            titulo: titulo,
            imagem: imagem
        }];

        //Verifica se a lista está vazia
        const listaDesejosSalva = await AsyncStorage.getItem('ListaDesejos');

        if(listaDesejosSalva == null){
            //Lista vazia, insere o produto clicado
            const listaDesejosAtualizada = JSON.stringify(addProduto);

            //Insere no AsyncStorage
            await AsyncStorage.setItem('ListaDesejos', listaDesejosAtualizada);
            Alert.alert("Produto adicionado à sua lista de desejos!")
            console.log("Adicionou o produto");
            console.log(listaDesejosAtualizada)
        }else{
            //A lista já possui itens
            const listaDesejos = JSON.parse(listaDesejosSalva);

            //Insere mais um produto na lista
            listaDesejos.push({id: id, titulo: titulo, imagem: imagem});

            //Consverte o array para string
            const listaDesejosAtualizada = JSON.stringify(listaDesejos);
            //Insere no AsyncStorage
            await AsyncStorage.setItem('ListaDesejos', listaDesejosAtualizada);
            Alert.alert("Produto adicionado à sua lista de desejos!")
            console.log("Novo produto adicionado");
            console.log(listaDesejosAtualizada);
        }
        
    }

    return<Card style={styles.fundo}>
            <Card.Cover source={imagem} style={styles.imagem}/>
            <Card.Title title={titulo} 
            subtitle={subTitulo} 
            titleStyle={fontSize=30}
            />
            <Card.Content>
                <Text variant="titleLarge" style={styles.preco}>{valor}</Text>
                <Text variant="bodyMedium">{disponivel}</Text>
            </Card.Content>
            <Card.Actions>
                <TouchableOpacity onPress={() => addListaDesejos(id,titulo,imagem)}>
                    <Ionicons name="heart" size={30} color="black" style={{marginRight: "45%"}}/>
                </TouchableOpacity>
            </Card.Actions>
        </Card>
}

