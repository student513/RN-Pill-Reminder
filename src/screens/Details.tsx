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
  Key?: number;
}

@observer
class Detail extends Component<IProps, {}> {
  constructor(props: any) {
    super(props);
  }
  getWillEditCard = (key: number) => {
    const Card = pillListStore.CardList.find((card) => card.key === key);
    this.props.route.params.pillType === 'Cycle'
      ? setCycleStore.initCycle(this.props.route.params.Key, Card)
      : setDayTimeStore.initDayTime(this.props.route.params.Key, Card);
  };
  componentDidMount = () => {
    this.props.route.params.Key
      ? this.getWillEditCard(this.props.route.params.Key)
      : this.props.route.params.pillType === 'Cycle'
      ? setCycleStore.initCycle()
      : setDayTimeStore.initDayTime();
  };

  render() {
    return (
      <View>
        {this.props.route.params.pillType === 'Cycle' ? (
          <SetCycleView
            Key={this.props.route.params.Key}
            navigation={this.props.navigation}
          />
        ) : (
          <SetDayTimeView
            Key={this.props.route.params.Key}
            navigation={this.props.navigation}
          />
        )}
      </View>
    );
  }
}

export default Detail;
