import React from "react";
import { Image, View, Text, FlatList } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import HomeCategory from "../../components/HomeCategory";
import categories from "../../assets/data/categories";
import styles from "./styles";

const firstCategories = categories[0];

const HomeScreen = () => {
  return (
    <LinearGradient
      // Background Linear Gradient
      colors={["#564977", "transparent"]}
      style={styles.container}
    >
      <FlatList
        data={categories}
        renderItem={({ item }) => <HomeCategory category={item} />}
      />
    </LinearGradient>
  );
};

export default HomeScreen;
