import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

const imageUrl = require('../../assets/img/goku.png');

const CartScreen = () => {
  return (
    <View style={styles.imageContainer}>
      <Image source={imageUrl} style={styles.image} />
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e67e22',
  },
  image: {
    width: '90%',
    height: '90%',
    borderRadius: 10,
    marginTop: '5%',
  },
});
