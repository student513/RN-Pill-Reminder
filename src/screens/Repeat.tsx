/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {MyToggleButton, MyTableButton} from 'components/MyButton';
import {setCycleStore} from 'store/SetCycle';

const {height} = Dimensions.get('window');

export default function Repeat() {
  const [isRepeat, setRepeat] = useState(false);
  const toggleRepeat = () => setRepeat((prevState) => !prevState);

  useEffect(() => {
    // setCycleStore.isRepeat 업데이트 해주기
});

  return (
    <View style={styles.content}>
      <MyToggleButton
        icon="sync-circle-outline"
        title="Repeat"
        style={{borderRadius: 6}}
        onValueChange={() => {
          toggleRepeat();
        }}
        value={isRepeat}
      />
      {isRepeat ? (
        <View>
          <MyTableButton
            icon="time-outline"
            title="Start Time"
            style={{
              borderTopLeftRadius: 6,
              borderTopRightRadius: 6,
              marginBottom: 1,
            }}
            onPress={() => {
              setCycleStore.showTimepicker();
            }}
            remark={setCycleStore.ParsedStartTime}
          />
          <MyTableButton
            icon="stop-circle-outline"
            title="End Repeat"
            style={{
              borderBottomLeftRadius: 6,
              borderBottomRightRadius: 6,
              marginBottom: 20,
            }}
            onPress={() => {
              setCycleStore.showDatepicker();
            }}
            remark={setCycleStore.ParsedEndTime}
          />
        </View>
      ) : (
        <View />
      )}
    </View>
  );
}
// }

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
