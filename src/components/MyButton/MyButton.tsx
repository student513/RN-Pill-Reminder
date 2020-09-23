/* eslint-disable react-native/no-inline-styles */
import React, {PureComponent} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Switch,
  TouchableOpacityProps,
  SwitchProps,
} from 'react-native';
import {COLOR, POSITION} from 'helper';
import Icon from 'react-native-vector-icons/Ionicons';
import {MyText} from 'components/MyText';

interface MyTableButtonProps extends TouchableOpacityProps {
  icon?: string;
  title: string;
  onPress: Function;
  remark: string;
}

interface MyToggleButtonProps extends SwitchProps {
  icon: string;
  title: string;
  description?: string;
}

export class MyTableButton extends PureComponent<MyTableButtonProps> {
  render() {
    return (
      <TouchableOpacity onPress={() => this.props.onPress()}>
        <View style={[styles.buttonContainer, this.props.style]}>
          {this.props.icon ? (
            <Icon
              name={this.props.icon}
              size={25}
              style={{paddingTop: 20, paddingRight: 5}}
            />
          ) : (
            <View />
          )}
          <MyText style={{paddingVertical: 17}}>{this.props.title}</MyText>
          <MyText
            style={
              this.props.icon ? styles.remark : styles.remarkWithoutChevron
            }>
            {this.props.remark}
          </MyText>
          {this.props.icon ? (
            <Icon
              name="chevron-forward-outline"
              size={25}
              style={styles.chevron}
            />
          ) : (
            <View />
          )}
        </View>
      </TouchableOpacity>
    );
  }
}

export class MyToggleButton extends PureComponent<MyToggleButtonProps> {
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
          <View
            style={{
              position: 'absolute',
              left: POSITION.SWITCH,
              paddingTop: 18,
            }}>
            <Switch ios_backgroundColor={COLOR.FONT_GREEN} {...this.props} />
          </View>
        </View>
        {this.props.description ? (
          <MyText style={styles.notice}>{this.props.description}</MyText>
        ) : (
          <View />
        )}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#F3F3F3',
    paddingLeft: 15,
    display: 'flex',
    flexDirection: 'row',
  },
  remark: {
    position: 'absolute',
    left: 200,
    fontSize: 10,
    paddingTop: 25,
    color: COLOR.FONT_GREEN,
  },
  remarkWithoutChevron: {
    position: 'absolute',
    left: 245,
    fontSize: 10,
    paddingTop: 25,
    color: COLOR.FONT_GREEN,
  },
  chevron: {
    color: COLOR.FONT_GREEN,
    paddingTop: 20,
    position: 'absolute',
    left: POSITION.CHEVRON,
  },
  notice: {
    fontSize: 11,
    color: '#5B5B5B',
    marginBottom: 25,
    paddingLeft: 2,
  },
});
