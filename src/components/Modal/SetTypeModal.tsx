import Modal from 'react-native-modal';
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { MyText } from '../MyText';

interface SetTypeModalProps {
  showModal: boolean;
}

export const SetTypeModal: React.FC<SetTypeModalProps> = (props) => {
  return (
    <View style={styles.content}>
      <MyText>Please select the type of reminder.</MyText>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('Add', {type: 'Cycle'});
        }}>
        <MyText>Set Cycle</MyText>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('Add', {type: 'DayTime'});
        }}>
        <MyText>Select Day & Time </MyText>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  contentTitle: {
    fontSize: 20,
    marginBottom: 12,
  },
});
