import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';

import colors from '../assets/colors';
import fonts from '../assets/font';

import ButtonField from './ButtonField'; // 导入新组件

export type Props = {
  title: string;
  onPress: Function;
  buttonColor?: string; // 預設 gray2
  buttonTextColor?: string; // 預設 black4
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: 180,
    borderRadius: 10,
    overflow: 'hidden',
  },
  button: {
    backgroundColor: colors.gray2,
    width: '100%',
    padding: 10,
  },
  buttonText: {
    ...fonts.body3Bold,
    color: colors.black4,
    textAlign: 'center',
  },
});

const ButtonLargeField: React.FC<Props> = ({ title, onPress, buttonColor, buttonTextColor }) => {
  const handlePress = () => {
    onPress(); // Call the onPress function when text is pressed
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.buttonContainer}>
      <ButtonField 
        title={title} 
        buttonStyle={[styles.button, buttonColor? {backgroundColor : buttonColor} : null]} 
        buttonTextStyle={[styles.buttonText, buttonTextColor? {color : buttonTextColor} : null]} 
      />
    </TouchableOpacity>
  );
}

export default ButtonLargeField;
