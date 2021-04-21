import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import IconHeart from '../../assets/icons/heartIcon';
import IconMoon from '../../assets/icons/moonIcon';
import IconSun from '../../assets/icons/sunIcon';
import RadioBtn from './RadioBtn';

const {width, height} = Dimensions.get('window');

const Box = props => {
  function SwitchIcon(props) {
    switch (props.icon) {
      case 'Sun':
        return <IconSun />;
      case 'Moon':
        return <IconMoon />;
      default:
        return <IconHeart />;
    }
  }

  return (
    <View style={[styles.wrapper]}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View>
          <SwitchIcon icon={props.icon} />
        </View>
        {props.radio ? <RadioBtn /> : null}
      </View>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: width / 2.63,
    //height: height * 0.25,
    minHeight: 160,
    backgroundColor: 'white',
    borderRadius: 30,
    elevation: 10,
    shadowColor: '#EAEAEA',
    marginBottom: 20,
    padding: 15,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});

export default Box;
