import {observable, action} from 'mobx';
import {createContext} from 'react';
import {Platform} from 'react-native';
import moment from 'moment';
import {DayTimePillInfo} from 'helper';

class SetDayTimeStore {
  @observable Name: string = '';
  @observable Dosage: string = '';
  @observable Time: Date = new Date();
  @observable EndTime: Date = new Date();
  @observable ParsedTime: string = '';
  @observable isEndRepeat: boolean = false;
  @observable EndRepeat: string = '';
  @observable ParsedEndTime: string = '';
  @observable Critical: boolean = false;

  @observable Timing: string = '';
  @observable NextTime: Date = new Date();
  @observable Week: object[] = [];

  @observable showTime: boolean = false;
  @observable showDate: boolean = false;
  @observable mode: string = 'date';

  @action
  initDayTime = (Key?: number, Card?: DayTimePillInfo) => {
    Key ? (this.Name = Card?.Name) : (this.Name = '');
    Key ? (this.Dosage = Card?.Dosage) : (this.Dosage = '');
    Key ? (this.Time = Card?.Time) : (this.Time = new Date());
    Key ? (this.EndTime = Card?.EndTime) : (this.EndTime = new Date());
    Key ? (this.isEndRepeat = Card?.isEndRepeat) : (this.isEndRepeat = false);
    Key ? (this.EndRepeat = Card?.EndRepeat) : (this.EndRepeat = '');
    Key ? (this.Critical = Card?.Critical) : (this.Critical = false);
    this.showTime = false;
    this.showDate = false;
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
  onChangeTime = (event: Event, selectedDate?: Date) => {
    const currentDate = selectedDate || this.Time;
    this.showTime = Platform.OS === 'ios';
    this.Time = currentDate;
    this.ParsedTime = moment.parseZone(this.Time).format('LT');
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
    this.ParsedTime = moment.parseZone(this.Time).format('ddd,MMM D,LT');
    this.ParsedEndTime = moment
      .parseZone(this.EndTime)
      .format('ddd,MMM D,YYYY');
  };
  @action
  updateTime = () => {
    this.Time = new Date();
    this.EndTime = new Date();
  };
}

export const setDayTimeStore = new SetDayTimeStore();
export const setDayTimeStoreContext = createContext(setDayTimeStore);
