import React from 'react';
import { View, TextStyle, StyleProp, Text } from 'react-native';

export type Props = {
  title: string;
  buttonStyle: StyleProp<TextStyle>;
  buttonTextStyle: StyleProp<TextStyle>;
};

const ButtonField: React.FC<Props> = ({ title, buttonStyle, buttonTextStyle }) => {

  return (
    <View style={buttonStyle} >
      <Text style={buttonTextStyle} >{title}</Text>
    </View>
  );
}

export default ButtonField;
