import {observable, action} from 'mobx';
import {createContext} from 'react';
import {Time, ymdDate, RePeat} from 'helper/interface';
import {Platform} from 'react-native';

class SetCycleStore {
  @observable Name: string = '';
  @observable Dosage: string = '';
  @observable StartTime: Time = null;
  @observable isEndRepeat: boolean = false;
  @observable EndRepeat: Date = new Date();
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
    this.StartTime = null; //현재 시간 함수로 assign되나?
    this.isEndRepeat = new Date();
    this.EndRepeat = null;
    this.isRepeat = false;
    this.Repeat = null;
    this.Bedtime = false;
    this.Critical = false;
    this.Timing = '';
    this.NextTime = null;
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
    const currentDate = selectedDate || this.EndRepeat;
    this.show = Platform.OS === 'ios';
    this.EndRepeat = currentDate;
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
}

export const setCycleStore = new SetCycleStore();
export const SetCycleStoreContext = createContext(setCycleStore);
