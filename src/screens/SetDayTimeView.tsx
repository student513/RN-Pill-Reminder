/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {MyText, MyTextInput} from '../components/MyText';
import {observer} from 'mobx-react';
import {setDayTimeStore} from 'store/SetDayTime';
import {MyTableButton, MyToggleButton} from 'components/MyButton';
import DateTimePicker from '@react-native-community/datetimepicker';
import {pillListStore} from 'store';
import moment from 'moment';

const {height} = Dimensions.get('window');

@observer
class SetDayTimeView extends Component<{navigation: any}, {}> {
  constructor(props: any) {
    super(props);
  }
  pushCardList = () => {
    pillListStore.updatePillKey();
    pillListStore.CardList.push({
      key: pillListStore.PillKey,
      PillType: 'DayTime',
      Name: setDayTimeStore.Name,
      Dosage: setDayTimeStore.Dosage,
      Time: setDayTimeStore.Time,
      EndTime: setDayTimeStore.EndTime,
      isEndRepeat: setDayTimeStore.isEndRepeat,
      EndRepeat: setDayTimeStore.EndRepeat,
      ParsedEndTime: setDayTimeStore.ParsedEndTime,
      Critical: setDayTimeStore.Critical,
    });
  };

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
          onChangeText={(text: string) => setDayTimeStore.onChangeDosage(text)}
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
          remark={moment.parseZone(setDayTimeStore.Time).format('LT')}
        />
        {setDayTimeStore.showTime && (
          <DateTimePicker
            value={setDayTimeStore.Time}
            mode={setDayTimeStore.mode}
            is24Hour={true}
            display="spinner"
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
        <TouchableOpacity
          style={{marginBottom: 30}}
          onPress={() => {
            this.pushCardList();
            this.props.navigation.goBack();
            console.log(pillListStore.CardList);
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

export default SetDayTimeView;
