import React from 'react';
import { View, Text, Image, Pressable, FlatList, Linking } from 'react-native';
import { estilera } from "./stylereceitas";


const data = [
  { id: 1, title: "Bolo de Laranja", image: require('../../assets/bolodelaranja.jpg'), descricao: 'Com suco e raspas de laranja frescas, ele tem um sabor cítrico vibrante e uma textura macia e leve. Fácil de fazer, é ideal para um lanche da tarde, café da manhã especial ou sobremesa.' ,
   ytLinks: 'https://www.youtube.com/watch?v=Ltf_H5F5lio', sitereceita: 'https://www.tudogostoso.com.br/receita/134750-bolo-de-laranja-fofinho.html'},
  { id: 2, title: "Pizza de Frigideira", image: require('../../assets/pizzadefrigideira.webp'), descricao: ' Com uma massa fácil de preparar e que fica pronta em minutos, você pode personalizar a cobertura com seus ingredientes favoritos. Ideal para um jantar rápido ou um lanche versátil, esta pizza tem uma base crocante e um recheio saboroso que agrada a todos. Basta uma frigideira e poucos minutos para desfrutar de uma pizza caseira, deliciosa e cheia de sabor.',
   ytLinks: 'https://www.youtube.com/watch?v=TduXsxH0WWM', sitereceita: 'https://www.tudogostoso.com.br/receita/161093-pizza-de-frigideira.html'},
  { id: 3, title: "Risoto de Queijos", image: require('../../assets/risoto.jpg'), descricao: 'Combinando o sabor marcante do parmesão, a suavidade do queijo mussarela e a cremosidade do queijo gorgonzola, este risoto é uma verdadeira explosão de sabores. Perfeito para um jantar especial ou para impressionar seus convidados, este prato oferece uma textura aveludada e um sabor irresistível.', 
  ytLinks: 'https://www.youtube.com/watch?v=2ba7_JIewpQ', sitereceita:'https://www.tudogostoso.com.br/receita/50612-risoto-de-queijos.html'},
];



  const Cardi = ({ title, image, descricao, ytLinks, sitereceita }) => {
  const handleLinkPress = (link) => {
    Linking.openURL(link);
  };

  return (
    <View style={estilera.card}>
      <Image source={image} style={estilera.receitaimg} />
      <Text style={estilera.titulocard}>{title}</Text>
      <View style={estilera.cardContent}>
        <Text style={estilera.textocard}>{descricao}</Text>
      </View>
    
      <View style={estilera.cardContent}>
        
          
          <Pressable onPress={() => handleLinkPress(ytLinks)}>
              <Text style={estilera.textolink}>Acesse no</Text>
            <Image
              source={require('../../assets/youtubelogo.png')}
              style={estilera.botaoyt}
            />
          </Pressable>



          <Pressable onPress={() => handleLinkPress(sitereceita)}>
              <Text style={estilera.textolink}>Receita no</Text>
            <Image
              source={require('../../assets/tudogostosologo.png')}
              style={estilera.botaotd}
            />
          </Pressable>
      


      </View>
    </View>
  );
};

export default function ReceitasPage({ navigation }) {
  const renderReceita = ({ item }) => (
    <View style={{ marginBottom: 20 }}>
      <Cardi title={item.title} image={item.image} descricao={item.descricao} ytLinks={item.ytLinks} sitereceita={item.sitereceita}/>
    </View>
  );

  return (
    <View style={estilera.divgeral}>
      <View style={estilera.cabecalho}>
        <Image
          style={estilera.logo}
          source={require('../../assets/WhatsApp_Image_2024-04-11_at_10.37.48-removebg-preview.png')}
        />
      </View>

      <FlatList
        data={data}
        renderItem={renderReceita}
        keyExtractor={(item) => item.id.toString()}
        nestedScrollEnabled={true}
      />
    </View>
  );
}
