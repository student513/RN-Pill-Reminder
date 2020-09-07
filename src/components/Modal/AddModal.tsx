/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {MyText, MyTextInput} from '../MyText';
import Modal from 'react-native-modal';
import {TouchableOpacity} from 'react-native';
import {COLOR} from 'helper';
import {observer} from 'mobx-react';
import {setCycleStore} from 'store/SetCycle';
import {controlModalStore} from 'store';

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
        <View style={styles.content}>
          <View style={styles.modalHeader}>
            <TouchableOpacity
              onPress={() => controlModalStore.toggleAddModalVisible()}>
              <MyText style={{color: COLOR.FONT_GREEN, fontSize: 16}}>
                Cancel
              </MyText>
            </TouchableOpacity>
            <MyText>Detail</MyText>
            <TouchableOpacity>
              <MyText style={{color: COLOR.FONT_GREEN, fontSize: 16}}>
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
        </View>
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
});

export default AddModal;
