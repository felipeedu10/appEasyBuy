import React from 'react';
import { Image, ScrollView} from 'react-native';
import Texto from '../../componentes/texto';
import styles from './componentes/formatacao';


export default function SobreNos({tela}){
    return <ScrollView style={styles.tela}>
            <Image source={tela.logo} style={styles.logo} resizeMode='contain'/>
            <Texto style={styles.titulo}>{tela.titulo}</Texto>
            <Texto style={styles.texto}>{tela.sobre}</Texto>
            <Image source={tela.foto} style={styles.imagem} resizeMode='contain'/>
        </ScrollView>
}
