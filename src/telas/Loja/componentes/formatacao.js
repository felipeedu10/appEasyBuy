import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container:{ 
        width: "100%",
        height: "100%",
    },

    fundo: {
        flex: 1,
        width: "70%",
        height: "98%",
        backgroundColor: "#ffffff",
        marginHorizontal: "2.5%",
        paddingTop: "2%",
    },

    titulo: {
        fontWeight: "bold",
        fontSize: 16
    },

    imagem: {
        alignSelf: "center",
        width: "80%"
    },

    preco:{
        color: "#2A9F85",
    },

    topo:{
        alignSelf: "center",
        fontWeight: "bold",
        fontSize: 26,
        marginVertical: "5%"
    },

    fundoPesquisa: {
        paddingVertical: 10, 
        backgroundColor: "#f5f5f5",
    },

    textoPesquisa: {
        marginLeft: 12, 
        marginVertical: 5, 
        fontSize: 16 
    },

    inputPesquisa: {
        height: 40,
        marginHorizontal: 12,
        borderWidth: 1,
        paddingHorizontal: 10,
        borderRadius: 5,
    },

    suggestionsList: {
        maxHeight: 150, // Limita a altura da lista de sugestões
        backgroundColor: "#ffffff",
        borderWidth: 1,
        borderColor: "#ddd",
        marginHorizontal: 12,
        borderRadius: 5,
    },

    suggestionItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
    }
})

export default styles;