import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions, Platform } from 'react-native';
import { Camera } from 'expo-camera';
import { Ionicons } from '@expo/vector-icons';

export default function CameraScreen({ topo }) {
    const [hasPermission, setHasPermission] = useState(null);
    const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);
    const [photo, setPhoto] = useState(null);
    const cameraRef = useRef(null);

    useEffect(() => {
        if (Platform.OS !== 'web') {
            (async () => {
                const { status } = await Camera.requestCameraPermissionsAsync();
                setHasPermission(status === 'granted');
            })();
        } else {
            setHasPermission(true); // Na web, a permissão é tratada pelo navegador
        }
    }, []);

    const takePicture = async () => {
        if (cameraRef.current) {
            const data = await cameraRef.current.takePictureAsync({ quality: 1 });
            setPhoto(data.uri);
        }
    };

    const toggleCameraType = () => {
        setCameraType(prevType => (
            prevType === Camera.Constants.Type.back
                ? Camera.Constants.Type.front
                : Camera.Constants.Type.back
        ));
    };

    if (hasPermission === null) {
        return <Text>Solicitando permissão para usar a câmera...</Text>;
    }
    if (hasPermission === false) {
        return <Text>Permissão para acessar a câmera foi negada.</Text>;
    }

    if (Platform.OS === 'web') {
        return <CameraWeb />;
    }

    return (
        <View style={styles.container}>
            <Text>{topo.titulo}</Text>

            <View style={styles.cameraContainer}>
                {photo ? (
                    <Image source={{ uri: photo }} style={styles.image} />
                ) : (
                    <Camera
                        style={styles.camera}
                        type={cameraType}
                        ref={cameraRef}
                        ratio="16:9"
                    />
                )}
            </View>

            <View style={styles.controls}>
                {!photo && (
                    <>
                        <TouchableOpacity onPress={takePicture} style={styles.buttonPic} />
                        <TouchableOpacity onPress={toggleCameraType} style={styles.buttonFlip}>
                            <Ionicons name="camera-reverse" size={30} color="black" />
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
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },
    camera: {
        width: width,
        height: (width / 2) * 9,
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
        marginLeft: "32%",
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
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: width,
        height: (width / 4) * 12,
        resizeMode: 'contain',
        marginTop: "50%",
    },
});

// Componente para a câmera na Web
function CameraWeb() {
    const videoRef = useRef(null);

    useEffect(() => {
        const getCameraStream = async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: true });
                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                }
            } catch (error) {
                console.error('Erro ao acessar a câmera: ', error);
            }
        };

        getCameraStream();

        return () => {
            if (videoRef.current && videoRef.current.srcObject) {
                let tracks = videoRef.current.srcObject.getTracks();
                tracks.forEach(track => track.stop());
            }
        };
    }, []);

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <video ref={videoRef} autoPlay style={{ width: '100%', height: '100%' }} />
        </div>
    );
}
