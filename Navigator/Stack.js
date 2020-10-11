import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Tab from './Tab';
import Details from 'screens/Details';
import Repeat from 'screens/Repeat';
import EndRepeat from 'screens/EndRepeat';
import Day from 'screens/Day';

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Tab" component={Tab} options={{headerShown: false}} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="Repeat" component={Repeat} />
      <Stack.Screen name="EndRepeat" component={EndRepeat} />
      <Stack.Screen name="Day" component={Day} />
    </Stack.Navigator>
  );
}