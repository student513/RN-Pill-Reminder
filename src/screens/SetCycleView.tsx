/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {MyText, MyTextInput} from '../components/MyText';
import {observer} from 'mobx-react';
import {setCycleStore} from 'store/SetCycle';
import {MyTableButton, MyToggleButton} from 'components/MyButton';
import DateTimePicker from '@react-native-community/datetimepicker';
import {pillListStore} from 'store';

const {height} = Dimensions.get('window');

@observer
class SetCycleView extends Component<{}, {}> {
  constructor(props: any) {
    super(props);
  }

  pushCardList = () => {
    pillListStore.updatePillKey();
    pillListStore.CardList.push({
      key: pillListStore.PillKey,
      PillType: 'Cycle',
      Name: setCycleStore.Name,
      Dosage: setCycleStore.Dosage,
      StartTime: setCycleStore.StartTime,
      EndTime: setCycleStore.EndTime,
      ParsedStartTime: setCycleStore.ParsedStartTime,
      isEndRepeat: setCycleStore.isEndRepeat,
      EndRepeat: setCycleStore.EndRepeat,
      ParsedEndTime: setCycleStore.ParsedEndTime,
      isRepeat: setCycleStore.isRepeat,
      frequency: setCycleStore.frequency,
      every: setCycleStore.every,
      Bedtime: setCycleStore.Bedtime,
      Critical: setCycleStore.Critical,
    });
  };

  render() {
    return (
      <ScrollView style={styles.content}>
        <MyTextInput
          label="Name"
          placeholder="Medication name"
          onChangeText={(text: string) => setCycleStore.onChangeName(text)}
        />
        <MyTextInput
          label="Dosage"
          placeholder="e.g. 2 Tablets, 30 mL"
          onChangeText={(text: string) => setCycleStore.onChangeDosage(text)}
        />
        <MyTableButton
          icon="time-outline"
          title="Start Time"
          style={{
            borderTopLeftRadius: 6,
            borderTopRightRadius: 6,
            marginBottom: 1,
          }}
          onPress={() => {
            setCycleStore.showTimepicker();
          }}
          remark={setCycleStore.ParsedStartTime}
        />
        {setCycleStore.showTime && (
          <DateTimePicker
            value={setCycleStore.StartTime}
            mode={Platform.OS === 'android' ? setCycleStore.mode : 'datetime'}
            is24Hour={true}
            display={Platform.OS === 'ios' ? 'inline' : 'default'}
            onChange={setCycleStore.onChangeStartTime}
          />
        )}
        <MyTableButton
          icon="sync-circle-outline"
          title="Repeat"
          style={{
            marginBottom: 1,
          }}
          onPress={() => {
            this.props.navigation.navigate('Repeat');
          }}
          remark={
            setCycleStore.isRepeat
              ? 'Every ' + `${setCycleStore.every} ${setCycleStore.frequency}`
              : ''
          }
        />
        <MyTableButton
          icon="stop-circle-outline"
          title="End Repeat"
          style={{
            borderBottomLeftRadius: 6,
            borderBottomRightRadius: 6,
            marginBottom: 20,
          }}
          onPress={() => {
            this.props.navigation.navigate('EndRepeat', {type: 'cycle'});
          }}
          remark={
            setCycleStore.isEndRepeat ? setCycleStore.ParsedEndTime : 'Never'
          }
        />
        {setCycleStore.Critical ? (
          <View />
        ) : (
          <MyToggleButton
            icon="moon-outline"
            title="Bedtime"
            style={{
              borderRadius: 6,
            }}
            onValueChange={() => {
              setCycleStore.toggleBedtime();
            }}
            value={setCycleStore.Bedtime}
            description="Turn this on if you don't want to receive reminders while you are in bed."
          />
        )}
        {setCycleStore.Bedtime ? (
          <View />
        ) : (
          <MyToggleButton
            icon="notifications-outline"
            title="Critical"
            style={{borderRadius: 6}}
            onValueChange={() => {
              setCycleStore.toggleCritical();
            }}
            value={setCycleStore.Critical}
            description="Critical alerts allows the app to ring the notification sound even when your phone is in silent or do not disturb mode."
          />
        )}
        <TouchableOpacity
          style={{marginBottom: 30}}
          onPress={() => {
            this.pushCardList();
            this.props.navigation.goBack();
            // console.log(pillListStore.CardList);
          }}>
          <MyText>Done</MyText>
        </TouchableOpacity>
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

export default SetCycleView;
