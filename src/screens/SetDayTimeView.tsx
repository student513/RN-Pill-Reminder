/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {MyText, MyTextInput} from '../components/MyText';
import {observer} from 'mobx-react';
import {setDayTimeStore} from 'store/SetDayTime';
import {DeleteButton, MyTableButton, MyToggleButton} from 'components/MyButton';
import DateTimePicker from '@react-native-community/datetimepicker';
import {pillListStore} from 'store';
import moment from 'moment';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {DayTimePillInfo} from 'helper';

const {height} = Dimensions.get('window');

interface IProps {
  navigation: any;
  id?: number;
}

@observer
class SetDayTimeView extends Component<IProps, {}> {
  constructor(props: any) {
    super(props);
  }
  deleteCard = async (id?: number) => {
    const pillList = await AsyncStorage.getItem('pillList');
    if (pillList) {
      let parsedPillList = JSON.parse(pillList);
      parsedPillList = parsedPillList.filter((card: any) => card.id !== id);
      await AsyncStorage.setItem('pillList', JSON.stringify(parsedPillList));
      console.log(parsedPillList);
    } else {
      console.log('error: Fail to delete pillCard');
    }
    this.props.navigation.navigate('Reminder');
  };
  storeData = async (pill: DayTimePillInfo) => {
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
      PillType: 'DayTime',
      Name: setDayTimeStore.Name,
      Dosage: setDayTimeStore.Dosage,
      Time: setDayTimeStore.Time,
      EndTime: setDayTimeStore.EndTime,
      isEndRepeat: setDayTimeStore.isEndRepeat,
      EndRepeat: setDayTimeStore.EndRepeat,
      ParsedEndTime: setDayTimeStore.ParsedEndTime,
      Critical: setDayTimeStore.Critical,
      NextTime: setDayTimeStore.Time,
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
          onChangeText={(text: string) => setDayTimeStore.onChangeName(text)}
          value={setDayTimeStore.Name}
        />
        <MyTextInput
          label="Dosage"
          placeholder="e.g. 2 Tablets, 30 mL"
          onChangeText={(text: string) => setDayTimeStore.onChangeDosage(text)}
          value={setDayTimeStore.Dosage}
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

        {this.props.id ? (
          <DeleteButton onPress={() => this.deleteCard(this.props.id)} />
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

export default SetDayTimeView;
