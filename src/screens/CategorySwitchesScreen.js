import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList, Image } from 'react-native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Kiwi',
    image: 'switches_kiwi.jpg',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Blackberry',
    image: 'switches_blackberry.jpg',
  },
];

const Item = (props) => {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
};

function CategorySwitchesScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item image={item.image} title={item.title} />}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    backgroundColor: '#2c3e50',
  },
  item: {
    backgroundColor: '#3498db',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
    color: '#eeeeff',
  },
  category: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CategorySwitchesScreen;
