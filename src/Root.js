import React, { Component } from 'react';
import { Navigator, BackAndroid } from 'react-native';
import HomeScreen from './HomeScreen';

// defined keys for the screens in the app
export const SCREENS = {
  HOME: 'home',
};

let _navigator;

BackAndroid.addEventListener('hardwareBackPress', () => {
    if (_navigator && _navigator.getCurrentRoutes().length === 1) {
      return false;
    }
    _navigator.pop();
    return true;
  }
);

class Root extends Component {
  constructor(props) {
    super(props);
    this.navigate = this.navigate.bind(this);
  }

  navigate(route, navigator) {
    _navigator = navigator;
    const config = {
      navigator,
    };

    switch (route.id) {
      case SCREENS.HOME:
        return (<HomeScreen {...config} {...route.props} />);
    }
  }

  render() {
    return (<Navigator initialRoute={{id: SCREENS.HOME}} renderScene={this.navigate} />);
  }
}

export default Root;
