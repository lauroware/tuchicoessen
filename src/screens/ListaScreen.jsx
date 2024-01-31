import React, { useState, useEffect } from "react";
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Constants from "expo-constants";
import * as SQLite from "expo-sqlite";

function openDatabase() {
  if (Platform.OS === "web") {
    return {
      transaction: () => {
        return {
          executeSql: () => {},
        };
      },
    };
  }

  const db = SQLite.openDatabase("db.db");
  return db;
}

const db = openDatabase();

function Items({ done: doneHeading, onPressItem }) {
  const [items, setItems] = useState(null);

  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        `select * from items where done = ?;`,
        [doneHeading ? 1 : 0],
        (_, { rows: { _array } }) => setItems(_array)
      );
    });
  }, []);

  const heading = doneHeading ? "Ya comprados " : "Productos a comprar";

  if (items === null || items.length === 0) {
    return null;
  }

  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionHeading}>{heading}</Text>
      {items.map(({ id, done, value }) => (
        <TouchableOpacity
          key={id}
          onPress={() => onPressItem && onPressItem(id)}
          style={{
            backgroundColor: done ? "#1c9963" : "#fff",
            borderColor: "#000",
            borderWidth: 1,
            padding: 8,
          }}
        >
          <Text style={{ color: done ? "#fff" : "#000" }}>{value}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

export default function App() {
  const [selectedValue, setSelectedValue] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [forceUpdate, forceUpdateId] = useForceUpdate();

  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        "create table if not exists items (id integer primary key not null, done int, value text);"
      );
    });
  }, []);

  const add = () => {
    if (selectedValue === "") {
      return false;
    }

    db.transaction(
      (tx) => {
        tx.executeSql("insert into items (done, value) values (0, ?)", [
          selectedValue,
        ]);
        tx.executeSql("select * from items", [], (_, { rows }) =>
          console.log(JSON.stringify(rows))
        );
      },
      null,
      forceUpdate
    );
  };

  const productList = [
    "Aceite",
    "Aceite de coco",
    "Aceite de oliva",
    "Aceitunas",
    "Acelgas",
    "Ajo",
    "Albahaca",
    "Albahaca",
    "Alcohol en gel",
    "Algodón",
    "Almendras",
    "Aluminio papel",
    "Antitranspirante",
    "Apio",
    "Arroz",
    "Atún",
    "Avena",
    "Avellanas",
    "Azafrán",
    "Azúcar",
    "Berenjenas",
    "Brócoli",
    "Bolsas de basura",
    "Bolsas de congelador",
    "Café",
    "Canela",
    "Cebada",
    "Cebollas",
    "Cebollinos",
    "Cepillo de dientes",
    "Cepillo para el cabello",
    "Cereal",
    "Cereales",
    "Cerveza",
    "Champú",
    "Chicles",
    "Chocolate",
    "Cinta adhesiva",
    "Cloro",
    "Coliflor",
    "Crema",
    "Cilantro",
    "Desinfectante de manos",
    "Desodorante",
    "Detergentes",
    "Esponjas",
    "Esponjillas",
    "Escoba",
    "Escobillón",
    "Esponja de cocina",
    "Espejo",
    "Esponja para baño",
    "Fideos",
    "Flan",
    "Fresas",
    "Frijoles",
    "Fuji",
    "Garbanzos",
    "Galletitas",
    "Gaseosas",
    "Gel de ducha",
    "Gelatina",
    "Harina",
    "Harina de almendras",
    "Harina de avena",
    "Harina de maíz",
    "Harina de trigo integral",
    "Huevos",
    "Jabón",
    "Jabón de lavar",
    "Jengibre",
    "Kiwi",
    "Ketchup",
    "Lentejas",
    "Lavandina",
    "Leche",
    "Leche condensada",
    "Leche de almendras",
    "Leche de arroz",
    "Leche de avena",
    "Leche de coco",
    "Leche de soja",
    "Limones",
    "Limpiacristales",
    "Limpiador de baño",
    "Limpiador multiusos",
    "Limpiador de pisos",
    "Lubricante",
    "Manzanas",
    "Mangos",
    "Manteca",
    "Mantequilla de maní",
    "Maquillaje",
    "Maracuyá",
    "Mayonesa",
    "Melones",
    "Medias",
    "Menta",
    "Mermelada",
    "Miel",
    "Mostaza",
    "Naranjas",
    "Nueces",
    "Orégano",
    "Pan",
    "Pancakes",
    "Papayas",
    "Papel de cocina",
    "Papel higiénico",
    "Papel manteca",
    "Pasas",
    "Pasta",
    "Pasta dental",
    "Patatas",
    "Pegamento",
    "Pepinos",
    "Perejil",
    "Perejil",
    "Pilas",
    "Pimienta",
    "Piñas",
    "Pimientos",
    "Plátanos",
    "Queso",
    "Queso azul",
    "Queso cheddar",
    "Queso crema",
    "Queso feta",
    "Queso mozzarella",
    "Queso parmesano",
    "Queso rallado",
    "Romero",
    "Repelente de insectos",
    "Rollo de cocina",
    "Salsa BBQ",
    "Salsa de chocolate",
    "Salsa de nueces",
    "Salsa de soja",
    "Salsa picante",
    "Salsa de tomate",
    "Sandías",
    "Sal",
    "Servilletas de papel",
    "Shampoo para mascotas",
    "Talco",
    "Té",
    "Trapo de cocina",
    "Tofu",
    "Tomates",
    "Tortillas de maíz",
    "Tortillas de trigo",
    "Velas",
    "Vinagre",
    "Vino",
    "Yerba Mate",
    "Yoghurt",
    "Yoghurt de almendras",
    "Yoghurt de coco",
    "Yoghurt griego",
    "Uvas",
    "Zanahorias",
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Lista de compras </Text>

      {Platform.OS === "web" ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={styles.heading}>
            Expo SQLite is not supported on web!
          </Text>
        </View>
      ) : (
        <>
          <View style={styles.pickerContainer}>
            <Text style={styles.pickerLabel}>Seleccionar producto:</Text>
            <View style={styles.expandedPicker}>
              <Text
                onPress={() => {}}
                style={styles.pickerText}
                numberOfLines={1}
              >
                {selectedValue || "Seleccionar"}
              </Text>
              <ScrollView>
                {productList.map((product, index) => (
                  <Text
                    key={index}
                    onPress={() => {
                      setSelectedValue(product);
                      setSelectedIndex(index);
                    }}
                    style={[
                      styles.pickerItem,
                      {
                        fontWeight: selectedIndex === index ? "bold" : "normal",
                      },
                    ]}
                  >
                    {product}
                  </Text>
                ))}
              </ScrollView>
            </View>
          </View>
          <TouchableOpacity onPress={add} style={styles.addButton}>
            <Text style={styles.addButtonLabel}>Añadir a la lista</Text>
          </TouchableOpacity>
          <ScrollView style={styles.listArea}>
            <Items
              key={`forceupdate-todo-${forceUpdateId}`}
              done={false}
              onPressItem={(id) =>
                db.transaction(
                  (tx) => {
                    tx.executeSql(`update items set done = 1 where id = ?;`, [
                      id,
                    ]);
                  },
                  null,
                  forceUpdate
                )
              }
            />
            <Items
              done
              key={`forceupdate-done-${forceUpdateId}`}
              onPressItem={(id) =>
                db.transaction(
                  (tx) => {
                    tx.executeSql(`delete from items where id = ?;`, [id]);
                  },
                  null,
                  forceUpdate
                )
              }
            />
          </ScrollView>
        </>
      )}
    </View>
  );
}

function useForceUpdate() {
  const [value, setValue] = useState(0);
  return [() => setValue(value + 1), value];
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  expandedPicker: {
    borderColor: "#4630eb",
    borderRadius: 4,
    borderWidth: 1,
    maxHeight: 200,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },

  heading: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
  pickerContainer: {
    marginHorizontal: 16,
    marginTop: 16,
  },
  pickerLabel: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  picker: {
    borderColor: "#4630eb",
    borderRadius: 4,
    borderWidth: 1,
    maxHeight: 100,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  pickerText: {
    fontSize: 14,
    marginBottom: 4,
  },
  pickerItem: {
    fontSize: 18, // Ajusta este valor para cambiar el tamaño de la letra
    marginVertical: 4,
  },
  addButton: {
    alignItems: "center",
    backgroundColor: "#FF7100",
    borderRadius: 4,
    margin: 16,
    padding: 12,
  },
  addButtonLabel: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  listArea: {
    backgroundColor: "#f0f0f0",
    flex: 1,
    paddingTop: 16,
  },
  sectionContainer: {
    marginBottom: 16,
    marginHorizontal: 16,
  },
  sectionHeading: {
    fontSize: 18,
    marginBottom: 8,
  },
});
