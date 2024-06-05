import React from "react";
import {Image, View, StyleSheet} from 'react-native';
import { Button, Card, Text } from 'react-native-paper';

import Texto from "../../../componentes/texto";
import styles from './formatacao';

export default function Item({item:{imagem, titulo, subTitulo, valor, disponivel}}){
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
        </Card>
}

/*const styles = StyleSheet.create({
    item: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#ECECEC",
        paddingVertical: 16,
        alignItems: "center",
    },

    nome: {
        fontSize: 16,
        color: "#464646",
        lineHeight: 26,
        marginLeft: 11,
    },
    
    imagem: {
        width: 100,
        height: 100,
    }
})*/