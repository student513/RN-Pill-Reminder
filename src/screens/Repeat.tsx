/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {MyToggleButton, MyTableButton} from 'components/MyButton';
import {setCycleStore} from 'store/SetCycle';
import {Picker} from '@react-native-community/picker';

const {height, width} = Dimensions.get('window');

export default function Repeat() {
  const [isRepeat, setRepeat] = useState(false);
  const [showFrequency, setFrequency] = useState(false);
  const [showEvery, setEvery] = useState(false);
  const [frequency, modiFrequency] = useState('');

  const toggleRepeat = () => setRepeat((prevState) => !prevState);
  const toggleFrequency = () => setFrequency((prevState) => !prevState);
  const toggleEvery = () => setEvery((prevState) => !prevState);

  const frequencyType = ['Minutely', 'Hourly', 'Daily', 'Weekly', 'Monthly'];

  return (
    <View style={styles.content}>
      <MyToggleButton
        icon="sync-circle-outline"
        title="Repeat"
        style={{borderRadius: 6}}
        onValueChange={() => {
          toggleRepeat();
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
            onPress={() => toggleFrequency()}
            remark={setCycleStore.frequency}
          />
          {/* IOS picker에 대한 조건 추가 */}
          {showFrequency ? (
            <Picker
              selectedValue={frequency}
              style={{height: 50, width: width}}
              onValueChange={(itemValue) => {
                modiFrequency(itemValue);
                setCycleStore.setFrequency(itemValue);
              }}>
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
            onPress={() => toggleEvery()}
            remark={`${setCycleStore.every} ${setCycleStore.frequency}`}
          />
        </View>
      ) : (
        <View />
      )}
    </View>
  );
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
