import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';

import ButtonField from './ButtonField'; // 导入新组件

export type Props = {
  title: string;
  onPress: Function;
  buttonColor?: string; // 預設 #EEEBEB
  buttonTextColor?: string; // 預設 #444344
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: 180,
    marginVertical: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  button: {
    backgroundColor: '#EEEBEB',
    width: '100%',
    paddingVertical: 10,
  },
  buttonText: {
    color: '#444344',
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'RobotoSlab_700Bold',
    fontSize: 16,
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
        buttonStyle={[styles.button, {backgroundColor : buttonColor}]} 
        buttonTextStyle={[styles.buttonText, {color : buttonTextColor}]} 
      />
    </TouchableOpacity>
  );
}

export default ButtonLargeField;
