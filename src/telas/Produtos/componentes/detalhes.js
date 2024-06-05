import React from 'react';
import { StyleSheet, Image, View, Alert} from 'react-native';
import Texto from '../../../componentes/texto'; //Componente de exibição de texto
import Botao from '../../../componentes/botao';

export default function Detalhes({nome, logo, detalhes, preco, botao}){
    return <View style={styles.produto}>
            <View style={styles.logotipo}>
              <Image source={logo} style={styles.logo} resizeMode="contain"/>
              <Texto style={styles.nomeProd}>{nome}</Texto>
            </View>
            <Texto style={styles.descricao}>{detalhes}</Texto>
            <Texto style={styles.preco}>{preco}</Texto>
            <Botao textoBtn={botao} clickBtn={() => {Alert.alert("Lista de Desejos", "Produto adicionado à sua lista de desejos!")}}/>
          </View>
}

const styles = StyleSheet.create({ 
    nomeProd: {
      fontSize: 22,
      color: "black",
      paddingTop: "7.8%",
      fontWeight: "bold",
    },

    produto: {  
      paddingVertical: 8,
      paddingHorizontal: 16,
    },

    descricao: {
      fontSize: 18,
    },

    preco: {
      fontSize: 22,
      fontWeight: "bold",
      color: "#2A9F85",
      paddingTop: 5,
    },

    logo: {
      width: 100,
      height: 100,
    },

    logotipo: {
      flexDirection: "row"
    }
  });