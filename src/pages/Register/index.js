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
// import {firebase} from '../../firebase/config';

const Register = ({navigation}) => {
  const [isSelected, setSelection] = useState();
  const [fullName, setFullName] = useState('');
  const [nik, setNik] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // const onFooterLinkPress = () => {
  //   navigation.navigate('Login');
  // };

  // const onRegisterPress = () => {
  //   if (password !== confirmPassword) {
  //     alert("Passwords don't match.");
  //     return;
  //   }

  //   firebase
  //     .auth()
  //     .createUserWithEmailAndPassword(email, password)
  //     .then((response) => {
  //       const uid = response.user.uid;
  //       const data = {
  //         id: uid,
  //         email,
  //         fullName,
  //       };
  //       const usersRef = firebase.firestore().collection('users');
  //       usersRef
  //         .doc(uid)
  //         .set(data)
  //         .then(() => {
  //           navigation.navigate('Home', {user: data});
  //         })
  //         .catch((error) => {
  //           alert(error);
  //         });
  //     })
  //     .catch((error) => {
  //       alert(error);
  //     });
  // };

  return (
    <View style={styles.background}>
      <View style={styles.form}>
        <Image source={SplashImg} style={styles.logo} />
        <TextInput
          style={styles.input}
          placeholder={'Nama Lengkap'}
          onChangeText={(text) => setFullName(text)}
          value={fullName}
        />
        <TextInput
          style={styles.input}
          placeholder={'NIK'}
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <TextInput
          style={styles.input}
          placeholder={'Password'}
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
        <TextInput
          style={styles.input}
          placeholder={'Konfirmasi Password'}
          secureTextEntry={true}
          onChangeText={(text) => setConfirmPassword(text)}
          value={confirmPassword}
        />
        <View style={styles.checkbox}>
          <CheckBox value={isSelected} onValueChange={setSelection} />
          <Text style={styles.label}>
            Saya Menyetujui Syarat Ketentua dan Kebijakan Privasi
          </Text>
        </View>
        <TouchableOpacity style={styles.btn} onPress={() => onRegisterPress()}>
          <Text style={styles.btnText}>Daftar</Text>
        </TouchableOpacity>
        <Text
          style={styles.help}
          onPress={() => {
            navigation.navigate('Login');
          }}>
          Sudah Punya Akun ? Login Disini !
        </Text>
        <Text style={styles.help}>Bantuan</Text>
      </View>
    </View>
  );
};

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
export default Register;
