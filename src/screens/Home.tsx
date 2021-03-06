import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  Dimensions,
} from 'react-native';

const screen = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4F6D7A',
    flex: 1,
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    position: 'absolute',
    width: screen.width * 0.25,
    height: screen.width * 0.25,
  },
  logoBackground: {
    width: screen.width * 0.45,
    height: screen.width * 0.45,
  },
});

const Home = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#4F6D7A" />
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/images/background.png')}
          style={styles.logoBackground}
          resizeMode="contain"
        />
        <Image
          source={require('../assets/images/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

export default Home;
