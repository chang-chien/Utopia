import React from 'react';
import { View, TextInput, Image, StyleSheet, Text } from 'react-native';

import ButtonIconField from '../../share/ButtonIconField'; // 导入新组件
import IconVariant from '../../share/IconComponent/IconVariant';

// CCTODO: image 改成多張
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
  textContainer: {
    paddingHorizontal: 10, // 可以根据需要调整垂直间距
  },
  lyingBlock: {
    width: '100%',
    height: 'auto',
    flexDirection: 'row', // 橫向排列
    alignItems: 'center', // 上下置中
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
    backgroundColor: '#E2DEDF', // CCQ: 要不要改 EEEBEB 跟 personalInfo > inputField 一致
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
  },
  faceIcon: {
    fontSize: 25,
    color: '#5A585A',
    paddingLeft: 10, // 左
    opacity: 0.85,
  },
});

// CCTODO: 補 feedback icon
// CCTODO: 補頭貼
const PostField: React.FC<Props> = ({ username, content }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../../assets/photoexample.jpg')}
      />
      <View style={styles.textContainer}>
        <Text style={styles.username}>{username}</Text>
        <Text style={styles.content}>{content}</Text>
        <View style={styles.lyingBlock}>
          <TextInput style={styles.comment} placeholder={"Leave a comment"}/>
          <ButtonIconField 
            collection='FontAwesome5' 
            name='thumbs-up' 
            style={styles.faceIcon} 
            pressable={false} 
            variant={IconVariant.Solid}
          />
          <ButtonIconField 
            collection='FontAwesome5' 
            name='heart' 
            style={styles.faceIcon} 
            pressable={false} 
            variant={IconVariant.Solid}
          />
          <ButtonIconField 
            collection='FontAwesome5' 
            name='smile' 
            style={styles.faceIcon} 
            pressable={false} 
            variant={IconVariant.Solid}
          />
          <ButtonIconField 
            collection='FontAwesome5' 
            name='sad-cry' 
            style={styles.faceIcon} 
            pressable={false} 
            variant={IconVariant.Solid}
          />
          <ButtonIconField 
            collection='FontAwesome5' 
            name='surprise' 
            style={styles.faceIcon} 
            pressable={false} 
            variant={IconVariant.Solid}
          />
        </View>
      </View>
    </View>
  );
}

export default PostField;
