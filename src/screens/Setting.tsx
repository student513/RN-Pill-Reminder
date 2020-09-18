import React, {Component} from 'react';
import {View, Text} from 'react-native';

interface IProps {}

export default class Setting extends Component<IProps, {}> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Text>Setting</Text>
      </View>
    );
  }
}
