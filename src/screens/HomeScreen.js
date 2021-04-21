import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  Button,
  Pressable,
} from 'react-native';
import IconArrowUp from '../../assets/icons/arrowUp';
import Ramadan from '../../assets/icons/ramadan';
import Box from '../components/Box';
import {BG} from '../styles/colors';

const {width, height} = Dimensions.get('window');

const HomeScreen = () => {
  return (
    <View style={{width, height, backgroundColor: BG}}>
      <View style={styles.btnCountdown}>
        <IconArrowUp />
        <Text
          style={{
            color: 'white',
            fontWeight: 'bold',
            fontSize: 16,
            marginBottom: 20,
            marginTop: 5,
          }}>
          Countdown
        </Text>
      </View>
      <View style={styles.ramadanSvg}>
        <Ramadan />
      </View>
      <View style={styles.wrapper}>
        <Text style={styles.mainTitle}>Ramadan{'\n'}Kareem</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View>
            <Box icon={'Sun'}>
              <Text style={styles.mainText}>19:00</Text>
              <Text style={styles.subText}>Iftar Alert</Text>
            </Box>
            <Box icon={'Moon'}>
              <Text style={styles.mainText}>4:10</Text>
              <Text style={styles.subText}>Sehar Alert</Text>
            </Box>
          </View>
          <View>
            <Box height={true}>
              <Text
                style={{
                  fontSize: width * 0.12,
                  fontWeight: 'bold',
                  color: '#303131',
                }}>
                Azan
              </Text>
              <View>
                <Pressable style={styles.btnWrapper}>
                  <Text
                    style={{
                      fontSize: 16,
                      color: '#303131',
                    }}>
                    Fajr
                  </Text>
                </Pressable>
                <Pressable style={styles.btnWrapper}>
                  <Text
                    style={{
                      fontSize: 16,
                      color: '#303131',
                    }}>
                    Dhuhr
                  </Text>
                </Pressable>
                <Pressable style={styles.btnWrapper}>
                  <Text
                    style={{
                      fontSize: 16,
                      color: '#303131',
                    }}>
                    Asr
                  </Text>
                </Pressable>
                <Pressable style={styles.btnWrapper}>
                  <Text
                    style={{
                      fontSize: 16,
                      color: '#303131',
                    }}>
                    Maghrib
                  </Text>
                </Pressable>
                <Pressable style={styles.btnWrapper}>
                  <Text
                    style={{
                      fontSize: 16,
                      color: '#303131',
                    }}>
                    Isha
                  </Text>
                </Pressable>
              </View>
              <Text style={styles.subText}>Prayer Alert</Text>
            </Box>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  btnCountdown: {
    position: 'absolute',
    bottom: -20,
    left: width / 3,
    width: 130,
    height: 130,
    borderRadius: 100,
    backgroundColor: '#303131',
    zIndex: 100,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  btnWrapper: {
    paddingVertical: 15,
    borderRadius: 10,
  },
  ramadanSvg: {
    position: 'absolute',
    top: 5,
    right: 5,
    opacity: 0.9,
  },
  wrapper: {
    paddingHorizontal: 30,
    marginTop: 90,
  },
  mainTitle: {
    fontWeight: 'bold',
    fontSize: width * 0.1,
    marginBottom: 30,
    color: '#303131',
  },
  mainText: {
    fontWeight: 'bold',
    fontSize: 35,
    color: '#303131',
  },
  subText: {
    color: '#B6B6B6',
    fontSize: 16,
  },
});

export default HomeScreen;
