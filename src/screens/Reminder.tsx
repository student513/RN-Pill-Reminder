import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {SetTypeModal, AddModal} from 'components/Modal';
import {MyText, MyTextInput} from 'components/MyText';
import {observer} from 'mobx-react';
import {controlModalStore} from 'store/ControlModal';
import {TextInput} from 'react-native-paper';
import {FormHelperText } from '@material-ui/core';

interface IProps {
  navigation: any;
}
interface IState {}

@observer
class Reminder extends Component<IProps, IState> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            controlModalStore.toggleSetTypeModalVisible();
          }}>
          <MyText style={{fontSize: 30}}>Add</MyText>
        </TouchableOpacity>
        <TextInput/>
        <SetTypeModal
          isVisible={controlModalStore.setTypeModalVisible}
          onSwipeComplete={() => controlModalStore.toggleSetTypeModalVisible()}
          swipeDirection={['down']}
          style={styles.modal}
          backdropOpacity={0.5}
          onBackdropPress={() => controlModalStore.toggleSetTypeModalVisible()}
        />
        <AddModal
          isVisible={controlModalStore.addModalVisible}
          onSwipeComplete={() => controlModalStore.toggleAddModalVisible()}
          swipeDirection={['down']}
          style={styles.modal}
          backdropOpacity={0.5}
          onBackdropPress={() => controlModalStore.toggleAddModalVisible()}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
});

export default Reminder;
