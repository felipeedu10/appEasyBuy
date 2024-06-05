import React from 'react';
import { StyleSheet, Image, Dimensions, StatusBar} from 'react-native';
import Roupa from '../../../../assets/produtos/camiseta1.jpg';
import Texto from '../../../componentes/texto'; //Componente de exibição de texto

//Captura o tamanho da tela que está rodado o app
const width = Dimensions.get('screen').width;

export default function Topo({titulo}){
    return <>
          <StatusBar />
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
    },
  
    imagem: {
      width: "100%",
      height: 1000 / 1000 * width,
      marginTop: 6,
    },
  });