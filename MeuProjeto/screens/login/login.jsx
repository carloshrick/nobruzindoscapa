import React from 'react';
import { View, Text, Image, FlatList, Linking, TextInput, Pressable } from 'react-native';
import { estilera } from "./logincss";





export default function Login({ navigation }) {


  return (
    <View style={estilera.divgeral}>
      <View style={estilera.cabecalho}>
        <Image
          style={estilera.logo}
          source={require('../../assets/WhatsApp_Image_2024-04-11_at_10.37.48-removebg-preview.png')}
        />
      </View>
     
     <View style={estilera.card}>
      <Text style={estilera.titulo}>Clebinho Juçilei</Text>
      <TextInput
      placeholder="LOGIN"
      style={estilera.input}
    />

      <TextInput
      placeholder="SENHA"
      style={estilera.input}
    />

<Pressable style={estilera.botao}><Text style={estilera.textobotao}>Login</Text></Pressable>
</View>
    </View>
  );
}
