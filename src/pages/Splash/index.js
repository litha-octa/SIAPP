import React, {useEffect} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {SplashImg} from '../../assets';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Login');
    }, 3000);
  }, [navigation]);

  return (
    <View style={styles.background}>
      <Image source={SplashImg} style={styles.logo} />
      {/* <Text style={styles.title}>SIAPP</Text>
      <Text style={styles.title2}>Security in Application</Text> */}
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  logo: {
    flex: 1,
    width: 250,
    height: 250,
    resizeMode: 'contain',
  },
  title: {
    fontFamily: 'Arial',
    fontWeight: 'bold',
    fontSize: 40,
    color: 'gold',
  },
  title2: {
    fontStyle: 'italic',
    fontSize: 20,
    color: 'white',
  },
});
