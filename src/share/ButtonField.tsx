import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';

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
    borderColor: 'blue',
    overflow: 'hidden',
    alignItems: 'center',
    backgroundColor: '#EEEBEB'
  },
  button: {
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

const ButtonField: React.FC<Props> = ({ title, onPress, buttonColor, buttonTextColor }) => {
  const handlePress = () => {
    onPress(); // Call the onPress function when text is pressed
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.buttonContainer}>
      <View style={[styles.button, {backgroundColor : buttonColor}]} >
        <Text style={[styles.buttonText, {color : buttonTextColor}]} >{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default ButtonField;
