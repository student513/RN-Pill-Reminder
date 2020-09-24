/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, StyleSheet, Dimensions, ScrollView} from 'react-native';
import {MyTextInput} from '../components/MyText';
import {observer} from 'mobx-react';
import {setDayTimeStore} from 'store/SetDayTime';
import {MyTableButton, MyToggleButton} from 'components/MyButton';
import DateTimePicker from '@react-native-community/datetimepicker';

const {height} = Dimensions.get('window');

@observer
class SetDayTimeView extends Component<{navigation: any}, {}> {
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <ScrollView style={styles.content}>
        <MyTextInput
          label="Name"
          placeholder="Medication name"
          onChangeText={(text: string) => setDayTimeStore.onChangeName(text)}
        />
        <MyTextInput
          label="Dosage"
          placeholder="e.g. 2 Tablets, 30 mL"
          onChangeText={(text: string) => setDayTimeStore.onChangeName(text)}
        />
        <MyTableButton
          icon="sync-circle-outline"
          title="Day"
          style={{
            marginBottom: 1,
          }}
          onPress={() => {
            this.props.navigation.navigate('Day');
          }}
          remark={}
        />
        <MyTableButton
          icon="time-outline"
          title="Time"
          style={{
            marginBottom: 1,
          }}
          onPress={() => {
            setDayTimeStore.showTimepicker();
          }}
          remark={setDayTimeStore.ParsedTime}
        />
        {setDayTimeStore.showTime && (
          <DateTimePicker
            value={setDayTimeStore.Time}
            mode={setDayTimeStore.mode}
            is24Hour={true}
            display="default"
            onChange={setDayTimeStore.onChangeTime}
          />
        )}
        <MyTableButton
          icon="stop-circle-outline"
          title="End Repeat"
          style={{
            borderBottomLeftRadius: 6,
            borderBottomRightRadius: 6,
            marginBottom: 20,
          }}
          onPress={() => {
            this.props.navigation.navigate('EndRepeat', {type: 'daytime'});
          }}
          remark={
            setDayTimeStore.isEndRepeat
              ? setDayTimeStore.ParsedEndTime
              : 'Never'
          }
        />
        <MyToggleButton
          icon="notifications-outline"
          title="Critical"
          style={{borderRadius: 6}}
          onValueChange={() => {
            setDayTimeStore.toggleCritical();
          }}
          value={setDayTimeStore.Critical}
          description="Critical alerts allows the app to ring the notification sound even when your phone is in silent or do not disturb mode."
        />
      </ScrollView>
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

export default SetDayTimeView;
