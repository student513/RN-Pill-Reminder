/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {MyToggleButton, MyTableButton} from 'components/MyButton';
import {setCycleStore} from 'store/SetCycle';
import DateTimePicker from '@react-native-community/datetimepicker';
import {observer} from 'mobx-react';

const {height, width} = Dimensions.get('window');

interface IState {
  isEndRepeat: boolean;
}

@observer
class EndRepeat extends Component<{}, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      isEndRepeat: false,
    };
  }

  toggleEndRepeat = () => {
    this.setState((prevState) => ({
      isEndRepeat: !prevState.isEndRepeat,
    }));
  };
  render() {
    const {isEndRepeat} = this.state;
    return (
      <View style={styles.content}>
        <MyToggleButton
          icon="sync-circle-outline"
          title="End Repeat"
          style={{borderRadius: 6, marginBottom: 25}}
          onValueChange={() => {
            this.toggleEndRepeat();
            setCycleStore.toggleEndRepeat();
          }}
          value={isEndRepeat}
        />
        {isEndRepeat ? (
          <View>
            <MyTableButton
              title="End Repeat Date"
              style={{
                borderRadius: 6,
                marginBottom: 1,
              }}
              onPress={() => setCycleStore.showDatepicker()}
              remark={setCycleStore.ParsedEndTime}
            />
            {setCycleStore.showDate && (
              <DateTimePicker
                value={setCycleStore.EndTime}
                mode={setCycleStore.mode}
                is24Hour={true}
                display="default"
                onChange={setCycleStore.onChangeEndTime}
              />
            )}
          </View>
        ) : (
          <View />
        )}
      </View>
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
});

export default EndRepeat;
