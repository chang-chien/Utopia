import React from 'react';
import { View, TextInput, Image, StyleSheet, Text } from 'react-native';

import TagField from './TagField'; // 导入新组件

export type Props = {
  title: string;
  content?: string | string[];
  tag?: string[];
  image?: string;
  annotation?: string;
  comment?: string;
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10, // 可以根据需要调整垂直间距
    width: '100%',
    paddingLeft: 20, 
    paddingRight: 20,
  },
  title: {
    fontSize: 22,
    color: '#777777',
    marginBottom: 3, // 下 要和 TagField.container 一致
    fontFamily: 'RobotoSlab_700Bold',
  },
  content: {
    fontSize: 18,
    color: '#777777',
    width: '100%', 
    marginBottom: 3, // 下 要和 TagField.container 一致
    fontFamily: 'RobotoSlab_400Regular',
  },
  tag: {
    fontSize: 18,
    color: '#777777',
    width: '100%', 
    fontFamily: 'RobotoSlab_400Regular',
    marginBottom: 3, // 下 要和 TagField.container 一致
  },
  image: {
    width: '60%', 
    height: 0,
    paddingBottom: '75%',
    marginBottom: 3, // 下 要和 TagField.container 一致
  },
  annotation: {
    fontSize: 14,
    color: '#777777',
    width: '60%', 
    fontFamily: 'RobotoSlab_400Regular',
    marginTop: -2, // 可以根据需要调整垂直间距
    marginBottom: 3, // 下
    textAlign: 'center',
  }, 
  comment: {
    height: 20, 
    width: '50%', 
    paddingTop: 3, // 上 要和 TagField.container 一致
    paddingBottom: 3, // 下 要和 TagField.container 一致
    paddingLeft: 10, // 左
    paddingRight: 10, // 右
    marginTop: 3, // 下
    marginBottom: 3, // 下
    borderColor: '#E6E2E2', 
    borderWidth: 1,
    backgroundColor: '#EEEBEB',
    borderRadius: 10, // 添加圆角
  },
});

// Q 04 CCTODO: QNA的Q大小可以跟title一樣? 不管怎麼樣都要把QNA並進來 差別是要不要開question
// 09 CCTODO: placeholder 的字型
const BlockField: React.FC<Props> = ({ title, content, tag, image, annotation, comment}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {content != null && (
        <Text style={styles.content}>{content}</Text>
      )}
      {tag != null && (
        <View style={styles.tag}>
          <TagField label={tag}/>
        </View>
      )}
      {image != null && (
        <Image style={styles.image} source={{ uri: image}} />
      )}
      {annotation != null && (
        <Text style={styles.annotation}>{annotation}</Text>
      )}
      {comment != null && (
        <TextInput style={styles.comment} placeholder={comment} />
      )}

    </View>
  );
};

export default BlockField;
