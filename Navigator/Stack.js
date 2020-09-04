import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Tab from './Tab';
import Detail from '../src/screens/Detail';
import Add from '../src/screens/Add';

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Tab" component={Tab} />
      <Stack.Screen name="Add" component={Add} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
}