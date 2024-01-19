import { TouchableOpacity, Text, Image, StyleSheet, View, ScrollView } from 'react-native';

import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../App';

import ButtonIconField from '../../share/ButtonIconField'; // 导入新组件
import BlockQnaField from '../../share/BlockQnaField'; // 导入新组件

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F8EF',
    // alignItems: 'flex-start', // 上下對齊
    justifyContent: 'flex-start',
    height: '80%',
    padding: 30, // 添加了 padding 属性
  },
  image: {
    width: '100%', 
    height: 0,
    paddingBottom: '140%', // 用比例計算高度 搭配 hight=0 使用
    borderRadius: 35, // 添加圆角
    marginBottom: 10, // 可以根据需要调整垂直间距
  },
  report: {
    fontSize: 30,
    color: "#D9D9D9",
    textShadowRadius: 5, // 陰影暈開範圍
    textShadowColor: '#444343', // 陰影顏色
    marginTop: '-137%',
    paddingRight: 15,
    textAlign: 'right',
  },
  favorite: {
    fontSize: 45,
    color: "#ECEBE0",
    marginTop: '-23%',
    marginBottom: 15, // 可以根据需要调整垂直间距
    paddingRight: 20,
    textAlign: 'right',
    opacity: 0.85, // 透明度
  },
  user: {
    fontSize: 25,
    color: '#E6E6E2',
    paddingRight: 20,
    paddingLeft: 20, 
    marginTop: '-25%',
    fontFamily: 'InriaSerif_700Bold',
    textShadowRadius: 5, // 陰影暈開範圍
    textShadowColor: '#444343', // 陰影顏色
  },
  location: {
    fontSize: 20,
    color: '#E6E6E2',
    paddingRight: 20,
    paddingLeft: 20, 
    marginBottom: 20, // 可以根据需要调整垂直间距
    fontFamily: 'InriaSerif_700Bold',
    textShadowRadius: 5,
    textShadowColor: '#444343',
  },
});

type MatchScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Match'>;

type TProps = {
  navigation: MatchScreenNavigationProp;
};

// CCTODO: 假資料 等接資料庫
const data = {
  userId: 3,
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBngj5Oa8udlkeVBvwD5j-Fe2OFbY1uoC3voc1Pcajqa2iSc5t",
  name: "Sabrina",
  age: "28",
  locate: "Las Vegas, United States",  
  qna: [{
    question:"What camera lenses do you like the most?",
    answer:"",
  },{
    question:"What is your most ideal relationship?",
    answer: ["Love and understanding", "Connections", "People likes us"]
  }]
}

// CCTODO: 補 report onPress function
// CCTODO: 補 favorite onPress function
const Match = ({navigation}: TProps) => {

  const handleMoreInfo = () => {
    navigation.navigate('Profile')
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <TouchableOpacity onPress={handleMoreInfo}>
          <Image
            style={styles.image}
            source={require('../../../assets/photoexample.jpg')}
          />
        </TouchableOpacity>
        <ButtonIconField collection='Feather' name='more-vertical' style={styles.report}></ButtonIconField>
        <ButtonIconField collection='Octicons' name='feed-star' style={styles.favorite}></ButtonIconField>
        <Text style={styles.user}>{data.name}, {data.age}</Text>
        <Text style={styles.location}>{data.locate}</Text>
        {data.qna.map((data, index) => (
          <BlockQnaField key={index} question={data.question} answer={data.answer}/>
        ))}
      </View>
    </ScrollView>
  );
}

export default Match;

