import React, {PureComponent} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {COLOR, POSITION} from 'helper';
import {MyText} from 'components/MyText';

interface IProps {
  name: string;
  dosage: string;
}

export class MyCard extends PureComponent<IProps, {}> {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.before}>
          <MyText>{this.props.name}</MyText>
          <MyText>{this.props.dosage}</MyText>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },
  before: {
    backgroundColor: '#F0F9F0',
  },
  now: {},
  after: {},
});
