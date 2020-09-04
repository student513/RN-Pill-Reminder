import React, {useEffect} from 'react';
import {Platform} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Reminder from '../src/screens/Reminder'
import Setting from '../src/screens/Setting'
import Calendar from '../src/screens/Calendar'

const Tab = createBottomTabNavigator()

const getHeaderName = (route) =>
  route?.state?.routeNames[route.state.index] || 'Reminder'

export default ({navigation, route}) => {
  useEffect(() => {
    navigation.setOptions({
      title: getHeaderName(route)
    })
  }, [route])

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          let iconName = Platform.OS === 'ios' ? 'ios-' : 'md-'
          if (route.name === 'Reminder') {
            iconName += 'alarm-outline'
          } else if (route.name === 'Calendar') {
            iconName += 'calendar-outline'
          } else if (route.name === 'Setting') {
            iconName += 'cog-outline'
          }
          return (
            <Icon
              name={iconName}
              color={focused ? '#13A45B' : '#BDBDBD'}
              size={26}
            />
          )
        }
      })}
      tabBarOptions={{
        // showLabel: false,//tab의 label을 안보이게
        // tab label color
        activeTintColor: '#13A45B',
        inactiveTintColor: '#BDBDBD',
        style: {
          // backgroundColor:'black',
          // borderTopColor:'black',
        }
      }}
      >
      <Tab.Screen name="Reminder" component={Reminder} />
      <Tab.Screen name="Calendar" component={Calendar} />
      <Tab.Screen name="Setting" component={Setting} />
    </Tab.Navigator>
  )
};
