import React, {useState, useEffect} from 'react';
import {useFonts, SpaceGrotesk_300Light, SpaceGrotesk_700Bold} from '@expo-google-fonts/space-grotesk'
import { View, TouchableOpacity, Styles } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Texto from './src/componentes/texto';

//Áudio
import {Audio} from 'expo-av';

//Telas
import Produto from './src/telas/Produtos/';
import SobreNos from './src/telas/SobreNos/';
import Loja from './src/telas/Loja';
import Camera from './src/telas/Camera';
import Lista_Desejos from './src/telas/ListaDesejos/'
import mockProd from './src/mocks/produto';
import mockSobre from './src/mocks/sobrenos';
import mockLoja from './src/mocks/loja';
import mockCamera from './src/mocks/camera.js';

function MenuKit(){
  return <View>
    <Produto {...mockProd}/>
  </View>
};

function Sobre(){
  return <View>
    <SobreNos {...mockSobre}/>
  </View>
};

function Produtos(){
  return <View>
    <Loja {...mockLoja}/>
   </View>
 
};

function Fotografar(){
  return <View>
    <Camera {...mockCamera}/>
  </View>
}

const Tab = createBottomTabNavigator();

function TabsMenu(){
  return <Tab.Navigator 
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;

              if(route.name === "Sobre nós"){
                iconName = focused
                ? 'apps'
                : 'apps-outline'
              }else if(route.name === "Kit"){
                iconName = focused
                ? 'basket'
                : 'basket-outline'
              }else if(route.name === "Produtos"){
                iconName = focused
                ? 'list'
                : 'list-outline'
              }else if(route.name === "Lista de Desejos"){
                iconName = focused
                ? 'heart'
                : 'heart-outline'
              }else if(route.name === "Camera"){
                iconName = focused
                ? 'camera'
                : 'camera-outline'
              }   
              return <Ionicons name={iconName} size={size} color={color}/>
            },
            tabBarActiveTintColor: 'black',
            tabBarInactiveTintColor: 'grey',
            tabBarHideOnKeyboard: true,
          })}>
            <Tab.Screen name="Sobre nós" component={Sobre}/>
            <Tab.Screen name="Kit" component={MenuKit}/>
            <Tab.Screen name="Produtos" component={Produtos}/>
            <Tab.Screen name="Lista de Desejos" component={Lista_Desejos}/>
            <Tab.Screen name="Camera" component={Fotografar}/>
          </Tab.Navigator>
}

function MenuAudio(){
  const [audioStatus, setAudioStatus] = useState(false)
  const [sound, setSound] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      console.log('status', audioStatus);
      if (audioStatus) {
        setLoading(true);
        const { sound } = await Audio.Sound.createAsync(require('./assets/midia/AudioApp.mp3'));
        setSound(sound);
        try {
          await sound.playAsync();
        } catch (e) {
          console.log(e);
        }
        setLoading(false);
      } else {
        if (sound) {
          try {
            await sound.stopAsync();
            await sound.unloadAsync();
          } catch (e) {
            console.log(e);
          }
        }
      }
    })();
  }, [audioStatus]);

  return <TouchableOpacity onPress={() => { if(!loading) {setAudioStatus(!audioStatus);}}}>
            <Texto>🎧 On/Off</Texto>
          </TouchableOpacity>
}


export default function App() {
  //Carrega a fonte para o projeto
  const [fonte1] = useFonts({
    "SpaceGRegular" : SpaceGrotesk_300Light,
    "SpaceGBold" : SpaceGrotesk_700Bold,
  })

  //Checa se as fontes já foram carregadas
  if(!fonte1){
    return <View />
  }
  return <NavigationContainer>
      <TabsMenu />
      <MenuAudio />
    </NavigationContainer>
}