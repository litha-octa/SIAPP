import React, {useState, useRef} from 'react';
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
  Modal,
  TextInput,
  Pressable,
} from 'react-native';
import {
  Banner,
  Banner2,
  Banner3,
  Warning,
  SplashImg,
  cctvIcon,
  WA,
  ZOOM,
  IG,
  Bisa,
} from '../../assets';
import ImageSlider from 'react-native-image-slider';

const Home = ({navigation}) => {
  const Images = [Banner, Banner2, Banner3];
  const [inShown, setInShown] = useState(false);
  const [search, setSearch] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const dummyName = 'jhon doe';

  const scrollViewRef = useRef();

  const shownHandler = () => {
    if (inShown === false) {
      setInShown(true);
    } else {
      setInShown(false);
    }
  };

  const autoScroll = () => {
    //  let offset = 0;
    // //  if(inShown === false){
    //  setInterval(() => {
    //    offset += 50;
    //    scrollViewRef.current?.scrollToEnd({x: 0, y: offset, animated: true});
    //  }, 1000);
    // }
    // else{
    //   setInterval(() => {
    //    offset += 50;
    //    scrollViewRef.scrollTo({ animated: true},0);
    //   }
    // }
  };
  return (
    <SafeAreaView style={styles.body}>
      <ScrollView style={styles.scrollBar} ref={scrollViewRef}>
        <View style={styles.navbar}>
          <Image source={SplashImg} style={styles.iconNavbar} />
          <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
            <Icon
              name="user"
              size={30}
              color={modalVisible === false ? 'grey' : '#ed4343'}
              style={{marginLeft: 190, marginTop: 10}}
            />
          </TouchableOpacity>
        </View>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.modalCover}>
            <View style={styles.modal}>
              <Text style={styles.modalText}>Profile</Text>
              <Text
                style={styles.modalText}
                onPress={() => {
                  setModalVisible(!modalVisible), navigation.navigate('Login');
                }}>
                Log Out
              </Text>
              <Pressable
                style={{marginTop: 2, backgroundColor: 'maroon'}}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text
                  style={{
                    color: 'white',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    fontSize: 15,
                  }}>
                  Close X
                </Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <View style={{height: 'auto', paddingHorizontal: 30, paddingTop: 1}}>
          <Text style={{fontSize: 25, fontFamily: 'arial', color: 'black'}}>
            Selamat Datang,
          </Text>
          <Text
            style={{
              fontSize: 25,
              fontFamily: 'arial',
              color: 'black',
              fontWeight: 'bold',
              textTransform: 'capitalize',
            }}>
            {dummyName}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            padding: 10,
          }}>
          <TextInput
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 2,
              width: '87%',
              borderRadius: 15,
              height: 40,
              fontSize: 15,
            }}
            placeholder={'Cari Sesuatu Disini !'}
            value={search}
            onChange={(text) => setSearch(text)}
          />
          <Icon
            name="search"
            size={30}
            color={'black'}
            style={styles.searchIcon}
            onPress={() => setSearch('')}
          />
        </View>
        <ImageSlider
          loopBothSides
          autoPlayWithInterval={2000}
          images={Images}
          customSlide={({index, item, style, width}) => (
            // It's important to put style here because it's got offset inside
            <View
              key={index}
              style={{
                flex: 1,
                width: '100%',
                padding: 5,
                backgroundColor: 'maroon',
              }}>
              <Image
                source={item}
                style={{
                  resizeMode: 'contain',
                  width: 400,
                  height: 200,
                  backgroundColor: 'maroon',
                }}
              />
            </View>
          )}
        />
        <View style={{height: 'auto', paddingHorizontal: 30, paddingTop: 20}}>
          <Text
            style={{
              fontSize: 15,
              fontFamily: 'arial',
              color: 'black',
              fontWeight: 'bold',
            }}>
            Hubungi Kami :
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginTop: 15,
            }}>
            <TouchableOpacity style={styles.contactBy}>
              <Image source={WA} style={styles.iconNavbar2} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.contactBy}>
              <Icon name="instagram-square" size={40} color="#ed4343" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.contactBy}>
              <Image source={ZOOM} style={styles.iconNavbar2} />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
          }}>
          <TouchableOpacity onPress={shownHandler} style={styles.panic}>
            <Image source={Warning} style={styles.Icon} />
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
              <Icon name="phone" size={10} color="maroon" /> -- Pem. Kebakaran
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            backgroundColor: '#d73a3a',
          }}>
          <TouchableOpacity
            style={styles.card}
            onPress={() => {
              navigation.navigate('CovidTrack');
            }}>
            <Image source={Bisa} style={styles.bimaLogoBig} />
            <View style={{width: '102%', backgroundColor: 'maroon'}}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 20,
                  color: 'white',
                  textAlign: 'center',
                }}>
                BISA
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.card}
            onPress={() => {
              navigation.navigate('CovidTrack');
            }}>
            <Image source={Bisa} style={styles.bimaLogoBig} />
            <View style={{width: '102%', backgroundColor: 'maroon'}}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 20,
                  color: 'white',
                  textAlign: 'center',
                }}>
                BIMA
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.container}>
          {/* <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              navigation.navigate('CovidTrack');
            }}>
            <Icon name="chart-line" size={40} color={'maroon'} />
            <Text style={styles.btnText}>BISA</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              navigation.navigate('CovidTrack');
            }}>
            {/* <Image source={Bisa} style={styles.bimaLogo} /> 
            <Icon name="chart-line" size={40} color={'maroon'} />
            <Text style={styles.btnText}>BIMA</Text>
          </TouchableOpacity> */}
          <TouchableOpacity style={styles.btn}>
            <Image source={cctvIcon} style={styles.bimaLogo} />
            <Text style={styles.btnText}>CCTV</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Home;
const styles = StyleSheet.create({
  contactBy: {
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    // borderColor:'maroon',
    borderColor: '#fb8a8a',
    borderRadius: 10,
  },
  body: {
    backgroundColor: 'white',
    flex: 1,
    height: '100%',
    width: '100%',
  },
  searchIcon: {
    marginLeft: 5,
    width: '10%',
    borderRadius: 10,
    justifyContent: 'center',
    paddingTop: 5,
    paddingHorizontal: 5,
  },
  scrollBar: {
    backgroundColor: 'white',
  },
  navbar: {
    display: 'flex',
    flexDirection: 'row',
    padding: 5,
    shadowColor: 'grey',
  },
  navbarContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 100,
    width: 150,
    height: 40,
    marginTop: 7,
    justifyContent: 'space-between',
  },
  itemNavbar: {
    color: 'white',
    fontFamily: 'Arial',
    fontWeight: 'bold',
  },
  iconNavbar: {
    resizeMode: 'contain',
    width: 160,
    height: 85,
    marginLeft: 5,
  },
  iconNavbar2: {
    resizeMode: 'contain',
    width: 40,
    height: 35,
    marginLeft: 5,
    marginTop: 3,
  },
  modal: {
    backgroundColor: 'white',
    width: '25%',
    height: 'auto',
    marginLeft: '72%',
    marginTop: '15%',
    padding: 5,
    // borderColor: 'maroon',
    // borderWidth: 2,
    borderRadius: 5,
  },
  modalCover: {
    backgroundColor: 'rgba(50, 49, 49,0.4)',
    width: '100%',
    height: '100%',
  },
  modalText: {
    fontSize: 18,
    fontFamily: 'arial',
    borderBottomWidth: 2,
    borderBottomColor: 'maroon',
    marginTop: 10,
    marginHorizontal: 5,
  },

  banner: {
    width: '100%',
    height: 230,
    marginTop: 5,
    resizeMode: 'contain',
  },
  panic: {
    backgroundColor: 'white',
    width: '50%',
    height: 120,
    borderRadius: 10,
    paddingVertical: '10%',
    paddingHorizontal: '5%',
    justifyContent: 'center',
    alignItems: 'center',
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
    fontSize: 20,
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
    width: 60,
    height: 60,
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
    height: '20%',
    backgroundColor: 'maroon',
    display: 'flex',
    flexDirection: 'row',
    padding: '2%',
    marginTop: 10,
    justifyContent: 'space-between',
  },
  btn: {
    backgroundColor: 'white',
    // backgroundColor:'transparent',
    width: '99%',
    height: 85,
    borderRadius: 6,
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
  bimaLogoBig: {
    resizeMode: 'contain',
    height: 100,
    width: 140,
  },
  card: {
    width: '40%',
    height: 'auto',
    paddingTop: 15,
    paddingHorizontal: 5,
    alignItems: 'center',
    marginHorizontal: 5,
    borderRadius: 10,
  },
});
