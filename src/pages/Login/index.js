import React, {useState} from 'react';

import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  CheckBox,
  TouchableOpacity,
} from 'react-native';

import {SplashImg} from '../../assets/img';

const Login = ({navigation}) => {
  const [isSelected, setSelection] = useState(false);
  const toHome = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.background}>
      <View style={styles.form}>
        <Image source={SplashImg} style={styles.logo} />
        <TextInput style={styles.input} placeholder={'NIK'} />
        <TextInput
          style={styles.input}
          placeholder={'Password'}
          secureTextEntry={true}
        />
        <View style={styles.checkbox}>
          <CheckBox value={isSelected} onValueChange={setSelection} />
          <Text style={styles.label}>Ingat Saya</Text>
          <Text style={styles.label2}>Lupa Password</Text>
        </View>
        <TouchableOpacity style={styles.btn} onPress={toHome}>
          <Text style={styles.btnText}>Masuk</Text>
        </TouchableOpacity>
        <Text
          style={styles.help}
          onPress={() => {
            navigation.navigate('Register');
          }}>
          Belum Punya Akun ? Daftar Disini !
        </Text>
        <Text style={styles.help}>Bantuan Login</Text>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  background: {
    padding: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#a10b3a',
  },
  form: {
    backgroundColor: 'white',
    width: '94%',
    height: '10%',
    padding: 5,
    marginTop: '20%',
    flex: 1,
  },
  logo: {
    width: 200,
    height: 90,
    alignSelf: 'center',
    marginTop: 20,
    resizeMode: 'contain',
  },
  input: {
    width: '80%',
    alignSelf: 'center',
    borderBottomWidth: 2,
    marginTop: 15,
    fontSize: 20,
  },
  btn: {
    width: '80%',
    height: '10%',
    borderRadius: 10,
    backgroundColor: 'maroon',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
  btnText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  checkbox: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 40,
    marginLeft: '8%',
  },
  label: {
    color: 'grey',
    fontSize: 15,
  },
  label2: {
    color: 'grey',
    fontSize: 15,
    marginLeft: '25%',
  },
  help: {
    color: 'grey',
    fontSize: 15,
    textAlign: 'center',
    marginTop: 5,
  },
});
