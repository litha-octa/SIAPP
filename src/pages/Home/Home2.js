import React from 'react';
import {View, ScrollView ,Text,TouchableOpacity, Image, StyleSheet, SafeAreaView} from 'react-native';
import { Banner , Warning, cctvIcon} from '../../assets/img';

const Home = () => {
  return (
    <SafeAreaView style={styles.body}>
      <ScrollView style={styles.scrollBar}>
        <View>
          {/* MODEL LA</ScrollView>YOUT 1 */}
          <View>
            <View style={styles.navbar}>
              <TouchableOpacity>
                <Text style={styles.itemNavbar}>Chatku</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.itemNavbar}>Sepakatgram</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.itemNavbar}>Zoomku</Text>
              </TouchableOpacity>
            </View>
            <Image source={Banner} style={styles.banner} />

            <TouchableOpacity style={styles.panic}>
              <Image source={Warning} style={styles.Icon} />
              <Text style={styles.panicText}>Panic Alert !!!</Text>
            </TouchableOpacity>
            <View style={styles.container}>
              <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnText}>BISA</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnText}>BIMA</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.cctv}>
              <Text style={styles.cctvText}>CCTV</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Home;
const styles = StyleSheet.create({
  body: {
    backgroundColor: 'white',
    flex: 1,
  },
  scrollBar: {
    backgroundColor: 'white',
  },
  navbar: {
    backgroundColor: '#a10b3a',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 15,
    paddingBottom: 15,
  },
  itemNavbar: {
    color: 'white',
    fontFamily: 'Arial',
    fontWeight: 'bold',
  },
  banner: {
    width: '100%',
    height: 230,
    marginTop:5,
    resizeMode: 'contain',
  },
  panic: {
    backgroundColor: 'gold',
    width: '45%',
    height:200,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf:'center',
    borderRadius:10,
  },
  panicText: {
    fontFamily: 'Arial',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
  },
  cctvText: {
    fontFamily: 'Arial',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  Icon: {
    resizeMode: 'contain',
    width: '30%',
    height: '30%',
  },
  cctv: {
    width: '100%',
    marginRight: '4%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#a10b3a',
    marginTop:90,
  },
  container: {
    height:200,
    marginTop: '2%',
    backgroundColor: '#a10b3a',
    display: 'flex',
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'space-around',
  },
  btn: {
    backgroundColor: 'white',
    width: '25%',
    height: 50,
    borderRadius: 10,
    padding: '2%',
  },
  btnText: {
    color: '#a10b3a',
    fontFamily: 'Arial',
    fontWeight: 'bold',
    fontSize: 23,
    textDecorationLine: 'underline',
    textAlign: 'center',
  },
});
