import React, { useRef, useState } from 'react';
import { Image, ScrollView, Alert, TouchableOpacity } from 'react-native';
import { Video, ResizeMode } from 'expo-av';
import Texto from '../../componentes/texto';
import styles from './componentes/formatacao';

export default function SobreNos({ tela }) {
    const video = useRef(null);
    const [status, setStatus] = useState({});

    return (
        <ScrollView style={styles.tela}>
            <Image source={tela.logo} style={styles.logo} resizeMode="contain" />
            <Texto style={styles.titulo}>{tela.titulo}</Texto>
            <Texto style={styles.texto}>{tela.sobre1}</Texto>
            <Image source={tela.foto} style={styles.imagem} resizeMode="contain" />
            <Texto style={styles.texto}>{tela.sobre2}</Texto>
            <Video
                ref={video}
                style={{ width: 300, height: 200, marginBottom: '10%', marginHorizontal: '5%' }}
                source={require('../../../assets/midia/video_marca.mp4')} // Use require aqui
                useNativeControls
                resizeMode={ResizeMode.CONTAIN}
                isLooping
                onPlaybackStatusUpdate={(status) => setStatus(() => status)}
            />
            <TouchableOpacity style={styles.botao} onPress={() => Alert.alert('Para começar a comprar acesse a aba "Podutos"!')}>
            <Texto style={styles.conteudo_botao}>Ir às compras!</Texto>
            </TouchableOpacity>
        </ScrollView>
    );
}
