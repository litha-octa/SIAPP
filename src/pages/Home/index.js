import React, {useState, useRef, useEffect} from 'react';
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
  CustService,
  NewLogo,
  Bima,
  Bisa,
  Cctv,
  Chat,
  VideoIcon,
  Bigram,
} from '../../assets';

import Slideshow from 'react-native-image-slider-show';
// import Video from 'react-native-video';

const Home = ({navigation}) => {
  const [position, setPosition] = useState(0);
  const images = [
    {
      url: 'https://tse1.mm.bing.net/th?id=OIP.Ernc83TFTsteiVqI5NnjsAHaEK&pid=Api&P=0',
    },
    {
      url: 'https://tse4.mm.bing.net/th?id=OIP.rrAttrEyzAjM-tM9qMgkYgHaEK&pid=Api&P=0',
    },
    {
      url: 'https://beritaterkini.co.id/wp-content/uploads/2020/09/IMG-20200929-WA0062.jpg',
    },
    {
      url: 'https://tse1.mm.bing.net/th?id=OIP.F6thZ6l9Pf0yHgw704cgGgHaEA&pid=Api&P=0',
    },
  ];
  useEffect(() => {
    const toggle = setInterval(() => {
      setPosition(position === images.length - 1 ? 0 : position + 1);
    }, 3000);

    return () => clearInterval(toggle);
  });
  const dummyName = 'Litha Hopkins';
  return (
    <View style={styles.body}>
      <ScrollView>
        <View style={styles.header}>
          <View style={styles.headerTextCon}>
            <Text style={styles.headerText}>Hello,</Text>
            <Text style={styles.headerText}>{dummyName}</Text>
          </View>
          <Image source={CustService} style={styles.headerIcon} />
        </View>

        <View style={styles.app}>
          <Image source={NewLogo} style={styles.appLogo} />
          <Text style={styles.appName}>e-FORKOPIMDA SEPAKAT</Text>
        </View>

        <View style={styles.bannerContainer}>
          <Slideshow
            position={position}
            dataSource={images}
            style={styles.slider}
          />
        </View>

        <View style={styles.menuContainer}>
          <View style={styles.row}>
            <TouchableOpacity style={styles.menuItem}>
              {/* onPress={navigation.navigate('CovidTrack')}> */}
              <View style={styles.iconCon}>
                <Image source={Bisa} style={styles.menuIcon3} />
              </View>
              <Text style={styles.menuText}>BISA</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
              {/* onPress={navigation.navigate('CovidTrack')}> */}
              <View style={styles.iconCon}>
                <Image source={Bima} style={styles.menuIcon2} />
              </View>
              <Text style={styles.menuText}>BIMA</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
              <View style={styles.iconCon}>
                <Image source={Chat} style={styles.menuIcon} />
              </View>
              <Text style={styles.menuText}>ChatApps</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.menuItem}>
              <View style={styles.iconCon}>
                <Image source={Bigram} style={styles.menuIcon} />
              </View>
              <Text style={styles.menuText}>BIGRAM</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
              <View style={styles.iconCon}>
                <Image source={VideoIcon} style={styles.menuIcon} />
              </View>
              <Text style={styles.menuText}>JUMKU</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
              <View style={styles.iconCon}>
                <Image source={Cctv} style={styles.menuIcon} />
              </View>
              <Text style={styles.menuText}>CCTV</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.videoSec}>
          <Text style={styles.videoSecText}>Bitung Live Streaming</Text>
          <View 
          style={{
            backgroundColor:'grey',
            width:'94%',
            height: 100,
            alignSelf:'center',
            marginVertical:15,
            borderRadius:15,

            }}>

          </View>
          {/* <Video
            source={{url: 'https://www.youtube.com/watch?v=8zktRU92AOo'}} // the video file
            paused={true} // make it start
            // style={styles.backgroundVideo} // any style you want
            repeat={true} // make it a loop
          /> */}
          {/* <Image/> dummy yutub image here */}
        </View>
      </ScrollView>
    </View>
  );
};
export default Home;
const styles = StyleSheet.create({
  body: {
    width: '100%',
  },
  header: {
    backgroundColor: '#E30D0D',
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  headerTextCon: {
    width: '50%',
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerIcon: {
    marginLeft: '36%',
  },
  app: {
    backgroundColor: '#E30D0D',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 100,
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30,
  },
  appLogo: {
    resizeMode: 'contain',
    width: 120,
    height: 120,
  },
  appName: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },

  bannerContainer: {
    marginTop: -80,
    width: '92%',
    height: 'auto',
    alignSelf: 'center',
  },
  slider: {
    borderRadius: 20,
  },

  menuContainer: {
    width: '100%',
    height: 'auto',
    paddingHorizontal: '1%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: '3%',
  },
  menuItem: {
    width: '29%',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 15,
    shadowColor: 'black',
    shadowOpacity: 0.9,
    elevation: 10,
  },
  iconCon: {
    backgroundColor: '#BA1010',
    alignSelf: 'center',
    width: '60%',
    borderRadius: 80,
  },
  menuIcon: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 40,
    height: 60,
  },
  menuIcon2: {
    resizeMode: 'contain',
    width: 65,
    height: 65,
    marginTop: -5,
    marginLeft: -3,
  },
  menuIcon3: {
    resizeMode: 'contain',
    width: 60,
    height: 60,
  },
  menuText: {
    textAlign: 'center',
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black',
  },
  videoSecText:{
    marginHorizontal: 15,
    marginTop:20,
    fontSize:20,
    fontWeight:'bold',
    color:'grey',
  },
});
