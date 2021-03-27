import React from "react";
import { Image, View, Text, FlatList } from "react-native";

import styles from "./styles";

interface HomeCategoryProps {
  category: {
    id: string;
    title: string;
    items: { id: string; poster: string }[];
  };
}

const HomeScreen = (props: HomeCategoryProps) => {
  const { category } = props;

  return (
    <>
      <Text style={styles.title}>{category.title}</Text>
      <FlatList
        horizontal
        scrollEnabled
        showsHorizontalScrollIndicator={false}
        data={category.items}
        renderItem={({ item }) => (
          <Image
            key={item.id}
            style={styles.image}
            source={{
              uri: item.poster,
            }}
          />
        )}
      />
    </>
  );
};

export default HomeScreen;
