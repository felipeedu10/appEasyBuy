import React from 'react';
import { FlatList } from 'react-native';

import Topo from './componentes/topo';
import Detalhes from './componentes/detalhes';
import Item from './componentes/item';


export default function Produto({topo, detalhes, itens}){
    
    return <FlatList 
            data={itens.lista}
            renderItem={Item}
            keyExtractor={itens.lista.cor}
            ListHeaderComponent={()=>{
                return <>
                    <Topo {...topo}/>
                    <Detalhes {...detalhes}/>   
                </>
            }}
        />
}

