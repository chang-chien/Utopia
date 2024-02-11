import React from 'react';
import { View, TextInput, Image, StyleSheet, Text } from 'react-native';
import colors from "../assets/colors"
import fonts from "../assets/font"
import TagField from './TagField';

export type Props = {
  title?: string;
  question?: string;
  content?: string | string[];
  tag?: string[];
  image?: string;
  annotation?: string;
  comment?: string;
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20, 
  },
  title: {
    ...fonts.heading3,
    color: colors.black1,
  },
  question: {
    ...fonts.body2Bold,
    color: colors.black1,
    marginBottom: 5,
  },
  content: {
    ...fonts.body2,
    color: colors.black1,
    marginBottom: 3,
  },
  tag: {
    ...fonts.heading3,
    width: '100%', 
  },
  imageContainer: {
    marginTop: 3,
    gap: 3,
    width: '60%', 
  },
  image: {
    width: '60%', // CCTODO: 要確認一下
    height: 0,
    paddingBottom: '75%', // 圖片比例 4:5
  },
  annotation: {
    ...fonts.body4,
    width: '60%',  // CCTODO: 要確認一下
    textAlign: 'center',
  }, 
  comment: {
    height: 20,  // CCTODO：感覺可以拿掉
    width: '60%', 
    paddingVertical: 3,
    paddingHorizontal: 10,
    backgroundColor: colors.gray2,
    borderWidth: 1,
    borderRadius: 15, // 添加圆角
    borderColor: colors.gray3,
  },
});

const BlockField: React.FC<Props> = ({ title, question, content, tag, image, annotation, comment}) => {
  return (
    <View style={styles.container}>
      {title && <Text style={styles.title}>{title}</Text> }
      {question && <Text style={styles.question}>{question}</Text> }
      {content && <Text style={styles.content}>{content}</Text> }
      {tag &&
        <View style={styles.tag}>
          <TagField label={tag}/>
        </View> }
      {image && annotation &&
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: image}} />
          <Text style={styles.annotation}>{annotation}</Text>
        </View> }
      {comment && <TextInput style={styles.comment} placeholder={comment} /> }

    </View>
  );
};

export default BlockField;
