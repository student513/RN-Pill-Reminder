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
  @observable isBedTime: boolean = false;
  @observable Critical: boolean = false;
  @observable Timing: string = '';
  @observable NextTime: {
    date: number;
    time: Time;
    repeat: RePeat;
  } = null;

  @action
  onChangeName = (Name: string) => {
    this.Name = Name;
  };
}

export const setCycleStore = new SetCycleStore();
export const SetCycleStoreContext = createContext(setCycleStore);
