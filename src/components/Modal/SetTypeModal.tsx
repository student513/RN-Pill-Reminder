import React from 'react';
import {View, StyleSheet, TouchableHighlight} from 'react-native';
import {MyText} from 'components/MyText';
import Icon from 'react-native-vector-icons/Ionicons';
import {COLOR} from 'helper/helper';
import Modal from 'react-native-modal';
import {controlModalStore} from 'store/ControlModal';
import {setCycleStore} from 'store';
import { observer } from 'mobx-react';

interface SetTypeModalProps {
  isVisible: boolean;
  onSwipeComplete: Function;
  swipeDirection: string[];
  backdropOpacity: number;
  onBackdropPress: Function;
  style: any;
  navigation: any;
}

@observer
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
        <View style={{alignContent: 'flex-start'}}>
          <TouchableHighlight
            underlayColor={COLOR.TOUCH_GREEN}
            onPress={() => {
              controlModalStore.toggleSetTypeModalVisible(); //this modal off
              controlModalStore.setSelectSetCycle(); //add modal type set
              setCycleStore.parseDateToString();
              setCycleStore.updateTime();
              props.navigation.navigate('Detail');
            }}>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <Icon
                name="sync-circle-outline"
                color={COLOR.FONT_GREEN}
                size={22}
                style={styles.roundIcon}
              />
              <MyText style={styles.buttonContent}>Set Cycle</MyText>
              <Icon
                name="chevron-forward-outline"
                size={20}
                style={styles.chevron}
              />
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            underlayColor={COLOR.TOUCH_GREEN}
            onPress={() => {
              controlModalStore.toggleSetTypeModalVisible();
              controlModalStore.setSelectDayTime();
              setCycleStore.parseDateToString();
              setCycleStore.updateTime();
              props.navigation.navigate('Detail');
            }}>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <Icon
                name="list-circle-outline"
                color={COLOR.FONT_GREEN}
                size={22}
                style={styles.roundIcon}
              />
              <MyText style={styles.buttonContent}>Select Day & Time</MyText>
              <Icon
                name="chevron-forward-outline"
                size={20}
                style={styles.chevron}
              />
            </View>
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
  contentTitle: {
    display: 'flex',
    alignItems: 'center',
    margin: 40,
  },
  buttonContent: {
    color: COLOR.FONT_GREEN,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 5,
  },
  roundIcon: {
    paddingTop: 18,
    paddingLeft: 15,
  },
  chevron: {
    color: COLOR.FONT_GREEN,
    paddingTop: 18,
    position: 'absolute',
    left: 300,
  },
});
