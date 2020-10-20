import {observable, action} from 'mobx';
import {createContext} from 'react';
import {Platform} from 'react-native';
import moment from 'moment';
import {CyclePillInfo} from 'helper';

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

  @observable showTime: boolean = false;
  @observable showDate: boolean = false;
  @observable mode: string = 'date';

  @action
  initCycle = (Key?: number, Card?: CyclePillInfo) => {
    Key ? (this.Name = Card?.Name) : (this.Name = '');
    Key ? (this.Dosage = Card?.Dosage) : (this.Dosage = '');
    Key ? (this.StartTime = Card?.StartTime) : (this.StartTime = new Date());
    Key ? (this.EndTime = Card?.EndTime) : (this.EndTime = new Date());
    Key ? (this.isEndRepeat = Card?.isEndRepeat) : (this.isEndRepeat = false);
    Key ? (this.EndRepeat = Card?.EndRepeat) : (this.EndRepeat = '');
    Key ? (this.isRepeat = Card?.isRepeat) : (this.isRepeat = false);
    Key ? (this.frequency = Card?.frequency) : (this.frequency = 'Daily');
    Key ? (this.every = Card?.every) : (this.every = 1);
    Key ? (this.Bedtime = Card?.Bedtime) : (this.Bedtime = false);
    Key ? (this.Critical = Card?.Critical) : (this.Critical = false);
    this.showDate = false;
    this.showTime = false;
    this.parseDateToString();
  };

  @action
  onChangeName = (Name: string) => {
    this.Name = Name;
  };
  @action
  onChangeDosage = (Dosage: string) => {
    this.Dosage = Dosage;
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
  @action
  offEndRepeat = () => {
    this.isEndRepeat = false;
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
    if (this.showDate) {
      this.showDate = false;
    } else {
      this.showDate = true;
    }
    this.mode = 'date';
  };
  @action
  showTimepicker = () => {
    if (this.showTime) {
      this.showTime = false;
    } else {
      this.showTime = true;
    }
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
