/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View} from 'react-native';
import {observer} from 'mobx-react';
import SetCycleView from './SetCycleView';
import SetDayTimeView from './SetDayTimeView';
import {setCycleStore, setDayTimeStore, pillListStore} from 'store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {CyclePillInfo, DayTimePillInfo} from 'helper';

interface IProps {
  navigation: object;
  route: any;
  id?: number;
}

@observer
class Detail extends Component<IProps, {}> {
  constructor(props: any) {
    super(props);
  }
  getWillEditCard = async (id: number) => {
    const Card = pillListStore.CardList.find(
      (card: CyclePillInfo | DayTimePillInfo) => card.id === id,
    );
    this.props.route.params.pillType === 'Cycle'
      ? setCycleStore.initCycle(this.props.route.params.id, Card)
      : setDayTimeStore.initDayTime(this.props.route.params.id, Card);
  };
  saveCard = async (pill: DayTimePillInfo | CyclePillInfo, id: number) => {
    id ? pillListStore.editCard(pill, id) : pillListStore.pushCard(pill);
    await AsyncStorage.setItem(
      'pillList',
      JSON.stringify(pillListStore.CardList),
    );
  };

  componentDidMount = () => {
    this.props.route.params.id
      ? this.getWillEditCard(this.props.route.params.id)
      : this.props.route.params.pillType === 'Cycle'
      ? setCycleStore.initCycle()
      : setDayTimeStore.initDayTime();
  };

  render() {
    return (
      <View>
        {this.props.route.params.pillType === 'Cycle' ? (
          <SetCycleView
            id={this.props.route.params.id}
            navigation={this.props.navigation}
            saveCard={this.saveCard}
          />
        ) : (
          <SetDayTimeView
            id={this.props.route.params.id}
            navigation={this.props.navigation}
            saveCard={this.saveCard}
          />
        )}
      </View>
    );
  }
}

export default Detail;
