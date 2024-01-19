import { Text, StyleSheet, View, ScrollView } from 'react-native';

import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../App';

import BlockField from '../share/BlockField'; // 导入新组件
import BlockQnaField from '../share/BlockQnaField'; // 导入新组件
import ButtonField from '../share/ButtonField'; // 导入新组件
import ButtonIconField from '../share/ButtonIconField'; // 导入新组件
import IconVariant from '../share/IconComponent/IconVariant';
import ButtonLargeField from '../share/ButtonLargeField'; // 导入新组件
import ButtonLinkField from '../share/ButtonLinkField'; // 导入新组件
import ButtonSmallField from '../share/ButtonSmallField'; // 导入新组件
import InputField from '../share/InputField'; // 导入新组件
import InputAreaField from '../share/InputAreaField'; // 导入新组件
import TagField from '../share/TagField'; // 导入新组件
import BlockAvartField from '../share/BlockAvartField'; // 导入新组件

// TODO: 整理 styleSheet
const styles = StyleSheet.create({
  container: {
    flex: 1, // 一定要加不然螢幕下半部會被吃掉
    backgroundColor: '#F9F8EF',
    height: '80%',
    padding: 5, // 添加了 padding 属性
    paddingVertical: 30,
    paddingLeft: 30,
    paddingRight: 30,
  },
  block: {
    flex: 1, // 一定要加不然滑不動
    marginBottom: 40, // 可以根据需要调整垂直间距
    width: '100%',
  },
  title: {
    fontSize: 26,
    color: '#444344',
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
        <Text style={styles.title}>Hello World</Text>
      </View>
    </ScrollView>
  );
}

export default Default;

