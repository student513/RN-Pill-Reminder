import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

interface IProps {
  type: string;
  navigation: any;
}
interface IState {
  type: string;
}

class Add extends Component<IProps, IState> {
  constructor(props) {
    super(props);
    this.state = {
      type: this.props.navigation.getParam('type', null),
    };
  }

  render() {
    return this.state.type === 'Cycle' ? (
      <View style={styles.container}>
        <MyText>Set Cycle</MyText>
      </View>
    ) : (
      <View>
        <MyText>Select Day & Time</MyText>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});

export default Add;
