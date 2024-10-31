import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    listContainer: {
        width: "100%",
        height: "100%",
    },

    lista: {
        height: '100%'
    },

    cardContainer: {
        width: '50%'
    },

    imagem: {
        alignSelf: "center",
        width: "96%",
        marginTop: "-7%"
    },

    card: {
        flex: 1,
        width: "90%",
        height: "98%",
        backgroundColor: "#ffffff",
        marginLeft: "5%",
        marginBottom: "3%",
        paddingTop: "2%",
    },

    nomeProduto: {
        color: 'black',
        fontSize: 16,
        textAlign: 'center',
        fontWeight: "bold",
    },

    titulo: {
        alignSelf: "center",
        fontWeight: "bold",
        fontSize: 26,
        marginVertical: "5%",
        marginBottom: "20%"
    },

    textoLista: {
        fontSize: 16,
        paddingBottom: 10,
        textAlign: "center"
    }, 
    
    botaoExcluir: {
        backgroundColor: "grey"
    },

    lixeira: {
        alignSelf: "center",
    }
})

export default styles;