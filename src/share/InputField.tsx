import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import {
  useFonts,
  RobotoSlab_700Bold,
} from '@expo-google-fonts/roboto-slab';

export type Props = {
  label: string;
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20, // 可以根据需要调整垂直间距
    width: '100%'
  },
  text: {
    paddingLeft: 5, // 左
    paddingBottom: 5, // 左
    color: '#5A585A',
    fontFamily: 'RobotoSlab_700Bold',
    fontSize: 16
  },
  input: {
    height: 30, 
    width: '60%', 
    paddingTop: 3, // 上
    paddingBottom: 3, // 下
    paddingLeft: 10, // 左
    paddingRight: 10, // 右
    borderColor: '#E6E2E2', 
    borderWidth: 1,
    backgroundColor: '#EEEBEB',
    borderRadius: 15, // 添加圆角
  },
});
// 09 CCTODO: placeholder 的字型


const InputField: React.FC<Props> = ({ label }) => {

  let [fontsLoaded, fontError] = useFonts({
    RobotoSlab_700Bold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{label}</Text>
      <TextInput style={styles.input} placeholder={"Enter here"}/>
    </View>
  );
}

export default InputField;