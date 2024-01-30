import { StyleSheet, View, ScrollView } from 'react-native';
import InputField from '../share/InputField'; // 导入新组件
import ButtonLargeField from '../share/ButtonLargeField'; // 导入新组件

import { StackNavigationProp } from '@react-navigation/stack';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { RootStackParamList } from '../../App';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F8EF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    flex: 1,
    backgroundColor: '#F9F8EF', // 左右對齊 flex-start, center, flex-end
    alignItems: 'flex-start', // 上下對齊
    justifyContent: 'flex-start',
    height: '80%',
    width: 350,
    padding: 5, // 添加了 padding 属性
    paddingTop: 30,
    paddingLeft: 30, //TODO: 30 感覺有點太多
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
    </ScrollView>
    <ButtonLargeField 
      title='Submit'
      onPress={() => navigation.navigate('TabScreen')} 
      buttonColor='#444344'
      buttonTextColor='#EEEBEB'/>
  </View>
  );
}

export default PersonalInfo;