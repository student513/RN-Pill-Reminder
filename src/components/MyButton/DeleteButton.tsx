import React, {PureComponent} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import {MyText} from 'components/MyText';

interface DeleteButtonProps extends TouchableOpacityProps {
  onPress: any;
}

export class DeleteButton extends PureComponent<DeleteButtonProps> {
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <TouchableOpacity onPress={() => this.props.onPress()}>
        <View style={styles.buttonContainer}>
          <MyText style={styles.textStyle}>Delete</MyText>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    display: 'flex',
    backgroundColor: '#FBECFF',
    alignItems: 'center',
    borderRadius: 11,
  },
  textStyle: {
    padding: 15,
    color: '#931AB7',
    fontFamily: 'ProximaNova-Bold',
    fontSize: 22,
  },
});
