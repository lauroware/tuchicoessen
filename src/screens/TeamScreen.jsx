import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const RecetasScreen = () => {
  const navigation = useNavigation();

  const data = [
    {
      id: "1",
      title: "Tipos de cortes de verdura",
      ingredientes:
        "Existen diferentes tipos de cortes de verduras que pueden darle variedad y estilo a tus platos. Algunos de los cortes más comunes son: juliana, en cubos, en rodajas, en bastones, en brunoise, en mirepoix, entre otros. Cada corte tiene su propio propósito y puede afectar la presentación y textura de los platos. Experimenta con diferentes cortes para añadir diversidad a tus preparaciones culinarias.",
    },
    {
      id: "2",
      title: "Cómo marinar carnes",
      ingredientes:
        "Marinar carnes es una excelente manera de agregar sabor y jugosidad. Para marinar, mezcla ingredientes como aceite, vinagre, jugo de limón, hierbas, especias y condimentos. Coloca la carne en la marinada y déjala reposar en el refrigerador durante al menos 30 minutos (o incluso durante la noche) antes de cocinarla. La marinada ayudará a ablandar la carne y realzará su sabor.",
    },
    {
      id: "3",
      title: "Como hacer caramelo",
      ingredientes:
        " En una cacerola de fondo grueso, mezcla 1 taza de azúcar granulada y 1/4 de taza de agua. Coloca la cacerola a fuego medio-alto y deja que hierva sin revolver hasta que adquiera un color dorado ámbar. Retira la cacerola del fuego y con cuidado agrega 1/2 taza de crema de leche o nata líquida, revolviendo vigorosamente. Vuelve a colocar la cacerola en el fuego bajo durante 2 minutos más, revolviendo constantemente. Retira del fuego y añade 2 cucharadas de mantequilla sin sal y 1 cucharadita de extracto de vainilla (opcional), revolviendo hasta que se incorporen. Deja enfriar a temperatura ambiente y guárdalo en un frasco esterilizado en el refrigerador. ¡Disfruta de tu caramelo casero en postres, helados, café u otras deliciosas creaciones! Recuerda tener precaución al manipular el caramelo caliente para evitar quemaduras.",
    },
    {
      id: "4",
      title: "Cómo caramelizar cebollas",
      ingredientes:
        "La cebolla caramelizada agrega un sabor dulce y suave a muchos platos. Para caramelizar cebollas, corta las cebollas en rodajas finas y cocínalas a fuego medio-bajo con mantequilla o aceite de oliva. Remueve ocasionalmente hasta que las cebollas se vuelvan doradas y suaves, lo cual puede llevar alrededor de 30-40 minutos. Puedes utilizar cebollas caramelizadas en sándwiches, pizzas, platos de pasta y más.",
    },
    {
      id: "5",
      title: "Tip de cocina: Cómo desglasar una sartén",
      ingredientes:
        "El desglasado es una técnica utilizada para aprovechar los sabores y jugos pegados al fondo de una sartén después de cocinar carne, aves o pescado. Después de cocinar la proteína, retírala de la sartén y agrega líquido como caldo, vino o jugo de cítricos. Raspando el fondo con una espátula, incorpora los sabores caramelizados a la salsa. Esta salsa se puede utilizar como base para salsas o para agregar sabor a otros platos.",
    },
    {
      id: "6",
      title: "Como podemos saber si un huevo está fresco",
      ingredientes:
        "Para saber si un huevo está fresco, puedes realizar la prueba de la flotación. Llena un recipiente con agua y sumerge el huevo en él. Si el huevo se hunde completamente y se mantiene en posición horizontal en el fondo, significa que está fresco. Si el huevo se levanta en el agua y se mantiene en posición inclinada en el fondo, está comenzando a perder frescura pero aún es seguro para consumir. Si el huevo flota en la superficie del agua, es probable que esté en mal estado y no se recomienda consumirlo. Esta prueba funciona debido a que a medida que los huevos envejecen, el aire dentro de la cáscara aumenta, lo que hace que floten. Recuerda que siempre es importante verificar también la fecha de caducidad del huevo antes de consumirlo..",
    },
    {
      id: "7",
      title: "Cómo cocinar al vapor",
      ingredientes:
        "La cocción al vapor es una técnica saludable y sabrosa para cocinar alimentos. Utiliza una cesta de vapor sobre una olla con agua hirviendo. Coloca los alimentos, como verduras, pescado o pollo, en la cesta y cubre con una tapa. El vapor cocinará los alimentos de manera uniforme, manteniendo sus nutrientes y textura. Añade hierbas, especias o jugo de limón para dar sabor mientras se cocinan al vapor.",
    },
    {
      id: "8",
      title: "Cómo asar a la parrilla",
      ingredientes:
        "La parrilla es una excelente forma de agregar sabor ahumado a carnes, aves, pescados y verduras. Precalienta la parrilla a fuego medio-alto y asegúrate de que las rejillas estén limpias y aceitadas. Condimenta los alimentos con sal, pimienta y especias, y colócalos en la parrilla caliente. Cocina los alimentos volteándolos ocasionalmente para obtener una cocción uniforme y marcas de parrilla distintivas.",
    },
    {
      id: "9",
      title: "Cómo hacer pasta al dente",
      ingredientes:
        "La pasta al dente es aquella que está cocida pero aún conserva cierta resistencia al morderla. Hierve agua en una olla grande y agrega sal. Añade la pasta y cocina siguiendo las instrucciones del paquete, pero prueba la pasta unos minutos antes de que termine el tiempo recomendado para asegurarte de que esté al dente. La pasta al dente es ideal para absorber salsas y tener una textura más satisfactoria.",
    },
    {
      id: "10",
      title: "Cómo hacer un sofrito",
      ingredientes:
        "El sofrito es una base aromática utilizada en muchas recetas. En una sartén grande, calienta aceite de oliva y añade cebolla picada, ajo y pimiento. Cocina a fuego medio hasta que las verduras se ablanden y se vuelvan translúcidas. Agrega tomate triturado y hierbas como perejil, orégano y laurel. Cocina a fuego lento durante unos minutos para desarrollar los sabores. El sofrito se puede utilizar como base para salsas, guisos, arroces y más.",
    },
  ];

  // Agregar aquí más tips de cocina según sea necesario

  const Card = ({ title, ingredientes }) => {
    const handleCardPress = () => {
      navigation.navigate("TeamDetail", {
        title,
        ingredientes,
      });
    };

    return (
      <TouchableOpacity style={styles.cardContainer} onPress={handleCardPress}>
        <Text style={styles.cardTitle}>{title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tips de cocina</Text>
      <ScrollView>
        <View style={styles.body}>
          {data.map((item) => (
            <Card
              key={item.id}
              title={item.title}
              ingredientes={item.ingredientes}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  body: {
    flex: 1,
    padding: 10,
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  cardContainer: {
    width: "100%",
    height: 100,
    backgroundColor: "#FF7100",
    borderRadius: 10,
    marginBottom: 10,
    justifyContent: "center",
    paddingLeft: 20,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ffffff",
  },
  cardIngredientes: {
    marginTop: 5,
  },
});

export default RecetasScreen;
