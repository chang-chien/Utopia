import React from 'react';
import { View, TextInput, Image, StyleSheet, Text } from 'react-native';

export type Props = {
  image?: any;
  avatar?: any;
  username: string;
  content: string;
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 35, // 可以根据需要调整垂直间距
        width: '100%'
    },
    image: {
        width: '100%', 
        height: 0,
        paddingBottom: '133.33%',
    },
    username: {
        fontSize: 16,
        color: '#777777',
        marginTop: 5, // 可以根据需要调整垂直间距
        fontFamily: 'RobotoSlab_400Regular',
    },
    content: {
        fontSize: 14,
        color: '#777777',
        paddingTop: 3, // 上
        paddingBottom: 3, // 下
        marginTop: 5, // 可以根据需要调整垂直间距
        fontFamily: 'RobotoSlab_400Regular',
    },
    comment: {
        fontSize: 14,
        color: '#777777',
        backgroundColor: '#E2DEDF', // TODO: 要不要改 EEEBEB 跟 personalInfo > inputField 一致
        height: 20, 
        width: 140, 
        paddingTop: 3, // 上
        paddingBottom: 3, // 下
        paddingLeft: 10, // 左
        paddingRight: 10, // 右
        marginTop: 5, // 可以根据需要调整垂直间距
        borderColor: '#E6E2E2', 
        borderWidth: 1,
        borderRadius: 10, // 添加圆角
    }
});

// TODO: 補 feedback icon
// TODO: 補頭貼
const PostField: React.FC<Props> = ({ username, content }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../../assets/photoexample.jpg')}
      />
      <Text style={styles.username}>{username}</Text>
      <Text style={styles.content}>{content}</Text>
      <TextInput style={styles.comment} placeholder={"Leave a comment"}/>
    </View>
  );
}

export default PostField;
