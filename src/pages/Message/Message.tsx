import { Text, StyleSheet, View, ScrollView } from 'react-native';

import { StackNavigationProp } from '@react-navigation/stack';
import { RootTabParamList } from '../../../App';

import BlockAvartField from '../../share/BlockAvartField'; // 导入新组件

// TODO: 整理 styleSheet
const styles = StyleSheet.create({
  container: {
    flex: 1, // 一定要加不然螢幕下半部會被吃掉
    backgroundColor: '#F9F8EF',
    height: '80%',
    padding: 5, // 添加了 padding 属性
    paddingVertical: 15,
    paddingLeft: 30,
    paddingRight: 30,
  },
  block: {
    flex: 1, // 一定要加不然滑不動
    marginBottom: 15, // 可以根据需要调整垂直间距
    width: '100%',
  },
  title: {
    fontSize: 26,
    color: '#444344',
    fontFamily: 'RobotoSlab_700Bold',
    marginBottom: 10, // 可以根据需要调整垂直间距
  },
  avatar: {
    width: 50,
    height: 50,
    marginTop: 10, // 如果只有一行文字 report會太遠
  },
  name: {
    fontSize: 20,
    color: '#777777',
    fontFamily: 'RobotoSlab_400Regular',
  },
  content: {
    fontSize: 14,
    color: '#777777',
    fontFamily: 'RobotoSlab_400Regular',
  },
});

type MessageScreenNavigationProp = StackNavigationProp<RootTabParamList, 'Message'>;

type TProps = {
  navigation: MessageScreenNavigationProp;
};

// 05 CCTODO 好像可以不用帶ID 整個規劃 DB 的時候 in & out
const data = [{
  senderId: 2,
  senderAvatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBngj5Oa8udlkeVBvwD5j-Fe2OFbY1uoC3voc1Pcajqa2iSc5t",
  senderName: "Cristina",
  lastMessageId: 1,
  lastMessage: 'Hey I am Cristina',
  readStatus: false
}, {
  senderId: 3,
  senderAvatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBngj5Oa8udlkeVBvwD5j-Fe2OFbY1uoC3voc1Pcajqa2iSc5t",
  senderName: "Jessie",
  lastMessageId: 1,
  lastMessage: 'Hola, mi llamo Jessie',
  readStatus: false
}]

// 09 CCTODO: BlockAvartField 外面加一層 touchable
const Message = ({navigation}: TProps) => {
  return (
    <ScrollView style={styles.container}>
      {/* <View style={styles.block}>
        <Text style={styles.title}>Message</Text>
      </View> */}

      {data.map((data, index) => (
        <View style={styles.block}>
        <BlockAvartField 
          key={index}
          avatar={data.senderAvatar} 
          title={data.senderName} 
          content={data.lastMessage}
          avatarStyle={styles.avatar}
          titleStyle={styles.name}
          contentStyle={styles.content} />
        </View>
      ))}
    </ScrollView>
  );
}

export default Message;

