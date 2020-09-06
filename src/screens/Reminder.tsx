import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {SetTypeModal} from '../components/Modal/SetTypeModal';
import {MyText} from 'components/MyText';
import {observer} from 'mobx-react';
import {controlModalStore} from '../store/ControlModal';

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

        <SetTypeModal
          isVisible={controlModalStore.setTypeModalVisible}
          onSwipeComplete={() => controlModalStore.toggleSetTypeModalVisible()}
          swipeDirection={['down']}
          style={styles.view}
          backdropOpacity={0.5}
          onBackdropPress={() => controlModalStore.toggleSetTypeModalVisible()}
        />
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
