import React, {Component} from 'react';
import {View, Text} from 'react-native';

interface IProps {}

export default class Detail extends Component<IProps, {}> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Text>Detail</Text>
      </View>
    );
  }
}
