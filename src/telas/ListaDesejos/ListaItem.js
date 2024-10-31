import React from "react";
import { View, StatusBar, TouchableOpacity, Alert } from "react-native";
import { Card } from "react-native-paper";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";

import Texto from '../../componentes/texto'
import styles from "./styles";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function ListaItem({ id, titulo, imagem }) {

    const navigation = useNavigation();

    //Função para limpar apenas o item selecionado
    async function removeProdListaDesejos(id) {
        //Captura a Lista de Desejos
        const listaDesejosSalva = await AsyncStorage.getItem('ListaDesejos');

        //Organiza a lsita de desejos em array
        const listaDesejos = JSON.parse(listaDesejosSalva);

        //Exclui o item e transforma em string para atualizar o AsyncStorage 
        const listaDesejosAtualizada = JSON.stringify(listaDesejos.filter((item) => item.id !== id));

        //Atualiza o AsyncStorage 
        await AsyncStorage.setItem('ListaDesejos', listaDesejosAtualizada);
        Alert.alert("Produto removida da Lista de Desejos!");
        console.log("Removeu item da lista");
        navigation.reset({index: 0, routes: [{name: 'Lista de Desejos'}]});        
    }
    return (
        <View style={styles.cardContainer}>
            <StatusBar />
            <Card mode='elevated' style={styles.card}>
                <Card.Content>
                    <Card.Cover source={imagem} style={styles.imagem} />
                    <Texto style={styles.nomeProduto}>{titulo}</Texto>
                    <TouchableOpacity onPress={() => removeProdListaDesejos(id)}>
                        <Ionicons name="trash" size={20} color="black" style={styles.lixeira}/>
                    </TouchableOpacity>
                </Card.Content>
            </Card>
        </View>
    );
}
