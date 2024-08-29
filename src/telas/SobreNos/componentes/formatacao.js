import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    logo: {
        width: '100%',
        marginTop: "-15%"
    },

    titulo: {
        fontSize: 26,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
    }, 

    tela: {
        backgroundColor: "black",
        height: '100%',
        paddingTop: "10%",
        paddingHorizontal: '10%',
    },

    texto: {
        fontSize: 16,
        color: 'white',
        paddingHorizontal: "5%",
        paddingBottom: "10%",
        textAlign: 'justify'
    },

    imagem: {
        width: 280,
        height: 280,
        alignSelf: 'center',
        marginTop: '-22%',
    },

    video: {
        width: 360,
        height: 250
    },

    botao: {
        backgroundColor: "white",
        marginBottom: "30%",
        marginLeft: "19%",
        width: "60%",
        height: "2.2%",
        borderRadius: 5
    },

    conteudo_botao: {
        textAlign: "center",
        marginVertical: "2%",
        fontWeight: "bold",
        fontSize: 16
    }
})

export default styles;