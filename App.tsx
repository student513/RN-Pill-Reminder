import React from 'react';
import {StatusBar} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import Stack from './Navigator/Stack';

const App = ({}) => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <Stack />
    </NavigationContainer>
  );
};

export default App;
