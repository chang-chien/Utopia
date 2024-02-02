import React from 'react';
import { View, TextInput, Image, StyleSheet, Text } from 'react-native';

import ButtonIconField from '../../share/ButtonIconField'; // 导入新组件
import IconVariant from '../../share/IconComponent/IconVariant';
import BlockAvartField from '../../share/BlockAvartField'; // 导入新组件

// 09 CCTODO: image 改成多張
export type Props = {
  image?: any;
  avatar?: any;
  username: string;
  content: string;
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 30, // 可以根据需要调整垂直间距
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
    justifyContent: 'space-between',
  },
  image: {
    width: '100%', 
    height: 0,
    paddingBottom: '133.33%', // 3:4
    marginBottom: 2, // 如果只有一行文字 report會太遠
    borderRadius: 20, // HTODO: 圖片邊跟avatar的比例
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
    paddingBottom: 3, // 下
    marginTop: 5, // 可以根据需要调整垂直间距
    fontFamily: 'RobotoSlab_400Regular',
  },
  comment: {
    fontSize: 14,
    color: '#777777',
    backgroundColor: '#EEEBEB', 
    height: 20, 
    width: 140, 
    paddingVertical: 3, // 上
    paddingHorizontal: 10,
    marginTop: 3, // 可以根据需要调整垂直间距
    borderColor: '#E6E2E2', 
    borderWidth: 1,
    borderRadius: 10, // 添加圆角
  },
  faceIcon: {
    fontSize: 25,
    color: '#5A585A',
    opacity: 0.85,
  },
});

// 05 CCTODO：規劃 Post feedbeck DB 
// 09 CCTODO: 補 feedback icon pressable
const PostField: React.FC<Props> = ({ avatar, username, content }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../../assets/photoexample.jpg')}
      />
      <View style={styles.textContainer}>
        <BlockAvartField avatar={avatar} title={username}/>
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
