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
    }
})

export default styles;