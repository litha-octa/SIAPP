import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Linking,
  SafeAreaView,
} from 'react-native';
import {
  Banner,
  Banner2,
  Banner3,
  Warning,
  SplashImg,
  cctvIcon,
} from '../../assets';

const Home = ({navigation}) => {
  const Images = [Banner, Banner2, Banner3];
  const iconsize = 30;
  const [inShown, setInShown] = useState(false);
  const shownHandler = () => {
    if (inShown === false) {
      setInShown(true);
    } else {
      setInShown(false);
    }
  };
  return (
    <SafeAreaView style={styles.body}>
      <ScrollView style={styles.scrollBar}>
        <View>
          {/* MODEL LA</ScrollView>YOUT 1 */}
          <View>
            <View style={styles.navbar}>
              <Image source={SplashImg} style={styles.iconNavbar} />
              <View style={styles.navbarContainer}>
                <TouchableOpacity
                  onPress={() => Linking.openURL('https://web.whatsapp.com')}>
                  <Icon name="whatsapp-square" size={iconsize} color="maroon" />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => Linking.openURL('https://www.instagram.com')}>
                  <Icon
                    name="instagram-square"
                    size={iconsize}
                    color="maroon"
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Icon name="vimeo-square" size={iconsize} color="maroon" />
                  {/* <Image source={ZOOM} style={styles.iconNavbar} /> */}
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Login');
                  }}>
                  <Icon
                    name="angle-double-right"
                    size={iconsize}
                    color="maroon"
                  />
                </TouchableOpacity>
              </View>
            </View>
            <ScrollView
              style={{flex: 1,width:'100%', marginBottom:50,}}
              pagingEnabled={true}
              horizontal={true}
              scrollEventThrottle={20}>
              {Images.map((img) => {
                return <Image source={img} style={{resizeMode:'contain',width:410,height:200,backgroundColor:'maroon'}} />;
              })}
            </ScrollView>
            <View
              style={{
                backgroundColor: 'gold',
                justifyContent: 'center',
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'row',
              }}>
              <TouchableOpacity onPress={shownHandler} style={styles.panic}>
                <Image source={Warning} style={styles.Icon} />
                <Text style={styles.panicText}>Panic Alert !!!</Text>
              </TouchableOpacity>

              <View
                style={
                  inShown === false
                    ? styles.hiddenPanicOption
                    : styles.shownPanicOption
                }>
                <Text style={styles.option}>
                  <Icon name="phone" size={10} color="maroon" />
                  -- Ambulance
                </Text>
                <Text style={styles.option}>
                  <Icon name="phone" size={10} color="maroon" />
                  -- Polisi
                </Text>
                <Text style={styles.option}>
                  <Icon name="phone" size={10} color="maroon" /> -- Pemadam
                  Kebakaran
                </Text>
              </View>
            </View>

            <TouchableOpacity style={styles.cctv}>
              <Image source={cctvIcon} style={styles.bimaLogo} />
              <Text style={styles.cctvText}>CCTV</Text>
            </TouchableOpacity>

            <View style={styles.container}>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => {
                  navigation.navigate('CovidTrack');
                }}>
                {/* <Image source={Bisa} style={styles.bimaLogo} /> */}

                <Icon name="chart-line" size={40} color={'maroon'} />
                <Text style={styles.btnText}>BISA</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.btn}
                onPress={() => {
                  navigation.navigate('CovidTrack');
                }}>
                {/* <Image source={Bisa} style={styles.bimaLogo} /> */}
                <Icon name="chart-line" size={40} color={'maroon'} />
                <Text style={styles.btnText}>BIMA</Text>
              </TouchableOpacity>
            </View>
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
    borderBottomWidth: 2,
    borderBottomColor: 'maroon',
    display: 'flex',
    flexDirection: 'row',
    padding: 5,
    shadowColor: 'grey',
  },
  navbarContainer: {
    justifyContent: 'space-around',
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 170,
    width: 120,
  },
  itemNavbar: {
    color: 'white',
    fontFamily: 'Arial',
    fontWeight: 'bold',
  },
  iconNavbar: {
    resizeMode: 'contain',
    width: 110,
    height: 45,
    marginLeft: 5,
  },
  banner: {
    width: '100%',
    height: 230,
    marginTop: 5,
    resizeMode: 'contain',
  },
  panicOpen: {
    backgroundColor: 'gold',
    width: '50%',
    height: 150,
    borderRadius: 10,
    paddingVertical: '10%',
    paddingHorizontal: '5%',
  },
  panic: {
    backgroundColor: 'gold',
    width: '50%',
    height: 150,
    borderRadius: 10,
    paddingVertical: '10%',
    paddingHorizontal: '5%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  panicText: {
    fontFamily: 'Arial',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
  },
  hiddenPanicOption: {
    display: 'none',
  },
  shownPanicOption: {
    width: '50%',
    height: 150,
    paddingVertical: 20,
    paddingHorizontal: 5,
  },
  option: {
    fontFamily: 'arial',
    fontSize: 15,
    fontWeight: 'bold',
    color: 'maroon',
    textDecorationStyle: 'solid',
    marginBottom: 10,
  },
  cctvText: {
    fontFamily: 'Arial',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  Icon: {
    resizeMode: 'contain',
    width: 40,
    height: 40,
    marginLeft: '5%',
  },
  cctv: {
    width: '100%',
    marginRight: '4%',
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth: 2,
    // borderColor: '#a10b3a',
  },
  container: {
    height: 110,
    marginTop: '3%',
    backgroundColor: 'maroon',
    display: 'flex',
    flexDirection: 'row',
    padding: '2%',
    justifyContent: 'space-between',
  },
  btn: {
    backgroundColor: 'white',
    width: '35%',
    height: 90,
    borderRadius: 10,
    alignItems: 'center',
  },
  btnText: {
    color: 'maroon',
    fontFamily: 'Arial',
    fontWeight: 'bold',
    fontSize: 23,
    textDecorationLine: 'underline',
    textAlign: 'center',
  },
  bimaLogo: {
    resizeMode: 'contain',
    height: 50,
    width: 70,
  },
});
