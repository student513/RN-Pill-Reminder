/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {MyText, MyTextInput, MyTableButton, MyToggleButton} from '../MyText';
import Modal from 'react-native-modal';
import {TouchableOpacity} from 'react-native';
import {COLOR} from 'helper';
import {observer} from 'mobx-react';
import {setCycleStore} from 'store/SetCycle';
import {controlModalStore} from 'store';
import {ScrollView} from 'react-native-gesture-handler';

const {height} = Dimensions.get('window');

interface AddModalProps {
  isVisible: boolean;
  onSwipeComplete: Function;
  swipeDirection: string[];
  backdropOpacity: number;
  onBackdropPress: Function;
  style: any;
}

@observer
class AddModal extends Component<AddModalProps, {}> {
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <Modal
        isVisible={this.props.isVisible}
        onSwipeComplete={() => this.props.onSwipeComplete()}
        swipeDirection={['down']}
        style={{justifyContent: 'flex-end', margin: 0}}
        backdropOpacity={0.5}
        onBackdropPress={() => this.props.onBackdropPress()}>
        <ScrollView style={styles.content}>
          <View style={styles.modalHeader}>
            <TouchableOpacity
              onPress={() => controlModalStore.toggleAddModalVisible()}>
              <MyText style={{color: COLOR.FONT_GREEN, fontSize: 16}}>
                Cancel
              </MyText>
            </TouchableOpacity>
            <MyText style={{fontFamily: 'ProximaNova-Bold'}}>Detail</MyText>
            <TouchableOpacity>
              <MyText
                style={{
                  color: COLOR.FONT_GREEN,
                  fontSize: 16,
                  fontFamily: 'ProximaNova-Bold',
                }}>
                Done
              </MyText>
            </TouchableOpacity>
          </View>
          <MyTextInput
            label="Name"
            placeholder="Medication name"
            onChangeText={(text: string) => setCycleStore.onChangeName(text)}
          />
          <MyTextInput
            label="Dosage"
            placeholder="e.g. 2 Tablets, 30 mL"
            onChangeText={(text: string) => setCycleStore.onChangeName(text)}
          />
          <MyTableButton
            icon="time-outline"
            title="Start Time"
            style={{
              borderTopLeftRadius: 6,
              borderTopRightRadius: 6,
              marginBottom: 1,
            }}
          />
          <MyTableButton
            icon="sync-circle-outline"
            title="Repeat"
            style={{
              marginBottom: 1,
            }}
          />
          <MyTableButton
            icon="stop-circle-outline"
            title="End Repeat"
            style={{
              borderBottomLeftRadius: 6,
              borderBottomRightRadius: 6,
              marginBottom: 20,
            }}
          />
          <MyToggleButton
            icon="moon-outline"
            title="Bedtime"
            style={{
              borderRadius: 6,
            }}
          />
          <MyText style={styles.notice}>
            Turn this on if you don't want to receive reminders while you are in
            bed.
          </MyText>
          <MyToggleButton
            icon="notifications-outline"
            title="Critical"
            style={{
              borderRadius: 6,
            }}
          />
          <MyText style={styles.notice}>
            Critical alerts allows the app to ring the notification sound even when your phone is in silent or do not disturb mode.
          </MyText>
          {/* <TouchableOpacity onPress={() => console.log(setCycleStore.NextTime)}>
            <MyText>ddddddd</MyText>
          </TouchableOpacity> */}
        </ScrollView>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: 'white',
    paddingBottom: 40,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    height: height * 0.9,
    padding: 15,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 35,
  },
  notice: {
    fontSize: 11,
    color: '#5B5B5B',
    marginBottom: 25,
    paddingLeft: 2,
  },
});

export default AddModal;
