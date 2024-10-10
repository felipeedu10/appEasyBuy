import React, {useState, useEffect} from "react";
import { View, FlatList } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Texto from '../../componentes/texto';
import ListaItem from "./ListaItem";
import styles from "./styles";

export default function Lista(){

    const [listData, setListData] = useState([]);

    //Função para capturar os dados do AsyncStorage
    const loadListData = async () => {
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

    return <View style={styles.listContainer}>
            <Texto style={styles.titulo}>Lista de Desejos</Texto>
            <Texto style={styles.textoLista}>Produtos adicionados à sua Lista de Desejos</Texto>
            <FlatList
                data={listData}
                renderItem={({item})=> <ListaItem {...item}/>}
                keyExtractor={({id})=>String(id)}
                numColumns={2}
            />
    </View>
}

//            <Texto style={styles.textoLista}>Estes são os produtos adicionados na sua Lista de Desejos</Texto>
