import React, {PureComponent} from 'react';
import {Text, StyleSheet, TextProps} from 'react-native';

interface MyTextProps extends TextProps {}

export class MyText extends PureComponent<MyTextProps> {
  render() {
    const {children, style} = this.props;
    return <Text style={[styles.textStyle, style]}>{children}</Text>;
  }
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 18,
    fontFamily: 'ProximaNova-Regular',
  },
});
