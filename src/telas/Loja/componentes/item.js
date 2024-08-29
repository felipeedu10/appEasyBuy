import React from "react";
import { Card, Text } from 'react-native-paper';
import { Camera, CameraType } from "expo-camera";

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

