import {observable, action} from 'mobx';
import {createContext} from 'react';
import {Time, Date, RePeat} from 'helper/interface';

class SetCycleStore {
  @observable Name: string = '';
  @observable Dosage: string = '';
  @observable StartTime: Time = null;
  @observable isEndRepeat: boolean = false;
  @observable EndRepeat: Date = null;
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

  @action
  init = () => {
    this.Name = '';
    this.Dosage = '';
    this.StartTime = null; //현재 시간 함수로 assign되나?
    this.isEndRepeat = false;
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
      // this.Critical = false;
    } else {
      this.Bedtime = false;
      // this.Critical = true;
    }
  };
  @action
  toggleCritical = () => {
    if (!this.Critical) {
      // this.Bedtime = false;
      this.Critical = true;
    } else {
      // this.Bedtime = true;
      this.Critical = false;
    }
  };
}

export const setCycleStore = new SetCycleStore();
export const SetCycleStoreContext = createContext(setCycleStore);
