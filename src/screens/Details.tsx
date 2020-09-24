/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View} from 'react-native';
import {observer} from 'mobx-react';
import SetCycleView from './SetCycleView';
import SetDayTimeView from './SetDayTimeView';
interface IProps {
  navigation: any;
  route: any;
}

@observer
class Detail extends Component<IProps, {}> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <View>
        {this.props.route.params.pillType === 'Cycle' ? (
          <SetCycleView navigation={this.props.navigation} />
        ) : (
          <SetDayTimeView navigation={this.props.navigation} />
        )}
      </View>
    );
  }
}

export default Detail;
