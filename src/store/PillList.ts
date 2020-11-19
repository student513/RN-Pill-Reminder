import {action, observable} from 'mobx';
import {createContext} from 'react';
import moment from 'moment';

class PillListStore {
  @observable CardList: any[] = [];
  @observable VeiwLog: any[] = [];
  @observable PillKey: number = 0;

  @action
  updatePillKey = () => {
    this.PillKey++;
  };

  @action
  deleteObject = (CardList: any[]) => {
    this.CardList = CardList;
  };

  @action
  setNextTime = (key: number) => {
    //Pill Type에 따라 구분
    let frequency;
    const pillIndex = this.CardList.findIndex((pill) => pill.key === key);
    if (this.CardList[pillIndex].frequency === 'Minutely') {
      frequency = 'minutes';
    } else if (this.CardList[pillIndex].frequency === 'Hourly') {
      frequency = 'hours';
    } else if (this.CardList[pillIndex].frequency === 'Daily') {
      frequency = 'days';
    } else if (this.CardList[pillIndex].frequency === 'Weekly') {
      frequency = 'weeks';
    } else if (this.CardList[pillIndex].frequency === 'Monthly') {
      frequency = 'months';
    }
    this.CardList[pillIndex].NextTime = new Date(
      moment(this.CardList[pillIndex].NextTime).add(
        this.CardList[pillIndex].every,
        frequency,
      ),
    );
  };
}

export const pillListStore = new PillListStore();
export const pillListStoreContext = createContext(pillListStore);
