import {action, observable} from 'mobx';
import {createContext} from 'react';

class PillListStore {
  @observable CardList: any[] = [];
  @observable VeiwLog: any[] = [];
  @observable PillKey: number = 0;

  @action
  updatePillKey = () => {
    this.PillKey++;
  };
}

export const pillListStore = new PillListStore();
export const pillListStoreContext = createContext(pillListStore);
