/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {MyToggleButton, MyTableButton} from 'components/MyButton';
import {setCycleStore} from 'store/SetCycle';
import {Picker} from '@react-native-community/picker';
import {MyTextInput} from 'components/MyText';

const {height, width} = Dimensions.get('window');

interface IState {
  isRepeat: boolean;
  showFrequency: boolean;
  showEvery: boolean;
  frequency: string;
  every: number;
  frequencyType: string[];
  everyContent: any[];
}

class Repeat extends Component<{}, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      isRepeat: false,
      showFrequency: false,
      showEvery: false,
      frequency: '',
      every: 1,
      frequencyType: ['Minutely', 'Hourly', 'Daily', 'Weekly', 'Monthly'],
      everyContent: [],
    };
  }

  toggleRepeat = () => {
    this.setState((prevState) => ({
      isRepeat: !prevState.isRepeat,
    }));
  };

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
    const {
      isRepeat,
      showFrequency,
      showEvery,
      frequency,
      every,
      frequencyType,
      everyContent,
    } = this.state;
    return (
      <View style={styles.content}>
        <MyToggleButton
          icon="sync-circle-outline"
          title="Repeat"
          style={{borderRadius: 6, marginBottom: 25}}
          onValueChange={() => {
            this.toggleRepeat();
            setCycleStore.toggleRepeat();
          }}
          value={isRepeat}
        />
        {isRepeat ? (
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
                selectedValue={frequency}
                style={{height: 50, width: width - 15}}
                onValueChange={(itemValue) => {
                  this.setState({frequency: itemValue});
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
            <MyTextInput
              label="input"
              placeholder="1"
              keyboardType = 'numeric'
              onChangeText={(input: number) => setCycleStore.setEvery()}
            />
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
