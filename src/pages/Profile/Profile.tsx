import { Text, StyleSheet, View } from 'react-native';

import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../App';

import InputField from '../../share/InputField'; // 导入新组件
import ButtonField from '../../share/ButtonField'; // 导入新组件

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F8EF',
    alignItems: 'flex-start', // 上下對齊
    justifyContent: 'flex-start',
    height: '80%',
    padding: 5, // 添加了 padding 属性
    paddingTop: 30,
    paddingLeft: 30,
  },
  username: {
    fontSize: 26,
    color: '#444344',

  },
  location: {
    fontSize: 24,
    color: '#777777',

  },
  title: {
    fontSize: 22,
    color: '#777777',

  },
  content: {
    fontSize: 18,
    color: '#777777',

  },
  postscript: {
    fontSize: 14,
    color: '#777777',

  },
  tag: {
    fontSize: 13,
    color: '#444344',
  }
});

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Profile'>;

type TProps = {
  navigation: ProfileScreenNavigationProp;
};

const Profile = ({navigation}: TProps) => {
  return (
    <View style={styles.container}>
        <Text>Hello World</Text>
    </View>
  );
}

export default Profile;

