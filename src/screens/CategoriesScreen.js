import React from 'react';
import { View, Text, StyleSheet, ImageBackground, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';

const CategoriesScreen = ({ navigation }) => {
  return (
    <View style={styles.root}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Switches');
        }}
      >
        <ImageBackground
          style={styles.imgBg}
          source={require('../../assets/img/category_switches.jpg')}
        ></ImageBackground>
        <Text style={styles.imgText}>Switches</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    marginTop: 10,
    flex: 1,
    backgroundColor: '#2c3e50',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgBg: {
    flex: 1,
    width: '100%',
    height: 70,
    alignItems: 'center',
    textAlignVertical: 'center',
  },
  imgText: {
    textAlign: 'center',
    textAlignVertical: 'center',
    justifyContent: 'center',
    color: '#ffffff',
    fontSize: 48,
  },
});

const stock = {
  categories: [
    {
      name: 'deskmats',
      img: 'category_deskmats.jpg',
    },
    {
      name: 'switches',
      img: 'category_switches.jpg',
    },
  ],
  deskmats: [],
  switches: [],
  others: [],
};

export default CategoriesScreen;
