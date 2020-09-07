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
} from 'react-native';
import { COLOR } from 'helper';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

interface MyTextProps extends TextProps {}
interface MyTextInputProps extends TextInputProps {
  label: string;
  placeholder: string;
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
      <View
        style={
          this.state.isFocus ? styles.focusedContainer : styles.basicContainer
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
    );
  }
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 18,
    fontFamily: 'ProximaNova-Regular',
  },
  basicContainer: {
    borderRadius: 6,
    backgroundColor: '#F3F3F3',
    paddingLeft: 10,
    marginBottom: 20,
  },
  focusedContainer: {
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
});
