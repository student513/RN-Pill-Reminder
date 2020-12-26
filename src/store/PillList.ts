import {action, observable} from 'mobx';
import {createContext} from 'react';
import moment from 'moment';
import {CyclePillInfo, DayTimePillInfo} from 'helper';
import AsyncStorage from '@react-native-async-storage/async-storage';

class PillListStore {
  @observable CardList: (CyclePillInfo | DayTimePillInfo)[] = [];
  @observable VeiwLog: any[] = [];
  @observable PillId: number = 0;

  @action
  updatePillId = () => {
    this.PillId = Math.random();
  };

  @action
  setCardList = (pillList: (CyclePillInfo | DayTimePillInfo)[]) => {
    this.CardList = pillList;
  };

  @action
  pushCard = (pill: CyclePillInfo | DayTimePillInfo) => {
    this.CardList.push(pill);
  };

  @action
  editCard = (pill: CyclePillInfo | DayTimePillInfo, id: number) => {
    const editedIndex = this.CardList.findIndex(
      (pill: DayTimePillInfo | CyclePillInfo) => pill.id === id,
    );
    this.CardList[editedIndex] = pill;
  };

  @action
  deleteCard = async (id: number | undefined) => {
    this.CardList = this.CardList.filter((card) => card.id !== id);
    await AsyncStorage.setItem('pillList', JSON.stringify(this.CardList));
  };

  @action
  setNextTime = (id: number) => {
    //Pill Type에 따라 구분
    let frequency;
    const pillIndex = this.CardList.findIndex(
      (pill: CyclePillInfo | DayTimePillInfo) => pill.id === id,
    );
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
