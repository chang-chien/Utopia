import React from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';

import TagField from './TagField'; // 导入新组件

export type Props = {
  question: string;
  answer?: string | string[];
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10, // 要和 BlockField.container 一致
    width: '100%',
    paddingLeft: 20, 
    paddingRight: 20,
    paddingBottom: 3, // 下
  },
  question: {
    fontSize: 18,
    color: '#777777',
    paddingTop: 3, // 上
    paddingBottom: 3, // 下
    marginTop: 5, // 可以根据需要调整垂直间距
    fontFamily: 'RobotoSlab_700Bold',
  },
  comment: { // 除 margin 要和 BlockField.comment 一致
    height: 20, 
    width: '50%', 
    paddingTop: 3, // 上 要和 TagField.container 一致
    paddingBottom: 3, // 下 要和 TagField.container 一致
    paddingLeft: 10, // 左
    paddingRight: 10, // 右
    borderColor: '#E6E2E2', 
    borderWidth: 1,
    backgroundColor: '#EEEBEB',
    borderRadius: 10, // 添加圆角
  },
});

// CCTODO: placeholder 的字型
const QnaField: React.FC<Props> = ({ question, answer}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.question}>Q: {question}</Text>
      {typeof answer === 'string' ? (
        <TextInput style={styles.comment} placeholder="Leave an answer" />
      ) : (
        <TagField label={answer} />
      )}
    </View>
  );
};

export default QnaField;
