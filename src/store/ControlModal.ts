import {observable, action, computed} from 'mobx';
import {createContext} from 'react';

class ControlModalStore {
  @observable setTypeModalVisible: boolean;
  @observable addModalVisible: boolean;
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
  toggleAddModalVisible = () => {
    if (this.addModalVisible) {
      this.addModalVisible = false;
    } else {
      this.addModalVisible = true;
    }
  };

  @action
  toggleSelectSetCycle = () => {
    if (this.selectSetCycle) {
      this.selectSetCycle = false;
    } else {
      this.selectSetCycle = true;
    }
  };

  @action
  toggleSelectDayTime = () => {
    if (this.selectDayTime) {
      this.selectDayTime = false;
    } else {
      this.selectDayTime = true;
    }
  };
}

export const controlModalStore = new ControlModalStore();
export const controlModalStoreContext = createContext(controlModalStore);
