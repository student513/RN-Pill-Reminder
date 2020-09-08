/* eslint-disable react-native/no-inline-styles */
import React, {PureComponent} from 'react';
import {
  Text,
  StyleSheet,
  TextProps,
  View,
  TextInput,
  Platform,
  TextInputProps,
  TouchableWithoutFeedback,
  Keyboard,
  ViewProps,
  TouchableOpacity,
} from 'react-native';
import {COLOR} from 'helper';
import Icon from 'react-native-vector-icons/Ionicons';

interface MyTextProps extends TextProps {}
interface MyTextInputProps extends TextInputProps {
  label: string;
  placeholder: string;
}
interface MyButtonProps extends ViewProps {
  icon: string;
  title: string;
}

export class MyText extends PureComponent<MyTextProps> {
  render() {
    const {children, style} = this.props;
    return <Text style={[styles.textStyle, style]}>{children}</Text>;
  }
}

export class MyTextInput extends PureComponent<MyTextInputProps> {
  constructor(props: any) {
    super(props);
    this.state = {
      isFocus: false,
    };
  }
  render() {
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
          this.setState({isFocus: false});
        }}>
        <View
          style={
            this.state.isFocus
              ? styles.focusedInputContainer
              : styles.basicInputContainer
          }>
          <MyText
            style={{
              color: '#7D7D7D',
              fontSize: 14,
              paddingLeft: 5,
              paddingTop: 10,
            }}>
            {this.props.label}
          </MyText>
          <TextInput
            style={styles.textInput}
            placeholderTextColor="#0F0F0F"
            {...this.props}
            onFocus={() => this.setState({isFocus: true})}
          />
        </View>
      </TouchableWithoutFeedback>
    );
  }
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
      <View style={[styles.buttonContainer, this.props.style]}>
        <Icon
          name={this.props.icon}
          size={25}
          style={{paddingTop: 18, paddingRight: 5}}
        />
        <MyText style={{paddingVertical: 17}}>{this.props.title}</MyText>
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
});
