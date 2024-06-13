import { View, Text, TextInput, TouchableOpacity, Image, ScrollView, SafeAreaView, FlatList } from "react-native";
import { estilera } from "../screens/stylereceitas";
export default function Card({ title, image, descricao }){

    return(
   
        <View style={estilera.card}>
        <Image source={image} style={estilera.receitaimg} />
        <Text style={estilera.titulo}>{title}</Text>
        <Text style={estilera.textocard}>
          {descricao.join("")}
        </Text>
        <Text style={estilera.textocard}>
            {descricao.join("")}
        </Text>
      </View>

    )
}

