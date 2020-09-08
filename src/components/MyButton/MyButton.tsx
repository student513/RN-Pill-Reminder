/* eslint-disable react-native/no-inline-styles */
import React, {PureComponent} from 'react';
import {
  StyleSheet,
  View,
  Platform,
  TouchableOpacity,
  Switch,
  SwitchProps,
} from 'react-native';
import {COLOR} from 'helper';
import Icon from 'react-native-vector-icons/Ionicons';
import {MyText} from 'components/MyText';

interface MyButtonProps extends SwitchProps {
  icon: string;
  title: string;
  description: string;
}

export class MyTableButton extends PureComponent<MyButtonProps> {
  render() {
    return (
      <TouchableOpacity>
        <View style={[styles.buttonContainer, this.props.style]}>
          <Icon
            name={this.props.icon}
            size={25}
            style={{paddingTop: 18, paddingRight: 5}}
          />
          <MyText style={{paddingVertical: 17}}>{this.props.title}</MyText>
          <Icon
            name="chevron-forward-outline"
            size={25}
            style={styles.chevron}
          />
        </View>
      </TouchableOpacity>
    );
  }
}

export class MyToggleButton extends PureComponent<MyButtonProps> {
  render() {
    return (
      <View>
        <View style={[styles.buttonContainer, this.props.style]}>
          <Icon
            name={this.props.icon}
            size={25}
            style={{paddingTop: 18, paddingRight: 5}}
          />
          <MyText style={{paddingVertical: 17}}>{this.props.title}</MyText>
          <Switch ios_backgroundColor={COLOR.FONT_GREEN} {...this.props} />
        </View>
        <MyText style={styles.notice}>{this.props.description}</MyText>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  textStyle: {
    fontSize: 18,
    fontFamily: 'ProximaNova-Regular',
  },
  basicInputContainer: {
    borderRadius: 6,
    backgroundColor: '#F3F3F3',
    paddingLeft: 10,
    marginBottom: 20,
  },
  focusedInputContainer: {
    borderRadius: 6,
    backgroundColor: '#fff',
    paddingLeft: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: COLOR.FONT_GREEN,
  },
  textInput: {
    ...Platform.select({
      ios: {
        fontFamily: 'ProximaNova-Regular',
        fontSize: 18,
        paddingBottom: 10,
      },
      android: {
        fontFamily: 'ProximaNova-Regular',
        fontSize: 18,
        paddingBottom: 10,
      },
    }),
  },
  buttonContainer: {
    backgroundColor: '#F3F3F3',
    paddingLeft: 10,
    display: 'flex',
    flexDirection: 'row',
  },
  chevron: {
    color: COLOR.FONT_GREEN,
    paddingTop: 18,
    justifyContent: 'flex-end',
  },
  notice: {
    fontSize: 11,
    color: '#5B5B5B',
    marginBottom: 25,
    paddingLeft: 2,
  },
});
