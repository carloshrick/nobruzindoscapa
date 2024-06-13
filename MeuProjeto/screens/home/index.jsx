import React, { useEffect, useState } from 'react';
import { View, Text, Pressable, Image, ScrollView } from "react-native";
import axios from 'axios';
import { estilo } from "./styles";
import { PanGestureHandler, GestureHandlerRootView } from 'react-native-gesture-handler';




export default function Tela({ navigation }) {
  const [receitas, setReceitas] = useState([]);
  
  useEffect(() => {
    axios.get('http://192.168.1.22:5000/receitas')
      .then(response => {
        setReceitas(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar receitas:', error);
      });
  }, []);

  function ChamaReceitas() {
    navigation.navigate('Receitas');
  }

  function ChamaSugestoes(){
    navigation.navigate('Sugestões');
  }

  function ChamaIngredientes(){
    navigation.navigate('Gerar Receita');
  }

  return (
    <GestureHandlerRootView>

    <View style={estilo.divgeral}>
        <View style={estilo.cabecalho}>       
            <Image
            style={estilo.logo}
            source={require('../../assets/WhatsApp_Image_2024-04-11_at_10.37.48-removebg-preview.png')}
          /> 
           <Pressable onPress={ChamaReceitas} style={estilo.botao2}><Text style={estilo.textobotao}>Receitas</Text></Pressable>
           <Pressable onPress={ChamaIngredientes} style={estilo.botao3}><Text style={estilo.textobotao}>Gere receitas</Text></Pressable>
        </View>
        <ScrollView style={estilo.roll}>
        <View style={estilo.corpo}>
           
    
    
        <View>
    
            <Text style={estilo.recomendacoes}>Receitas Recomendadas</Text>

            <View>
              {receitas.map((receita, index) => (
                <Pressable onPress={ChamaReceitas}>
                <View key={index} style={estilo.post}>
                  <Image
                    style={estilo.postimg}
                    source={{ uri: receita.imagem_receita }}
                  />
                  <Text style={estilo.posttxt}>{receita.nome}</Text>
                </View>
                </Pressable>
              ))}
            </View>
            </View>
            </View>
    </ScrollView>
</View>


</GestureHandlerRootView>
  );
}
