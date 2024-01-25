import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const RecetasScreen = () => {
  const navigation = useNavigation();
  const [filtro, setFiltro] = useState(null);

  const data = [
    {
      id: "1",
      title: "Pechugas con papas",
      image: require("../assets/arroz.jpg"),
      type: "Salado",
      ingredientes:
        "1 Pollo Trozado en 16 partes - 4 Dientes de ajo - 1 Puñado de perejil picado - 200 cc de vino blanco - 200 cc de caldo de pollo o agua - 4 papas chicas - 2 cebollas grandes - 1 Cucharada de mostaza",
      receta:
        "Primero, troza el pollo en 16 partes y colócalo en el sartén de 24 cm. Luego, pica 4 dientes de ajo y esparce sobre el pollo. Agrega un puñado de perejil picado. A continuación, vierte 200 cc de vino blanco y 200 cc de caldo de pollo o agua sobre el pollo. Luego, pela y corta en rodajas 4 papas chicas y 2 cebollas grandes. Distribuye las papas y las cebollas alrededor del pollo en el cartón. Finalmente, agrega 1 cucharada de mostaza sobre el pollo y las verduras. Cubre el cartón con papel de aluminio y hornea a 180°C durante aproximadamente 45 minutos o hasta que el pollo esté bien cocido.¡Disfruta de tus deliciosas pechugas de pollo cocinadas en el sartén de 24 cm con sabores irresistibles de ajo, perejil, vino blanco y mostaza!",
    },
    {
      id: "2",
      title: "Tarta de puerros de harina integral",
      image: require("../assets/arroz.jpg"),
      type: "Salado",
      ingredientes:
        "Para la masa: 12 cucharadas de harina integral - una cucharadita de sal - una cucharadita de mix de semillas cuatro cucharadas soperas de aceite de oliva - agua cantidad necesaria - Para el relleno: 3 Huevos - 4 Cucharadas soperas de queso crema ligth - Sal a gusto - Pimienta a gusto - 1 cucharadita de ajo en polvo - fetas de queso crema ligth - 4 Puerros - 2 cebollas - champignones",
      receta:
        "Mesclamos en un bowl todos los ingredientes de la masa y mezclamos y unimos todo hasta que quede una masa firme. Aceitamos un sartén de 24 cm, a la masa cruda la llevamos a la pieza y la exparsimos por la base y las paredes. Para el rellenos agregamos en un bowl: 3 huevos, 4 cucharadas soperas de queso crema, sal, pimienta y ajo en polvo a gusto. Agregamos fetas de queso crema ligth, los puerros, las cebollas y los champis. Mezclamos e inclumos todos los ingredientes en crudo en la olla tapada. Cocinamos hasta que este la masa bien cocinada.",
    },
    {
      id: "3",
      title: "Panqueques proteicos (Ideal preentreno)",
      image: require("../assets/arroz.jpg"),
      type: "Dulce",
      ingredientes:
        "4 cucharadas de avena, dos claras, un huevo, media banana, edulcorante",
      receta:
        "Licuamos los ingredientes en una licuadora. Vertemos la mezcla en una sartén y la cocinamos a fuego medio, asegurándonos de cocinar ambos lados hasta que estén dorados. Luego, cortamos la preparación en 4 partes y las apilamos. Recomiendo servir esta preparación con miel o mantequilla de maní, rodajas de banana y arándanos. Estos ingredientes complementarán muy bien el sabor de la receta. ¡Solo queda disfrutar de esta deliciosa opción para el desayuno o como un sabroso snack saludable para el pre-entreno!",
    },
    {
      id: "4",
      title: "Piza de avena",
      image: require("../assets/arroz.jpg"),
      type: "Salado",
      ingredientes:
        "Para la masa: 200 gramos de harina de avena, 1 cucharadita de sal, 1 cucharadita de polvo de hornear y 3 cucharaditas de aceite de oliva. Mezcla todos estos ingredientes en un tazón hasta obtener una masa homogénea. Para el relleno: salsa de tomate a gusto, una lata de atún y 4 fetas de queso cremoso light. Agrega la salsa de tomate sobre la masa extendida, luego distribuye el atún sobre la salsa y coloca las fetas de queso cremoso. Añade especias a gusto para condimentar el relleno.",
      receta:
        "Mezclamos la harina, añadimos sal, agua y aceite en un tazón. Agregamos la cantidad necesaria de agua hasta obtener una masa líquida. Una vez que tenga la consistencia adecuada, calentamos una bifera y la aceitamos. Cocinamos la masa durante unos 20 minutos a fuego corona. Cuando la superficie esté opaca está lista. Preparamos la salsa: licuamos los tomates y sazonamos con sal. Cocinamos la salsa y luego la colocamos sobre la pizza junto con atún, fetas de queso y cebolleta. ¡Desmoldamos y está listo!",
    },
    {
      id: "5",
      title: "Bizcocho de arándanos. Sin gluten",
      image: require("../assets/arroz.jpg"),
      type: "Dulce",
      ingredientes:
        "200 g de premezcla sin gluten - 200 g de azucar mascabo - 6 huevos - 2 cucharaditas de polvo de hornear - ralladura de un limón grande - 200 g de arándanos.",
      receta:
        "Batimos 6 huevos, 200g de azucar y luego agregamos la premezcla sin gluten, agregamos polvo de hornear hasta que no queden grumos (vamos a sacar muchos brazos). Rayamos un limón bien grande, agregamos los arándanos y mezclamos. A la sartén fría le ponemos una cucharada de aceite de coco. Prendemos ornalla a mínimo y cocinamos toda la mezcla hasta que quede listo el bizco, nos damos cuenta cuando insertamos un palito y sale seco. A fuego corona tarda aproximadamente 45 minutos. Ideal para una tarde de domingo lluviosa y con futbol!",
    },
    {
      id: "6",
      title: "Tortilla de papas (todo crudo)",
      image: require("../assets/arroz.jpg"),
      type: "Salado",
      ingredientes:
        "5 huevos- 3 papas - 1/2 morrón - 1 cebolla morada - 1 ajo - Tomates deshidratados - Sal y pimienta",
      receta:
        "Recomenado: utilizar sartén essen 24 cm (podés ver video de preparación en mi perfil). Mezclamos todos los ingredientes en un bowl. Meteos todo en sartén essen y cocinamos a fuego corona hasta que esté cocido. Damos vuelva en caso de querer que se dore a ambos lados (no es necesario). En sartén común, precocinar las verduras.",
    },
    {
      id: "7",
      title: "Lasaña de berenjenas",
      image: require("../assets/arroz.jpg"),
      type: "Salado",
      ingredientes:
        "Pieza: sarten 24 cm, a fuego corona hasta terminar la cocción -2 berenjenas - 500 gr de ricota light - 1 huevo -albahaca c/n -3 fetas de queso cremoso light - Salsa de tomate - Sal y pimienta",
      receta:
        "Poner las berenjenas en sal en papel asbsorvente. Ponemos albaca, nueces, salpimentamos, ricota, rayadura de queso y un huevo. En la sartén vamos poniendo capas de berenjenas y la mezcla. Por encima cubrimos con salsa de tomate y queso. Podes ver el video en mi instagram!",
    },
    {
      id: "8",
      title: "Pinchos de pollo con salsa Teriyaki",
      image: require("../assets/arroz.jpg"),
      type: "Salado",
      ingredientes:
        " 2 pechugas de pollo - 1 morrón rojo -1 morrón amarillo - 1 cebolla morada - Salsa teriyaki - Jugo de 1 naranja - Ajo en polvo - Jengibre en polvo - Sal y pimienta",
      receta:
        "Cortamos el pollo en cuadraditos medianos, cortamos una o dos pechugas dependiendo la cantidad personas. Agregamos salsa teriyaki, 1 cucharada de ajo en polvo, 1 de jengibre, sal y pimienta a gusto, podemos agregar jugo de naranja, llevamos la mezcla al menos una hora a la heladera. Luego armamos los pinchos intercalando el pollo con morron y cebolla. Usamos la bifera precalentada no ma de 2 minutos, recomendamos pincelar con aceite de oliva.",
    },
    {
      id: "9",
      title: "Hamburguesas de soja con guarnición (vegana/gluten free)",
      image: require("../assets/arroz.jpg"),
      type: "Fit",
      ingredientes:
        "125 g de soja texturizada (lavar la soja texturizada, dejar con agua caliente 20 min y colar ) - 1/2 cebolla - 1/2 morrón rojo - 4 cdas de harina de arroz - 1/2 taza de arroz yamani - 2 cdas de salsa de soja - Ajo en polvo a gusto - Sal y pimienta",
      receta:
        "Inclumos en un bowl soja texturizada colada y remojada unos 20 minutos en agua caliente. Le agregamos las verduras, el arroz y los condimientos (harina de arroz, salsa de soja, ajo en polvo, sal, pimienta) mezclamos y trituramos todo hasta que quede una passta consistente. Prenemos hornalla y cocinamos en bifera. Ideal para acompañar con verduras asadas",
    },
    {
      id: "10",
      title: "Hamburguesas de pollo",
      image: require("../assets/arroz.jpg"),
      type: "Salado",
      ingredientes:
        "2 pechugas de pollo (procesadas) - 1/2 morrón - 1 cebolla chica - 2 cdas de jugo de limón - 1 cdita ajo en polvo - 1/3 taza de queso rallado - Sal y pimienta",
      receta:
        "Trituramos el pollo, mezclamos las verduras el jugo de limon, queso sardo rayado, ajo en polvo, pimienta recien molida, mezclamos todo hasta hacer una mezcla homogenea. Prendemos la bifera armamos las burguer directamente en sobre la bifera. Acompñamos con unas ricas verduritas grilladas",
    },
    {
      id: "11",
      title: "Lasaña de papas y carne picada",
      image: require("../assets/arroz.jpg"),
      type: "Salado",
      ingredientes:
        "3 papas grandes laminadas en crudo - 1 morrón - 2 cebollas - 2 dientes de ajo - 1 taza de tomate triturado - 1/2 kg de carne picada - trozos de queso light - condimentos los que más les guste - ciboulette o perejil para emplatar",
      receta:
        "Para hacer la lasaña vamos a cocinar las cebollas morron ajo y luego agregamos la carne picada, dejamos cocinar hasta que la carne este cocida, agregamos una tasa de pure tomate, sal pimineta, pimenton, ajo en polvo, nuez moscada, aji y peregil. Revolvemos y dejamos cocinar, una vez que tenemos todo bien cocido, vaciamos la sarten y dentro del sarten vamos a alternar papa, carne y queso, una vez que las papas están cocidas podemos emplatar. Se puede acompañar con cebolla de verdeo. ",
    },
    {
      id: "12",
      title: "Invertida de Peras en la Essen (gluten free)",
      image: require("../assets/arroz.jpg"),
      type: "Dulce",
      ingredientes:
        "Sarten 24 cm, cocción fuego corona o mínimo hasta terminar cocción ( introducir un palillo y si sale seco esta cocida) - 200 gr de premezcla sin gluten - 200 gr de azúcar orgánica - 5 huevos grandes o 6 medianos - 1 cdita de polvo de hornear - 1 cdita de extracto de vainilla - 2 peras - azúcar blanca c/n",
      receta:
        "Mezclamos 5 huevos con 200 gr de azucar organica, 200 gr de premezcla sin gluten, 1 cucharadita de polvo de hornear y esencia de vainilla. Hacemos caramelo con azucar una vez realizado, ponemos las peras sobre el caramelo y sobre las peras volcamos la mezcla.",
    },
    {
      id: "13",
      title: "Budín de chocolate",
      image: require("../assets/arroz.jpg"),
      type: "Fit",
      ingredientes:
        " 1/2 taza de chocolate 75% o mas (derretido) - 1 taza de harina de avena - 1/4 taza de coco rallado - 1 cda polvo leudante - 4 huevos - 1 banana pisada - 4 cdas de aceite de coco o oliva - 1/4 taza de leche de almendras - 2 cdas grandes de endulzante liquido - 1 cda de esencia de vainilla - 1 cdita de vinagre - 1 cdita bicarbonato - 1 pizca de sal",
      receta:
        "Derretimos el chocolate en la olla, volcamos en un bowl. Mezclamos el huevo, la harina y resto de los productos en un bowl, luego mezclamos todos. Y llevamos a cocinar. Arriba de la mezcla algunas nueces. Desmoldamos. ",
    },
    {
      id: "14",
      title: "Entraña con papas aplastadas y chimichurri",
      image: require("../assets/arroz.jpg"),
      type: "Salado",
      ingredientes: "2 entrañas - 2 papas medianas y tu mejor chimi 😉",
      receta:
        "Ponemos las entrañas, sal y pimienta sobre la bifera. Suamos papas aplastadasen la bifera y condimentamos con chimichurri",
    },
    {
      id: "15",
      title: "Ojo de bife con láminas de coliflor grilladas",
      image: require("../assets/arroz.jpg"),
      type: "Salado",
      ingredientes:
        "Coliflor, ojo de bife, aceite de oliva, pimento, ajo en polvo y nuez moscada",
      receta:
        "Cortar el coliflor en láminas, mezclar el aceite de olivas con los condimientos y pincelar la carne y el coliflor. Grillarlo y cocinar la carne. Se los prometo que queda riquísimo! ",
    },
    {
      id: "16",
      title: "Pancakes",
      image: require("../assets/arroz.jpg"),
      type: "Fit",
      ingredientes:
        "Cakes: 50 gr de avena - 1 banana chica - 2 huevos y 1 clara - edulcorante a gusto. Para arriba - Arándanos a gusto - Miel a gusto (no exagerar y que sea orgánica y pura)",
      receta:
        "Mezclamos todos productos en una licuadora. Cocinamos en sarten. Bien simple y rico. Ideal para desayuno de campeones!",
    },
    {
      id: "17",
      title: "Carrot Cake Fit 💪",
      image: require("../assets/arroz.jpg"),
      type: "Fit",
      ingredientes:
        "rajadura de 2 zanahorias medianas - rajadura de una naranja - 2 huevos - 100 ml de aceite de oliva - 1/2 taza de azúcar orgánica o mascabo - 1 taza de harina integral - 1 cdita de polvo para hornear - 1 cdita de bicarbonato de sodio - nuez moscada a gusto - canela a gusto - 100 gr de frutas (use 50 de nueces picadas y 50 de pasas sin semillas). Frosting: 2 cdas de queso light tipo Finlandia - 1 cdita de edulcorante - 1 cdita aceite de coco - 1 cda de coco rallado ",
      receta:
        "Batimos zanahoria rayada, huevos y esencia de vainilla junto con la rajadura de naranja (puede ser limon) agregamos la harina integral y el bicarbonato, polvo para hornear, canela y nuez moscada. Agregamos nueces, pasas sin semillas. Llevamos la mezcla a la cacerola. Para el frosting mezclamos queso crema, edulcorante liquido, aceite de coco y coco rayado. Reservamos la mezcla para mas tarde en la heladera. Desmoldeamos el carrot y agregamos el frosting por encima.",
    },
    {
      id: "18",
      title: "Torre de panqueques de acelga o espinaca",
      image: require("../assets/arroz.jpg"),
      type: "Salado",
      ingredientes:
        "Para los panqueques licuar: 4 huevos - 3 cdas de harina de arroz - 3 cdas de leche de almendras - 1/2 paquete de acelga cocida o espinaca - 1 cda de aceite de oliva - sal y pimienta. Topin y salsa: lechuga - tomate - huevos duros rallado - palmitos - queso feta light - jamón natural - queso crema light con ciboulette, sal y pimientaSarten 24 cm, cocción fuego corona o mínimo hasta terminar cocción ( introducir un palillo y si sale seco esta cocida) - 200 gr de premezcla sin gluten - 200 gr de azúcar orgánica - 5 huevos grandes o 6 medianos - 1 cdita de polvo de hornear - 1 cdita de extracto de vainilla - 2 peras - azúcar blanca c/n",
      receta:
        "1ro preparamos los panqueque. Luego vamos intercalando los panqueques con tomates, palmitos, jamon y queso.",
    },
    {
      id: "19",
      title: "Tortilla mixta de papa y boñato",
      image: require("../assets/arroz.jpg"),
      type: "Salado",
      ingredientes:
        "1 papa grande rallada - 1 boñato grande rallado - 1/2 cebolla - 1/2 morrón - 2 a 4 huevos hasta cubrir todas las verduras - queso feta port salud light - sal, pimienta, ají molido y pimentón",
      receta:
        "Batimos 3 huevos grandes, agregamos rayadura de boñato y papa, cebolla y morrón. Condimientamos a gusto, mezclamos todo y lo llevamos a la sarten (recomendamos flip 2.0), Recomiendo poner en medio de la mezcla fetas de queso port salut. Cocinamos a 20 minutos e ambos lados.  ",
    },
    {
      id: "20",
      title: "Cockies de avena",
      image: require("../assets/arroz.jpg"),
      type: "Fit",
      ingredientes:
        "1 huevo, 50 gr de azúcar mascabo, 30 gr de aceite de coco (si no tienen de Oliva), esencia de vainilla, 1 cdta de polvo para hornear, 100 gr de avena, 40 gr de harina integral ",
      receta:
        "Mezclamos el azucar, un huevo, 30 gr de aceite de coco y vainilla. Mezclamos hasta integrar, agregamos polvo para hornear. La harina integral y el aceite de coco. LLevamos a la heladera 20 minutos para que tome cuerpo y hacemos bolitas pequeñas aplastamos y decoramos por arriba con chocolate, semillas o frutos secos. Se cocina a fuego corona por 10 o 15 minutos.",
    },
    {
      id: "21",
      title: "Bizcocho de Harina integral",
      image: require("../assets/arroz.jpg"),
      type: "Fit",
      ingredientes:
        "5 huevos - 150 gr de azúcar orgánica - 170 gr de harina integral - esencia de vainilla c/n - 2 manzanas verdes fileteadas ",
      receta: "",
    },
    {
      id: "22",
      title: "Cokies de avena",
      image: require("../assets/arroz.jpg"),
      type: "Fit",
      ingredientes:
        ".1 huevo - 50 gr de azúcar mascabo - 30 gr de aceite de coco ( si no tienen de Oliva - esencia de vainilla - 1 cdta de polvo para hornear - 100 gr de avena - 40 gr de harina integral. Pora arriba lo que más les guste 😉",
      receta:
        "Para hacer arroz blanco, enjuaga una taza de arroz bajo agua fría para eliminar el exceso de almidón. En una olla mediana, agrega el arroz y dos tazas de agua. Si deseas, añade sal al gusto. Lleva el agua a ebullición a fuego alto. Una vez que el agua esté hirviendo, reduce el fuego a bajo, tapa la olla y deja que el arroz se cocine durante unos 15-20 minutos, o hasta que el agua se absorba por completo y el arroz esté tierno. Retira del fuego y deja reposar tapado durante unos minutos. Fluff con un tenedor antes de servir. ¡Disfruta de un delicioso arroz blanco!",
    },
    {
      id: "23",
      title: "Invertida de ciruelas",
      image: require("../assets/arroz.jpg"),
      type: "Fit",
      ingredientes:
        "3 huevos - 1/2 taza de aceite de oliva - Esencia de vainilla - Jugo de 1 una naranja - 1 cda sopera de edulcorante - 1 y 1/2 taza de harina de arroz - 50g de almendras procesadas (opcional) - 6 ciruelas chicas aprox - Miel cantidad necesaria",
      receta:
        "Apta celíacos. Batimos huevos, aceite y una cucharada de vainilla. Agregamos edulcorante, jugo de naranja, harinas de alemendra y arroz. Ponemos la preparación en el sartén essen y dejamos cocinar aproximadamente 30 a 45 minutos. En caliente pintamos la preparación con miel. Dejamos enfriar y desmoldamos.",
    },
    {
      id: "24",
      title: "Cheesecake de frutos rojos. FIT",
      image: require("../assets/arroz.jpg"),
      type: "Fit",
      ingredientes:
        "Base: 200gr harina de almendras - 10 sobrecitos de stevia - 3 cdas aceite de coco - 1 cdita esencia de vainilla. Relleno: 500 gr de ricota baja en calorías - 300 gr de queso crema light - 3 huevos - 10 sobrecitos de stevia - 1 cdita de esencia de vainilla. Cobertura: Mermelada de Frutos rojos light - Frutos rojos lo que quieras 💖",
      receta:
        "Para enamorar. Mezclamos edulcorante con la harina de almendras aceite de coco y la cucharada de vainilla. Con eso terminamos la base. Para el relleno mezclamos ricota, queso filadelfia o finalndia, huevos y vainilla. Endulzamos e integramos los ingredientes. Volcamos la base y encima ponemos la mezcla. Desmoldamos. Usamos para decorar frutos rojos y mermelada. Recomiendo el uso de productos bajos en calorias!     ",
    },
    {
      id: "25",
      title: "Pan de acelga",
      image: require("../assets/arroz.jpg"),
      type: "Fit",
      ingredientes:
        "100 gr de acelga - 4 cdas de harina de garbanzos - 1 cda de polvo para hornear - 3 huevos - 1 clara - Sal y Pimienta - Semillas c/n",
      receta:
        "Excelente para persuadir a los peques de incorporar acelga en su dieta, ademas es libre de gluten!. Mixeamos un puñado de acelga con los huevos, polvo para hornear, sal pimienta y garbanzos. Hacemos un pan con la masa y horneamos. Tambien podemos hacerlo directamente en una bifera essen, conando el pan lado a lado. ",
    },
    {
      id: "26",
      title: "Scones fit de queso",
      image: require("../assets/arroz.jpg"),
      type: "Fit",
      ingredientes:
        "150gr de queso rallado - 3 tazas de avena - 1/2 taza de aceite de oliva - 1/2 taza de agua - 2 huevos - 1 cda de polvo para hornear (grande) - 1 cda de sal (grande) - pimienta a gusto - Harina de arroz c/n hasta formar la masa y los scones con facilidad. ",
      receta:
        "Rayamos el queso con avena, aceite avena, sal y polvo para hornear, pimienta y huevos. Mezclamos todos los productos, con todo unido con la ayuda de harina de arroz, formamos una masa bien compacta. Y hacemos formitas de scnoes.",
    },
    {
      id: "27",
      title: "Snack Fit de naranja y chocolate",
      image: require("../assets/arroz.jpg"),
      type: "Fit",
      ingredientes:
        "4 huevos - 50 gr de aceite de oliva - 50 gr de Eritritol (o stevia) - 140 ml jugo de naranja - Ralladura de 2 naranjas - 150 gr de harina de avena - 60 gr de harina de almendras - 10 gr polvo para hornear - Chocolate 80% una tambleta",
      receta:
        "Ideal para el cafe. Mezclamos el aceite con los 4 huevos, agregamos rayadura de naranja y jugo de naranja exprimido y el endulzante. Incorporamos luego de mezclar las harinas, el horno para hornear y mezclamos toda la preparación. Metemos en la flip essen y cocinamos, una vez listo, bañamos por arriba con chocolate al 70% y dejamos enfriar, cortamos en pedacitos. Tip: antes de que endurezca por completo el chocolate hagan los cortes como más les gusten y rallen un poco de naranja por arriba y dejen enfriar por completo. Tiene que endurecer totalmente.🤤🤤🤤",
    },
    {
      id: "28",
      title: "Invertida de manzanas rojas",
      image: require("../assets/arroz.jpg"),
      type: "Fit",
      ingredientes:
        "2 huevos🥚 - 1 manzana rallada🍎 - 100 gr azúcar mascabo - 4 cdas de leche vegetal🥛 - 6 cdas de aceite🍵 - 100gr de avena instantánea 🍚 - 150gr de harina integral 🍚 - 1 cdita colmada de polvo para hornear - 2 manzanas fileteadas gruesas🍎🍎",
      receta:
        "Usamos sartén essen 24 cm. Mezclamos huevo, azucar, aceite de oliva, leche de almendras, mezclamos todo hasta que espume bien. Agregamos avena instantanea y rayadura de una manzana que aportara humedad al bizcocho, seguimos con la harina integral, una cucharada de polvo de hornear. Mezclamos y preparamos la sartén essen de 24 con aceite de oliva o manteca. Agregamos azucar en la base y acomodamos las manzanas cortadas. Volvamos por encima la mezcla y cocinamos a fuego corona. Desmoldar en caliente porque sino se va a quemar a endurecer el caramelo!",
    },
    {
      id: "29",
      title: "Tarta integral fungi 🍄",
      image: require("../assets/arroz.jpg"),
      type: "Fit",
      ingredientes:
        "Masa: 400gr de harina integral, 6 cdas de aceite de oliva, 200 ml de agua, Sal y pimienta. Relleno: 250gr de hongos portobellos, 250gr de hongos, 1 cebolla morada, 1 cebolla blanca, 2 cebollas de verdeo chicas, 4 fetas de queso blando en cubos, 3 huevos, Sal, pimienta, ajo en polvo, jengibre en polvo, orégano y nuez moscada.",
      receta:
        "Masa: harina integral, aceite y agua. Unimos todo y hacemos un bollito, dejamos descanzar la masa para que el harina integral absorba el agua. Luego, cortamos las verduras y los hongos en pedacitos. Saltear las cebollas hasta casi caramelizar, luego poner los hongos cortados, dejamos enfriar la preparación y agregarle cuadraditos de quesos a elección, agregarle 3 huevos y condimentar con tus condimentos preferidos (yo uso jengibre y pimienta). Estiramos la masa en la sartén y volcamos por encima la preparación. Llevamos a fuego corona la preparación!",
    },
    {
      id: "30",
      title: "Tarta rápida de atún 🐟",
      image: require("../assets/arroz.jpg"),
      type: "Salado",
      ingredientes:
        "Masa: 200gr de harina integral, 4 cdas de aceite de oliva, 100ml de agua, Sal y pimienta. Relleno: 1 lata de atún, 3 fetas de queso por salud light en cubos, 1/4 morrón colorado, 1 cebolla chica, 1 tomate perita, 2 huevos, Sal y pimienta (y todo lo que les guste)",
      receta:
        "Masa: harina integral, aceite y agua. Unimos todo y hacemos un bollito, dejamos descanzar la masa para que el harina integral absorba el agua. Luego en la multi picamos cebolla, morron y tomate. Agregamos en un bowl el atun con la mezcla, agregamos queso port salut y huevos. Salpimentamos a gusto. Ponemos en el sarten la masa y por encima volcamos la mezcla. Dejamos cocinar a fuego corona por 50 minutos la mezcla. ",
    },
    {
      id: "31",
      title: "Tarta de zapallitos y choclo",
      image: require("../assets/arroz.jpg"),
      type: "Salado",
      ingredientes:
        "Masa: 300gr de harina integral, 6 cucharadas de aceite de oliva, 60ml de agua (más o menos depende de la harina), Sal, pimienta y mix de semillas a gusto. Relleno: 4 zapallitos (cocidos), 2 choclos chicos (cocidos y cortar los granos), 1 cebolla grande, 2 dientes de ajo, 3 huevos, Cubos de queso fresco a gusto, Sal, pimienta y orégano.",
      receta:
        "Masa: harina integral, aceite y agua. Unimos todo y hacemos un bollito, dejamos descanzar la masa para que el harina integral absorba el agua. Con una vaporera cocinar el zapallo. En una multi picar la cebolla y ajo. Estirar la masa en una sartén essen. Cortar los zapallitos, lo granos de choclo, cebolla, salpimentar. Mezclar todo y volcar los productos en el sartén sobre la masa. Dejar cocinar de 40 a 50 minutos!",
    },
    {
      id: "32",
      title: "Flan de coco",
      image: require("../assets/arroz.jpg"),
      type: "Dulce",
      ingredientes:
        "5 huevos🥚🥚, 1 lata de leche condensada descremado, 2 medidas iguales de agua (misma lata), 1 cda sopera de Esencia de vainilla, 100gr de coco rallado 🥥. Caramelo: 150gr de azúcar común, a fuego lento y no tocar hasta que vean el color característico del caramelo en los bordes del savarin.",
      receta:
        "Sobre savarin o bundiera hacer un caramelo. En un bowl mezclar huevos, leche condensada, dos medidas de agua, vainilla y mezclamos con coco rayado, si queremos agujeritos batir. Volcar la preparación encima del caramelo en la budinera.",
    },
    {
      id: "33",
      title: "Niños envueltos",
      image: require("../assets/arroz.jpg"),
      type: "Salado",
      ingredientes:
        "300gr de carne picada, 200gr de arroz común (se pone en crudo y lavado), 1 repollo grande, 1 cebolla grande, 2 tomates peritas, 1 morrón colorado, 2 dientes de ajo, Un puñado de albahaca fresca, Sal, pimienta, ají molido. Vinagreta: Jugo de 2 limones, Aceite de oliva, Sal y pimienta.",
      receta:
        "En una vaporera cocinar hojas de repollo. Por otra parte en un bowl mezclar carne picada, morron, tomate, un diente de ajo, cebolla y arroz en crudo. Con las hojas ya fria rellenamos los repollos haciendo paquetitos. Los ponemos en la vaporera nuevamente y cocinamos de 45 a 50 minutos. Verificamos que los niños revueltos estén cocinados, sacando algún granito de arroz, una vez cocinado el arroz. Ya están listos! Hacemos una vinagreta con limon y los pintamos por encima.",
    },
    {
      id: "34",
      title: "Chupín de pescado y papas",
      image: require("../assets/arroz.jpg"),
      type: "Salado",
      ingredientes:
        "2 cebollas medianas🧅, 1 morrón, 2 papas medianas 🥔, 6 filet de merluza 🐟🐟🐟, C/N de Jugo de limón 🍋, 2 dientes de ajo🧄, 2 latas de puré de tomates, 1 vaso de agua, 1 vaso de vino blanco🍾, Sal, pimienta, orégano, ají molido, pimentón, Perejil 🫶, C/N de aceite de oliva (para rehogar).",
      receta:
        "A los filet de merluza lo metemos en la heladera con jugo de limon. Picamos la papa, la cebolla y los morrones en rodajas de 7mm, terner en cuenta el grosor para calcular el tiempo de cocción. Picamos ajo y salteamos todo en un sartén. Agregamos dos latas de pure de tomate y el vino blanco, condimentados a gusto la mezcla. Dejar hervir. Hacemos arrolladitos con el pescado pinchando con un pinche, agregamos la papa, intercalandola entre el pescado. Una vez cocinada la papa, está lista comida. ",
    },
    {
      id: "35",
      title: "Salteado de vegetales, pollo y fideos 🍳",
      image: require("../assets/arroz.jpg"),
      type: "Salado",
      ingredientes:
        "200gr de fideos de arroz, 1 zanahoria, 1 cebolla morada, 1 zucchini, 2 tomates peritas (sin semillas), 1 morrón rojo, 1 morrón verde, 1 pechuga de pollo grande, Sal, pimienta y mix oriental, Salsa de soja, Salsa de ostras.",
      receta:
        "Picamos todas verduras y el pollo en juliana. Hervimos agua y cocinamos los fideos de arroz. Agregarmos primero el pollo a un wol y lo salteamos. Lo retiramos y seguimos con las verduras. Una vez cocinado agregamos el pollo y luego los fideos de arroz. Agregamos salsa de ostras, hojas y condimientos a gusto (recomiendo condimentos orientales)",
    },
    {
      id: "36",
      title:
        "Tortilla mixta todo en crudo 🤤🤤🤤 (conserva todo los nutrientes)",
      image: require("../assets/arroz.jpg"),
      type: "fit",
      ingredientes:
        "1 papas grande o 2 medianas, 1 boniato grande o 2 medianos, 5 a 6 huevos dependiendo el tamaño, Jamos cocido natural c/n, Queso muzzarella c/n, Medio morrón colorado, 1 cebolla morada, Sal y pimienta, Ajo en polvo, Nuez moscada, Nuez moscada, Orégano, Paprika",
      receta:
        "Cortamos las papas, las cebollas, el boniato el morron, unimos todos con los condimientos y lo 5 huevos. En una sarten de 24 volcamos la mezcla intercalando fetas de queso y jamon. Terminamos de cubrir con la mezcla y dejamos cocinar durante 50 minutos en sartén essen. Recomendamos cuando la tortilla está lista darla vuelta y dorar del otro lado.",
    },
    {
      id: "37",
      title: "Osobuco braseado con pure mixto 🍷🥘🍖💞",
      image: require("../assets/arroz.jpg"),
      type: "Salado",
      ingredientes:
        "Receta: 3 rodajas de osobuco de 4 cm de grosor, 4 cebollas grandes, 2 zanahorias, 2 puerros, 3 ramas de apio, 2 estrellas de anís, Romero fresco 3 ramas, Tomillo fresco 3 ramas, Piel de media naranja, 4 dientes de ajo grandes, 500ml de vino blanco, 500ml de caldo de verduras, Rama de canela, Sal y pimienta, 400gr de papas, 400gr de calabaza, Aceite de oliva c/n.",
      receta:
        "Cortamos las verduras. Condimentamos los medallones y sellamos con harina sal y pimineta. Luego en un plato le agregamos tomillo y rodajitas de piel de naranja. En la sartén donde sellamos el osobuco agregamos las verduras, y salpimentamos. Puedo agregar una rama de canela y anis. Llevamos al sartén de 24 donde vamos a cocinar todos los productos. Agregamos medio litro de caldo de verdura y vino blanco. Dejamos cocinar durante 3 hrs. A la par hacemos un pure de zapallo y papas que podemos condimentar a gusto. Lo reservamos hasta emplatar. Cuando ya esté el braseado en una cacerola le sacamos el juego y lo reducimos con una cucharada de maicena. Para empletar. Ponemos el pure y encima el osobuco y por encima volcamos la reducción. Comentario del programador de esta app: Soy el programador de la app y de todas las recetas, esta es la que más me gustó! Muy recomendada!",
    },
    {
      id: "38",
      title: "Budín de chocolate y banana 🍫🍌",
      image: require("../assets/arroz.jpg"),
      type: "Fit",
      ingredientes:
        "Receta: 4 bananas maduras (y 1 más para decorar), 60ml de miel, 90ml de aceite neutro, 4 huevos, 1 cda de esencia de vainilla, 1 cdita de sal, 120gr de harina de avena, 50gr de harina de almendras (o misma de avena), 60gr de cacao amargo (puro de calidad), 2 cdas de polvo para hornear, 100gr de chips de chocolate amargo.",
      receta:
        "Sin harinas refinadas! Batimos los humedos y luego agregar los ingredientes secos. Agregamos chips de chocolate. Aceitamos el savarin y agregamos la preparación. Agregamos una banana cortada en tiraas a la mitad. Agregamos chips de chocolate por encima y azucar a media cocción.",
    },
    {
      id: "39",
      title: "Pastel de Pollo y Boñato 🍗🍗🍠🍠",
      image: require("../assets/arroz.jpg"),
      type: "Salado",
      ingredientes:
        "Receta: Marinada de pollo🍗 con 2 pechugas de pollo, 2 cdas de queso crema, 2 cdas de barbacoa, Sal, pimienta, perejil, orégano, jengibre en polvo. Acompañado de un salteado de verduras🥗 con 1 cebolla, 1 morrón colorado, 2 tallos de puerro y 1 choclo. Además, un delicioso puré de boniato🍠 con 3 boniatos grandes, 1 cda de queso crema, Aceite de oliva, Sal, pimienta y nuez moscada.",
      receta:
        "Marinamos el pollo con todas las especias, queso crema y barbacoa. Luego picamos boniato, cebolla, puerro, el morron, desgranamos un chocolo. Agregamos luego el pollo a la cacerola. Una vez cocido, salteamos las verduras. Al boñato lo hervimos y lo hacemos pure agregandole queso crema. A las verduras Salteadas le agregamos el pollo y unimos. Luego por encima le ponemos el puro de boniato y unas rodajas de queso. Se puede usar un queso que se derrita o un queso a gratinar. Recomiendo agregar perejil por encima. Recomendamos servir directamente de la sartén. Pueden ver la preparación en mi insta!",
    },
    {
      id: "40",
      title: "Pollo con Papines Patagonicos ⛰️🏔",
      image: require("../assets/arroz.jpg"),
      type: "Salado",
      ingredientes:
        "1 pollo trozado con piel (se puede sacar si se prefiere), 400gr de papines, 2 cebollas, 1/2 morrón colorado, 1/2 morrón verde, 4 rodajas de jalapeño, 1 diente de ajo, 1 cebolla de verdeo, 1 zanahoria, 1 tomate para cortar en láminas, 300ml de vino blanco, 300ml de puré de tomates (puedes licuar 2 tomates), Sal, pimienta, tomillo, romero, laurel y orégano.",
      receta:
        "Cortamos la cebolla en rodajas, cortamos rodajas de morron verde y rojo. Jalapeño y verdeo en rodajas. Dejamos papines en remojo. En una sartén ponemos en aceite unos trozos de pollo para sellar y los reservamos para despues. Al sarten agregamos cebolla y morrones, tomates ajo y zanahoria. Por encima ponemos el pollo sellado. Agregamos 300ml de vino blanco y 300ml de juego o pure de tomate y agregamos los papines. Condimentamos a gusto! Recomiendo oregano, tomillo y laurel. Cuando están los papines está lista la receta! Disfruten :)",
    },
    {
      id: "41",
      title: "Guiso de lentejas (sin chorizo colorado😖) ",
      image: require("../assets/arroz.jpg"),
      type: "Salado",
      ingredientes:
        "400gr de lentejas (remojadas 24hs), 2 papas medianas, 1 zanahoria, 2 cebollas, 2 dientes de ajo, 100gr de panceta, 300gr de carne roastbeef, 250ml de vino (malbec en mi caso), 500ml de agua, 1 morrón colorado, 1 cebolla de verdeo, Sal, pimienta, orégano, laurel, pimentón dulce y ají molido.",
      receta:
        "Cortamos papas, las zahanoria en piezas pequeñas. Cortamos la carne y la panceta en tiritas y la sellamos. Cocinamos la cebolla, el ajo y luego agregamos la carne y la panceta con un poco de vino. Una vez que el vino se evapora, agregamos a la olla medio litro de agua un poco, luego la zanahoria, las arvejas, dos latas de tomate y luego las papas. Una vez en el plato recomiendo agregar perejil por encima. Es recomendable si se cocina a la tarde comerlo a la noche, si se cocina a la noche, comerlo al otro dia!",
    },
    {
      id: "42",
      title: "Bizcocho de banana y almendras 🍌🫘",
      image: require("../assets/arroz.jpg"),
      type: "Fit",
      ingredientes:
        "2 bananas, 140gr de harina integral, 70gr de avena instantánea, 100gr de azúcar mascabo, 60cc de aceite, 1 huevo grande o 2 chicos, 1 cda grande de polvo para hornear, Esencia de vainilla a gusto, 50gr de almendras cortadas.",
      receta:
        "Licuamos banana, aceite, el huevo y el azucar. Lo pasamos a un bowl y los mezclamos con el avena y el harina, agrego vainilla y almendras. Agregamos polvo para hornear. Mezclamos y agregamos en una cacerola essen o llevamos al horno. De 20 a 25 minutos ya está cocinado!",
    },
    {
      id: "43",
      title: "Pastafrola integral de Frutos Rojos 🥳🥳",
      image: require("../assets/arroz.jpg"),
      type: "Fit",
      ingredientes:
        "Para la masa, mezcla 300gr de harina integral, 3 huevos, 1 cda de miel, 1 cdita de bicarbonato de sodio, 2 cdas de aceite de oliva, 1 cda de mix de semillas y ralladura de 1 limón. Para el relleno, combina 200gr de dulce de batata, 2 cdas colmadas de mermelada de frutos rojos y 50gr de chocolate 70% picado. ¡Prepara estas deliciosas empanaditas dulces y disfruta de su sabor único!",
      receta:
        "En un bowl agregamos harina, miel, bicarbonato de sodio, rayadura de un limon 3 huevos y dos cucharadas de aceite de oliva. Agregamos tambien las semillas. Mezclamos con la mano hasta que se una. Por otra parte pisamos en una cacerola, dulce de batata con mermelada de frutos rojos. Estiramos la masa en la flip o en un molde para tortas y agregamos al relleno, trozos de chocolate al 70% (esto es opcional). Volcamos el relleno arriba a de la masa y expandimos. Cortamos tiritas de masa y ponemos tiritas por encima del relleno de lado a lado del molde formando cuadraditos. LLevamos a fuego",
    },
    {
      id: "44",
      title: "Albóndigas con papas 💞💞",
      image: require("../assets/arroz.jpg"),
      type: "Salado",
      ingredientes:
        "Para las albóndigas, mezcla 1kg de carne picada, mucho perejil (un buen puñado), 2 dientes de ajo cortados bien chiquitos, medio jalapeño sin semillas y condimenta con sal, pimienta, comino, tomillo, ají molido y romero. Para la salsa, corta 1 cebolla, 1 morrón colorado y 1 diente de ajo. Agrega 1 botella de tomate triturado y 2 papas grandes o 3 medianas. Condimenta con sal, pimienta, pimentón dulce, laurel y ají molido.",
      receta:
        "Mezclamos y amasamos de 3 a 4 minutos la carne picada con las verduritas. Luego hacemos bollitos y las salteamos en una cacerola. Luego sacamos las albondigas y agregamos cebollas picadas y las salteamos con condimentos a gusto. Agregamos luego 3/4 de tomate triturado, un vaso de de agua, agregamos papas del tamaño de las albondigas, agregamos luego las albondigas selladas y cocinar de 45 a 50 minutos. Nos damos cuenta cuando la papa está lista. Recomiendo comer con arroz blanco.",
    },
    {
      id: "45",
      title: "Dips de Manzanas saludables 🍎🍎🍎🥞🥞🥞",
      image: require("../assets/arroz.jpg"),
      type: "Fit",
      ingredientes:
        "Para la masa, mezcla 300gr de harina integral, 3 huevos, 1 cda de miel, 1 cdita de bicarbonato de sodio, 2 cdas de aceite de oliva, 1 cda de mix de semillas y ralladura de 1 limón. Para el relleno, combina 200gr de dulce de batata, 2 cdas colmadas de mermelada de frutos rojos y 50gr de chocolate 70% picado. ¡Prepara estas deliciosas empanaditas dulces y disfruta de su sabor único!",
      receta:
        "Lucuamos avena avena, dos huevos, polvo para hornear, vainilla, canela. leche y endulzante. Una vez licuado lo dejamos descanzar y corrtamos rodajas de manzanade de 5 cm. Ponemos la mezcla en un plato y pasamos las manzanas por la mezcla. Luego Cocinamos las manzanas en una bifera (lado a lado), es una receta facil y riquísima!!!!!",
    },
    {
      id: "46",
      title: "Canelones de verduras y ricota 🥘🥬🥬🥬",
      image: require("../assets/arroz.jpg"),
      type: "Salado",
      ingredientes:
        "Con 100gr de copos de avena, 1 sobre de stevia, 2 huevos, 1 cdita de polvo para hornear y 1 cda de canela, prepara una mezcla. Agrega 2 manzanas cortadas en trozos y mezcla nuevamente. Vierte la mezcla en un recipiente apto para horno y hornea a temperatura media hasta que esté dorado. Al finalizar, puedes añadir miel al gusto para darle un toque dulce. ¡Disfruta de estas deliciosas galletas de avena y manzana!",
      receta:
        "Para la masa de panqueques, licuamos los humedos hasta que quede uniforme, luego agregamos la acelga. Luego agregamos en un bowl harina de arroz y le agregamos la mezcla licuada. Hacemos una salsa con cebolla y le agregamos tomate. Para el relleno cocinamos cebolla, ricota, queso parmesano y acelga nuez moscada, sal y pimienta. Una vez listo reservamos (enfriamos). Pasamos a la primer mezcla y hacemos los panqueques. Hacemos luego los canelones con el relleno ya en frio. LLevamos todo al horno y cocinamos con la salsa de tomate y queso por encima.",
    },
    {
      id: "47",
      title: "Tarta de verduras 🧄🧅🌶🥕🫑",
      image: require("../assets/arroz.jpg"),
      type: "Salado",
      ingredientes:
        "Para preparar una deliciosa tarta de verduras, necesitarás 3 zapallitos, 1 zanahoria chica, 1 cebolla mediana, 1 choclo, 1 diente de ajo, 1/2 morrón colorado, 3 huevos, 3 cdas de queso crema light, fetas de queso fresco light, 1 disco de masa de tarta y condimentos como sal, pimienta y orégano.",
      receta:
        "Para hacer arroz blanco, enjuaga una taza de arroz bajo agua fría para eliminar el exceso de almidón. En una olla mediana, agrega el arroz y dos tazas de agua. Si deseas, añade sal al gusto. Lleva el agua a ebullición a fuego alto. Una vez que el agua esté hirviendo, reduce el fuego a bajo, tapa la olla y deja que el arroz se cocine durante unos 15-20 minutos, o hasta que el agua se absorba por completo y el arroz esté tierno. Retira del fuego y deja reposar tapado durante unos minutos. Fluff con un tenedor antes de servir. ¡Disfruta de un delicioso arroz blanco!",
    },
    {
      id: "48",
      title: "Brownie con 4 ingredientes 🍫",
      image: require("../assets/arroz.jpg"),
      type: "Fit",
      ingredientes:
        "3 manzanas 🍎🍎🍎 - 3 huevos🥚🥚🥚 - 3 cdas de cacao amargo 🍫🍫🍫 - 3 sobres de stevia (a gusto)",
      receta:
        "Bien sencillo!!! licuamos todo hasta que quede bien mezcladito, luego llevamos todo a un molde y cocinamos. Por encima podemos ponerle nueces pero es a gusto de cada uno. Es espectacular, sano, rapido y apto celiacos!",
    },
    {
      id: "49",
      title: "Bifes a la Criolla 🫶🥘🤯",
      image: require("../assets/arroz.jpg"),
      type: "Salado",
      ingredientes:
        "6 bifes de cuadrada o bola de lomo, 1 morrón colorado, 1 morrón verde, 2 cebollas, 2 dientes de ajo, 1 tomate, 1/2 lata de tomate en cubos (poco no queremos un tuco), 1 lata de arvejas, 2 o 4 huevos (según comensales), Sal, pimienta, orégano, ají molido.",
      receta:
        "Cocinamos en cuadrada de 24. Cortamos tomate, cebolla comun y de verdeo, ajo y cortamos en finas tiras los morrones. cortamos las papas en 1cm y medio a 2 cm. agregarmos los productos a la olla y agregmos arriba los bifes. Salpimentamos con ajimolido y agregamos media lata de tomates en cubo, agregamos caldo de verdura 500ml y un buen toque de vino blanco, agregar las papas encima. Una vez que se cocino a medio tiempo le agregamos una lata pequeña de arvejas. Volvemos a cerrar. Una vez qe se está terminando la cocción podemos agregar huevos para que se cocinen (sin cascara). Servir con perejil por encima. Requísimo y sano!",
    },
    {
      id: "50",
      title: "Bizcocho de durazno",
      image: require("../assets/arroz.jpg"),
      type: "Dulce",
      ingredientes:
        "2 huevos🥚 - 1/2 taza de aceite de oliva - 100 ml de leche vegetal o animal descremado🥛 - 1 taza de harina integral - 1/2 taza de azúcar mascabo - 1 y 1/2 cdita de polvo para hornear - Esencia de vainilla - 1 o 2 duraznos 🍑🍑",
      receta:
        "Mezclamos los huevos, el aceite, azucar, agregamos harina integral, 100 ml de leche, polvo para hornear. Usamos sarten essen, ponemos los duraznos y por encima volcamos la mezcla. Cocinamos hasta que el bizcochuelo este listo!. Muy sabroso!",
    },
    {
      id: "51",
      title: "Bizcocho de pomelo rosado/naranja, mandarina o limón",
      image: require("../assets/arroz.jpg"),
      type: "Dulce",
      ingredientes:
        " Jugo de 2 pomelos y su ralladura (podes elegir naranja, mandarina, limón!) - 1/2 taza de aceite neutro (oliva si te va lo fuerte 😠) - 1 taza de azúcar mascabo - 1 y 1/2 taza de harina integral - 2 huevos - 2 cdta de polvo para hornear ",
      receta:
        "Receta: Mezclamos el azúcar, los huevos, la harina, el polvo de hornear, el jugo y la ralladura de pomelo, y batimos la mezcla. Luego, vertemos la preparación en un molde y horneamos a fuego medio durante 35 minutos. Finalmente, desmoldamos el delicioso resultado.",
    },
    {
      id: "52",
      title: "Bizcocho de avena, banana y choco 🍚🍫🍌🍫🍚🍌🍫🍚🍌",
      image: require("../assets/arroz.jpg"),
      type: "Fit",
      ingredientes:
        " 120 gr avena en copos🍚 - 200 ml de leche TIBIA 🥹 - 2 huevos🥚🥚 - 2 platanos🍌🍌 - 40 gr de cacao 100% puro de buena calidad 👊👊👊🍫🍫🍫 - 2 sobres de stevia - vainilla un chorrin 💦 -1 cdita polvo para hornear 🏺 - Nueces c/n 🫘🫘",
      receta:
        "En un recipiente grande, mezcla los copos de avena con la leche tibia y deja reposar durante unos 10 minutos para que la avena absorba la leche. En otro recipiente, machaca los plátanos maduros hasta obtener un puré. Agrega los huevos a la mezcla de avena y leche, y bate bien. Incorpora el puré de plátano a la mezcla y continúa batiendo. Añade el cacao puro, la stevia, la esencia de vainilla y el polvo para hornear. Mezcla hasta obtener una masa homogénea. Agrega las nueces al gusto y mezcla nuevamente. Vierte la masa en tu Essen. Hornea durante aproximadamente 35-40 minutos, o hasta que al insertar un palillo en el centro, este salga limpio. Deja enfriar el bizcocho antes de desmoldarlo.",
    },
    {
      id: "53",
      title: "Aros de manzana",
      image: require("../assets/arroz.jpg"),
      type: "Fit",
      ingredientes:
        "1 manzana 🍎 - 1 tapa de tarta🫓 - 100 gr de azúcar rubia - canela c/n - nuez moscada c/n🌰 - ralladura de 1 limon🍋 - manteca derretida c/n ",
      receta:
        "Envuelven los aros de manzana con las tiras de la masa de tarta, las pincelan con manteca derretida y le espolvorean la mezcla de azúcar, canela , nuez moscada y ralladura de limón. Espero que les guste la idea y la hagan! están super ricas!",
    },
    {
      id: "54",
      title: "Alfajores de Coco 🥥🥥",
      image: require("../assets/arroz.jpg"),
      type: "Fit",
      ingredientes:
        "100 gr de azúcar orgánica 🍚 - 100 gr de coco rallado 🥥🥥 - 1 huevo 🥚 - Toppings ideales: Dulce de leche repostero o membrillo pisado",
      receta:
        "Mezclamos el coco, el huevo y el azucar hasta lograr una masa consistente. Creamos circulos de tamaño alfajor y los llevamos a tu essen, 10 minutos de cada lado. Ideales para armar como alfajores!",
    },
    {
      id: "55",
      title: "Arroz con Leche! 🍧🥰🥰",
      image: require("../assets/arroz.jpg"),
      type: "Dulce",
      ingredientes:
        "ingredientes: 1 L de leche descremado🥛- 250gr de arroz blanco común🍚 (podes usar el arroz para risotto) - cáscara de 1 limón 🍋 - 1 rama de canela 🪵- 5 sobres de stevia - nuez moscada c/n (si ponele!!)✨️",
      receta:
        "Enjuaga el arroz bajo agua fría para quitar el exceso de almidón. En una cacerola grande, calienta la leche descremada a fuego medio. Cuando la leche esté caliente, agrega el arroz y mezcla bien. Añade la cáscara de limón y la rama de canela a la mezcla. Esto dará sabor al arroz con leche. Cocina a fuego medio-bajo, removiendo constantemente para evitar que el arroz se pegue al fondo de la cacerola. Cuando el arroz esté casi cocido y la mezcla haya espesado, agrega los sobres de stevia y mezcla hasta que estén bien incorporados. Continúa cocinando a fuego bajo hasta que el arroz esté tierno y la mezcla tenga la consistencia deseada. Ajusta la cantidad de stevia según tu preferencia de dulzura. Retira la cáscara de limón y la rama de canela. Ralla un poco de nuez moscada sobre el arroz con leche para darle un toque aromático. Sirve el arroz con leche caliente o déjalo enfriar antes de servir, según tu preferencia. ¡Disfruta de tu arroz con leche con un toque especial de limón, canela y nuez moscada! 🍚🍋🪵✨️",
    },
    {
      id: "56",
      title: "Queque de manzana",
      image: require("../assets/arroz.jpg"),
      type: "Fit",
      ingredientes:
        "150gr de harina de avena - 2 cditas de polvo para hornear - 2 cditas de edulcorante - 2 cdas de aceite de oliva - 2 cditas de canela - 25 gr de coco (opcional) - 3 huevos - 10 cdas de agua para aligerar la preparación, 2 Manzanas Rojas, 50gr de pasas de uva (opcional)",
      receta:
        "En una licuadora, licuamos todos los ingredientes a excepción de la manzana y de las pasas. En un recipente mezclamos la mezcla y le incluimos las manzanas y las pasas. Llevamos a la escen. Espolvoreamos",
    },
    {
      id: "57",
      title: "Bizcocho de Frutos Rojos SIN GLUTEN! 🫐🍓🍓🫐💞💞💞",
      image: require("../assets/arroz.jpg"),
      type: "Dulce",
      ingredientes:
        "INGREDIENTES: 200 gr de Azúcar (o Eritritol para versión más saludable) - 6 huevos🥚🥚 - 200 ml de aceite - 1 pote de yogur natural🥛- jugo y ralladura de 1 limón 🍋 - 2 cdas de polvo para hornear - 400gr de harina de arroz - 200 gr de Frutos Rojos🫐🍓🫐🍓🫐🍓",
      receta:
        "Mezclar todos los ingredites con la batindora, primero los liquidos y luego los solidos, el harina de arroz es recomendable incluirlo en tres pasos. Luego picamos las frutillas y las incorporamos junto con los arananos a la mezcla. LLevamos a fuego en tu essen, a fuego corona  durante 50 a 60 minutos",
    },
    {
      id: "58",
      title: "Budín Matero de Moras Silvestres 🪻🪻 y Naranja 🍊🍊",
      image: require("../assets/arroz.jpg"),
      type: "Dulce",
      ingredientes:
        "3 huevos, 200 gr de azúcar, 150 cc de aceite neutro, 1 naranja (ralladura y jugo), 250 gr de harina, 1 cdita y 1/2 de polvo para hornear, 200 gr de Moras congeladas",
      receta:
        "Batir los huevos con el azucar y agregarle la rayadora con el juego de una naranja, aceite, harina el polvo para hornear y las moras congeladas. Llevamos 40 a 45 minutos a la essen. Desmoldamos, dejamos enfriar y disfrutamos!",
    },
    {
      id: "59",
      title: "Tarta de Espárragos y Trucha Ahumada 💞",
      image: require("../assets/arroz.jpg"),
      type: "Fit",
      ingredientes:
        "masa Integral: 250 gr de harina integral - 50ml de aceite de oliva - 2 cdas de semillas - c/n ml de agua - sal y pimienta. Relleno: 1 paquete de Espárragos - 3 huevos - 200ml de crema - 2cdas de queso crema - 2 cdas de queso rallado - Trucha Ahumada 3 trocitos ( si no tenes no es necesario) - sal, pimienta y nuez moscada",
      receta:
        "Para la masa simplemente unir todos los ingredientes hasta conseguir una masa homogénea y fácil de manejar. En una sarten cocinar los esparragos con aceite de oliva sal y pimienta, para el ligue mezclar el resto de los ingredientes en un recipiente. En una sartén essen, fonzar la masa, y volcarle la mezcla y los esparragos por encima. Cocinar por 35 minutos a fuego corona",
    },
    {
      id: "60",
      title: "Galletas de Jengibre y Canela💞💞💞🎄🎄🎄🎁🎁🎁",
      image: require("../assets/arroz.jpg"),
      type: "Dulce",
      ingredientes:
        "300 gr de Harina 0000 - 130 gr de Manteca - 120 gr de azúcar mascabo o negra - 50gr de Miel o Melaza - 1 cdita de canela - 1 cdita de Jengibre - 1/4 cdita de clavo de olor - 1/4 cdita de nuez moscada ",
      receta:
        "Ideales para las fiestas! Mezclamos manteca pomada con azucar negro, colocamos el huevo, agregamos una cucarada de miel, sal vainilla y mezclamos. Dentro del boul agregamos la harina y las especias. Formamos una maza uniforme mezclando. Envolvemos la masa en film y la llevamos a la heladera al menos dos horitas para cortar las galletitas mas facil. Ponemos en la essen a fuego corona y listo! Podes decorarlos con glasé o lo que quieras!",
    },
    {
      id: "61",
      title: "Bizcocho de cafe y cacao",
      image: require("../assets/arroz.jpg"),
      type: "Dulce",
      ingredientes:
        "2 huevos - 1 taza de leche (250cc) - 1/2 taza de café expreso (125cc) - 5 cdas de aceite (oliva o neutro) - 3 cdas de edulcorante apto cocción - 2 tazas de harina integral (280gr) - 1/2 taza de cacao amargo puro (70gr) - 2 cdas de polvo para hornear - 1 cdita de bicarbonato (realza el color) - 2 cdas de esencia de vainilla - pizca de sal",
      receta:
        "Mezclar los húmedos por un lado, preparamos un café expresso y lo agregamos a la preparación. Recomiendo el uso de productos de calidad, ponemos todo en tu essen con algunas nueces. Cocinar aprox por 40 minutos a fuego corona. ",
    },
    {
      id: "62",
      title: "Postre tipo Serenito 😱😱",
      image: require("../assets/arroz.jpg"),
      type: "Dulce",
      ingredientes:
        ".500cc de leche - 3 cdas de Maizena o Fécula de maíz (mezclada con un poco de leche de la receta) - 2 cditas de edulcorante - 2 cditas de esencia de vainilla - 2 cdas de DDL (opcional)",
      receta:
        "Calentas la leche y antes que hierva incluis la maizena y el edulcorante y mezclas hasta que nape la cuchara o no tenga sabor a maizena. Fuera del fuego le agregaas la vainlla y mezclas. Sacas del fuego y llevas a la heladera hasta que enfríe. Pásalo a un boul y ponele un film al contacto de la preparación para que no se le forme una película durita. Déjalo enfriar muy bien y antes de servirlo batilo para que quede más cremoso! ",
    },
    {
      id: "63",
      title: "Queque de manzana",
      image: require("../assets/arroz.jpg"),
      type: "Fit",
      ingredientes:
        "150gr de harina de avena - 2 cditas de polvo para hornear - 2 cditas de edulcorante - 2 cdas de aceite de oliva - 2 cditas de canela - 25 gr de coco (opcional) - 3 huevos - 10 cdas de agua para aligerar la preparación, 2 Manzanas Rojas, 50gr de pasas de uva (opcional)",
      receta:
        "En una licuadora, licuamos todos los ingredientes a excepción de la manzana y de las pasas. En un recipente mezclamos la mezcla y le incluimos las manzanas y las pasas. Llevamos a la escen. Espolvoreamos",
    },
    {
      id: "64",
      title: "Mermelada de Moras silvestres 🪻🪻🪻",
      image: require("../assets/arroz.jpg"),
      type: "Dulce",
      ingredientes: "1 kg de moras, 500 gr de azúcar, 1 limón (jugo)",
      receta:
        "Vas a mezclar todos los ingredientes y lo vas a cocinar 50 min a temperatura media. Hace la prueba del plato para darte cuenta la consistencia de la mermelada, si ves que esta muy liquida seguis la cocción. El azúcar y el limón actúan como conservantes (aparte el limón realza el color 💞 y no le aporta el sabor a limón) dura perfectamente 1 meses en la heladera. Le podes poner la mitad de azúcar, pero te va a durar 1 semana en la heladera. 😉 Los frascos de vidrio los vas a hervir unos 15 min junto con la tapa, los dejas enfriar y listo para trasvasar.",
    },
    {
      id: "65",
      title: "Budín de Limón 🍋tipo Starbucks 🤯🤩🤩",
      image: require("../assets/arroz.jpg"),
      type: "Dulce",
      ingredientes:
        "200 gr de azúcar - 1 ralladura de limón - 2 huevos grandes - 2 cdas de aceite neutro - 2 cdas de jugo de limón - 110 gr de manteca pomada - 5 gr de polvo para hornear - 187 gr de harina común - 125cc de leche - 1 cdita de sal",
      receta:
        "Te gusta ir a statbucks pero esta mas caro que comprar un departamento, no importa aca tenes la receta de su budín de limon. Mezclar el azucar y la rayadura de limon y trabajar 5 minutos. Una vez que está ma manteca pomada agregar el aceite y el juego de limon y mezclar. Luego agregar el resto de los ingredientes hasta que quede bien lisito y lo mandas a un sabarín. Agregarle glase de limón por encima!",
    },
  ];

  const Card = ({ title, image, type }) => {
    const handleCardPress = () => {
      navigation.navigate("RecetasDetail", {
        title,
        ingredientes: data.find((item) => item.title === title).ingredientes,
        receta: data.find((item) => item.title === title).receta,
      });
    };

    return (
      <TouchableOpacity style={styles.imageContainer} onPress={handleCardPress}>
        <Image style={styles.image} source={image} resizeMode="cover" />
        <Text style={styles.imageText}>{title}</Text>
        <Text style={styles.imageType}>{type}</Text>
      </TouchableOpacity>
    );
  };

  const handleFilter = (type) => {
    setFiltro(type);
  };

  const filteredData = filtro
    ? data.filter((item) => item.type === filtro)
    : data;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mis Recetas</Text>
      <View style={styles.filterContainer}>
        <Text style={styles.filterTitle}>Filtro:</Text>
        <TouchableOpacity
          style={[
            styles.filterButton,
            filtro === null && styles.filterButtonActive,
          ]}
          onPress={() => handleFilter(null)}
        >
          <Text
            style={[
              styles.filterButtonText,
              filtro === null && styles.filterButtonTextActive,
            ]}
          >
            Todos
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.filterButton,
            filtro === "Dulce" && styles.filterButtonActive,
          ]}
          onPress={() => handleFilter("Dulce")}
        >
          <Text
            style={[
              styles.filterButtonText,
              filtro === "Dulce" && styles.filterButtonTextActive,
            ]}
          >
            Dulces
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.filterButton,
            filtro === "Salado" && styles.filterButtonActive,
          ]}
          onPress={() => handleFilter("Salado")}
        >
          <Text
            style={[
              styles.filterButtonText,
              filtro === "Salado" && styles.filterButtonTextActive,
            ]}
          >
            Salados
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.filterButton,
            filtro === "Fit" && styles.filterButtonActive,
          ]}
          onPress={() => handleFilter("Fit")}
        >
          <Text
            style={[
              styles.filterButtonText,
              filtro === "Fit" && styles.filterButtonTextActive,
            ]}
          >
            Fit
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={styles.body}>
          {filteredData.map((item) => (
            <Card
              key={item.id}
              title={item.title}
              image={item.image}
              type={item.type}
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
  filterContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  filterTitle: {
    marginRight: 10,
    fontWeight: "bold",
  },
  filterButton: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: "#e0e0e0",
    marginRight: 10,
  },
  filterButtonText: {
    fontWeight: "bold",
  },
  filterButtonActive: {
    backgroundColor: "orange",
  },
  filterButtonTextActive: {
    color: "#fff",
  },
  body: {
    flex: 1,
    padding: 10,
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    width: "100%",
    height: 100,
    backgroundColor: "orange",
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 80,
    height: "100%",
    resizeMode: "cover",
  },
  imageText: {
    flex: 1,
    padding: 10,
    textAlign: "center",
    fontWeight: "bold",
  },
  imageType: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    color: "#fff",
    paddingHorizontal: 8,
    paddingVertical: 4,
    position: "absolute",
    bottom: 0,
    left: 0,
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 10,
  },
});

export default RecetasScreen;
