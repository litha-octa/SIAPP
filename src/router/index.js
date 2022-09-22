import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {BottomNavigator} from '../components/BottomNavigator';

import {
  NyakuKomIcon,
  NewLogo,
  HomeIcon,
  PersonSearch,
  AkunkuIcon,
} from '../assets';
import {
  Splash,
  Login,
  Home,
  Register,
  Nyaku,
  NyakuKom,
  Akunku,
  CovidTrack,
} from '../pages';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const homeName = 'Home';
const nyakuName = 'Nyaku';
const nyakuKomName = 'NyakuKom';
const akunkuName = 'Akunku';

const MainApp = () => {
  return (
    <Tab.Navigator
      initialRouteName={MainApp}
      tabBarOptions={{
        activeTintColor: 'white',
        inactiveTintColor: 'white',
        labelStyle: {paddingBottom: 10, fontSize: 15, fontWeight: 'bold'},
        style: {padding: 10, height: 80, backgroundColor: '#E62129'},
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color}) => (
            <Image source={HomeIcon} style={styles.iconBottom} />
          ),
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen
        name="Nyaku"
        component={Nyaku}
        options={{
          tabBarIcon: ({color}) => (
            <Image source={NewLogo} style={styles.iconBottom} />
          ),
          tabBarLabel: 'Nyaku',
        }}
      />
      <Tab.Screen
        name="NyakuKom"
        component={NyakuKom}
        options={{
          tabBarIcon: ({color}) => (
            <Image source={NyakuKomIcon} style={styles.iconBottom} />
          ),
          tabBarLabel: 'Nyaku Komunitas',
        }}
      />
      <Tab.Screen
        name="Akunku"
        component={Akunku}
        options={{
          tabBarIcon: ({color}) => (
            <Image source={AkunkuIcon} style={styles.iconBottom} />
          ),
          tabBarLabel: 'Akunku',
        }}
      />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CovidTrack"
        component={CovidTrack}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;

const styles = StyleSheet.create({
  iconBottom:{
      width:45,
      height:45,
  }
});
