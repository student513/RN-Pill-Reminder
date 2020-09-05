import Modal from 'react-native-modal';
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TouchableHighlight} from 'react-native';
import {MyText} from '../MyText';
import Icon from 'react-native-vector-icons/Ionicons';
import {COLOR} from '../../helper/helper';

interface SetTypeModalProps {
  showModal: boolean;
}

export const SetTypeModal: React.FC<SetTypeModalProps> = (props) => {
  return (
    <View style={styles.content}>
      <View style={styles.contentTitle}>
        <MyText>Please select the type of reminder.</MyText>
      </View>
      <View style={styles.button}>
        <TouchableHighlight
        underlayColor={COLOR.TOUCH_GREEN}
          onPress={() => {
            props.navigation.navigate('Add', {type: 'Cycle'});
          }}>
          <MyText style={styles.buttonContent}>
            <Icon
              name="sync-circle-outline"
              color={COLOR.FONT_GREEN}
              size={15}
            />
            Set Cycle
          </MyText>
        </TouchableHighlight>
        <TouchableHighlight
        underlayColor={COLOR.TOUCH_GREEN}
          onPress={() => {
            props.navigation.navigate('Add', {type: 'DayTime'});
          }}>
          <MyText style={styles.buttonContent}>
            <Icon
              name="list-circle-outline"
              color={COLOR.FONT_GREEN}
              size={15}
            />
            Select Day & Time
          </MyText>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    backgroundColor: 'white',
    paddingBottom: 40,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  button: {
    alignContent: 'flex-start',
    // backgroundColor: COLOR.TOUCH_GREEN,
  },
  contentTitle: {
    display: 'flex',
    alignItems: 'center',
    margin: 40,
  },
  buttonContent: {
    color: COLOR.FONT_GREEN,
    padding: 15,
  },
});
