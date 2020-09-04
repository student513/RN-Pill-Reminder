import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Stack from './Navigator/Stack'

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
