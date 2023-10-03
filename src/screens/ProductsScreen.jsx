import { FlatList, StyleSheet, Text, View, Dimensions } from "react-native";
import React, { useEffect } from "react";
import {
  filteredProduct,
  selectedProduct,
} from "../store/actions/products.action";
import { useDispatch, useSelector } from "react-redux";

import ProductsItem from "../components/ProductsItem/Index";

const ProductsScreen = ({ navigation, route }) => {
  const filteredProducts = useSelector(
    (state) => state.products.filteredProduct
  );
  const categorySelected = useSelector((state) => state.categories.selected);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filteredProduct(categorySelected.id));
  }, []);

  const handleSelectedProduct = (item) => {
    dispatch(selectedProduct(item.id));
    navigation.navigate("Details", {
      name: item.name,
    });
  };

  const renderProductItem = ({ item }) => {
    // Calcular el ancho dinámicamente
    const windowWidth = Dimensions.get("window").width;
    const cardWidth = (windowWidth - 40) / 2; // Considerando un margen total de 40

    return (
      <View style={[styles.productItem, { width: cardWidth }]}>
        <ProductsItem item={item} onSelected={handleSelectedProduct} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={filteredProducts}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id}
        horizontal={true}
      />
    </View>
  );
};

export default ProductsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  productItem: {
    marginHorizontal: 10,
    height: 300,
  },
});
