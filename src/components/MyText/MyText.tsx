import React, {PureComponent} from 'react';
import {Text, StyleSheet, TextProps, View} from 'react-native';
import {TextField} from 'react-native-material-textfield';
import {COLOR} from 'helper/helper';

interface MyTextProps extends TextProps {}
interface MyTextInputProps {
  containerStyle?: any;
  style?: any;
  autoFocus?: boolean;
  editable?: boolean;
  textColor?: string;
  onChangeText?: Function;
  value?: string;
  placeHolder?: string;
}

export class MyText extends PureComponent<MyTextProps> {
  render() {
    const {children, style} = this.props;
    return <Text style={[styles.textStyle, style]}>{children}</Text>;
  }
}

export class MyTextInput extends PureComponent<MyTextInputProps> {
  render() {
    return (
      <View style={[this.props.containerStyle]}>
        <TextField
          textColor={this.props.textColor}
          style={[this.props.style]}
          labelFontSize={14}
          value={this.props.value}
          activeLineWidth={1}
          labelTextStyle={{fontFamily: 'ProximaNova-Regular'}}
          tintColor={COLOR.FONT_GREEN}
          onChangeText={this.props.onChangeText}
          // renderAccessory={this.renderIcon.bind(this)}
          label={this.props.placeHolder}
          placeholderTextColor="#7D7D7D"
          baseColor='#F3F3F3'
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
});
