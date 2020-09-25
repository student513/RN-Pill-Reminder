import {observable, action} from 'mobx';
import {createContext} from 'react';
import {Platform} from 'react-native';
import moment from 'moment';

class SetCycleStore {
  @observable Name: string = '';
  @observable Dosage: string = '';
  @observable StartTime: Date = new Date(); // StartTime, EndRepeat에 파싱하기 전 날짜 정보
  @observable EndTime: Date = new Date();
  @observable ParsedStartTime: string = '';
  @observable isEndRepeat: boolean = false;
  @observable EndRepeat: string = '';
  @observable ParsedEndTime: string = '';
  @observable isRepeat: boolean = false;
  @observable frequency: string = 'Daily';
  @observable every: number = 1;
  @observable Bedtime: boolean = false;
  @observable Critical: boolean = false;
  @observable Timing: string = '';
  @observable NextTime: Date = new Date();

  // DateTime Picker variable
  @observable showTime: boolean = false;
  @observable showDate: boolean = false;
  @observable mode: string = 'date';

  @action
  initCycle = () => {
    this.Name = '';
    this.Dosage = '';
    this.StartTime = new Date();
    this.EndTime = new Date();
    this.isEndRepeat = false;
    this.EndRepeat = '';
    this.isRepeat = false;
    this.frequency = 'Daily';
    this.every = 1;
    this.Bedtime = false;
    this.Critical = false;
    this.parseDateToString();
  }

  @action
  onChangeName = (Name: string) => {
    this.Name = Name;
  };
  @action
  toggleRepeat = () => {
    if (!this.isRepeat) {
      this.isRepeat = true;
    } else {
      this.isRepeat = false;
    }
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
  @action
  toggleEndRepeat = () => {
    if (!this.isEndRepeat) {
      this.isEndRepeat = true;
    } else {
      this.isEndRepeat = false;
    }
  };
  // Date Time picker function
  @action
  onChangeStartTime = (event: Event, selectedDate?: Date) => {
    const currentDate = selectedDate || this.StartTime;
    this.showTime = Platform.OS === 'ios';
    this.StartTime = currentDate;
    this.ParsedStartTime = moment
      .parseZone(this.StartTime)
      .format('ddd,MMM D,LT');
  };
  @action
  onChangeEndTime = (event: Event, selectedDate?: Date) => {
    const currentDate = selectedDate || this.EndTime;
    this.showDate = Platform.OS === 'ios';
    this.EndTime = currentDate;
    this.ParsedEndTime = moment
      .parseZone(this.EndTime)
      .format('ddd,MMM D,YYYY');
  };
  @action
  showDatepicker = () => {
    this.showDate = true;
    this.mode = 'date';
  };
  @action
  showTimepicker = () => {
    this.showTime = true;
    this.mode = 'time';
  };
  @action
  parseDateToString = () => {
    this.ParsedStartTime = moment
      .parseZone(this.StartTime)
      .format('ddd,MMM D,LT');
    this.ParsedEndTime = moment
      .parseZone(this.EndTime)
      .format('ddd,MMM D,YYYY');
  };
  @action
  updateTime = () => {
    this.StartTime = new Date();
    this.EndTime = new Date();
  };
  //Repeat picker function
  setFrequency = (itemValue: string) => {
    this.frequency = itemValue;
  };
  setEvery = (itemValue: number) => {
    this.every = itemValue;
  };
}

export const setCycleStore = new SetCycleStore();
export const SetCycleStoreContext = createContext(setCycleStore);
