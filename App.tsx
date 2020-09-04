import React from 'react';
import {
  StyleSheet,
  StatusBar,
} from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Stack from './Navigator/Stack'

const App = ({}) => {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
