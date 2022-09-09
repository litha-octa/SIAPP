import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  CheckBox,
} from 'react-native';


import {PolisiImg} from '../../assets/img';

const Login = () => {
  const [isSelected, setSelection] = useState(false);
  return (
    <View style={styles.background}>
      <View style={styles.form}>
        <Image source={PolisiImg} style={styles.logo} />
        <TextInput style={styles.input} placeholder={'Username atau Email'} />
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

        <View style={styles.btn}>
          <Text style={styles.btnText}>Masuk</Text>
        </View>
        <Text style={styles.help}>Bantuan Login</Text>
      </View>
    </View>
  );
};

export default Login

const styles = StyleSheet.create({
  background: {
    padding: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0f4c81',
  },
  form: {
    backgroundColor: 'white',
    width: '94%',
    height: '70%',
    padding: 5,
  },
  logo: {
    width: 90,
    height: 90,
    alignSelf: 'center',
    marginTop: 20,
    backgroundColor: 'gold',
    borderRadius: 10,
  },
  input: {
    width: '80%',
    alignSelf: 'center',
    borderBottomWidth: 1,
    marginTop: 15,
    fontSize: 20,
  },
  btn: {
    width: '80%',
    height: '10%',
    borderRadius: 10,
    backgroundColor: '#0f4c81',
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
    marginLeft: '37%',
  },
  help: {
    color: 'grey',
    fontSize: 15,
    textAlign:'center',
    marginTop:5,
  },
});
