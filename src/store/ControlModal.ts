import {observable, action} from 'mobx';
import {createContext} from 'react';

class ControlModalStore {
  @observable setTypeModalVisible: boolean;
  @observable selectSetCycle: boolean;
  @observable selectDayTime: boolean;

  @action
  toggleSetTypeModalVisible = () => {
    if (this.setTypeModalVisible) {
      this.setTypeModalVisible = false;
    } else {
      this.setTypeModalVisible = true;
    }
  };

  @action
  setSelectSetCycle = () => {
    this.selectSetCycle = true;
    this.selectDayTime = false;
  };

  @action
  setSelectDayTime = () => {
    this.selectSetCycle = false;
    this.selectDayTime = true;
  };
}

export const controlModalStore = new ControlModalStore();
export const controlModalStoreContext = createContext(controlModalStore);
