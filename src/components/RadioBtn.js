import React from 'react';
import {View, StyleSheet, Pressable} from 'react-native';
import {BG} from '../styles/colors';

const RadioBtn = () => {
  const [active, setActive] = React.useState(false);
  return (
    <Pressable
      onPress={() => setActive(!active)}
      style={[
        styles.radioBtnWrapper,
        {
          backgroundColor: active ? '#303131' : BG,
          alignItems: active ? 'flex-end' : 'flex-start',
        },
      ]}>
      <View style={styles.radioBtn}></View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  radioBtnWrapper: {
    width: 50,
    height: 25,
    borderRadius: 50,
    padding: 1,
    alignItems: 'flex-end',
  },
  radioBtn: {
    width: '50%',
    height: '100%',
    backgroundColor: 'white',
    borderRadius: 100,
    elevation: 3,
  },
});

export default RadioBtn;
