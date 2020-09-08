import React from 'react';
import {View, StyleSheet, TouchableHighlight} from 'react-native';
import {MyText} from 'components/MyText';
import Icon from 'react-native-vector-icons/Ionicons';
import {COLOR} from 'helper/helper';
import Modal from 'react-native-modal';
import {controlModalStore} from 'store/ControlModal';
import { setCycleStore } from 'store';

interface SetTypeModalProps {
  isVisible: boolean;
  onSwipeComplete: Function;
  swipeDirection: string[];
  backdropOpacity: number;
  onBackdropPress: Function;
  style: any;
}

export const SetTypeModal: React.FC<SetTypeModalProps> = (props) => {
  return (
    <Modal
      isVisible={props.isVisible}
      onSwipeComplete={() => props.onSwipeComplete()}
      swipeDirection={['down']}
      style={{justifyContent: 'flex-end', margin: 0}}
      backdropOpacity={0.5}
      onBackdropPress={() => props.onBackdropPress()}>
      <View style={styles.content}>
        <View style={styles.contentTitle}>
          <MyText>Please select the type of reminder.</MyText>
        </View>
        <View style={styles.button}>
          <TouchableHighlight
            underlayColor={COLOR.TOUCH_GREEN}
            onPress={() => {
              controlModalStore.toggleSetTypeModalVisible(); //this modal off
              controlModalStore.toggleSelectSetCycle(); //add modal type set
              controlModalStore.toggleAddModalVisible(); //open add modal
              setCycleStore.init();
            }}>
            <MyText style={styles.buttonContent}>
              <Icon
                name="sync-circle-outline"
                color={COLOR.FONT_GREEN}
                size={15}
              />
              Set Cycle
              <Icon
                name="chevron-forward-outline"
                size={20}
                style={styles.chevron}
              />
            </MyText>
          </TouchableHighlight>
          <TouchableHighlight
            underlayColor={COLOR.TOUCH_GREEN}
            onPress={() => {
              controlModalStore.toggleSetTypeModalVisible();
              controlModalStore.toggleSelectDayTime();
              controlModalStore.toggleAddModalVisible();
            }}>
            <MyText style={styles.buttonContent}>
              <Icon
                name="list-circle-outline"
                color={COLOR.FONT_GREEN}
                size={15}
              />
              Select Day & Time
              <Icon
                name="chevron-forward-outline"
                size={20}
                style={styles.chevron}
              />
            </MyText>
          </TouchableHighlight>
        </View>
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
  },
  button: {
    alignContent: 'flex-start',
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
  chevron: {
    color: COLOR.FONT_GREEN,
    paddingTop: 18,
    justifyContent: 'flex-end',
  },
});
