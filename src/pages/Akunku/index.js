import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'



const Akunku = ({navigation}) =>{
    const dummyName='Litha Hopkins'
    const img =
      'https://tse3.mm.bing.net/th?id=OIP.yulTOLuKjaFQDIcaKpZMAQHaEJ&pid=Api&P=0';
    return (
      <View style={styles.body}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Profile Saya</Text>
          <Image source={{uri: img}} style={styles.headerImage} />
          <Text style={styles.headerText}>{dummyName}</Text>
        </View>
        <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
          <Text style={styles.logout}>Log Out</Text>
        </TouchableOpacity>
      </View>
    );
}
export default Akunku
const styles = StyleSheet.create({
  body: {
    width: '100%',
    height: 'auto',
  },
  header: {
    backgroundColor: '#E30D0D',
    height: 400,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomEndRadius: 50,
    borderBottomStartRadius: 50,
  },
  headerText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  headerImage: {
    marginTop: 30,
    marginBottom: 20,
    width: 250,
    height: 250,
    borderRadius: 100,
    alignSelf: 'center',
  },
  logout: {
    marginTop: 100,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
    textDecorationLine: 'underline',
  },
});