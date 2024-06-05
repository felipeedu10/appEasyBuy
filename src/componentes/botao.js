import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import Texto from "./texto";

export default function Botao({textoBtn, clickBtn}){
    let estilo = styles.botao;

    return <TouchableOpacity style={[styles, estilo]} onPress={clickBtn}>
              <Texto style={styles.textoBotao}>{textoBtn}</Texto>
            </TouchableOpacity>
}

const styles = StyleSheet.create({
    botao:{
        marginTop: 20,
        backgroundColor: "black",
        paddingVertical: 16,
        borderRadius: 6,
        width: "60%",
        marginLeft: "20%",
    },

    textoBotao:{
        color: "white",
        textAlign: "center",
        fontSize: 18,
        fontWeight: "bold",
      }
})