  import Home from "./screens/home";
  import { NavigationContainer } from '@react-navigation/native';
  import { createNativeStackNavigator } from '@react-navigation/native-stack';
  import ReceitasPage from "./screens/receitasprontas/receitas";
  import Sugestoes from "./screens/mandereceita/mande";
  import Ingredientes from "./screens/ingredientes/ingredientes";



  const Stack = createNativeStackNavigator();
 

  export default function App(){

    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#FEFAE0', // Cor de fundo da barra de navegação
            },
            headerTintColor: '#D74011', // Cor do texto na barra de navegação
            headerTitleStyle: {
              fontWeight: 'bold', // Estilo do título na barra de navegação
  
            },
          }}
        >
          <Stack.Screen name="Home" component={Home}options={{title: 'Página Inicial' , headerShown: false}}/>
          <Stack.Screen name="Receitas" component={ReceitasPage} />
          <Stack.Screen name="Sugestões" component={Sugestoes}/>
          <Stack.Screen name="Gerar Receita" component={Ingredientes}/>
          
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  


 
