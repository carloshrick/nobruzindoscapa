import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, Button, Pressable } from 'react-native';
import axios from 'axios';
import { estilera } from './styleingredientes';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function Ingredientes({ navigation }) {
  const [ingredientes, setIngredientes] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);

  useEffect(() => {
    // Substitua pela URL da sua API
    axios.get('http://192.168.1.22:5000/ingredientes')
      .then(response => {
        setIngredientes(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar ingredientes:', error);
      });
  }, []);

  const toggleSelection = (id) => {
    setSelectedIds(prevSelectedIds => {
      if (prevSelectedIds.includes(id)) {
        return prevSelectedIds.filter(selectedId => selectedId !== id);
      } else {
        return [...prevSelectedIds, id];
      }
    });
  };

  const enviarIngredientesSelecionados = () => {
    axios.post('http://192.168.1.22:5000/match', { ids: selectedIds })
      .then(response => {
        console.log('Ingredientes enviados com sucesso:', response.data);
      })
      .catch(error => {
        console.error('Erro ao enviar ingredientes:', error);
      });
  };

  return (
    <GestureHandlerRootView>
      <ScrollView>
        <View style={estilera.divgeral}>
          <View style={estilera.cabecalho}>
            <Image
              style={estilera.logo}
              source={require('../../assets/WhatsApp_Image_2024-04-11_at_10.37.48-removebg-preview.png')}
            />
            <View style={estilera.cardgera}>
              <Text style={estilera.botao3}>O que tem com você?</Text>
              <Text style={estilera.txtgera}>Selecione os itens</Text>
              <Pressable style={estilera.enviar} onPress={enviarIngredientesSelecionados}><Text>Enviar</Text></Pressable>
            </View>
          </View>
          
          <View style={estilera.corpo}>
            <Text style={estilera.recomendacoes}>Ingredientes</Text>

            <View>
              {ingredientes.map((ingrediente, index) => (
                <TouchableOpacity key={index} onPress={() => toggleSelection(ingrediente.id)}>
                  <View style={[estilera.post, selectedIds.includes(ingrediente.id) && estilera.postSelecionado]}>
                    <Image
                      style={estilera.postimg}
                      source={{ uri: ingrediente.imagem_ingrediente }}
                    />
                    <Text style={estilera.posttxt}>{ingrediente.nome}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
            
            
          </View>
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
}
