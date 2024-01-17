import React from 'react';
import { TouchableOpacity, TextStyle, StyleProp } from 'react-native';

import Feather from '@expo/vector-icons/Feather';
import Octicons from '@expo/vector-icons/Octicons';
import Entypo from '@expo/vector-icons/Entypo';

export type Props = {
  collection: string;
  name: any;
  pressable?: boolean;
  onPress?: () => void;
  style: StyleProp<TextStyle>;
};

const Icon: React.FC<Props> = ({ collection, style, name }) => {
  if (collection == 'Feather') {
    return <Feather name={name} style={style}/>;
  } else if  (collection == 'Octicons') {
    return <Octicons name={name} style={style}/>;
  } else if  (collection == 'Entypo') {
    return <Entypo name={name} style={style}/>;
  } 
  return null;
}


const ButtonIconField: React.FC<Props> = ({ collection, style, name, pressable = true, onPress }) => {
  if (!pressable) {
    return <Icon collection={collection} style={style} name={name} />;
  } else {
    
  const handlePress = () => {
    onPress(); // Call the onPress function when text is pressed
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <Icon collection={collection} style={style} name={name} />
    </TouchableOpacity>
  );
}
}

export default ButtonIconField;
