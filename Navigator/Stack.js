import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Tab from './Tab';

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Tab" component={Tab} />
    </Stack.Navigator>
  );
}