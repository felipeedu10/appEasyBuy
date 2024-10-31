import React from 'react';
import { StyleSheet, Image, Dimensions, StatusBar, TextInput} from 'react-native';
import Roupa from '../../../../assets/produtos/camiseta1.jpg';
import Texto from '../../../componentes/texto'; //Componente de exibição de texto

//Captura o tamanho da tela que está rodado o app
const width = Dimensions.get('screen').width;

export default function Topo({titulo}){
    return <>
          <StatusBar />
          <TextInput placeholder=" 🔎Pesquisar por outros itens" style={styles.busca}></TextInput>
          <Image source={Roupa} style={styles.imagem}/>
          <Texto style={styles.titulo}>{titulo}</Texto>
    </>
}

const styles = StyleSheet.create({
    titulo:{
      width: "100%",
      position: "absolute",
      textAlign: "center",
      fontSize: 24,
      fontWeight: "bold",
      marginTop: '5%',
    },
  
    imagem: {
      width: "100%",
      height: 1000 / 1000 * width,
      marginTop: 6,
    },

    busca: {
      marginTop: "15%", 
      marginLeft: "50%",
      textAlign: "right",
      borderBottomColor: "black",
      borderTopColor: "#f1f0f6",
      borderLeftColor: "#f1f0f6",
      borderRightColor: "#f1f0f6",
      width: "50%",
      paddingTop: "1%",
      paddingRight: "5%",
      borderWidth: 1,
    }
  });