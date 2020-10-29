/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, StyleSheet, Dimensions, Platform} from 'react-native';
import {MyToggleButton, MyTableButton} from 'components/MyButton';
import {setCycleStore} from 'store/SetCycle';
import DateTimePicker from '@react-native-community/datetimepicker';
import {observer} from 'mobx-react';
import {setDayTimeStore} from 'store';

const {height} = Dimensions.get('window');

@observer
class EndRepeat extends Component<{route: any}, {}> {
  constructor(props: any) {
    super(props);
  }
  componentDidMount = () => {
    this.props.route.params.type === 'cycle'
      ? setDayTimeStore.offEndRepeat()
      : setCycleStore.offEndRepeat();
  };
  render() {
    return (
      <View style={styles.content}>
        <MyToggleButton
          icon="sync-circle-outline"
          title="End Repeat"
          style={{borderRadius: 6, marginBottom: 25}}
          onValueChange={() => {
            this.props.route.params.type === 'cycle'
              ? setCycleStore.toggleEndRepeat()
              : setDayTimeStore.toggleEndRepeat();
          }}
          value={
            this.props.route.params.type === 'cycle'
              ? setCycleStore.isEndRepeat
              : setDayTimeStore.isEndRepeat
          }
        />
        {setCycleStore.isEndRepeat && (
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
                mode={
                  Platform.OS === 'android' ? setCycleStore.mode : 'datetime'
                }
                is24Hour={true}
                display={Platform.OS === 'ios' ? 'inline' : 'default'}
                onChange={setCycleStore.onChangeEndTime}
              />
            )}
          </View>
        )}
        {setDayTimeStore.isEndRepeat && (
          <View>
            <MyTableButton
              title="End Repeat Date"
              style={{
                borderRadius: 6,
                marginBottom: 1,
              }}
              onPress={() => setDayTimeStore.showDatepicker()}
              remark={setDayTimeStore.ParsedEndTime}
            />
            {setDayTimeStore.showDate && (
              <DateTimePicker
                value={setDayTimeStore.EndTime}
                mode={setDayTimeStore.mode}
                is24Hour={true}
                display={Platform.OS === 'ios' ? 'inline' : 'default'}
                onChange={setDayTimeStore.onChangeEndTime}
              />
            )}
          </View>
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
