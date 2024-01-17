import { Text, StyleSheet, View, ScrollView } from 'react-native';

import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../App';

import InputField from '../../share/InputField'; // 导入新组件
import ButtonField from '../../share/ButtonField'; // 导入新组件
import PostField from './PostField'; // 导入新组件

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F8EF',
    alignItems: 'flex-start', // 上下對齊
    justifyContent: 'flex-start',
    height: '80%',
    padding: 30, // 添加了 padding 属性
  },
  pageTitle: {
    fontSize: 32,
    color: '#444344',
    fontFamily: 'RobotoSlab_700Bold',
    marginBottom: 10, // 可以根据需要调整垂直间距

  },

});

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type TProps = {
  navigation: HomeScreenNavigationProp;
};

// TODO: 假資料 等接資料庫
const data = [{
    name: "Cristina",
    conetent: "Perfect afternoon in the Paris with overpriced balloons. But it’s fine because... ",  
  }, {
    name: "Jessie",
    conetent: "Perfect afternoon in the Paris with overpriced balloons. But it’s fine because... ",  
}]

const Home = ({navigation}: TProps) => {
  return (
    <ScrollView>
      <View style={styles.container}>
          <Text style={styles.pageTitle}>Feed</Text>
          {data.map((data, index) => (
            <PostField key={index} username={data.name} content={data.conetent}/>
          ))}
      </View>
    </ScrollView>
  );
}

export default Home;

