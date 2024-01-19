import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import ButtonIconField from '../../share/ButtonIconField'; // 导入新组件
import IconVariant from '../../share/IconComponent/IconVariant';
import ButtonLinkField from '../../share/ButtonLinkField'; // 导入新组件

// CCTODO: image 改成多張
export type Props = {
  avatar?: any;
  content: string;
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10, // 可以根据需要调整垂直间距
    width: '100%',
  },
  lyingBlock: {
    width: '100%',
    height: 'auto',
    flexDirection: 'row', // 橫向排列
    alignItems: 'flex-start', // 上下置中
  },
  avatar: {
    width: 32, 
    height: 32,
    borderRadius: 40, // 添加圆角
    marginRight: 8, // 頭貼&文之間距離
    marginTop: 8, // 兩行文字的時候才會對齊
    marginBottom: -20, // 如果只有一行文字 report會太遠
  },
  content: {
    flex: 1, 
    fontSize: 15,
    color: '#ECEBE0',
    paddingVertical: 3, // 上
    fontFamily: 'RobotoSlab_400Regular',
    alignItems: 'flex-end',
  },
});

// CCTODO: 補頭貼
// CCTODO: 補 report onpress
const FeedbackField: React.FC<Props> = ({ avatar, content }) => {
  return (
    <View style={styles.container}>
        <View style={styles.lyingBlock}>
            {/* 補 avatar */}
            <Image
                style={styles.avatar}
                source={{ uri: avatar}}
            />
            <Text style={styles.content}>
                {content}
            </Text>
        </View>
        <ButtonLinkField 
            title='report this feedback'
            onPress={() => console.log('report this feedback')} 
            buttonTextColor='#D9D9D9'
            buttonTextSize={10} />
    </View>
  );
}

export default FeedbackField;
