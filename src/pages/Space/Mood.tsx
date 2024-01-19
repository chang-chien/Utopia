import { Text, StyleSheet, View, ScrollView } from 'react-native';

import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../App';

import BlockField from '../../share/BlockField'; // 导入新组件
import BlockQnaField from '../../share/BlockQnaField'; // 导入新组件
import ButtonField from '../../share/ButtonField'; // 导入新组件
import ButtonIconField from '../../share/ButtonIconField'; // 导入新组件
import IconVariant from '../../share/IconComponent/IconVariant';
import ButtonLargeField from '../../share/ButtonLargeField'; // 导入新组件
import ButtonSmallField from '../../share/ButtonSmallField'; // 导入新组件
import InputField from '../../share/InputField'; // 导入新组件
import TagField from '../../share/InputField'; // 导入新组件

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
  title: {
    fontSize: 32,
    color: '#E2DEDF',
    fontFamily: 'RobotoSlab_700Bold',
  },
});

type DefaultScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Default'>;

type TProps = {
  navigation: DefaultScreenNavigationProp;
};

const data = {}

const Default = ({navigation}: TProps) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.block}>
          <Text  style={styles.title}>Hello World</Text>
      </View>
    </ScrollView>

  );
}

export default Default;
