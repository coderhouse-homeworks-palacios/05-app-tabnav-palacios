import React from 'react';
import { View, Text, StyleSheet, ImageBackground, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';

const CategoriesScreen = ({ navigation }) => {
  return (
    <View style={styles.root}>
      <View style={styles.touch}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Switches');
          }}
        >
          <ImageBackground
            style={styles.imgBg}
            source={require('../../assets/img/switches_kiwi.jpg')}
          ></ImageBackground>
          <Text style={styles.imgText}>Switches</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity>
          <ImageBackground
            style={styles.imgBg}
            source={require('../../assets/img/category_keyboards.webp')}
          ></ImageBackground>
          <Text style={styles.imgText}>Keyboards</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  touch: {
    marginBottom: 10,
  },
  root: {
    paddingTop: 8,
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
    shadowColor: '#222222',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 1,
    textShadowColor: '#222222',
    textShadowOffset: {
      width: 0,
      height: 2,
    },
    textShadowRadius: 3,
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
