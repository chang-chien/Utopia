import { Text, Image, StyleSheet, View, ScrollView } from 'react-native';

import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../App';

import ButtonIconField from '../../share/ButtonIconField'; // 导入新组件
import BlockQnaField from '../../share/BlockQnaField'; // 导入新组件
import BlockField from '../../share/BlockField'; // 导入新组件

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
    paddingBottom: '70%', // 用比例計算高度 搭配 hight=0 使用
    alignItems: 'flex-start', // 上下對齊
    borderRadius: 35, // 添加圆角
    marginBottom: 5, // 可以根据需要调整垂直间距
  },
  backIcon: {
    width: '50%', 
    fontSize: 35,
    color: "#D9D9D9",
    textShadowRadius: 5, // 陰影暈開範圍
    textShadowColor: '#444343', // 陰影顏色
    marginTop: '-65%',
    paddingLeft: 15,
    textAlign: 'left',
  },
  report: {
    width: '50%', 
    fontSize: 30,
    color: "#D9D9D9",
    textShadowRadius: 5, // 陰影暈開範圍
    textShadowColor: '#444343', // 陰影顏色
    marginTop: '-65%',
    marginLeft: '50%',
    paddingRight: 15,
    textAlign: 'right',
  },
  user: {
    fontSize: 26,
    color: '#444343',
    paddingRight: 20,
    paddingLeft: 20, 
    fontFamily: 'RobotoSlab_700Bold',
  },
  location: {
    fontSize: 24,
    color: '#777777',
    paddingRight: 20,
    paddingLeft: 20, 
    marginTop: -5, // 可以根据需要调整垂直间距
    marginBottom: 15, // 可以根据需要调整垂直间距
    fontFamily: 'RobotoSlab_700Bold',
  },
  media: {
    width: '100%', 
    height: 0,
    paddingBottom: '30%', // 用比例計算高度 搭配 hight=0 使用
    alignItems: 'flex-start', // 上下對齊
    borderRadius: 20, // 添加圆角
    marginBottom: 5, // 可以根据需要调整垂直间距
  },
});

type MatchScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Match'>;

type TProps = {
  navigation: MatchScreenNavigationProp;
};

const data = {
  userId: 3,
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBngj5Oa8udlkeVBvwD5j-Fe2OFbY1uoC3voc1Pcajqa2iSc5t",
  name: "Sabrina",
  age: "28",
  locate: "Las Vegas, United States",  
  intro: "I am a AI generate person living in the central CA, I'm like Siri, but better. I can do anything you want me to do.",
  purpose: "Long term partner",
  mbti: "ENFP",
  basic: {
    tag: ["168cm", "Gemini", "Casual drinking", "Comics", "Basketball"],
    try: "Write a song",
    status: "Student",
  },
  record: [{
    title: "Pets time!",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBngj5Oa8udlkeVBvwD5j-Fe2OFbY1uoC3voc1Pcajqa2iSc5t",
    annotation: "Mei-Mei"
  }, {
    title: "Favorite place!",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBngj5Oa8udlkeVBvwD5j-Fe2OFbY1uoC3voc1Pcajqa2iSc5t",
    annotation: "Passer cafe"
  }],
  mood: 8,
  daily: "9/24/2023 \nI don’t know who I am and don’t now what I want. But probably money, give me money.",
  qna: [{
    question:"What camera lenses do you like the most?",
    answer:"",
  },{
    question:"What is your most ideal relationship?",
    answer: ["Love and understanding", "Connections", "People likes us"]
  }]
}

const Match = ({navigation}: TProps) => {

  const handleBack = () => {
    navigation.navigate('Match')
  };

// 09 CCTODO: report onPress function 抄 Match
// 09 CCTODO: favorite onPress function 抄 Match
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{ uri: data.image}}
        />
        <ButtonIconField 
          collection='Entypo' 
          name='arrow-with-circle-left' 
          style={styles.backIcon} 
          onPress={handleBack}
        />
        <ButtonIconField 
          collection='Feather' 
          name='more-vertical' 
          style={styles.report}
        />
        <Text style={styles.user}>{data.name}, {data.age}</Text>
        <Text style={styles.location}>{data.locate}</Text>
        <BlockField title={'About me'} content={data.intro}/>
        <BlockField title={'Looking For'} content={data.purpose}/>
        <BlockField title={'MBTI'} content={data.mbti}/>
        <BlockField title={'Basics'} tag={data.basic.tag}/>
        {/* Basics try & status */}
        {data.record.map((data, index) => (
          <BlockField title={data.title} image={data.image} annotation={data.annotation} />
        ))}
        {/* MOOD */}
        <BlockField title={'Hows her mood today?'} />
        <BlockField title={'Daily Journal'} content={data.daily} comment={'Leave a feedback'}/>
        {data.qna.map((data, index) => (
          <BlockQnaField key={index} question={data.question} answer={data.answer}/>
        ))}
        <BlockField title={'Song of the day'} />
        <Image
          style={styles.media}
          source={{ uri: data.image}}
        />
      </View>
    </ScrollView>
  );
}

export default Match;

