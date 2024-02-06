import { Text, StyleSheet, View, ScrollView } from 'react-native';

import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../App';

import PostField from './PostField'; // 导入新组件

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F8EF',
    alignItems: 'flex-start', // 上下對齊
    justifyContent: 'flex-start',
    height: '80%',
    paddingVertical: 10,
    paddingHorizontal: 30, // 添加了 padding 属性
  },
});

type FeedScreenNavigationProp = StackNavigationProp<RootStackParamList, 'TabScreen'>;

type TProps = {
  navigation: FeedScreenNavigationProp;
};

// 05 CCTODO: 假資料 等接資料庫
const data = [{
    userId: 1,
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBngj5Oa8udlkeVBvwD5j-Fe2OFbY1uoC3voc1Pcajqa2iSc5t",
    username: "Cristina",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBngj5Oa8udlkeVBvwD5j-Fe2OFbY1uoC3voc1Pcajqa2iSc5t",
    conetent: "Perfect afternoon in the Paris with overpriced balloons. But it’s fine because... ",  
  }, {
    userId: 2,
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBngj5Oa8udlkeVBvwD5j-Fe2OFbY1uoC3voc1Pcajqa2iSc5t",
    username: "Jessie",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBngj5Oa8udlkeVBvwD5j-Fe2OFbY1uoC3voc1Pcajqa2iSc5t",
    conetent: "Perfect afternoon in the Paris with overpriced balloons. But it’s fine because... ",  
}]
const Feed = ({navigation}: TProps) => {
  return (
    <ScrollView>
      <View style={styles.container}>
          {data.map((data, index) => (
            <PostField 
              avatar={data.avatar} 
              username={data.username} 
              content={data.conetent}/>
          ))}
      </View>
    </ScrollView>
  );
}

export default Feed;

