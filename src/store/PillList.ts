import {observable} from 'mobx';
import {createContext} from 'react';

class PillListStore {
  @observable CardList: any[] = [];
  @observable VeiwLog: any[] = [];
}

export const pillListStore = new PillListStore();
export const pillListStoreContext = createContext(pillListStore);
