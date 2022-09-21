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
  CustService,
  NewLogo,
  Bima,
  Bisa,
  Cctv,
  Chat,
  Video,
  Bigram,
} from '../../assets';
import ImageSlider from 'react-native-image-slider';

const Home = ({navigation}) => {
  //const Images = [Banner, Banner2, Banner3];
  const dummyName = 'Litha Hopkins';
  return (
    <View style={styles.body}>
      <View style={styles.header}>
        <View style={styles.headerTextCon}>
          <Text style={styles.headerText}>Hello,</Text>
          <Text style={styles.headerText}>{dummyName}</Text>
        </View>
        <Image source={CustService} style={styles.headerIcon} />
      </View>

      <ScrollView>
        <View style={styles.app}>
          <Image source={NewLogo} style={styles.appLogo} />
          <Text style={styles.appName}>e-FORKOPIMDA SEPAKAT</Text>
        </View>

        <View style={styles.bannerContainer}>
          <Text>SLIDING IMAGE HERE</Text>
        </View>

        <View style={styles.menuContainer}>
          <View style={styles.row}>
            <TouchableOpacity style={styles.menuItem}>
              <View style={styles.iconCon}>
                <Image source={Bisa} style={styles.menuIcon3} />
              </View>
              <Text style={styles.menuText}>BISA</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
              <View style={styles.iconCon}>
                <Image source={Bima}
                style={styles.menuIcon2} 
                />
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
                <Image source={Video} style={styles.menuIcon} />
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
          <Text>Bitung Live Streaming</Text>
          {/* <Image/> dummy yutub image here */}
        </View>
      </ScrollView>
    </View>
  );
};
export default Home;
const styles = StyleSheet.create({
  body: {},
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
});
