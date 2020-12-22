/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View} from 'react-native';
import {observer} from 'mobx-react';
import SetCycleView from './SetCycleView';
import SetDayTimeView from './SetDayTimeView';
import {setCycleStore, setDayTimeStore, pillListStore} from 'store';

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
  getWillEditCard = (id: number) => {
    const Card = pillListStore.CardList.find((card) => card.id === id);
    this.props.route.params.pillType === 'Cycle'
      ? setCycleStore.initCycle(this.props.route.params.id, Card)
      : setDayTimeStore.initDayTime(this.props.route.params.id, Card);
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
          />
        ) : (
          <SetDayTimeView
            id={this.props.route.params.id}
            navigation={this.props.navigation}
          />
        )}
      </View>
    );
  }
}

export default Detail;
