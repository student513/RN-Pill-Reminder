import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import Modal from 'react-native-modal';
import {SetTypeModal} from '../components/Modal/SetTypeModal';
import {MyText} from '../components/MyText';

interface IProps {}
interface IState {
  modalVisible: boolean;
}

class Reminder extends Component<IProps, IState> {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
    };
  }

  toggleModalVisible() {
    this.state.modalVisible
      ? this.setState({modalVisible: false})
      : this.setState({modalVisible: true});
  }

  render() {
    const {modalVisible} = this.state;

    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            this.toggleModalVisible();
            console.log(modalVisible);
          }}>
          <MyText style={{fontSize: 30}}>Add</MyText>
        </TouchableOpacity>

        <TouchableWithoutFeedback
          onPress={() => {
            this.setState({modalVisible: false});
          }}>
          <Modal
            isVisible={modalVisible}
            onSwipeComplete={() => this.toggleModalVisible()}
            swipeDirection={['down']}
            style={styles.view}
            backdropOpacity={0.5}
            onBackdropPress={() => this.toggleModalVisible()}>
            <SetTypeModal onPress={() => this.toggleModalVisible()} />
          </Modal>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  view: {
    justifyContent: 'flex-end',
    margin: 0,
  },
});

export default Reminder;
