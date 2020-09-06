import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {MyText, MyTextInput} from '../MyText';
import Icon from 'react-native-vector-icons/Ionicons';
import {COLOR} from '../../helper/helper';
import Modal from 'react-native-modal';
import {controlModalStore} from '../../store/ControlModal';

const {height} = Dimensions.get('window');

interface AddModalProps {
  isVisible: boolean;
  onSwipeComplete: Function;
  swipeDirection: string[];
  backdropOpacity: number;
  onBackdropPress: Function;
  style: any;
}

export const AddModal: React.FC<AddModalProps> = (props) => {
  return (
    <Modal
      isVisible={props.isVisible}
      onSwipeComplete={() => props.onSwipeComplete()}
      swipeDirection={['down']}
      style={{justifyContent: 'flex-end', margin: 0}}
      backdropOpacity={0.5}
      onBackdropPress={() => props.onBackdropPress()}>
      <View style={styles.content}>
        <MyTextInput
          textColor="#0F0F0F"
          //   containerStyle={style.textInputContainer}
          editable={true}
          value=""
          placeHolder="Medication name"
          autoFocus={false}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  content: {
    backgroundColor: 'white',
    paddingBottom: 40,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    height: height * 0.9,
  },
});
