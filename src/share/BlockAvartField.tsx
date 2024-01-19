import React from 'react';
import { View, Text, Image, StyleSheet, TextStyle, ImageStyle, StyleProp } from 'react-native';

export type Props = {
  avatar: string;
  title?: string;
  content?: string;
  avatarStyle?: StyleProp<ImageStyle>;
  titleStyle?: StyleProp<TextStyle>;
  contentStyle?: StyleProp<TextStyle>;
};

const styles = StyleSheet.create({
  lyingBlock: {
    width: '100%',
    height: 'auto',
    flexDirection: 'row', // 橫向排列
    alignItems: 'flex-start', // 上下置中
    // backgroundColor: 'red',
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 40, // 添加圆角
    marginTop: 3, // 如果只有一行文字 report會太遠
    marginRight: 8, // 頭貼 & 文字之間距離
    marginBottom: -20, // 如果只有一行文字 report會太遠
  },
  title: {
    flex: 1,
    fontSize: 16,
    color: '#777777',
    fontFamily: 'RobotoSlab_400Regular',
    justifyContent: 'center',
    paddingVertical: 5, // 可以根据需要调整垂直间距
    marginTop: 3, // 如果只有一行文字 report會太遠
    // backgroundColor: 'orange',
  },
  content: {
    flex: 1,
    fontSize: 15,
    color: '#ECEBE0',
    fontFamily: 'RobotoSlab_400Regular',
    alignItems: 'flex-end',
    // backgroundColor: 'yellow',
  },
});

const FeedbackField: React.FC<Props> = ({ avatar, title, content, avatarStyle, titleStyle, contentStyle }) => {
  if (title && content) {
    return(
      <View style={styles.lyingBlock}>
        <Image
          style={[styles.avatar, avatarStyle ]}
          source={{ uri: avatar }}
        />
        <View>
          <Text style={[styles.title, titleStyle ]}>{title}</Text>
          <Text style={[styles.content, contentStyle]}>{content}</Text>
        </View>
      </View>
    )
  } else if (title) {
    return(
      <View style={styles.lyingBlock}>
        <Image
          style={styles.avatar}
          source={{ uri: avatar }}
        />
        <Text style={[styles.title, titleStyle ]}>{title}</Text>
      </View>
    )
  } else if (content) {
    return(
      <View style={styles.lyingBlock}>
        <Image
          style={styles.avatar}
          source={{ uri: avatar }}
        />
        <Text style={[styles.content, contentStyle]}>{content}</Text>
      </View>
    )
  } else {
    return(
      <View style={styles.lyingBlock}>
        <Image
          style={styles.avatar}
          source={{ uri: avatar }}
        />
      </View>
    )
  }
};

export default FeedbackField;