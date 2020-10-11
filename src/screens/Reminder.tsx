import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {SetTypeModal} from 'components/Modal';
import {MyText} from 'components/MyText';
import {observer} from 'mobx-react';
import {controlModalStore} from 'store/ControlModal';
import {MyCard} from 'components/MyCard';
import {pillListStore} from 'store';
import moment from 'moment';

interface IProps {
  navigation: any;
}

@observer
class Reminder extends Component<IProps, {today: string}> {
  constructor(props: any) {
    super(props);
    this.state = {
      today: '',
    };
  }
  componentDidMount = () => {
    const date = new Date();
    this.setState({today: moment.parseZone(date).format('dddd, MMMM D')});
  };
  render() {
    return (
      <View
        style={
          pillListStore.CardList.length > 0
            ? styles.container
            : styles.containerNone
        }>
        <View>
          <TouchableOpacity
            style={{alignItems: 'flex-end'}}
            onPress={() => {
              controlModalStore.toggleSetTypeModalVisible();
            }}>
            <MyText style={{fontSize: 30, marginTop: 50}}>Add</MyText>
          </TouchableOpacity>
          <MyText style={styles.tabTitle}>Reminder</MyText>
          <MyText
            style={
              pillListStore.CardList.length > 0
                ? styles.today
                : styles.todayNone
            }>
            {this.state.today}
          </MyText>
        </View>
        {pillListStore.CardList.length > 0 ? (
          pillListStore.CardList.map((pill) => (
            <MyCard name={pill.Name} dosage={pill.Dosage} />
          ))
        ) : (
          <>
            <View style={{alignItems: 'center'}}>
              <MyText style={styles.guideComment}>
                Touch the + button and start.
              </MyText>
            </View>
            <View style={{alignItems: 'center'}}>
              <Image
                source={{uri: 'BackgroundImg'}}
                style={styles.backgroundImage}
              />
            </View>
          </>
        )}
        <SetTypeModal
          isVisible={controlModalStore.setTypeModalVisible}
          onSwipeComplete={() => controlModalStore.toggleSetTypeModalVisible()}
          swipeDirection={['down']}
          style={styles.modal}
          backdropOpacity={0.5}
          onBackdropPress={() => controlModalStore.toggleSetTypeModalVisible()}
          navigation={this.props.navigation}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  containerNone: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  tabTitle: {
    fontSize: 36,
    fontFamily: 'ProximaNova-Bold',
    color: '#393939',
    marginLeft: 10,
  },
  todayNone: {
    fontSize: 21,
    color: '#5B5B5B',
    marginLeft: 10,
  },
  today: {
    fontSize: 21,
    color: '#5B5B5B',
    marginLeft: 10,
    marginBottom: 30,
  },
  backgroundImage: {
    width: 330,
    height: 277,
    bottom: -35,
  },
  guideComment: {
    fontSize: 21,
    color: '#393939',
  },
});

export default Reminder;
