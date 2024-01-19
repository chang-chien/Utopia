import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import {
  useFonts,
  RobotoSlab_700Bold,
} from '@expo-google-fonts/roboto-slab';

export type Props = {
    multiline: boolean;
    numberOfLines: any;
    placeholder: string;
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20, // 可以根据需要调整垂直间距
    width: '100%',
    height: '350%',
  },
  input: {
    width: '100%',
    height: '100%',
    paddingLeft: 10, // 左
    paddingRight: 10, // 右
    borderColor: '#444343', 
    borderWidth: 1,
    backgroundColor: '#444343',
    color: '#ECEBE0', // Text color
    borderRadius: 10, // 添加圆角
  },
});
// CCTODO: placeholder 的字型


const InputField: React.FC<Props> = ({ multiline, numberOfLines, placeholder }) => {

  let [fontsLoaded, fontError] = useFonts({
    RobotoSlab_700Bold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} multiline={true} numberOfLines={4} placeholder={placeholder} placeholderTextColor="#AFAFAF"/>
    </View>
  );
}

export default InputField;