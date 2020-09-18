import {observable, action} from 'mobx';
import {createContext} from 'react';
import {RePeat} from 'helper/interface';
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
  @observable Repeat: RePeat = null;
  @observable Bedtime: boolean = false;
  @observable Critical: boolean = false;
  @observable Timing: string = '';
  @observable NextTime: Date = new Date();

  // DateTime Picker variable
  @observable showTime: boolean = false;
  @observable showDate: boolean = false;
  @observable mode: string = 'date';

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
}

export const setCycleStore = new SetCycleStore();
export const SetCycleStoreContext = createContext(setCycleStore);
