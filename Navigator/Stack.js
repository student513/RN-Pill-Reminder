import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Tab from './Tab';
import {TimePicker} from '../src/components/Picker/TimePicker'

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Tab" component={Tab} />
      <Stack.Screen name="Picker" component={TimePicker} />
    </Stack.Navigator>
  );
}