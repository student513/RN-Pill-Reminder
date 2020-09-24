/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {observer} from 'mobx-react';
import {MyTableButton} from 'components/MyButton';

const {height} = Dimensions.get('window');

const Days = [
  {id: 0, key: 'Mon', title: 'Monday', selected: false},
  {id: 1, key: 'Tue', title: 'Tuesday', selected: false},
  {id: 2, key: 'Wed', title: 'Wednesday', selected: false},
  {id: 3, key: 'Thur', title: 'Thursday', selected: false},
  {id: 4, key: 'Fri', title: 'Friday', selected: false},
  {id: 5, key: 'Sat', title: 'Saturday', selected: true},
  {id: 6, key: 'Sun', title: 'Sunday', selected: false},
];

interface IState {
  Week: object[];
}

@observer
class Day extends Component<{}, {}> {
  constructor(props: any) {
    super(props);
    this.state = {
      Week: [],
    };
  }
  render() {
    return (
      <View style={styles.content}>
        {Days.map((day) => (
          <MyTableButton
            title={day.title}
            style={{
              borderTopLeftRadius: 6,
              borderTopRightRadius: 6,
              marginBottom: 1,
            }}
            checked={day.selected}
            onPress={() => {}}
          />
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: 'white',
    paddingBottom: 40,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    height: height * 0.9,
    padding: 15,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 35,
  },
  notice: {
    fontSize: 11,
    color: '#5B5B5B',
    marginBottom: 25,
    paddingLeft: 2,
  },
});

export default Day;
