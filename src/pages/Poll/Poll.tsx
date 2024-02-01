import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../App';

import ButtonLargeField from '../../share/ButtonLargeField'; // 导入新组件

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F8EF',
    alignItems: 'center', // 水平置中 // 左右對齊 flex-start, center, flex-end
    justifyContent: 'center', // 垂直置中
    paddingTop: '40%',
  },
  bodyContainer: {
    height: '90%',
    // backgroundColor: 'red',
    alignItems: 'center', // 水平置中 // 左右對齊 flex-start, center, flex-end
    justifyContent: 'center', // 垂直置中
  },
  lyingBlock: {
    width: '90%',
    height: 'auto',
    flexDirection: 'row', // 橫向排列
    alignItems: 'center', // 上下置中
    justifyContent: 'space-evenly',
    paddingTop: '5%',
    paddingBottom: '10%',
  },
  titleContainer: {
    alignItems: 'center', 
    paddingBottom: 30,
  },
  textContainer: {
    fontWeight: 'bold', // 加粗
    fontSize: 32,
    fontFamily: 'RobotoSlab_700Bold',
  },
  buttonContainer: {
    width: 150, // 按钮容器的宽度
    borderRadius: 10, // 圆角半径
    borderColor: '#444344', // 边框颜色
    overflow: 'hidden', // 确保按钮内容不会超出底框
  },
  button: {
    flexDirection: 'row', // 设置水平排列
  },
  enableBar: {
    width: '30%',
    height: 5,
    borderRadius: 10, // 圆角半径
    backgroundColor: '#444344'
  },
  disableBar: {
    width: '30%',
    height: 5,
    borderRadius: 10, // 圆角半径
    backgroundColor: '#EEEBEB'
  },
});

type PollScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Poll'>;

type TProps = {
  navigation: PollScreenNavigationProp;
};

// 03 CCTODO: 這邊去 PersonalInfo 應該要用 Push 因為接下來都沒有上面 只有底下 bar
const Poll = ({navigation}: TProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.bodyContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.textContainer}>Lets talk about</Text>
          <Text style={styles.textContainer}>yourself</Text>
        </View>
        <View style={styles.button}>
          <ButtonLargeField
            title='Lets get started'
            onPress={() => navigation.navigate('PersonalInfo')}
            buttonColor='#EEEBEB'/>
        </View>
      </View>
      <View style={styles.lyingBlock}>
        <View style={styles.enableBar}></View>
        <View style={styles.disableBar}></View>
        <View style={styles.disableBar}></View>
      </View>
    </View>
  );
}

export default Poll;