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
      image: require("../assets/pechugaconpapas.png"),
      type: "Salado",
      ingredientes:
        "1 Pollo Trozado en 16 partes - 4 Dientes de ajo - 1 Puñado de perejil picado - 200 cc de vino blanco - 200 cc de caldo de pollo o agua - 4 papas chicas - 2 cebollas grandes - 1 Cucharada de mostaza",
      receta:
        "Primero, trozamos el pollo en 16 partes y lo colocamos en el sartén de 24 cm. Luego, picamos 4 dientes de ajo y esparcimos sobre el pollo. Agregamos un puñado de perejil picado. A continuación, vertimos 200 cc de vino blanco y 200 cc de caldo de pollo o agua sobre el pollo. Luego, pelamos y cortamos en rodajas 4 papas chicas y 2 cebollas grandes. Distribuimos las papas y las cebollas alrededor del pollo en el cartón. Finalmente, agregamos 1 cucharada de mostaza sobre el pollo y las verduras. Cubre el cartón con papel de aluminio y hornea a 180°C durante aproximadamente 45 minutos o hasta que el pollo esté bien cocido.¡Disfruta de tus deliciosas pechugas de pollo cocinadas en el sartén de 24 cm con sabores irresistibles de ajo, perejil, vino blanco y mostaza!",
      instagramLink:
        "https://www.instagram.com/p/ClEAiMrr7KS/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
      id: "2",
      title: "Tarta de puerros de harina integral",
      image: require("../assets/tartapuerros.png"),
      type: "Salado",
      ingredientes:
        "Para la masa: 12 cucharadas de harina integral - una cucharadita de sal - una cucharadita de mix de semillas cuatro cucharadas soperas de aceite de oliva - agua cantidad necesaria - Para el relleno: 3 Huevos - 4 Cucharadas soperas de queso crema ligth - Sal a gusto - Pimienta a gusto - 1 cucharadita de ajo en polvo - fetas de queso crema ligth - 4 Puerros - 2 cebollas - champignones",
      receta:
        "Mesclamos en un bowl todos los ingredientes de la masa y mezclamos y unimos todo hasta que quede una masa firme. Aceitamos un sartén de 24 cm, a la masa cruda la llevamos a la pieza y la exparsimos por la base y las paredes. Para el rellenos agregamos en un bowl: 3 huevos, 4 cucharadas soperas de queso crema, sal, pimienta y ajo en polvo a gusto. Agregamos fetas de queso crema ligth, los puerros, las cebollas y los champis. Mezclamos e inclumos todos los ingredientes en crudo en la olla tapada. Cocinamos hasta que este la masa bien cocinada.",
      instagramLink:
        "https://www.instagram.com/reel/ClElIdUpM2K/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
      id: "3",
      title: "Panqueques proteicos (Ideal preentreno)",
      image: require("../assets/panquequesproteicos.png"),
      type: "Dulce",
      ingredientes:
        "4 cucharadas de avena, dos claras, un huevo, media banana, edulcorante",
      receta:
        "En la licuadora, combinamos todos los ingredientes y obtenemos una mezcla homogénea. Vertemos la mezcla en una sartén y cocinamos a fuego medio, asegurándonos de dorar ambos lados. Luego, cortamos la preparación en 4 partes y las apilamos. Se recomienda servir este delicioso plato con miel o mantequilla de maní, acompañado de rodajas de banana y arándanos, ya que estos ingredientes realzan el sabor de la receta. ¡Ahora solo queda disfrutar de esta sabrosa opción, ideal para el desayuno o como un saludable snack pre-entreno!",
    },
    {
      id: "4",
      title: "Pizza de avena",
      image: require("../assets/pizaavena.png"),
      type: "Salado",
      ingredientes:
        "Para la masa: 200 gramos de harina de avena, 1 cucharadita de sal, 1 cucharadita de polvo de hornear y 3 cucharaditas de aceite de oliva. Mezcla todos estos ingredientes en un tazón hasta obtener una masa homogénea. Para el relleno: salsa de tomate a gusto, una lata de atún y 4 fetas de queso cremoso light. Agrega la salsa de tomate sobre la masa extendida, luego distribuye el atún sobre la salsa y coloca las fetas de queso cremoso. Añade especias a gusto para condimentar el relleno.",
      receta:
        "En un tazón, mezclamos harina, sal, agua y aceite. Añadimos la cantidad necesaria de agua gradualmente hasta lograr una masa líquida. Una vez alcanzada la consistencia adecuada, calentamos una bifera y la untamos con aceite. Cocinamos la masa a fuego medio durante aproximadamente 20 minutos hasta que la superficie esté opaca, indicando que está lista. Para la salsa, licuamos tomates y sazonamos con sal. Cocinamos la salsa y la vertemos sobre la pizza junto con atún, fetas de queso y cebolla verde. Desmoldamos y ¡listo para disfrutar!",
      instagramLink:
        "https://www.instagram.com/reel/ClJfuw6AtGQ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
      id: "5",
      title: "Bizcocho de arándanos. Sin gluten",
      image: require("../assets/bizcoarandanos.png"),
      type: "Dulce",
      ingredientes:
        "200 g de premezcla sin gluten - 200 g de azucar mascabo - 6 huevos - 2 cucharaditas de polvo de hornear - ralladura de un limón grande - 200 g de arándanos.",
      receta:
        "En un tazón, batimos 6 huevos con 200g de azúcar, luego incorporamos la premezcla sin gluten y agregamos polvo de hornear hasta obtener una mezcla sin grumos (requerirá un poco de esfuerzo). Rallamos la cáscara de un limón grande, añadimos arándanos y mezclamos bien. En una sartén fría, agregamos una cucharada de aceite de coco. Encendemos la hornalla al mínimo y cocinamos la mezcla hasta que el bizcocho esté listo; sabremos que está hecho cuando al insertar un palillo, este salga seco. A fuego medio, el proceso tarda aproximadamente 45 minutos. Ideal para disfrutar en una tarde de domingo lluviosa y con fútbol.",
      instagramLink:
        "https://www.instagram.com/reel/ClKTNP3gzq6/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
      id: "6",
      title: "Tortilla de papas (todo crudo)",
      image: require("../assets/tortillapapas.png"),
      type: "Salado",
      ingredientes:
        "5 huevos- 3 papas - 1/2 morrón - 1 cebolla morada - 1 ajo - Tomates deshidratados - Sal y pimienta",
      receta:
        "Recomendado: Utilizar una sartén Essen de 24 cm (puedes ver el video de preparación en mi perfil). Mezclamos todos los ingredientes en un tazón. Vertemos la mezcla en la sartén Essen y cocinamos a fuego medio hasta que esté bien cocido. Volteamos si se desea dorar ambos lados (no es necesario). Si utilizamos una sartén común, pre-cocinamos las verduras antes de agregarlas a la mezcla.",
      instagramLink:
        "https://www.instagram.com/reel/ClNAuhLAsc2/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
      id: "7",
      title: "Lasaña de berenjenas",
      image: require("../assets/lasaberen.png"),
      type: "Salado",
      ingredientes:
        "Pieza: sarten 24 cm, a fuego corona hasta terminar la cocción -2 berenjenas - 500 gr de ricota light - 1 huevo -albahaca c/n -3 fetas de queso cremoso light - Salsa de tomate - Sal y pimienta",
      receta:
        "Ponemos las berenjenas en sal sobre papel absorbente. Luego, en un tazón, mezclamos albahaca, nueces, salpimentamos, ricota, ralladura de queso y un huevo. En una sartén, alternamos capas de berenjenas y la mezcla preparada. Cubrimos la capa superior con salsa de tomate y queso. Puedes encontrar el video de la preparación en mi Instagram.",
      instagramLink:
        "https://www.instagram.com/reel/ClPGfr9p368/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
      id: "8",
      title: "Pinchos de pollo con salsa Teriyaki",
      image: require("../assets/pinchoteri.png"),
      type: "Salado",
      ingredientes:
        " 2 pechugas de pollo - 1 morrón rojo -1 morrón amarillo - 1 cebolla morada - Salsa teriyaki - Jugo de 1 naranja - Ajo en polvo - Jengibre en polvo - Sal y pimienta",
      receta:
        "Cortamos una o dos pechugas de pollo, dependiendo de la cantidad de personas, en cuadraditos medianos. Agregamos salsa teriyaki, 1 cucharada de ajo en polvo, 1 de jengibre, sal y pimienta al gusto. Opcionalmente, podemos incorporar jugo de naranja. Dejamos la mezcla en la heladera durante al menos una hora. Luego, ensartamos los pinchos intercalando el pollo con trozos de pimiento morrón y cebolla. Utilizamos una bifera precalentada por no más de 2 minutos y recomendamos pincelar con aceite de oliva.",
      instagramLink:
        "https://www.instagram.com/reel/ClUl7ClAwRQ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
      id: "9",
      title: "Hamburguesas de soja con guarnición (vegana/gluten free)",
      image: require("../assets/burguervegana.png"),
      type: "Fit",
      ingredientes:
        "125 g de soja texturizada (lavar la soja texturizada, dejar con agua caliente 20 min y colar ) - 1/2 cebolla - 1/2 morrón rojo - 4 cdas de harina de arroz - 1/2 taza de arroz yamani - 2 cdas de salsa de soja - Ajo en polvo a gusto - Sal y pimienta",
      receta:
        "Incluimos en un tazón soja texturizada, previamente colada y remojada durante unos 20 minutos en agua caliente. Añadimos las verduras, el arroz y los condimentos (harina de arroz, salsa de soja, ajo en polvo, sal, pimienta). Mezclamos y trituramos todo hasta obtener una pasta consistente. Prendemos la hornalla y cocinamos en una bifera. Ideal para acompañar con verduras asadas.",
      instagramLink:
        "https://www.instagram.com/reel/ClbuhvVpsOy/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
      id: "10",
      title: "Hamburguesas de pollo",
      image: require("../assets/burgerpollo.png"),
      type: "Salado",
      ingredientes:
        "2 pechugas de pollo (procesadas) - 1/2 morrón - 1 cebolla chica - 2 cdas de jugo de limón - 1 cdita ajo en polvo - 1/3 taza de queso rallado - Sal y pimienta",
      receta:
        "Trituramos el pollo y mezclamos con verduras, jugo de limón, queso sardo rayado, ajo en polvo y pimienta recién molida, combinando hasta lograr una mezcla homogénea. Prendemos la bifera y formamos las burgers directamente sobre ella. Acompañamos con unas deliciosas verduras grilladas.",
      instagramLink:
        "https://www.instagram.com/reel/Cl9Nk94ADt8/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
      id: "11",
      title: "Lasaña de papas y carne picada",
      image: require("../assets/lasana.png"),
      type: "Salado",
      ingredientes:
        "3 papas grandes laminadas en crudo - 1 morrón - 2 cebollas - 2 dientes de ajo - 1 taza de tomate triturado - 1/2 kg de carne picada - trozos de queso light - condimentos los que más les guste - ciboulette o perejil para emplatar",
      receta:
        "Para preparar la lasaña, cocinamos cebolla, morrón y ajo, y luego añadimos la carne picada. Dejamos cocinar hasta que la carne esté bien cocida y agregamos una taza de puré de tomate, sal, pimienta, pimentón, ajo en polvo, nuez moscada, ají y perejil. Mezclamos y dejamos cocinar. Una vez que todo esté bien cocido, vaciamos la sartén y en ella alternamos capas de papa, carne y queso. Cuando las papas estén cocidas, podemos emplatar. Se puede acompañar con cebolla de verdeo.",
      instagramLink:
        "https://www.instagram.com/reel/CluhSYIAYgn/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
      id: "12",
      title: "Invertida de Peras en la Essen (gluten free)",
      image: require("../assets/invertidaperas.png"),
      type: "Dulce",
      ingredientes:
        "Sarten 24 cm, cocción fuego corona o mínimo hasta terminar cocción ( introducir un palillo y si sale seco esta cocida) - 200 gr de premezcla sin gluten - 200 gr de azúcar orgánica - 5 huevos grandes o 6 medianos - 1 cdita de polvo de hornear - 1 cdita de extracto de vainilla - 2 peras - azúcar blanca c/n",
      receta:
        "En un tazón, mezclamos 5 huevos con 200 gramos de azúcar orgánica, 200 gramos de premezcla sin gluten, 1 cucharadita de polvo de hornear y esencia de vainilla. Luego, preparamos un caramelo con azúcar; una vez listo, colocamos las peras sobre el caramelo y vertemos la mezcla sobre las peras.",
      instagramLink:
        "https://www.instagram.com/reel/ClkDU-cA6Tt/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
      id: "13",
      title: "Budín de chocolate",
      image: require("../assets/budinchoco.png"),
      type: "Fit",
      ingredientes:
        " 1/2 taza de chocolate 75% o mas (derretido) - 1 taza de harina de avena - 1/4 taza de coco rallado - 1 cda polvo leudante - 4 huevos - 1 banana pisada - 4 cdas de aceite de coco o oliva - 1/4 taza de leche de almendras - 2 cdas grandes de endulzante liquido - 1 cda de esencia de vainilla - 1 cdita de vinagre - 1 cdita bicarbonato - 1 pizca de sal",
      receta:
        "Derretimos el chocolate en una olla y lo volcamos en un tazón. En otro recipiente, mezclamos el huevo, la harina y el resto de los ingredientes, luego combinamos ambas mezclas. Cocinamos la preparación, añadiendo algunas nueces por encima. Desmoldamos para servir.",
      instagramLink:
        "https://www.instagram.com/reel/CmaDLWMgxdv/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
      id: "14",
      title: "Entraña con papas aplastadas y chimichurri",
      image: require("../assets/entrana.png"),
      type: "Salado",
      ingredientes: "2 entrañas - 2 papas medianas y tu mejor chimi 😉",
      receta:
        "Ponemos las entrañas en la bifera y sazonamos con sal y pimienta. Cocinamos papas aplastadas en la bifera y las condimentamos con chimichurri.",
      instagramLink:
        "https://www.instagram.com/reel/CmiJwYEgO4D/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
      id: "15",
      title: "Ojo de bife con láminas de coliflor grilladas",
      image: require("../assets/ojodebife.png"),
      type: "Salado",
      ingredientes:
        "Coliflor, ojo de bife, aceite de oliva, pimento, ajo en polvo y nuez moscada",
      receta:
        "Cortar el coliflor en láminas, mezclar el aceite de oliva con los condimentos y pincelar tanto la carne como el coliflor. Grillar y cocinar la carne. Se los re prometo que queda delicioso.",
      instagramLink:
        "https://www.instagram.com/reel/CnDh2FCgzDS/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
      id: "16",
      title: "Pancakes",
      image: require("../assets/pancaque.png"),
      type: "Fit",
      ingredientes:
        "Cakes: 50 gr de avena - 1 banana chica - 2 huevos y 1 clara - edulcorante a gusto. Para arriba - Arándanos a gusto - Miel a gusto (no exagerar y que sea orgánica y pura)",
      receta:
        "Mezclamos todos los ingredientes en una licuadora y cocinamos en una sartén. Una receta simple y deliciosa, ideal para un desayuno de campeones.",
      instagramLink:
        "https://www.instagram.com/p/CnZjdg_L5D0/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
      id: "17",
      title: "Carrot Cake Fit 💪",
      image: require("../assets/carrotcake.png"),
      type: "Fit",
      ingredientes:
        "rajadura de 2 zanahorias medianas - rajadura de una naranja - 2 huevos - 100 ml de aceite de oliva - 1/2 taza de azúcar orgánica o mascabo - 1 taza de harina integral - 1 cdita de polvo para hornear - 1 cdita de bicarbonato de sodio - nuez moscada a gusto - canela a gusto - 100 gr de frutas (use 50 de nueces picadas y 50 de pasas sin semillas). Frosting: 2 cdas de queso light tipo Finlandia - 1 cdita de edulcorante - 1 cdita aceite de coco - 1 cda de coco rallado ",
      receta:
        "Batimos zanahoria rallada, huevos y esencia de vainilla junto con la ralladura de naranja (o limón). Añadimos harina integral, bicarbonato, polvo para hornear, canela y nuez moscada. Incorporamos nueces y pasas sin semillas, luego llevamos la mezcla a la cacerola. Para el frosting, mezclamos queso crema, edulcorante líquido, aceite de coco y coco rallado. Reservamos la mezcla en la heladera. Desmoldamos el pastel de zanahoria y agregamos el frosting por encima.",
      instagramLink:
        "https://www.instagram.com/reel/CnWyh-kgLu3/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
      id: "18",
      title: "Torre de panqueques de acelga o espinaca",
      image: require("../assets/torre.png"),
      type: "Salado",
      ingredientes:
        "Para los panqueques licuar: 4 huevos - 3 cdas de harina de arroz - 3 cdas de leche de almendras - 1/2 paquete de acelga cocida o espinaca - 1 cda de aceite de oliva - sal y pimienta. Topin y salsa: lechuga - tomate - huevos duros rallado - palmitos - queso feta light - jamón natural - queso crema light con ciboulette, sal y pimientaSarten 24 cm, cocción fuego corona o mínimo hasta terminar cocción ( introducir un palillo y si sale seco esta cocida) - 200 gr de premezcla sin gluten - 200 gr de azúcar orgánica - 5 huevos grandes o 6 medianos - 1 cdita de polvo de hornear - 1 cdita de extracto de vainilla - 2 peras - azúcar blanca c/n",
      receta:
        "Primero, preparamos los panqueques. Luego, procedemos a intercalarlos con tomates, palmitos, jamón y queso.",
      instagramLink:
        "https://www.instagram.com/reel/CmQQtszA9uw/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
      id: "19",
      title: "Tortilla mixta de papa y boñato",
      image: require("../assets/tortillapapaboniato.png"),
      type: "Salado",
      ingredientes:
        "1 papa grande rallada - 1 boñato grande rallado - 1/2 cebolla - 1/2 morrón - 2 a 4 huevos hasta cubrir todas las verduras - queso feta port salud light - sal, pimienta, ají molido y pimentón",
      receta:
        "Batimos 3 huevos grandes y agregamos ralladura de boniato, papa, cebolla y morrón. Condimentamos a gusto, mezclamos todo y lo llevamos a la sartén (recomendamos usar la Flip 2.0). Sugiero colocar en el centro de la mezcla fetas de queso Port Salut. Cocinamos durante 20 minutos en ambos lados.",
      instagramLink:
        "https://www.instagram.com/reel/Cnn3YJuAnm2/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
      id: "20",
      title: "Cockies de avena",
      image: require("../assets/cockiesavena.png"),
      type: "Fit",
      ingredientes:
        "1 huevo, 50 gr de azúcar mascabo, 30 gr de aceite de coco (si no tienen de Oliva), esencia de vainilla, 1 cdta de polvo para hornear, 100 gr de avena, 40 gr de harina integral ",
      receta:
        "Mezclamos el azúcar, un huevo, 30 gramos de aceite de coco y vainilla hasta integrar, luego agregamos polvo para hornear, harina integral y aceite de coco. Llevamos la mezcla a la heladera durante 20 minutos para que tome cuerpo, formamos bolitas pequeñas, las aplastamos y decoramos la superficie con chocolate, semillas o frutos secos. Cocinamos a fuego medio durante 10 o 15 minutos.",
      instagramLink:
        "https://www.instagram.com/reel/Cn24UzKggBb/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
      id: "21",
      title: "Bizcocho de Harina integral",
      image: require("../assets/bizinte.png"),
      type: "Fit",
      ingredientes:
        "5 huevos - 150 gr de azúcar orgánica - 170 gr de harina integral - esencia de vainilla c/n - 2 manzanas verdes fileteadas ",
      receta: "",
      instagramLink:
        "https://www.instagram.com/reel/CnrxabUgKX0/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
      id: "22",
      title: "Pan Dulce 🎅🎅🎁🎄🎄🍾🥂",
      image: require("../assets/pandulce.png"),
      type: "Dulce",
      ingredientes:
        "Cacerola de 24cm a fuego corona hasta terminar cocción (40 min aprox), clavas el famoso palito y tiene que salir seco. No se va a dorar la parte de arriba así que no te guíes por el color. Esponja: (que duplique el volumen aprox 30 minutos).100gr Harina 0000.40gr Levadura fresca.70cc de leche a temperatura ambiente.1 cda de azucar - Masa:.600gr Harina 0000.5 huevos.150gr de azúcar.1 pizca de sal.1 cda de Extracto de Malta.ralladura de 1 limón y 1 naranja. esencia de Azahar, almendras y vainilla. 200 gr de manteca pomada - Frutas: .150 gr de pasas (remojadas la noche anterior con coñac o whisky).150 gr de almendras cortadas groseramente. 150 gr de nueces cortadas groseramente .150 gr de frutas glaseadas - Glasé Real:.1 clara de huevo .2 cdas de jugo de limón .200gr de azúcar impalpable",
      receta: "Podes ver la preparación directamente en instagram!",
      instagramLink:
        "https://www.instagram.com/reel/C0xVv6nsHyK/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
      id: "23",
      title: "Invertida de ciruelas",
      image: require("../assets/ciruela.png"),
      type: "Fit",
      ingredientes:
        "3 huevos - 1/2 taza de aceite de oliva - Esencia de vainilla - Jugo de 1 una naranja - 1 cda sopera de edulcorante - 1 y 1/2 taza de harina de arroz - 50g de almendras procesadas (opcional) - 6 ciruelas chicas aprox - Miel cantidad necesaria",
      receta:
        "Apta para celíacos. Batimos huevos, aceite y una cucharada de vainilla. Agregamos edulcorante, jugo de naranja, harina de almendra y harina de arroz. Colocamos la preparación en la sartén Essen y dejamos cocinar aproximadamente 30 a 45 minutos. Mientras aún esté caliente, pintamos la preparación con miel. Dejamos enfriar y desmoldamos.",
      instagramLink:
        "https://www.instagram.com/reel/CoAdOalgnet/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
      id: "24",
      title: "Cheesecake de frutos rojos. FIT",
      image: require("../assets/cheescakefr.png"),
      type: "Fit",
      ingredientes:
        "Base: 200gr harina de almendras - 10 sobrecitos de stevia - 3 cdas aceite de coco - 1 cdita esencia de vainilla. Relleno: 500 gr de ricota baja en calorías - 300 gr de queso crema light - 3 huevos - 10 sobrecitos de stevia - 1 cdita de esencia de vainilla. Cobertura: Mermelada de Frutos rojos light - Frutos rojos lo que quieras 💖",
      receta:
        "Para enamorar, comenzamos mezclando edulcorante con harina de almendras, aceite de coco y una cucharada de vainilla para hacer la base. Para el relleno, combinamos ricota, queso Philadelphia o Finlandia, huevos y vainilla, endulzamos e integramos los ingredientes. Vertemos la base y sobre ella colocamos la mezcla. Desmoldamos y utilizamos frutos rojos y mermelada para decorar. Recomiendo el uso de productos bajos en calorías.",
      instagramLink:
        "https://www.instagram.com/reel/Codt17NA9s3/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
      id: "25",
      title: "Pan de acelga",
      image: require("../assets/pandeacelga.png"),
      type: "Fit",
      ingredientes:
        "100 gr de acelga - 4 cdas de harina de garbanzos - 1 cda de polvo para hornear - 3 huevos - 1 clara - Sal y Pimienta - Semillas c/n",
      receta:
        "Una excelente opción para persuadir a los niños a incorporar acelga en su dieta, además de ser libre de gluten. Mezclamos un puñado de acelga con huevos, polvo para hornear, sal, pimienta y garbanzos. Formamos un pan con la masa y horneamos. También podemos cocinarlo directamente en una bifera Essen, colocando el pan a un lado.",
      instagramLink:
        "https://www.instagram.com/reel/CoqKnohAR4T/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
      id: "26",
      title: "Scones fit de queso",
      image: require("../assets/scones.png"),
      type: "Fit",
      ingredientes:
        "150gr de queso rallado - 3 tazas de avena - 1/2 taza de aceite de oliva - 1/2 taza de agua - 2 huevos - 1 cda de polvo para hornear (grande) - 1 cda de sal (grande) - pimienta a gusto - Harina de arroz c/n hasta formar la masa y los scones con facilidad. ",
      receta:
        "Rallamos el queso y lo mezclamos con avena, aceite de avena, sal, polvo para hornear, pimienta y huevos. Unimos todos los ingredientes y, con la ayuda de harina de arroz, formamos una masa bien compacta. Luego, damos forma a pequeños scones.",
      instagramLink:
        "https://www.instagram.com/reel/Co2oTndgTX9/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
      id: "27",
      title: "Snack Fit de naranja y chocolate",
      image: require("../assets/choconar.png"),
      type: "Fit",
      ingredientes:
        "4 huevos - 50 gr de aceite de oliva - 50 gr de Eritritol (o stevia) - 140 ml jugo de naranja - Ralladura de 2 naranjas - 150 gr de harina de avena - 60 gr de harina de almendras - 10 gr polvo para hornear - Chocolate 80% una tambleta",
      receta:
        "Ideal para acompañar el café. Mezclamos el aceite con los 4 huevos, agregamos ralladura de naranja y jugo de naranja exprimido, así como el endulzante. Después de mezclar las harinas y el polvo para hornear, incorporamos todo a la preparación. Vertemos en la sartén Flip Essen y cocinamos. Una vez listo, bañamos la parte superior con chocolate al 70% y dejamos enfriar. Luego cortamos en pedacitos. Consejo: antes de que el chocolate se endurezca por completo, realicen los cortes según su preferencia, rallen un poco de naranja por encima y dejen enfriar completamente. Debe endurecer por completo. 🤤🤤🤤",
      instagramLink:
        "https://www.instagram.com/reel/CpGVGBgg-JG/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
      id: "28",
      title: "Invertida de manzanas rojas",
      image: require("../assets/invertmanz.png"),
      type: "Fit",
      ingredientes:
        "2 huevos🥚 - 1 manzana rallada🍎 - 100 gr azúcar mascabo - 4 cdas de leche vegetal🥛 - 6 cdas de aceite🍵 - 100gr de avena instantánea 🍚 - 150gr de harina integral 🍚 - 1 cdita colmada de polvo para hornear - 2 manzanas fileteadas gruesas🍎🍎",
      receta:
        "Usamos sartén essen 24 cm. Mezclamos 🥚, azúcar, aceite de oliva, leche de almendras, ¡mezclamos todo hasta que espume bien! 💪 Agregamos avena instantánea y ralladura de una manzana que aportará humedad al bizcocho, seguimos con harina integral, una cucharada de polvo de hornear. 🍎 Mezclamos y preparamos la sartén essen de 24 con aceite de oliva o manteca. Agregamos azúcar en la base y acomodamos las manzanas cortadas. ¡Volcamos por encima la mezcla y cocinamos a fuego corona! 🔥 Desmoldar en caliente porque sino se va a quemar a endurecer el caramelo! 🍯",
      instagramLink:
        "https://www.instagram.com/reel/CpTlQmzA21w/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
      id: "29",
      title: "Tarta integral fungi 🍄",
      image: require("../assets/fungi.png"),
      type: "Fit",
      ingredientes:
        "Masa: 400gr de harina integral, 6 cdas de aceite de oliva, 200 ml de agua, Sal y pimienta. Relleno: 250gr de hongos portobellos, 250gr de hongos, 1 cebolla morada, 1 cebolla blanca, 2 cebollas de verdeo chicas, 4 fetas de queso blando en cubos, 3 huevos, Sal, pimienta, ajo en polvo, jengibre en polvo, orégano y nuez moscada.",
      receta:
        "Masa: harina integral, aceite y agua. 💧 Unimos todo y hacemos un bollito, dejamos descansar la masa para que la harina integral absorba el agua. Luego, cortamos las verduras y los hongos en pedacitos. Salteamos las cebollas hasta casi caramelizar, luego ponemos los hongos cortados, dejamos enfriar la preparación y agregamos cuadraditos de queso a elección. Agregamos 3 huevos y condimentamos con tus condimentos preferidos (yo uso jengibre y pimienta). Estiramos la masa en la sartén y volcamos por encima la preparación. ¡Llevamos a fuego corona la preparación! 🔥🍳",
      instagramLink:
        "https://www.instagram.com/reel/CpgY5m1AQmQ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
      id: "30",
      title: "Tarta rápida de atún 🐟",
      image: require("../assets/atun.png"),
      type: "Salado",
      ingredientes:
        "Masa: 200gr de harina integral, 4 cdas de aceite de oliva, 100ml de agua, Sal y pimienta. Relleno: 1 lata de atún, 3 fetas de queso por salud light en cubos, 1/4 morrón colorado, 1 cebolla chica, 1 tomate perita, 2 huevos, Sal y pimienta (y todo lo que les guste)",
      receta:
        "Masa: harina integral, aceite y agua. 💧 Unimos todo y hacemos un bollito, dejamos descansar la masa para que la harina integral absorba el agua. Luego, en la multi picamos cebolla, morrón y tomate. 🍅 Agregamos en un bowl el atún con la mezcla, añadimos queso Port Salut y huevos. 🧀🥚 Salpimentamos a gusto. Ponemos en la sartén la masa y por encima volcamos la mezcla. Dejamos cocinar a fuego corona por 50 minutos. ¡Listo para disfrutar! 🔥🍳",
      instagramLink:
        "https://www.instagram.com/reel/Cpp_dp_AwHf/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
      id: "31",
      title: "Tarta de zapallitos y choclo",
      image: require("../assets/choclo.png"),
      type: "Salado",
      ingredientes:
        "Masa: 300gr de harina integral, 6 cucharadas de aceite de oliva, 60ml de agua (más o menos depende de la harina), Sal, pimienta y mix de semillas a gusto. Relleno: 4 zapallitos (cocidos), 2 choclos chicos (cocidos y cortar los granos), 1 cebolla grande, 2 dientes de ajo, 3 huevos, Cubos de queso fresco a gusto, Sal, pimienta y orégano.",
      receta:
        "Masa: harina integral, aceite y agua. 💧 Unimos todo y hacemos un bollito, dejamos descansar la masa para que la harina integral absorba el agua. Con una vaporera cocinamos el zapallo. 🎃 En una multi picamos la cebolla y el ajo. Estiramos la masa en una sartén Essen. Cortamos los zapallitos y los granos de choclo, añadimos cebolla, salpimentamos. Mezclamos todo y volcamos los ingredientes en la sartén sobre la masa. ¡Dejamos cocinar de 40 a 50 minutos! 🔥🍳",
      instagramLink:
        "https://www.instagram.com/reel/Cp8dhwBgNqR/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
      id: "32",
      title: "Flan de coco",
      image: require("../assets/coco.png"),
      type: "Dulce",
      ingredientes:
        "5 huevos🥚🥚, 1 lata de leche condensada descremado, 2 medidas iguales de agua (misma lata), 1 cda sopera de Esencia de vainilla, 100gr de coco rallado 🥥. Caramelo: 150gr de azúcar común, a fuego lento y no tocar hasta que vean el color característico del caramelo en los bordes del savarin.",
      receta:
        "Sobre savarín o budinera, hacer un caramelo. 🍮 En un bowl, mezclar huevos, leche condensada, dos medidas de agua, vainilla y combinar con coco rayado. Si queremos agujeritos, batir. Volcar la preparación encima del caramelo en la budinera. 🥥🥚 ¡Listo para disfrutar! 🎉",
      instagramLink:
        "https://www.instagram.com/reel/CqRCEfrg6Bz/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
      id: "33",
      title: "Niños envueltos",
      image: require("../assets/ninoenvuelto.png"),
      type: "Salado",
      ingredientes:
        "300gr de carne picada, 200gr de arroz común (se pone en crudo y lavado), 1 repollo grande, 1 cebolla grande, 2 tomates peritas, 1 morrón colorado, 2 dientes de ajo, Un puñado de albahaca fresca, Sal, pimienta, ají molido. Vinagreta: Jugo de 2 limones, Aceite de oliva, Sal y pimienta.",
      receta:
        "En una vaporera, cocinar hojas de repollo. 🥬 Por otra parte, en un bowl mezclar carne picada, morrón, tomate, un diente de ajo, cebolla y arroz en crudo. Con las hojas ya frías, rellenamos los repollos haciendo paquetitos. Los ponemos en la vaporera nuevamente y cocinamos de 45 a 50 minutos. Verificamos que los 'niños revueltos' estén cocinados, sacando algún granito de arroz; una vez cocinado el arroz, ¡ya están listos! Hacemos una vinagreta con limón y los pintamos por encima. 🍋🍲 ¡A disfrutar!",
      instagramLink:
        "https://www.instagram.com/reel/CqgcfF-A2op/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
      id: "34",
      title: "Chupín de pescado y papas",
      image: require("../assets/chupin.png"),
      type: "Salado",
      ingredientes:
        "2 cebollas medianas🧅, 1 morrón, 2 papas medianas 🥔, 6 filet de merluza 🐟🐟🐟, C/N de Jugo de limón 🍋, 2 dientes de ajo🧄, 2 latas de puré de tomates, 1 vaso de agua, 1 vaso de vino blanco🍾, Sal, pimienta, orégano, ají molido, pimentón, Perejil 🫶, C/N de aceite de oliva (para rehogar).",
      receta:
        "A los filetes de merluza los metemos en la heladera con jugo de limón. 🍋 Picamos la papa, la cebolla y los morrones en rodajas de 7mm; tener en cuenta el grosor para calcular el tiempo de cocción. Picamos ajo y salteamos todo en un sartén. Agregamos dos latas de puré de tomate y el vino blanco, condimentamos a gusto la mezcla. Dejamos hervir. Hacemos arrolladitos con el pescado pinchando con un pinche, agregamos la papa intercalándola entre el pescado. Una vez cocinada la papa, ¡está lista la comida! 🐟🥔 ¡Buen provecho!",
      instagramLink:
        "https://www.instagram.com/reel/CqwCUfDgQtG/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
      id: "35",
      title: "Salteado de vegetales, pollo y fideos 🍳",
      image: require("../assets/salteado.png"),
      type: "Salado",
      ingredientes:
        "200gr de fideos de arroz, 1 zanahoria, 1 cebolla morada, 1 zucchini, 2 tomates peritas (sin semillas), 1 morrón rojo, 1 morrón verde, 1 pechuga de pollo grande, Sal, pimienta y mix oriental, Salsa de soja, Salsa de ostras.",
      receta:
        "Picamos todas las verduras y el pollo en juliana. Hervimos agua y cocinamos los fideos de arroz. Agregamos primero el pollo a un wok y lo salteamos. Lo retiramos y seguimos con las verduras. Una vez cocinadas, agregamos el pollo y luego los fideos de arroz. Añadimos salsa de ostras, hojas y condimentos a gusto (recomiendo condimentos orientales). 🍜 ¡Listo para disfrutar de este delicioso plato asiático!",
      instagramLink:
        "https://www.instagram.com/reel/CrEX-wvgpMp/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
      id: "36",
      title:
        "Tortilla mixta todo en crudo 🤤🤤🤤 (conserva todo los nutrientes)",
      image: require("../assets/tortillapapas.png"),
      type: "Fit",
      ingredientes:
        "1 papas grande o 2 medianas, 1 boniato grande o 2 medianos, 5 a 6 huevos dependiendo el tamaño, Jamos cocido natural c/n, Queso muzzarella c/n, Medio morrón colorado, 1 cebolla morada, Sal y pimienta, Ajo en polvo, Nuez moscada, Nuez moscada, Orégano, Paprika",
      receta:
        "Cortamos las papas, las cebollas, el boniato y el morrón. Unimos todo con los condimentos y los 5 huevos. En una sartén de 24 cm, volcamos la mezcla intercalando fetas de queso y jamón. Terminamos de cubrir con la mezcla y dejamos cocinar durante 50 minutos en sartén Essen. Recomendamos dar vuelta la tortilla cuando esté lista y dorar del otro lado. 🍳 ¡Una deliciosa tortilla lista para disfrutar!",
    },
    {
      id: "37",
      title: "Osobuco braseado con pure mixto 🍷🥘🍖💞",
      image: require("../assets/osobuco.png"),
      type: "Salado",
      ingredientes:
        "Receta: 3 rodajas de osobuco de 4 cm de grosor, 4 cebollas grandes, 2 zanahorias, 2 puerros, 3 ramas de apio, 2 estrellas de anís, Romero fresco 3 ramas, Tomillo fresco 3 ramas, Piel de media naranja, 4 dientes de ajo grandes, 500ml de vino blanco, 500ml de caldo de verduras, Rama de canela, Sal y pimienta, 400gr de papas, 400gr de calabaza, Aceite de oliva c/n.",
      receta:
        "Cortamos las verduras. Condimentamos los medallones y sellamos con harina, sal y pimienta. Luego, en un plato, agregamos tomillo y rodajitas de piel de naranja. En la sartén donde sellamos el osobuco, agregamos las verduras y salpimentamos. Podemos añadir una rama de canela y anís. Llevamos todo a la sartén de 24 cm donde vamos a cocinar todos los productos. Agregamos medio litro de caldo de verdura y vino blanco. Dejamos cocinar durante 3 horas. Mientras tanto, hacemos un puré de zapallo y papas que podemos condimentar a gusto. Lo reservamos hasta emplatar. Cuando ya esté el braseado, en una cacerola, le sacamos el jugo y lo reducimos con una cucharada de maicena. Para emplatar, ponemos el puré y encima el osobuco, y por encima volcamos la reducción. Comentario del programador de esta app: ¡Soy el programador de la app y de todas las recetas, esta es la que más me gustó! ¡Muy recomendada! 🍽️👨‍💻",
      instagramLink:
        "https://www.instagram.com/reel/Crqfe7tg2zC/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
      id: "38",
      title: "Budín de chocolate y banana 🍫🍌",
      image: require("../assets/budinchoco1.png"),
      type: "Fit",
      ingredientes:
        "Receta: 4 bananas maduras (y 1 más para decorar), 60ml de miel, 90ml de aceite neutro, 4 huevos, 1 cda de esencia de vainilla, 1 cdita de sal, 120gr de harina de avena, 50gr de harina de almendras (o misma de avena), 60gr de cacao amargo (puro de calidad), 2 cdas de polvo para hornear, 100gr de chips de chocolate amargo.",
      receta:
        "¡Sin harinas refinadas! Batimos los ingredientes húmedos y luego agregamos los ingredientes secos. Incorporamos chips de chocolate. Aceitamos el savarín y añadimos la preparación. Agregamos una banana cortada en tiras a la mitad. Espolvoreamos chips de chocolate por encima y azúcar a media cocción. 🍌🍫 ¡Listo para disfrutar este delicioso y saludable savarín!",
      instagramLink:
        "https://www.instagram.com/reel/Cr6ia_jgdET/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
      id: "39",
      title: "Pastel de Pollo y Boñato 🍗🍗🍠🍠",
      image: require("../assets/pastelpapaboniato.png"),
      type: "Salado",
      ingredientes:
        "Receta: Marinada de pollo🍗 con 2 pechugas de pollo, 2 cdas de queso crema, 2 cdas de barbacoa, Sal, pimienta, perejil, orégano, jengibre en polvo. Acompañado de un salteado de verduras🥗 con 1 cebolla, 1 morrón colorado, 2 tallos de puerro y 1 choclo. Además, un delicioso puré de boniato🍠 con 3 boniatos grandes, 1 cda de queso crema, Aceite de oliva, Sal, pimienta y nuez moscada.",
      receta:
        "Marinamos el pollo con todas las especias, queso crema y barbacoa. Luego, picamos boniato, cebolla, puerro, el morrón y desgranamos un choclo. Agregamos luego el pollo a la cacerola. Una vez cocido, salteamos las verduras. Al boniato lo hervimos y lo hacemos puré agregándole queso crema. A las verduras salteadas les agregamos el pollo y unimos. Luego, por encima le ponemos el puré de boniato y unas rodajas de queso. Se puede usar un queso que se derrita o un queso a gratinar. Recomiendo agregar perejil por encima. Recomendamos servir directamente de la sartén. Pueden ver la preparación en mi insta! 🍲🧀🌽",
      instagramLink:
        "https://www.instagram.com/reel/CsMv6gRgtoS/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
      id: "40",
      title: "Pollo con Papines Patagonicos ⛰️🏔",
      image: require("../assets/pollopapines.png"),
      type: "Salado",
      ingredientes:
        "1 pollo trozado con piel (se puede sacar si se prefiere), 400gr de papines, 2 cebollas, 1/2 morrón colorado, 1/2 morrón verde, 4 rodajas de jalapeño, 1 diente de ajo, 1 cebolla de verdeo, 1 zanahoria, 1 tomate para cortar en láminas, 300ml de vino blanco, 300ml de puré de tomates (puedes licuar 2 tomates), Sal, pimienta, tomillo, romero, laurel y orégano.",
      receta:
        "Cortamos la cebolla en rodajas, rodajas de morrón verde y rojo. Jalapeño y verdeo en rodajas. Dejamos papines en remojo. En una sartén, ponemos en aceite unos trozos de pollo para sellar y los reservamos para después. Al sartén agregamos cebolla, morrones, tomates, ajo y zanahoria. Por encima ponemos el pollo sellado. Agregamos 300 ml de vino blanco y 300 ml de jugo o puré de tomate, y añadimos los papines. ¡Condimentamos a gusto! Recomiendo orégano, tomillo y laurel. Cuando están los papines, ¡está lista la receta! ¡Disfruten! 🍲🍷🥔",
      instagramLink:
        "https://www.instagram.com/reel/CsgkGZMgFZf/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
      id: "41",
      title: "Guiso de lentejas (sin chorizo colorado😖) ",
      image: require("../assets/lentejas.png"),
      type: "Salado",
      ingredientes:
        "400gr de lentejas (remojadas 24hs), 2 papas medianas, 1 zanahoria, 2 cebollas, 2 dientes de ajo, 100gr de panceta, 300gr de carne roastbeef, 250ml de vino (malbec en mi caso), 500ml de agua, 1 morrón colorado, 1 cebolla de verdeo, Sal, pimienta, orégano, laurel, pimentón dulce y ají molido.",
      receta:
        "Cortamos papas y las zanahorias en piezas pequeñas. Cortamos la carne y la panceta en tiras y las sellamos. Cocinamos la cebolla y el ajo, luego agregamos la carne y la panceta con un poco de vino. Una vez que el vino se evapora, agregamos a la olla medio litro de agua y un poco más. Luego, incorporamos la zanahoria, las arvejas, dos latas de tomate y finalmente las papas. Una vez en el plato, recomiendo agregar perejil por encima. Es recomendable cocinarlo por la tarde y disfrutarlo por la noche, o cocinarlo por la noche y saborearlo al día siguiente. 🍲🌿🍷 ¡Buen provecho!",
      instagramLink:
        "https://www.instagram.com/reel/CsuHMU5AQBF/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
      id: "42",
      title: "Bizcocho de banana y almendras 🍌🫘",
      image: require("../assets/brouni.png"),
      type: "Fit",
      ingredientes:
        "2 bananas, 140gr de harina integral, 70gr de avena instantánea, 100gr de azúcar mascabo, 60cc de aceite, 1 huevo grande o 2 chicos, 1 cda grande de polvo para hornear, Esencia de vainilla a gusto, 50gr de almendras cortadas.",
      receta:
        "Licuamos banana, aceite, el huevo y el azúcar. Lo pasamos a un bowl y lo mezclamos con la avena y la harina. Agregamos vainilla y almendras. También añadimos polvo para hornear. Mezclamos todo y colocamos la mezcla en una cacerola Essen o la llevamos al horno. ¡En 20 a 25 minutos ya está cocinado! 🕒✨ ¡Una deliciosa opción para disfrutar en poco tiempo!",
      instagramLink:
        "https://www.instagram.com/reel/CswnVVsAmIR/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
      id: "43",
      title: "Pastafrola integral de Frutos Rojos 🥳🥳",
      image: require("../assets/frola.png"),
      type: "Fit",
      ingredientes:
        "Para la masa, mezcla 300gr de harina integral, 3 huevos, 1 cda de miel, 1 cdita de bicarbonato de sodio, 2 cdas de aceite de oliva, 1 cda de mix de semillas y ralladura de 1 limón. Para el relleno, combina 200gr de dulce de batata, 2 cdas colmadas de mermelada de frutos rojos y 50gr de chocolate 70% picado. ¡Prepara estas deliciosas empanaditas dulces y disfruta de su sabor único!",
      receta:
        "En un bowl agregamos harina, miel, bicarbonato de sodio, ralladura de un limón, 3 huevos y dos cucharadas de aceite de oliva. También añadimos las semillas. Mezclamos con las manos hasta que se una. Por otra parte, pisamos en una cacerola dulce de batata con mermelada de frutos rojos. Estiramos la masa en la flip o en un molde para tortas y agregamos el relleno, junto con trozos de chocolate al 70% (esto es opcional). Volcamos el relleno arriba de la masa y expandimos. Cortamos tiras de masa y las ponemos por encima del relleno de lado a lado del molde formando cuadraditos. Llevamos a fuego. 🔥🍫 ¡Una deliciosa combinación de sabores para disfrutar en cualquier ocasión!",
      instagramLink:
        "https://www.instagram.com/reel/CtClb-OAZ20/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
      id: "44",
      title: "Albóndigas con papas 💞💞",
      image: require("../assets/albon.png"),
      type: "Salado",
      ingredientes:
        "Para las albóndigas, mezcla 1kg de carne picada, mucho perejil (un buen puñado), 2 dientes de ajo cortados bien chiquitos, medio jalapeño sin semillas y condimenta con sal, pimienta, comino, tomillo, ají molido y romero. Para la salsa, corta 1 cebolla, 1 morrón colorado y 1 diente de ajo. Agrega 1 botella de tomate triturado y 2 papas grandes o 3 medianas. Condimenta con sal, pimienta, pimentón dulce, laurel y ají molido.",
      receta:
        "Mezclamos y amasamos la carne picada con las verduritas durante 3 a 4 minutos. Luego, formamos bollitos y los salteamos en una cacerola. Posteriormente, sacamos las albóndigas y agregamos cebollas picadas, salteándolas con condimentos a gusto. Añadimos 3/4 de tomate triturado, un vaso de agua, y papas del tamaño de las albóndigas. Después, incorporamos las albóndigas selladas y cocinamos de 45 a 50 minutos. Nos damos cuenta de que las papas están listas. Recomiendo disfrutarlas con arroz blanco. ¡Un plato reconfortante y delicioso para compartir en familia! 🍚🥔👩‍👩‍👧‍👦",
      instagramLink:
        "https://www.instagram.com/reel/CtrzANRABzu/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
      id: "45",
      title: "Dips de Manzanas saludables 🍎🍎🍎🥞🥞🥞",
      image: require("../assets/dipman.png"),
      type: "Fit",
      ingredientes:
        "Para la masa, mezcla 300gr de harina integral, 3 huevos, 1 cda de miel, 1 cdita de bicarbonato de sodio, 2 cdas de aceite de oliva, 1 cda de mix de semillas y ralladura de 1 limón. Para el relleno, combina 200gr de dulce de batata, 2 cdas colmadas de mermelada de frutos rojos y 50gr de chocolate 70% picado. ¡Prepara estas deliciosas empanaditas dulces y disfruta de su sabor único!",
      receta:
        "Licuamos avena, dos huevos, polvo para hornear, vainilla, canela, leche y endulzante. Una vez licuado, lo dejamos descansar y cortamos rodajas de manzana de 5 cm. Ponemos la mezcla en un plato y pasamos las manzanas por la mezcla. Luego, cocinamos las manzanas en una bifera (lado a lado). ¡Una receta fácil y riquísima para disfrutar en cualquier momento! 🤤🔥",
      instagramLink:
        "https://www.instagram.com/reel/CtuKLFpATSM/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
      id: "46",
      title: "Canelones de verduras y ricota 🥘🥬🥬🥬",
      image: require("../assets/canelon.png"),
      type: "Salado",
      ingredientes:
        "Con 100gr de copos de avena, 1 sobre de stevia, 2 huevos, 1 cdita de polvo para hornear y 1 cda de canela, prepara una mezcla. Agrega 2 manzanas cortadas en trozos y mezcla nuevamente. Vierte la mezcla en un recipiente apto para horno y hornea a temperatura media hasta que esté dorado. Al finalizar, puedes añadir miel al gusto para darle un toque dulce. ¡Disfruta de estas deliciosas galletas de avena y manzana!",
      receta:
        "Para la masa de panqueques, licuamos los ingredientes húmedos hasta obtener una mezcla uniforme. Luego, agregamos la acelga y licuamos nuevamente. En un bowl, combinamos harina de arroz con la mezcla licuada. Preparamos una salsa con cebolla y tomate. Para el relleno, cocinamos cebolla, ricota, queso parmesano y acelga con nuez moscada, sal y pimienta. Una vez listo, reservamos y dejamos enfriar. Volcamos la mezcla sobre una sartén para hacer los panqueques. Luego, rellenamos los panqueques con la mezcla ya fría, formando canelones. Llevamos al horno y cocinamos con salsa de tomate y queso por encima. ¡Un plato delicioso y lleno de sabor! 🍅🧀🍽️",
      instagramLink:
        "https://www.instagram.com/reel/Ct4ztSGAWWU/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
      id: "47",
      title: "Tarta de verduras 🧄🧅🌶🥕🫑",
      image: require("../assets/tartaverduras.png"),
      type: "Salado",
      ingredientes:
        "Para preparar una deliciosa tarta de verduras, necesitarás 3 zapallitos, 1 zanahoria chica, 1 cebolla mediana, 1 choclo, 1 diente de ajo, 1/2 morrón colorado, 3 huevos, 3 cdas de queso crema light, fetas de queso fresco light, 1 disco de masa de tarta y condimentos como sal, pimienta y orégano.",
      receta:
        "Para preparar arroz blanco, enjuaga una taza de arroz bajo agua fría para eliminar el exceso de almidón. En una olla mediana, agrega el arroz y dos tazas de agua. Añade sal al gusto si lo deseas. Lleva el agua a ebullición a fuego alto. Cuando esté hirviendo, reduce el fuego a bajo, tapa la olla y cocina el arroz durante unos 15-20 minutos, o hasta que el agua se absorba por completo y el arroz esté tierno. Retira del fuego y deja reposar tapado durante unos minutos. Con un tenedor, esponja el arroz antes de servir. ¡Disfruta de un delicioso arroz blanco! 🍚🍽️",
      instagramLink:
        "https://www.instagram.com/reel/CuQJrunAzr-/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
      id: "48",
      title: "Brownie con 4 ingredientes 🍫",
      image: require("../assets/brouni.png"),
      type: "Fit",
      ingredientes:
        "3 manzanas 🍎🍎🍎 - 3 huevos🥚🥚🥚 - 3 cdas de cacao amargo 🍫🍫🍫 - 3 sobres de stevia (a gusto)",
      receta:
        "¡Bien sencillo! Licuamos todos los ingredientes hasta que quede bien mezcladito, luego lo llevamos a un molde y cocinamos. Puedes agregar nueces por encima, ¡pero eso es a gusto de cada uno! Espectacular, saludable, rápido y apto para celíacos. 🍞😋",
      instagramLink:
        "https://www.instagram.com/reel/CuYCH3cgvzU/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
      id: "49",
      title: "Bifes a la Criolla 🫶🥘🤯",
      image: require("../assets/criolla.png"),
      type: "Salado",
      ingredientes:
        "6 bifes de cuadrada o bola de lomo, 1 morrón colorado, 1 morrón verde, 2 cebollas, 2 dientes de ajo, 1 tomate, 1/2 lata de tomate en cubos (poco no queremos un tuco), 1 lata de arvejas, 2 o 4 huevos (según comensales), Sal, pimienta, orégano, ají molido.",
      receta:
        "Cocinamos en una sartén de 24. Cortamos tomate, cebolla común y de verdeo, ajo, y cortamos en finas tiras los morrones. También cortamos las papas en trozos de 1,5 a 2 cm. Agregamos todos los ingredientes a la olla y colocamos los bifes por encima. Salpimentamos con ají molido y añadimos media lata de tomates en cubos. Luego, vertemos 500 ml de caldo de verduras y un buen toque de vino blanco. Agregamos las papas encima. A medio tiempo de cocción, incorporamos una lata pequeña de arvejas y cerramos. Al finalizar la cocción, podemos añadir huevos para que se cocinen (sin cáscara). ¡Sirve con perejil por encima! ¡Delicioso y saludable! 🍳🌽🍅",
    },
    {
      id: "50",
      title: "Bizcocho de durazno",
      image: require("../assets/bizovar.png"),
      type: "Dulce",
      ingredientes:
        "2 huevos🥚 - 1/2 taza de aceite de oliva - 100 ml de leche vegetal o animal descremado🥛 - 1 taza de harina integral - 1/2 taza de azúcar mascabo - 1 y 1/2 cdita de polvo para hornear - Esencia de vainilla - 1 o 2 duraznos 🍑🍑",
      receta:
        "Mezclamos los huevos, el aceite, el azúcar y agregamos harina integral, 100 ml de leche y polvo para hornear. Utilizamos una sartén essen, colocamos los duraznos y vertemos la mezcla por encima. Cocinamos hasta que el bizcochuelo esté listo. ¡Muy sabroso! 🥞🍽️",
    },
    {
      id: "51",
      title: "Bizcocho de pomelo rosado/naranja, mandarina o limón",
      image: require("../assets/bizovar.png"),
      type: "Dulce",
      ingredientes:
        " Jugo de 2 pomelos y su ralladura (podes elegir naranja, mandarina, limón!) - 1/2 taza de aceite neutro (oliva si te va lo fuerte 😠) - 1 taza de azúcar mascabo - 1 y 1/2 taza de harina integral - 2 huevos - 2 cdta de polvo para hornear ",
      receta:
        "Receta: Mezclamos el azúcar, los huevos, la harina, el polvo de hornear, el jugo y la ralladura de pomelo, y batimos la mezcla. Luego, vertemos la preparación en un molde y horneamos a fuego medio durante 35 minutos. Finalmente, desmoldamos el delicioso resultado. 🍰🍴",
    },
    {
      id: "52",
      title: "Bizcocho de avena, banana y choco 🍚🍫🍌🍫🍚🍌🍫🍚🍌",
      image: require("../assets/banana.png"),
      type: "Fit",
      ingredientes:
        " 120 gr avena en copos🍚 - 200 ml de leche TIBIA 🥹 - 2 huevos🥚🥚 - 2 platanos🍌🍌 - 40 gr de cacao 100% puro de buena calidad 👊👊👊🍫🍫🍫 - 2 sobres de stevia - vainilla un chorrin 💦 -1 cdita polvo para hornear 🏺 - Nueces c/n 🫘🫘",
      receta:
        "En un recipiente grande, mezcla los copos de avena con la leche tibia y deja reposar durante unos 10 minutos para que la avena absorba la leche. 🥛 En otro recipiente, machaca los plátanos maduros hasta obtener un puré. 🍌 Agrega los huevos a la mezcla de avena y leche, y bate bien. Incorpora el puré de plátano a la mezcla y continúa batiendo. 🥚 Añade el cacao puro, la stevia, la esencia de vainilla y el polvo para hornear. Mezcla hasta obtener una masa homogénea. Agrega las nueces al gusto y mezcla nuevamente. 🍫 Vierte la masa en tu Essen. 🍮 Hornea durante aproximadamente 35-40 minutos, o hasta que al insertar un palillo en el centro, este salga limpio. Deja enfriar el bizcocho antes de desmoldarlo. 🍰🌰",
    },
    {
      id: "53",
      title: "Aros de manzana",
      image: require("../assets/aroman.png"),
      type: "Fit",
      ingredientes:
        "1 manzana 🍎 - 1 tapa de tarta🫓 - 100 gr de azúcar rubia - canela c/n - nuez moscada c/n🌰 - ralladura de 1 limon🍋 - manteca derretida c/n ",
      receta:
        "Envuelven los aros de manzana con las tiras de la masa de tarta, las pincelan con manteca derretida y les espolvorean la mezcla de azúcar, canela, nuez moscada y ralladura de limón. 😋 Espero que les guste la idea y la hagan. ¡Están super ricas! 🍎🥧",
      instagramLink:
        "https://www.instagram.com/reel/CuqBmW_gUxV/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
      id: "54",
      title: "Alfajores de Coco 🥥🥥",
      image: require("../assets/alfacoco.png"),
      type: "Fit",
      ingredientes:
        "100 gr de azúcar orgánica 🍚 - 100 gr de coco rallado 🥥🥥 - 1 huevo 🥚 - Toppings ideales: Dulce de leche repostero o membrillo pisado",
      receta:
        "Mezclamos el coco, el huevo y el azúcar hasta lograr una masa consistente. Creamos círculos del tamaño de alfajores y los llevamos a tu Essen, 10 minutos de cada lado. ¡Ideales para armar como alfajores! 🌴🍪",
      instagramLink:
        "https://www.instagram.com/reel/Cu-nB5TA2OC/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
      id: "55",
      title: "Arroz con Leche! 🍧🥰🥰",
      image: require("../assets/arrozconleche.png"),
      type: "Dulce",
      ingredientes:
        "ingredientes: 1 L de leche descremado🥛- 250gr de arroz blanco común🍚 (podes usar el arroz para risotto) - cáscara de 1 limón 🍋 - 1 rama de canela 🪵- 5 sobres de stevia - nuez moscada c/n (si ponele!!)✨️",
      receta:
        "Enjuaga el arroz bajo agua fría para quitar el exceso de almidón. En una cacerola grande, calienta la leche descremada a fuego medio. Cuando la leche esté caliente, agrega el arroz y mezcla bien. Añade la cáscara de limón y la rama de canela a la mezcla. Esto dará sabor al arroz con leche. Cocina a fuego medio-bajo, removiendo constantemente para evitar que el arroz se pegue al fondo de la cacerola. Cuando el arroz esté casi cocido y la mezcla haya espesado, agrega los sobres de stevia y mezcla hasta que estén bien incorporados. Continúa cocinando a fuego bajo hasta que el arroz esté tierno y la mezcla tenga la consistencia deseada. Ajusta la cantidad de stevia según tu preferencia de dulzura. Retira la cáscara de limón y la rama de canela. Ralla un poco de nuez moscada sobre el arroz con leche para darle un toque aromático. Sirve el arroz con leche caliente o déjalo enfriar antes de servir, según tu preferencia. ¡Disfruta de tu arroz con leche con un toque especial de limón, canela y nuez moscada! 🍋🪵✨️",
      instagramLink:
        "https://www.instagram.com/reel/CvN9iR4grZ7/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
      id: "56",
      title: "Queque de manzana",
      image: require("../assets/queque.png"),
      type: "Fit",
      ingredientes:
        "150gr de harina de avena - 2 cditas de polvo para hornear - 2 cditas de edulcorante - 2 cdas de aceite de oliva - 2 cditas de canela - 25 gr de coco (opcional) - 3 huevos - 10 cdas de agua para aligerar la preparación, 2 Manzanas Rojas, 50gr de pasas de uva (opcional)",
      receta:
        "En una licuadora, licuamos todos los ingredientes 🥚 a excepción de la manzana 🍎 y de las pasas. En un recipiente mezclamos la mezcla y le incluimos las manzanas y las pasas. Llevamos a la escen. Espolvoreamos 🌰",
      instagramLink:
        "https://www.instagram.com/reel/CwvkHrhvd3Q/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
      id: "57",
      title: "Bizcocho de Frutos Rojos SIN GLUTEN! 🫐🍓🍓🫐💞💞💞",
      image: require("../assets/bizara.png"),
      type: "Dulce",
      ingredientes:
        "INGREDIENTES: 200 gr de Azúcar (o Eritritol para versión más saludable) - 6 huevos🥚🥚 - 200 ml de aceite - 1 pote de yogur natural🥛- jugo y ralladura de 1 limón 🍋 - 2 cdas de polvo para hornear - 400gr de harina de arroz - 200 gr de Frutos Rojos🫐🍓🫐🍓🫐🍓",
      receta:
        "Mezclar todos los ingredientes con la batidora 🌀, primero los líquidos 💧 y luego los sólidos, el harina de arroz es recomendable incluirlo en tres pasos. Luego picamos las frutillas 🍓 y las incorporamos junto con los arándanos a la mezcla. Llevamos a fuego en tu essen 🔥, a fuego corona durante 50 a 60 minutos ⏳",
      instagramLink:
        "https://www.instagram.com/reel/Cxt1qm1ttLW/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
      id: "58",
      title: "Budín Matero de Moras Silvestres 🪻🪻 y Naranja 🍊🍊",
      image: require("../assets/moras.png"),
      type: "Dulce",
      ingredientes:
        "3 huevos, 200 gr de azúcar, 150 cc de aceite neutro, 1 naranja (ralladura y jugo), 250 gr de harina, 1 cdita y 1/2 de polvo para hornear, 200 gr de Moras congeladas",
      receta:
        "Batir los huevos con el azúcar 🥚🍬 y agregarle la ralladura con el jugo de una naranja 🍊, aceite, harina, el polvo para hornear y las moras congeladas 🫐. Llevamos 40 a 45 minutos a la essen 🔥. Desmoldamos, dejamos enfriar y disfrutamos! 🍰🎉",
      instagramLink:
        "https://www.instagram.com/reel/Cz3-dUILgaR/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
      id: "59",
      title: "Tarta de Espárragos y Trucha Ahumada 💞",
      image: require("../assets/trucha.png"),
      type: "Fit",
      ingredientes:
        "masa Integral: 250 gr de harina integral - 50ml de aceite de oliva - 2 cdas de semillas - c/n ml de agua - sal y pimienta. Relleno: 1 paquete de Espárragos - 3 huevos - 200ml de crema - 2cdas de queso crema - 2 cdas de queso rallado - Trucha Ahumada 3 trocitos ( si no tenes no es necesario) - sal, pimienta y nuez moscada",
      receta:
        "Para la masa, simplemente unir todos los ingredientes hasta conseguir una masa homogénea y fácil de manejar. En una sartén, cocinar los espárragos con aceite de oliva, sal y pimienta. Para el relleno, mezclar el resto de los ingredientes en un recipiente. En una sartén Essen, forzar la masa y verter la mezcla y los espárragos por encima. Cocinar por 35 minutos a fuego corona. ¡Listo para disfrutar! 🌿🧀🔥",
      instagramLink:
        "https://www.instagram.com/reel/Cx3nXKQP89i/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
      id: "60",
      title: "Galletas de Jengibre y Canela💞💞💞🎄🎄🎄🎁🎁🎁",
      image: require("../assets/jengibre.png"),
      type: "Dulce",
      ingredientes:
        "300 gr de Harina 0000 - 130 gr de Manteca - 120 gr de azúcar mascabo o negra - 50gr de Miel o Melaza - 1 cdita de canela - 1 cdita de Jengibre - 1/4 cdita de clavo de olor - 1/4 cdita de nuez moscada ",
      receta:
        "Ideales para las fiestas! Mezclamos manteca pomada con azúcar negro, colocamos el huevo, agregamos una cucharada de miel, sal, vainilla y mezclamos. Dentro del bol agregamos la harina y las especias. Formamos una masa uniforme mezclando. Envuelvemos la masa en film y la llevamos a la heladera al menos dos horas para cortar las galletitas más fácilmente. Ponemos en la Essen a fuego corona y ¡listo! Puedes decorarlos con glasé o lo que quieras. 🌟🍯🔥",
      instagramLink:
        "https://www.instagram.com/reel/C04v-DUPwFc/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
      id: "61",
      title: "Bizcocho de cafe y cacao",
      image: require("../assets/cafeycacao.png"),
      type: "Dulce",
      ingredientes:
        "2 huevos - 1 taza de leche (250cc) - 1/2 taza de café expreso (125cc) - 5 cdas de aceite (oliva o neutro) - 3 cdas de edulcorante apto cocción - 2 tazas de harina integral (280gr) - 1/2 taza de cacao amargo puro (70gr) - 2 cdas de polvo para hornear - 1 cdita de bicarbonato (realza el color) - 2 cdas de esencia de vainilla - pizca de sal",
      receta:
        "Mezclar los húmedos por un lado, preparar un café espresso y agregarlo a la preparación. Recomiendo el uso de productos de calidad. Ponemos todo en tu Essen con algunas nueces. Cocinar aproximadamente por 40 minutos a fuego corona. ¡Delicioso y reconfortante! ☕🔥🌟",
      instagramLink:
        "https://www.instagram.com/reel/CyG2pdlrttU/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
      id: "62",
      title: "Postre tipo Serenito 😱😱",
      image: require("../assets/serenito.png"),
      type: "Dulce",
      ingredientes:
        ".500cc de leche - 3 cdas de Maizena o Fécula de maíz (mezclada con un poco de leche de la receta) - 2 cditas de edulcorante - 2 cditas de esencia de vainilla - 2 cdas de DDL (opcional)",
      receta:
        "Calientas la leche y antes de que hierva, incluyes la maicena y el edulcorante; mezclas hasta que nape la cuchara o no tenga sabor a maicena. Fuera del fuego, le agregas la vainilla y mezclas. Sacas del fuego y llevas a la heladera hasta que enfríe. Pásalo a un bol y ponle un film al contacto de la preparación para que no se le forme una película durita. Déjalo enfriar muy bien y antes de servirlo, bátelo para que quede más cremoso. ¡Disfruta de este postre delicioso y ligero! 🍮❄️🌟",
      instagramLink:
        "https://www.instagram.com/reel/CyY1sD7rwCk/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
      id: "63",
      title: "Pizza de zanahorias 🤩🤩🥰🥰",
      image: require("../assets/zanahoria.png"),
      type: "Fit",
      ingredientes:
        "Ingredientes:.1 zanahoria grande .2 huevos chicos o 1 grande.sal, pimienta y orégano .c/n salsa de tomate .fetas de queso fresco .fetas de tomate .albahaca y aceite de oliva, si no tenes con orégano va de 10🥰🥰",
      receta:
        "Mezclo una zanahoria rayada con dos huevos, sal, pimienta y orégano hasta tener una mezcla consistente. Ponemos la mezcla en una sartén Essen, sin aceites ni agregados. Damos vuelta y ponemos salsa de tomate, queso, tomates, orégano, albahaca y lo que quieras. Cuando se derrite el queso, retiras. ¡Listo para disfrutar de esta deliciosa y saludable tortilla! 🍳🥕🧀🍅🌿",
      instagramLink:
        "https://www.instagram.com/reel/C2IQFkerPDS/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
      id: "64",
      title: "Mermelada de Moras silvestres 🪻🪻🪻",
      image: require("../assets/mermelada.png"),
      type: "Dulce",
      ingredientes: "1 kg de moras, 500 gr de azúcar, 1 limón (jugo)",
      receta:
        "Vas a mezclar todos los ingredientes y lo vas a cocinar durante 50 minutos a temperatura media. Haz la prueba del plato para darte cuenta de la consistencia de la mermelada. Si ves que está muy líquida, continúa la cocción. El azúcar y el limón actúan como conservantes (además, el limón realza el color 💞 y no le aporta el sabor a limón). Dura perfectamente 1 mes en la heladera. Le puedes poner la mitad de azúcar, pero te va a durar 1 semana en la heladera. 😉 Los frascos de vidrio los vas a hervir unos 15 minutos junto con la tapa, los dejas enfriar y ¡listo para trasvasar! 🍓🍋🌞🍯",
      instagramLink:
        "https://www.instagram.com/reel/CzcYaCbMzfz/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
      id: "65",
      title: "Budín de Limón 🍋tipo Starbucks 🤯🤩🤩",
      image: require("../assets/budinlimon.png"),
      type: "Dulce",
      ingredientes:
        "200 gr de azúcar - 1 ralladura de limón - 2 huevos grandes - 2 cdas de aceite neutro - 2 cdas de jugo de limón - 110 gr de manteca pomada - 5 gr de polvo para hornear - 187 gr de harina común - 125cc de leche - 1 cdita de sal",
      receta:
        "Te gusta ir a Starbucks, pero está más caro que comprar un departamento. No importa, aquí tienes la receta de su budín de limón. Mezcla el azúcar y la ralladura de limón y trabaja durante 5 minutos. Una vez que la manteca está pomada, agrega el aceite y el jugo de limón y mezcla. Luego, agrega el resto de los ingredientes hasta que quede bien lisito y lo mandas a un sartén. ¡Agrega glaseado de limón por encima! 🍋🍰🌟",
      instagramLink:
        "https://www.instagram.com/reel/Cy_k0TIvoWT/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
      id: "66",
      title: "Pepas de cacao y Dulce de Leche",
      image: require("../assets/pepas.png"),
      type: "Dulce",
      ingredientes:
        " 100 gr de avena instantánea - 1 huevo grande - 2 cdas de cacao amargo - 5 sobres de Stevia - esencia de vainilla c/n - Dulce de leche c/n",
      receta:
        "Mezclamos 100 gr de avena instantánea, 5 sobrecitos de stevia, agregamos 2 cucharadas generosas de cacao en polvo amargo, incluimos un huevo y esencia de vainilla. Mezclamos bien hasta que quede una masa manejable. Vamos a hacer bolitas con la masa, les damos forma de pepa directamente en la sartén (yo usé la Flip), e incluimos el relleno en el medio. Cocinamos por 20 minutos. ¡Salen 5 o 6 dependiendo del tamaño! 🍫🍪✨",
      instagramLink:
        "https://www.instagram.com/reel/CxRE9gUPc2z/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
      id: "67",
      title: "Souffle de limón 🍋🍋",
      image: require("../assets/suffle.png"),
      type: "Dulce",
      ingredientes:
        ".1 limón .500gr de ricota.3 cdas de miel.2 cditas esencia de vainilla .4 huevos chicos o 3 grande.3 cdas de avena. azúcar impalpable (si tienen ganas 🤪)",
      receta:
        "Empezamos separando las yemas y claras. A las yemas les agregamos ricota, esencia de vainilla, miel, rayadura y jugo de un limón, y 3 cucharadas de avena. Procesamos la mezcla. Montamos las claras a nieve y mezclamos con la primera mezcla. Llevamos al savarín y desmoldamos. ¡A disfrutar, chiquis! 🍋🧁✨",
      instagramLink:
        "https://www.instagram.com/reel/CxIovQZsFOn/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
      id: "68",
      title: "Pan de Lentejas 🤯🤯🤯",
      image: require("../assets/pandearvejas.png"),
      type: "Fit",
      ingredientes:
        ".1 lata de lentejas.3 huevos.6 cdas de aceite de oliva.1 cda de polvo para hornear. sal y pimienta",
      receta:
        "¡Ponemos todos los ingredientes en la licuadora! Una lata de lentejas, 3 huevos, 6 cucharadas de aceite de oliva, sal y pimienta a gusto, y una cucharada generosa de polvo para hornear. Licuamos bien hasta que quede bien liso. Metemos toda la preparación en la flip. Con 40 minutos a fuego corona cocinamos, desmoldamos y dejamos enfriar bien el pan antes de cortarlo. ¡Haz un tremendo sándwich con lo que más te guste! 🍞🥪✨",
      instagramLink:
        "https://www.instagram.com/reel/C2s6qn3vdIT/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
      id: "69",
      title: "Pizza de papa a la fugazzeta 🔥🔥🔥",
      image: require("../assets/pizapapa.png"),
      type: "salado",
      ingredientes:
        ".1 papa grande.1 cebolla.c/n de queso muzzarella. orégano,aji molido, pimienta y sal",
      receta:
        "Rayamos una papa bien grande y le sacamos toda el agua que tenga. Cocinamos unas cebollas hasta que queden bien caramelizadas, agregamos sal, ají molido y lo que quieras. Aceitamos la flip y ponemos las papas rayadas. Cocinamos 15 minutos de un lado; una vez que hace piso, la damos vuelta y le ponemos del otro lado la cebolla, dejamos por 10 minutos. Una vez que quede bien crocante, agregamos el queso, sal, pimienta. ¡Listo para disfrutar! 🥔🧀🌶️🔥",
      instagramLink:
        "https://www.instagram.com/reel/C2nQxwtLijD/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
  ];

  const Card = ({ title, image, type }) => {
    const handleCardPress = () => {
      navigation.navigate("RecetasDetail", {
        title,
        ingredientes: data.find((item) => item.title === title).ingredientes,
        receta: data.find((item) => item.title === title).receta,
        instagramLink: data.find((item) => item.title === title).instagramLink, // Agrega esta línea
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

  const sortedData = data
    .slice()
    .sort((a, b) => a.title.localeCompare(b.title));

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
          {filtro
            ? filteredData.map((item) => (
                <Card
                  key={item.id}
                  title={item.title}
                  image={item.image}
                  type={item.type}
                />
              ))
            : sortedData.map((item) => (
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
    backgroundColor: "#ff7100",
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
    backgroundColor: "#ff7100",
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
    color: "#fff",
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
