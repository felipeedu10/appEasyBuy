import React from "react";
import { View, StatusBar } from "react-native";
import { Card } from "react-native-paper";
import { Ionicons } from 'react-native-vector-icons/Ionicons';

import Texto from '../../componentes/texto'
import styles from "./styles";

export default function ListaItem({ id, titulo, imagem }) {
    return (
        <View style={styles.cardContainer}>
            <StatusBar />
            <Card mode='elevated' style={styles.card}>
                <Card.Content>
                    <Card.Cover source={imagem} style={styles.imagem} />
                    <Texto style={styles.nomeProduto}>{titulo}</Texto>
                </Card.Content>
            </Card>
        </View>
    );
}
