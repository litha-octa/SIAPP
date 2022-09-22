import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native'

const Nyaku = () =>{
    const img =
      'https://tse2.mm.bing.net/th?id=OIP.RK9T4V-2qrQMWAjAYXFMCgHaEL&pid=Api&P=0';
    return (
      <View style={styles.body}>
        <View style={styles.header}>
          <Text style={styles.headerText}>NYAKU PAGE</Text>
        </View>
        <Image source={{uri: img}} style={styles.image} />
      </View>
    );
}
export default Nyaku

const styles = StyleSheet.create({
  body: {
    width: '100%',
    height: 'auto',
  },
  header: {
    backgroundColor: '#E30D0D',
    height: 50,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  headerText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 200,
  },
});