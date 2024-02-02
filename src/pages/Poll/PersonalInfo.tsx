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
    width: '90%',
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
    paddingHorizontal: 30, //CCTODO: 30 感覺有點太多
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

// 09 CCTODO: 有一些是下拉式選單
const inputItems = [
  'Name',
  'Location',
  'Gender',
  'Interest',
  'MBTI',
  'Star Sign',
  'Height',
  'Weight',
  'Current Status',
  'Hightest education'
];

type PersonalInfoScreenNavigationProp = StackNavigationProp<RootStackParamList, 'PersonalInfo'>;

type TProps = {
  navigation: PersonalInfoScreenNavigationProp;
};

const PersonalInfo = ({navigation}: TProps) => {
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
          title='Next'
          onPress={() => navigation.navigate('MoreInfo')} 
          buttonColor='#444344'
          buttonTextColor='#EEEBEB'/>
      </View>
    </ScrollView>
    <View style={styles.lyingBlock}>
        <View style={styles.disableBar}></View>
        <View style={styles.enableBar}></View>
        <View style={styles.disableBar}></View>
      </View>
  </View>
  );
}

export default PersonalInfo;