import React, {PureComponent} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {COLOR, POSITION} from 'helper';
import {MyText} from 'components/MyText';

interface IProps {
  name: string;
  dosage: string;
  timing: string;
}

export class MyCard extends PureComponent<IProps, {}> {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.card}>
          <TouchableOpacity>
            <View style={styles.circle} />
          </TouchableOpacity>
          <View style={styles.name}>
            <MyText style={{fontSize: 17, fontFamily: 'ProximaNova-Bold'}}>
              {this.props.name}
            </MyText>
          </View>
          <View style={styles.dosage}>
            <MyText
              style={{fontSize: 12, paddingVertical: 1, paddingHorizontal: 5}}>
              {this.props.dosage}
            </MyText>
          </View>
          <View style={styles.timing}>
            <MyText style={{fontSize: 12}}>1 hours ago</MyText>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    marginHorizontal: 15,
    marginBottom: 10,
  },
  circle: {
    width: 24,
    height: 24,
    borderRadius: 12, //원: borderRadius는 width, height의 절반이어야함
    borderWidth: 2,
    borderColor: '#13A45B',
    marginTop: 18,
    marginBottom: 35,
    marginLeft: 20,
    marginRight: 25,
  },
  name: {
    marginTop: 15,
  },
  dosage: {
    backgroundColor: '#fff',
    marginBottom: 40,
    marginTop: 15,
    borderRadius: 7,
    position: 'absolute',
    right: 15,
  },
  card: {
    backgroundColor: '#F0F9F0',
    borderRadius: 15,
    flexDirection: 'row',
  },
  timing: {
    position: 'absolute',
    marginTop: 45,
    left: 75,
  },
  before: {},
  now: {},
  after: {
    backgroundColor: '#931AB7',
  },
});
