import {observable, action} from 'mobx';
import {createContext} from 'react';
import {Time, ymdDate, RePeat} from 'helper/interface';
import {Platform} from 'react-native';
import moment from 'moment';

class SetCycleStore {
  @observable Name: string = '';
  @observable Dosage: string = '';
  @observable nowTime: Date = new Date(); // StartTime, EndRepeat에 파싱하기 전 날짜 정보
  @observable StartTime: string = '';
  @observable isEndRepeat: boolean = false;
  @observable EndRepeat: string = '';
  @observable isRepeat: boolean = false;
  @observable Repeat: RePeat = null;
  @observable Bedtime: boolean = false;
  @observable Critical: boolean = false;
  @observable Timing: string = '';
  @observable NextTime: {
    date: number;
    time: Time;
    repeat: RePeat;
  } = null;

  // DateTime Picker variable
  @observable show: boolean = false;
  @observable mode: string = 'date';

  @action
  init = () => {
    this.Name = '';
    this.Dosage = '';
    // this.nowTime = new Date();
    this.StartTime = '';
    this.isEndRepeat = false;
    this.EndRepeat = '';
    this.isRepeat = false;
    this.Repeat = null;
    this.Bedtime = false;
    this.Critical = false;
    this.Timing = '';
    this.NextTime = null;
    this.show = false;
    this.mode = 'date';
  };

  @action
  onChangeName = (Name: string) => {
    this.Name = Name;
  };
  @action
  toggleBedtime = () => {
    if (!this.Bedtime) {
      this.Bedtime = true;
    } else {
      this.Bedtime = false;
    }
  };
  @action
  toggleCritical = () => {
    if (!this.Critical) {
      this.Critical = true;
    } else {
      this.Critical = false;
    }
  };
  // Date Time picker function
  @action
  onChange = (event: Event, selectedDate?: Date) => {
    const currentDate = selectedDate || this.nowTime;
    this.show = Platform.OS === 'ios';
    this.nowTime = currentDate;
    this.parseDateToString();
  };
  @action
  showMode = (currentMode: string) => {
    this.show = true;
    this.mode = currentMode;
  };
  @action
  showDatepicker = () => {
    this.show = true;
    this.mode = 'date';
  };
  @action
  showTimepicker = () => {
    this.show = true;
    this.mode = 'time';
  };
  @action
  parseDateToString = () => {
    this.StartTime = moment.parseZone(this.nowTime).format('ddd,MMM D,LT');
    this.EndRepeat = moment.parseZone(this.nowTime).format('ddd,MMM D,LT');
  };
  @action
  updateTime = () => {
    this.nowTime = new Date();
    console.log(this.nowTime)
  };
}

export const setCycleStore = new SetCycleStore();
export const SetCycleStoreContext = createContext(setCycleStore);
