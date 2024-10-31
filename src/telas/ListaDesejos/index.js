import React, {useState, useEffect} from "react";
import { View, FlatList, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

import Texto from '../../componentes/texto';
import ListaItem from "./ListaItem";
import styles from "./styles";
import Botao from "../../componentes/botao";

export default function Lista(){

    const [listData, setListData] = useState([]);

    //Função para capturar os dados do AsyncStorage
    const loadListData = async() => {
        const storedObjectJSON = await AsyncStorage.getItem('ListaDesejos');
        if(storedObjectJSON !== null){
            const storedObject = JSON.parse(storedObjectJSON);
            setListData(storedObject);
        }
    }

    //Carrega a lista quando o componente for montado
    useEffect(()=>{
        loadListData();
    }, [])
    
    const navigation = useNavigation();

    //Função para limpar a lista de desejos 
    const clearAsyncStorage = async() => {
        await AsyncStorage.clear();
        console.log('AsyncStorage apagado com sucesso');
        Alert.alert("Lista de Desejos excluída com sucesso!");
        navigation.reset({index: 0, routes: [{name: 'Lista de Desejos'}]});
    }

    return <View style={styles.listContainer}>
            <Texto style={styles.titulo}>Lista de Desejos</Texto>
            <Texto style={styles.textoLista}>Produtos adicionados à sua Lista de Desejos</Texto>
            <FlatList
                data={listData}
                renderItem={({item})=> <ListaItem {...item}/>}
                keyExtractor={({id})=>String(id)}
                numColumns={2}
            />

            <Botao textoBtn={'Apagar Lista de Desejos'} clickBtn={() => clearAsyncStorage()} />
    </View>
}

//            <Texto style={styles.textoLista}>Estes são os produtos adicionados na sua Lista de Desejos</Texto>
