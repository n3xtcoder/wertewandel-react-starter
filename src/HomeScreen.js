import React, { Component } from 'react';
import { StyleSheet, Text, Image, Dimensions, TouchableHighlight } from 'react-native';
import ScreenWrapper from './ScreenWrapper';

// Assets
import LogoImage from './res/Logo.png';
import CameraIcon from './res/CameraIcon.png';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: null,
    height: null,
    resizeMode: 'cover',
  },
  welcomeText: {
    color: '#ffffff',
    padding: 20,
  },
  logo: {
    width,
    marginTop: 50,
    marginBottom: 50,
    height: 100,
    resizeMode: 'contain',
  },
  button: {
    backgroundColor: 'rgba(0,0,0,0)',
    marginTop: 50,
  },
  buttonImage: {
    width: 50,
    height: 50,
  }
});

class HomeScreen extends Component {

  render() {
    return (
      <ScreenWrapper hasToolbar={false} navigator={this.props.navigator} style={{alignItems: 'center'}}>
        <Image source={LogoImage} style={styles.logo} />
        <Text style={styles.welcomeText}>Welcome on the N3xtcoder React Native workshop.</Text>
        <TouchableHighlight style={styles.button} underlayColor="rgba(0, 0, 0, 0)">
          <Image source={CameraIcon} style={styles.buttonImage} />
        </TouchableHighlight>
      </ScreenWrapper>
    );
  }
}

export default HomeScreen;
