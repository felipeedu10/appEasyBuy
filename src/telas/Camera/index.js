import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';
import { Camera } from 'expo-camera';

export default function CameraScreen({ topo }) {
    const [hasPermission, setHasPermission] = useState(null);
    const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);
    const [photo, setPhoto] = useState(null);
    const cameraRef = useRef(null);

    // Pedir permissão para usar a câmera
    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    // Função para tirar a foto
    const takePicture = async () => {
        if (cameraRef.current) {
            const data = await cameraRef.current.takePictureAsync({
                quality: 1, // Ajuste a qualidade conforme necessário (0.1 a 1)
            });
            setPhoto(data.uri); // Salva o URI da foto
        }
    };

    // Função para alternar entre câmeras
    const toggleCameraType = () => {
        setCameraType(prevType => (
            prevType === Camera.Constants.Type.back
                ? Camera.Constants.Type.front
                : Camera.Constants.Type.back
        ));
    };

    // Verificar permissão
    if (hasPermission === null) {
        return <Text>Solicitando permissão para usar a câmera...</Text>;
    }
    if (hasPermission === false) {
        return <Text>Permissão para acessar a câmera foi negada.</Text>;
    }

    return (
        <View style={styles.container}>
            <Text>{topo.titulo}</Text>

            {/* Exibir a câmera ou a imagem capturada */}
            <View style={styles.cameraContainer}>
                {photo ? (
                    <Image source={{ uri: photo }} style={styles.image} />
                ) : (
                    <Camera
                        style={styles.camera}
                        type={cameraType}
                        ref={cameraRef}
                        ratio="16:9" // Proporção padrão para garantir que a câmera tenha dimensões válidas
                    />
                )}
            </View>

            <View style={styles.controls}>
                {!photo && (
                    <>
                        <TouchableOpacity onPress={takePicture} style={styles.buttonPic}/>
                        <TouchableOpacity onPress={toggleCameraType} style={styles.buttonFlip}>
                            <Text style={styles.buttonFlipText}>Alternar Câmera</Text>
                        </TouchableOpacity>
                    </>
                )}
            </View>
        </View>
    );
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    cameraContainer: {
        flex: 1,
        backgroundColor: 'black', // Fundo preto para emulador
        justifyContent: 'center',
        alignItems: 'center',
    },
    camera: {
        width: width, // Largura total da tela
        height: (width / 2) * 9, // Proporção 16:9
    },
    controls: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20,
    },
    buttonPic: {
        backgroundColor: 'black',
        padding: 15,
        borderRadius: 100,
        marginTop: "150%",
        marginLeft: "40%",
        borderColor: 'white',
        borderWidth: 3,
        width: 80,
        height: 80,
    },
    buttonFlip: {
        backgroundColor: 'white',
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 10,
        borderColor: 'black',
        borderWidth: 3,
        marginTop: "5%",
        width: "40%",
        height: "30%",
        alignItems: 'center',
        zIndex: 0, // Eleva o botão para frente de outros elementos
    },
    buttonText: {
        fontSize: 20,
        textAlign: 'center',
    },
    buttonFlipText: {
        color: "black",
        fontSize: 14,
        textAlign: 'center',
    },
    image: {
        width: width, // Largura total da tela para a imagem
        height: (width / 4) * 12, // Proporção 16:9
        resizeMode: 'contain',
        marginTop: "50%"
    },
});
