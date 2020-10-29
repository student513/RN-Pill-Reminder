import React, {PureComponent} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Platform,
  Animated,
} from 'react-native';
import {MyText} from 'components/MyText';
import Icon from 'react-native-vector-icons/Ionicons';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {RectButton} from 'react-native-gesture-handler';

interface IProps {
  name: string;
  dosage: string;
  timing?: string;
  Key: number;
  navigation: object;
  PillType: string;
}

export class MyCard extends PureComponent<IProps, {checked: boolean}> {
  private swipeableRow: React.RefObject<HTMLInputElement>;
  constructor(props: any) {
    super(props);
    this.swipeableRow = React.createRef();
    this.state = {
      checked: false,
    };
  }
  RightAction = () => {
    const pressHandler = () => {
      this.close();
    };
    return (
      <Animated.View>
        <RectButton style={styles.skipButton} onPress={pressHandler}>
          <MyText style={styles.font}>Skip</MyText>
        </RectButton>
      </Animated.View>
    );
  };
  toggleCheck = () => {
    this.setState((prevState) => ({
      checked: !prevState.checked,
    }));
    setTimeout(() => {
      this.setState({checked: false});
    }, 2000);
  };
  updateRef = (ref: any) => {
    this.swipeableRow = ref;
  };
  close = () => {
    this.swipeableRow.close();
  };
  render() {
    return (
      <Swipeable renderRightActions={this.RightAction} ref={this.updateRef}>
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.card}
            onPress={() => {
              this.props.navigation.navigate('Details', {
                pillType: this.props.PillType,
                Key: this.props.Key,
              });
            }}>
            <TouchableOpacity onPress={() => this.toggleCheck()}>
              {this.state.checked ? (
                <Icon name="checkmark-circle" size={27} style={styles.check} />
              ) : (
                <Icon name="ellipse-outline" size={27} style={styles.check} />
              )}
            </TouchableOpacity>
            <View style={styles.nameContainer}>
              <MyText style={styles.name}>{this.props.name}</MyText>
            </View>
            <View style={styles.dosageContainer}>
              <MyText style={styles.dosage}>{this.props.dosage}</MyText>
            </View>
            <View style={styles.timingContainer}>
              <MyText style={styles.timing}>1 hours ago</MyText>
            </View>
          </TouchableOpacity>
        </View>
      </Swipeable>
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
  check: {
    marginTop: 16,
    marginBottom: 32,
    marginLeft: 20,
    marginRight: 25,
    color: '#13A45B',
  },
  nameContainer: {
    marginTop: 15,
  },
  name: {
    ...Platform.select({
      ios: {
        fontSize: 23,
      },
      android: {
        fontSize: 17,
      },
    }),
    fontFamily: 'ProximaNova-Bold',
  },
  dosageContainer: {
    backgroundColor: '#fff',
    marginBottom: 40,
    marginTop: 15,
    borderRadius: 7,
    position: 'absolute',
    right: 15,
  },
  dosage: {
    ...Platform.select({
      ios: {
        fontSize: 15,
      },
      android: {
        fontSize: 12,
      },
    }),
    paddingVertical: 1,
    paddingHorizontal: 5,
  },
  card: {
    backgroundColor: '#F0F9F0',
    borderRadius: 15,
    flexDirection: 'row',
  },
  timingContainer: {
    position: 'absolute',
    marginTop: 45,
    left: 75,
  },
  timing: {
    ...Platform.select({
      ios: {
        fontSize: 15,
      },
      android: {
        fontSize: 12,
      },
    }),
    color: '#5D5D5D',
  },
  before: {},
  now: {},
  after: {
    backgroundColor: '#931AB7',
  },
  skipButton: {
    borderRadius: 15,
    backgroundColor: '#B826E3',
    height: 77,
    width: 80,
    marginRight: 15,
    alignItems: 'center',
  },
  font: {
    fontFamily: 'ProximaNova-Bold',
    color: '#fff',
    marginTop: 25,
  },
});
