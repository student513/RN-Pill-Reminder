import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Tab from './Tab';
import Detail from 'screens/Detail';
import Repeat from 'screens/Repeat';

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Tab" component={Tab} />
      <Stack.Screen name="Detail" component={Detail} />
      <Stack.Screen name="Repeat" component={Repeat} />
    </Stack.Navigator>
  );
}