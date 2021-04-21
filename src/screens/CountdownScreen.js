import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import IconSun from '../../assets/icons/sunIcon';
import Box from '../components/Box';
import RadioBtn from '../components/RadioBtn';
import {BG} from '../styles/colors';

const {width, height} = Dimensions.get('window');

const circleW = width - 85;

const CountdownScreen = () => {
  return (
    <View style={{width, height, backgroundColor: BG}}>
      <Text style={styles.title}>Countdown</Text>
      <View style={styles.countdownCircleWrapper}>
        <View style={styles.innerText}>
          <IconSun />
          <Text
            style={{
              fontSize: circleW * 0.15,
              fontWeight: 'bold',
              color: '#303131',
            }}>
            24:44
          </Text>
          <Text style={{textAlign: 'center'}}>
            Minutes Remaining{'\n'}for Iftar
          </Text>
        </View>
      </View>
      <View style={{paddingHorizontal: 30, marginTop: 30}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Box radio={false} icon={'Sun'}></Box>
          <Box radio={false}></Box>
        </View>
        <View style={styles.container}>
          <Text style={{fontSize: 16, fontWeight: 'bold'}}>Iftar Alert</Text>
          <RadioBtn />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 70,
    backgroundColor: 'white',
    borderRadius: 20,
    elevation: 10,
    shadowColor: '#EAEAEA',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  title: {
    alignSelf: 'center',
    marginVertical: 30,
    fontSize: 21,
    fontWeight: 'bold',
    color: '#303131',
    letterSpacing: 2,
  },
  countdownCircleWrapper: {
    width: circleW,
    height: circleW,
    backgroundColor: 'white',
    borderRadius: 500,
    alignSelf: 'center',
    elevation: 15,
    shadowColor: '#EAEAEA',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerText: {
    alignItems: 'center',
  },
});

export default CountdownScreen;
