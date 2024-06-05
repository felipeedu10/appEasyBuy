import {useFonts, SpaceGrotesk_300Light, SpaceGrotesk_700Bold} from '@expo-google-fonts/space-grotesk'
import { View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Produto from './src/telas/Produtos/';
import SobreNos from './src/telas/SobreNos/';
import Loja from './src/telas/Loja';
import mockProd from './src/mocks/produto';
import mockSobre from './src/mocks/sobrenos';
import mockLoja from './src/mocks/loja';

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
          </Tab.Navigator>
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
    </NavigationContainer>
}