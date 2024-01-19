import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';

import ButtonField from './ButtonField'; // 导入新组件

export type Props = {
  title: string;
  onPress: Function;
  buttonColor?: string; // 預設 #EEEBEB
  buttonTextColor?: string; // 預設 #444344
  buttonTextSize?: number; // 預設 16
};

const styles = StyleSheet.create({
  buttonContainer: {
    alignSelf: 'flex-end',
  },
  button: {
  },
  buttonText: {
    fontSize: 16,
    color: '#ECEBE0',
    fontFamily: 'RobotoSlab_400Regular',
    textDecorationLine: 'underline',
    textAlign: 'right',
  },
});

const ButtonLinkField: React.FC<Props> = ({ title, onPress, buttonColor, buttonTextColor, buttonTextSize }) => {
  const handlePress = () => {
    onPress(); // Call the onPress function when text is pressed
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.buttonContainer}>
      <ButtonField 
        title={title} 
        buttonStyle={[styles.button, {backgroundColor : buttonColor}]} 
        buttonTextStyle={[styles.buttonText, {color : buttonTextColor},  {fontSize : buttonTextSize}]} 
      />
    </TouchableOpacity>
  );
}

export default ButtonLinkField;
