import React from 'react';
import { TouchableOpacity, TextStyle, StyleProp } from 'react-native';
import IconVariant from './IconComponent/IconVariant';

import Feather from '@expo/vector-icons/Feather';
import Octicons from '@expo/vector-icons/Octicons';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Fontisto from '@expo/vector-icons/Fontisto';

export type Props = {
  collection: string;
  name: any;
  style: StyleProp<TextStyle>;
  pressable?: boolean;
  onPress?: () => void;
  variant?: IconVariant;
};

const Icon: React.FC<Props> = ({ collection, style, name, variant }) => {
  const styleProp = {
    [IconVariant.Solid]: { solid: true },
    [IconVariant.Regular]: { regular: true },
    [IconVariant.Light]: { light: true },
    [IconVariant.Brand]: { brand: true },
  }[variant];

  switch (collection) {
    case 'Feather':
      return <Feather name={name} style={style}/>;
    case 'Octicons':
      return <Octicons name={name} style={style}/>;
    case 'Entypo':
      return <Entypo name={name} style={style}/>;
    case 'MaterialCommunityIcons':
      return <MaterialCommunityIcons name={name} style={style} />;
    case 'FontAwesome5':
      return <FontAwesome5 name={name} style={style} {...styleProp}/>;
    case 'Fontisto':
      return <Fontisto name={name} style={style}/>;
  }
  return null;
}


const ButtonIconField: React.FC<Props> = ({ collection, style, name, pressable = true, onPress, variant}) => {
  if (!pressable) {
    return <Icon collection={collection} style={style} name={name} variant={variant}/>;
  } else {
    
  const handlePress = () => {
    onPress(); // Call the onPress function when text is pressed
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <Icon collection={collection} style={style} name={name}/>
    </TouchableOpacity>
  );
}
}

export default ButtonIconField;
