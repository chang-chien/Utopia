import { StyleSheet, View, ScrollView } from 'react-native';
import InputField from '../../share/InputField'; // 导入新组件
import ButtonLargeField from '../../share/ButtonLargeField'; // 导入新组件

import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../App';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F8EF',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '8%', // 跟瀏海切齊
  },
  lyingBlock: {
    width: '100%',
    height: 'auto',
    flexDirection: 'row', // 橫向排列
    alignItems: 'center', // 上下置中
    justifyContent: 'space-evenly',
    paddingTop: '5%',
    paddingBottom: '10%',
  },
  form: {
    flex: 1,
    backgroundColor: '#F9F8EF', // 左右對齊 flex-start, center, flex-end
    alignItems: 'flex-start', // 上下對齊
    justifyContent: 'flex-start',
    width: 350,
    paddingTop: 30,
    paddingHorizontal: 30, //TODO: 30 感覺有點太多
  },
  button: {
    flexDirection: 'row', // 设置水平排列
    justifyContent: 'center',
    paddingBottom: '10%',
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

const inputItems = [
  'Share a photo of your pet if you have/had one \n( Maybe you can find them a soul mate as well! ) \n(If your pet is a rock I we would love to see them as well!)',
  'Share the most beautiful place you have ever been to',
  'Share a favorite shop of yours',
  'Describe yourself in one sentence \n(Fill in with options) \n(Wordings TBD)',
  'Things I want to try if I have the chance', // CCTODO: 下拉式選單
  'Work', // CCTODOQ: 等介面
  'Anything else you want to share with people',
];
// CCTODO: 如果還有感情觀 是再多一頁的意思嗎

type MoreInfoScreenNavigationProp = StackNavigationProp<RootStackParamList, 'MoreInfo'>;

type TProps = {
  navigation: MoreInfoScreenNavigationProp;
};

const MoreInfo = ({navigation}: TProps) => {
  return (
  <View style={styles.container}>
    <ScrollView>
      <View style={styles.form}>
        {inputItems.map((label, index) => (
          <InputField key={index} label={label} />
        ))}
      </View>
      <View style={styles.button}>
        <ButtonLargeField 
          title='Submit'
          onPress={() => navigation.navigate('TabScreen')} 
          buttonColor='#444344'
          buttonTextColor='#EEEBEB'/>
      </View>
    </ScrollView>
    <View style={styles.lyingBlock}>
        <View style={styles.disableBar}></View>
        <View style={styles.disableBar}></View>
        <View style={styles.enableBar}></View>
      </View>
  </View>
  );
}

export default MoreInfo;