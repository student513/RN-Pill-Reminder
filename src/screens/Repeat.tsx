/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {MyToggleButton, MyTableButton} from 'components/MyButton';
import {setCycleStore} from 'store/SetCycle';
import {Picker} from '@react-native-community/picker';
import {MyTextInput} from 'components/MyText';
import {observer} from 'mobx-react';

const {height, width} = Dimensions.get('window');

const frequencyType: string[] = [
  'Minutely',
  'Hourly',
  'Daily',
  'Weekly',
  'Monthly',
];

interface IState {
  showFrequency: boolean;
  showEvery: boolean;
  everyContent: any[];
}

@observer
class Repeat extends Component<{}, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      showFrequency: false,
      showEvery: false,
      everyContent: [],
    };
  }

  toggleFrequency = () => {
    this.setState((prevState) => ({
      showFrequency: !prevState.showFrequency,
    }));
  };

  toggleEvery = () => {
    this.setState((prevState) => ({
      showEvery: !prevState.showEvery,
    }));
  };

  render() {
    const {showFrequency} = this.state;
    return (
      <View style={styles.content}>
        <MyToggleButton
          icon="sync-circle-outline"
          title="Repeat"
          style={{borderRadius: 6, marginBottom: 25}}
          onValueChange={() => {
            setCycleStore.toggleRepeat();
          }}
          value={setCycleStore.isRepeat}
        />
        {setCycleStore.isRepeat ? (
          <View>
            <MyTableButton
              title="Frequency"
              style={{
                borderTopLeftRadius: 6,
                borderTopRightRadius: 6,
                marginBottom: 1,
              }}
              onPress={() => this.toggleFrequency()}
              remark={setCycleStore.frequency}
            />
            {/* IOS picker에 대한 조건 추가 */}
            {showFrequency ? (
              <Picker
                selectedValue={setCycleStore.frequency}
                style={{height: 50, width: width - 15}}
                onValueChange={(itemValue) => {
                  setCycleStore.setFrequency(itemValue);
                  this.setState({showFrequency: false});
                }}
                mode="dropdown">
                {frequencyType.map((value) => (
                  <Picker.Item label={value} value={value} />
                ))}
              </Picker>
            ) : (
              <View />
            )}
            <MyTableButton
              title="Every"
              style={{
                borderBottomLeftRadius: 6,
                borderBottomRightRadius: 6,
                marginBottom: 20,
              }}
              onPress={() => this.toggleEvery()}
              remark={`${setCycleStore.every} ${setCycleStore.frequency}`}
            />
            {/* <MyTextInput
              label="input"
              placeholder="1"
              keyboardType = 'numeric'
              onChangeText={(input: number) => setCycleStore.setEvery()}
            /> */}
            {/* {showEvery ? (
              <Picker
                selectedValue={every}
                style={{height: 50, width: width - 15}}
                onValueChange={(itemValue) => {
                  this.setState({every: itemValue});
                  setCycleStore.setEvery(itemValue);
                  this.setState({showEvery: false});
                }}>
                {everyContent.map((value) => (
                  <Picker.Item label={value} value={value} />
                ))}
              </Picker>
            ) : (
              <View />
            )} */}
          </View>
        ) : (
          <View />
        )}
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
});

export default Repeat;
