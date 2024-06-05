import React from 'react';
import { FlatList,View, StyleSheet } from 'react-native';
import { Button, Card, Text } from 'react-native-paper';

import styles from './componentes/formatacao';
import Item from './componentes/item';
import Texto from '../../componentes/texto';


export default function Loja({tela}){
    
    return <View style={styles.container}>
        <Texto style={styles.topo}>Nossos produtos</Texto>
        <FlatList
            data={tela.lista}
            renderItem={Item}
            keyExtractor={tela.lista.id}
            numColumns={2}
        /> 
    </View>
    
}


