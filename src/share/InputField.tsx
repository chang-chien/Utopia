import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

import colors from '../assets/colors';
import fonts from '../assets/font';

export type Props = {
  title: string;
  annotation?: string;
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingLeft: 5,
    paddingBottom: 5,
  },
  title: {
    ...fonts.body3Bold,
    color: colors.black3,
  },
  annotation: {
    ...fonts.body5Bold,
    color: colors.black1,
    paddingTop: 5,
  },
  input: {
    height: 30, 
    width: '60%', 
    paddingVertical: 3,
    paddingHorizontal: 10,
    backgroundColor: colors.gray2,
    borderWidth: 1,
    borderRadius: 15, // 添加圆角
    borderColor: colors.gray3,
  },
});
// 09 CCTODO: placeholder 的字型


const InputField: React.FC<Props> = ({ title, annotation }) => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        {annotation != null && (
          <Text style={styles.annotation}>{annotation}</Text>
        )}
      </View>
      <TextInput style={styles.input} placeholder={"Enter here"}/>
    </>
  );
}

export default InputField;