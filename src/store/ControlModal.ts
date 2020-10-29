import {observable, action} from 'mobx';
import {createContext} from 'react';

class ControlModalStore {
  @observable setTypeModalVisible: boolean;

  @action
  toggleSetTypeModalVisible = () => {
    if (this.setTypeModalVisible) {
      this.setTypeModalVisible = false;
    } else {
      this.setTypeModalVisible = true;
    }
  };
}

export const controlModalStore = new ControlModalStore();
export const controlModalStoreContext = createContext(controlModalStore);
