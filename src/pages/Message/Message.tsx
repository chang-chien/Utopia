import { StyleSheet, SafeAreaView, ScrollView, View, Text } from 'react-native';
import globalStyles from '../../assets/globalStyles';
import AvatartField from './AvatarField';
import ChatBoxField from './ChatBoxField';

import { StackNavigationProp } from '@react-navigation/stack';
import { RootTabParamList } from '../../../App';

const styles = StyleSheet.create({
  bodyContainer: {
    ...globalStyles.screenContainer,
  },
  lyingBlock: {
    ...globalStyles.lyingBlock,
    overflow: 'scroll'
  },
  margin: {
    width: 30
  },
});

type MessageScreenNavigationProp = StackNavigationProp<RootTabParamList, 'Message'>;

type TProps = {
  navigation: MessageScreenNavigationProp;
};

// CCTODO: 如果 onlineStatusData 改變 data 重抓
// CCTODO: 整理 AvartField 顯示順序給資料庫/後端處裡
// CCTODO: Send 後端邏輯：B send > change DB > if A online > refresh A data(這裡比較難做)
const data = [{
  senderId: 2,
  senderAvatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBngj5Oa8udlkeVBvwD5j-Fe2OFbY1uoC3voc1Pcajqa2iSc5t",
  senderName: "Cristina",
  lastMessageId: 1,
  lastMessage: 'Hey I am Cristina',
  readStatus: true
}, {
  senderId: 3,
  senderAvatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBngj5Oa8udlkeVBvwD5j-Fe2OFbY1uoC3voc1Pcajqa2iSc5t",
  senderName: "Jessie",
  lastMessageId: 1,
  lastMessage: 'Hola, mi llamo Jessie',
  readStatus: false
}, {
  senderId: 4,
  senderAvatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBngj5Oa8udlkeVBvwD5j-Fe2OFbY1uoC3voc1Pcajqa2iSc5t",
  senderName: "Jessie",
  lastMessageId: 1,
  lastMessage: 'Hola, mi llamo Jessie',
  readStatus: false
}, {
  senderId: 5,
  senderAvatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBngj5Oa8udlkeVBvwD5j-Fe2OFbY1uoC3voc1Pcajqa2iSc5t",
  senderName: "Jessie",
  lastMessageId: 1,
  lastMessage: 'Hola, mi llamo Jessie',
  readStatus: false
}, {
  senderId: 6,
  senderAvatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBngj5Oa8udlkeVBvwD5j-Fe2OFbY1uoC3voc1Pcajqa2iSc5t",
  senderName: "Jessie",
  lastMessageId: 1,
  lastMessage: 'Hola, mi llamo Jessie',
  readStatus: false
}, {
  senderId: 7,
  senderAvatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBngj5Oa8udlkeVBvwD5j-Fe2OFbY1uoC3voc1Pcajqa2iSc5t",
  senderName: "Jessie",
  lastMessageId: 1,
  lastMessage: 'Hola, mi llamo Jessie',
  readStatus: false
}, {
  senderId: 8,
  senderAvatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBngj5Oa8udlkeVBvwD5j-Fe2OFbY1uoC3voc1Pcajqa2iSc5t",
  senderName: "Jessie",
  lastMessageId: 1,
  lastMessage: 'Hola, mi llamo Jessie',
  readStatus: false
}]

// key = senderId, Value = boolean
const onlineStatusData = {
  3: true,
  5: true
}

const Message = ({navigation}: TProps) => {
  return (
    <SafeAreaView style={globalStyles.safeContainer}>
      <ScrollView>
        {/* Avatar */}
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={globalStyles.lyingBlock}> 
            {/* lyingBlock 加不了邊 設定左邊距離 */}
            <View style={styles.margin}></View>
            {data.map((data, index) => (
              <AvatartField 
                avatar={data.senderAvatar}
                online={onlineStatusData[data.senderId]} />
            ))}
          </View>
        </ScrollView>

        {/* ChatBox */}
        <View style={styles.bodyContainer}>
          {data.map((data, index) => (
            <ChatBoxField 
              key={index}
              avatar={data.senderAvatar} 
              unread={data.readStatus}
              title={data.senderName} 
              content={data.lastMessage} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Message;