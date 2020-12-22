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
import {DeleteButton, MyTableButton, MyToggleButton} from 'components/MyButton';
import DateTimePicker from '@react-native-community/datetimepicker';
import {pillListStore} from 'store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {CyclePillInfo} from 'helper';

const {height} = Dimensions.get('window');

interface IProps {
  navigation: object;
  id?: number;
}

@observer
class SetCycleView extends Component<IProps, {}> {
  constructor(props: any) {
    super(props);
  }
  deleteCard = (key?: number) => {
    pillListStore.deleteObject(
      pillListStore.CardList.filter((card) => card.key !== key),
    );
    this.props.navigation.navigate('Reminder');
  };
  storeData = async (pill: CyclePillInfo) => {
    try {
      const pillList = await AsyncStorage.getItem('pillList');
      if (pillList) {
        const parsedPillList = JSON.parse(pillList);
        parsedPillList.push(pill);
        await AsyncStorage.setItem('pillList', JSON.stringify(parsedPillList));
      }
    } catch (e) {
      console.log('error: ', e);
    }
  };
  pushCardList = () => {
    pillListStore.updatePillId();
    const pillObject = {
      id: pillListStore.PillId,
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
      NextTime: setCycleStore.StartTime,
    };
    pillListStore.CardList.push(pillObject);
    this.storeData(pillObject);
  };
  componentDidMount = () => {
    this.props.navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          style={{marginRight: 15}}
          onPress={() => {
            this.pushCardList();
            this.props.navigation.goBack();
            this.props.id ? this.deleteCard(this.props.id) : null;
          }}>
          <MyText style={{fontFamily: 'ProximaNova-Bold', color: '#13A45B'}}>
            Done
          </MyText>
        </TouchableOpacity>
      ),
    });
  };
  render() {
    return (
      <ScrollView style={styles.content}>
        <MyTextInput
          label="Name"
          placeholder="Medication name"
          onChangeText={(text: string) => setCycleStore.onChangeName(text)}
          value={setCycleStore.Name}
        />
        <MyTextInput
          label="Dosage"
          placeholder="e.g. 2 Tablets, 30 mL"
          onChangeText={(text: string) => setCycleStore.onChangeDosage(text)}
          value={setCycleStore.Dosage}
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
            minimumDate={new Date()}
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

        {this.props.id ? (
          <DeleteButton
            onPress={() => {
              this.deleteCard(this.props.id);
            }}
          />
        ) : (
          <View />
        )}
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
