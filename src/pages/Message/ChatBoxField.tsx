import React from 'react';
import { View, TextInput, Image, StyleSheet, Text } from 'react-native';
import globalStyles from '../../assets/globalStyles';
import colors from '../../assets/colors';
import fonts from '../../assets/font';

export type Props = {
  avatar: string;
  unread: boolean;
  title?: string;
  content?: string;
};

const styles = StyleSheet.create({
  lyingBlock: {
    ...globalStyles.lyingBlock,
    marginRight: 25,
    marginVertical: 10,
    paddingBottom: 10,
    alignItems: 'center', // 垂直置中
    justifyContent: 'flex-start', // 水平置左
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginLeft: 10,
    marginRight: 8,
  },
  dot: {
    backgroundColor: colors.black3,
    width: 10,
    height: 10,
    borderRadius: 10,
  },
  text: {
    color: colors.black2,
  },
});

const ChatBoxField: React.FC<Props> = ({ avatar, unread, title, content }) => {
  return(
    <View style={styles.lyingBlock}>
      <View style={[styles.dot, { backgroundColor: unread? colors.black3:null }]}></View>
      <Image
        style={styles.avatar}
        source={{ uri: avatar }}
      />
      <View>
        <Text style={[styles.text, unread? {...fonts.body1Bold}: {...fonts.body1}]}>{title}</Text>
        <Text style={[styles.text, unread? {...fonts.body3Bold}: {...fonts.body3}]}>{content}</Text>
      </View>
    </View>
  )
};

export default ChatBoxField;