import React, { useState } from 'react';
import { FlatList, View, Text, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import axios from 'axios';

import styles from './componentes/formatacao';
import Item from './componentes/item';
import Texto from '../../componentes/texto';

export default function Loja({ tela }) {

    const [input, setInput] = useState("");
    const [suggestions, setSuggestions] = useState([]);

    const onChangeText = async (text) => {
        setInput(text);
        
        if (text.length >= 2) {
            try {
                // Faz a requisição para a API com a query de busca
                const response = await axios.get(`http://10.0.2.2:3000/api/products?q=${text}`);
                setSuggestions(response.data);
            } catch (error) {
                console.error("Erro ao buscar sugestões:", error);
            }
        } else {
            setSuggestions([]); // Limpa as sugestões se o texto tiver menos de 2 letras
        }
    };

    return (
        <View style={styles.container}>
            <Texto style={styles.topo}>Nossos produtos</Texto>
            
            <SafeAreaView style={styles.fundoPesquisa}>
                <Text style={styles.textoPesquisa}>
                    Busque por itens
                </Text>
                <TextInput 
                    placeholder='Pesquisa...' 
                    value={input} 
                    onChangeText={onChangeText}
                    style={styles.inputPesquisa} 
                />

                {/* Exibir as sugestões de pesquisa */}
                {suggestions.length > 0 && (
                    <FlatList
                        data={suggestions}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => setInput(item)}>
                                <Text style={styles.suggestionItem}>{item}</Text>
                            </TouchableOpacity>
                        )}
                        keyExtractor={(item, index) => index.toString()}
                        style={styles.suggestionsList}
                    />
                )}
            </SafeAreaView>

            <FlatList
                data={tela.lista}
                renderItem={Item}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2}
                contentContainerStyle={{ paddingBottom: 20 }}
            /> 
        </View>
    );
}
