import React, { useState } from 'react';
import { Text, StyleSheet, View, ScrollView } from 'react-native';
import Slider from '@react-native-community/slider';

import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../App';

import ButtonSmallField from '../../share/ButtonSmallField'; // 导入新组件
import ButtonLinkField from '../../share/ButtonLinkField'; // 导入新组件
import ButtonIconField from '../../share/ButtonIconField'; // 导入新组件

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#777777',
    height: '80%',
    padding: 5, // 添加了 padding 属性
    paddingTop: 30,
    paddingLeft: 30,
    paddingRight: 30,
  },
  block: {
    marginBottom: 40, // 可以根据需要调整垂直间距
    width: '100%',
  },
  lyingBlock: {
    width: '100%',
    height: 'auto',
    flexDirection: 'row', // 橫向排列
    alignItems: 'center', // 上下置中
    justifyContent: 'space-between', 
  },
  pageTitle: {
    fontSize: 32,
    color: '#E2DEDF',
    fontFamily: 'RobotoSlab_700Bold',
    marginBottom: 3, // 可以根据需要调整垂直间距
  },
  title: {
    fontSize: 22,
    color: '#ECEBE0',
    fontFamily: 'RobotoSlab_700Bold',
    marginBottom: 3, // 可以根据需要调整垂直间距
  },
  content: {
    fontSize: 18,
    color: '#ECEBE0',
    fontFamily: 'RobotoSlab_400Regular',
    marginBottom: 5, // 可以根据需要调整垂直间距
  },
  switchOn: {
    fontSize: 35,
    color: '#444343',
    paddingLeft: 10,
    paddingRight: 100,
    marginBottom: 5, // 可以根据需要调整垂直间距
  },
  switchOff: {
    fontSize: 35,
    color: '#D9D9D9',
    paddingLeft: 10,
    paddingRight: 100,
    marginBottom: 5, // 可以根据需要调整垂直间距
  },
  slider: {
    width: 250, 
    marginBottom: 10, // 可以根据需要调整垂直间距
  },
  faceIcon: {
    fontSize: 30,
    color: '#D9D9D9',
    marginBottom: 10, // 可以根据需要调整垂直间距
  },
});

type SpaceScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Space'>;

type TProps = {
  navigation: SpaceScreenNavigationProp;
};

const data = {
  userId: 3,
  name: "Sabrina",
  IfPublic: false,
}

// 09 CCTODO: slider onSlidingComplete 回傳數值
const Space = ({navigation}: TProps) => {

  const [isPublic, setIsPublic] = useState(data.IfPublic);
  
  const handleSwitch = () => {
    setIsPublic((prevIsPublic) => !prevIsPublic);
  };

  return (
    <ScrollView style={styles.container}>

      {/* Personal Space */}
      <View style={styles.block}>
        <Text style={styles.pageTitle}>Personal Space</Text>
        <Text style={styles.content}>Hi {data.name}, I hope you are having an amazing day! If not, no worries. I am here for you even when it feels like no one else is. So sit back and relax with me, you did good today.</Text>
      </View>

      {/* Journal Tree */}
      <View style={styles.block}>
        <View style={styles.lyingBlock}>
          <Text style={styles.title}>Journal Tree</Text>
          {isPublic ? (
            <ButtonIconField 
              collection='MaterialCommunityIcons' 
              name='toggle-switch' 
              style={styles.switchOn} 
              onPress={handleSwitch}
            />
          ):(
            <ButtonIconField 
              collection='MaterialCommunityIcons' 
              name='toggle-switch-off' 
              style={styles.switchOff} 
              onPress={handleSwitch} 
            />
          )}
          <Text style={styles.content}>{String(isPublic)}</Text>
        </View>
        <Text style={styles.content}>Try to write down what happened today, it helps straighten your thoughts!</Text>
        <ButtonLinkField 
          title='View my journal log'
          onPress={() => navigation.navigate('Journal')} 
          buttonTextColor='#ECEBE0'/>
      </View>

      {/* Feeling */}
      <View style={styles.block}>
        <Text style={styles.title}>How are you feeling today?</Text>
        <View style={styles.lyingBlock}>
          <ButtonIconField 
            collection='FontAwesome5' 
            name='frown' 
            style={styles.faceIcon} 
            pressable={false} 
          />
          <Slider
            style={styles.slider}
            minimumValue={0} //最小值
            maximumValue={10} //最大值
            value={5} //預設值
            minimumTrackTintColor="#ECEBE0" // 滑桿左邊顏色
            maximumTrackTintColor="#ECEBE0" // 滑桿右邊顏色
            thumbTintColor = "#E2DEDF" // 原點顏色 
          /> 
          <ButtonIconField 
            collection='FontAwesome5' 
            name='smile' 
            style={styles.faceIcon} 
            pressable={false} 
          />
        </View>
        <ButtonLinkField 
          title='View my mood genie'
          onPress={() => navigation.navigate('Mood')} 
          buttonTextColor='#ECEBE0'/>
      </View>

      {/* Song */}
      <View style={styles.block}>
        <Text style={styles.title}>The song that can describe your mood today</Text>
        <ButtonSmallField 
          title='+ Add a song'
          onPress={() => navigation.navigate('Home')} 
          buttonColor='#444344'
          buttonTextColor='#ECEBE0'/>
      </View>

    </ScrollView>
  );
}

export default Space;

