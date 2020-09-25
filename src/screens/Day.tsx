/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {observer} from 'mobx-react';
import {MyTableButton} from 'components/MyButton';

const {height} = Dimensions.get('window');

const Days = [
  {id: 0, key: 'Mon', title: 'Monday'},
  {id: 1, key: 'Tue', title: 'Tuesday'},
  {id: 2, key: 'Wed', title: 'Wednesday'},
  {id: 3, key: 'Thur', title: 'Thursday'},
  {id: 4, key: 'Fri', title: 'Friday'},
  {id: 5, key: 'Sat', title: 'Saturday'},
  {id: 6, key: 'Sun', title: 'Sunday'},
];

interface IState {
  Selected: boolean[];
}

@observer
class Day extends Component<{}, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      Selected: Array(Days.length).fill(false),
    };
  }

  toggleSelected = (id: number) => {
    const select = this.state.Selected;
    select[id] = select[id] ? false : true;
    this.setState({Selected: select});
  };

  render() {
    const {Selected} = this.state;
    return (
      <View style={styles.content}>
        {Days.map((day) => (
          <MyTableButton
            title={day.title}
            style={{marginBottom: 1}}
            checked={Selected[day.id]}
            onPress={() => this.toggleSelected(day.id)}
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
  monday: {
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  sunday: {
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
  },
});

export default Day;
