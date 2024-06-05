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
        marginBottom: "20%"
    }
})

export default styles;