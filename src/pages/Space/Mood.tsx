import React from 'react';
import { Text, StyleSheet, View, ScrollView } from 'react-native';

import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../App';

import ButtonIconField from '../../share/ButtonIconField'; // 导入新组件

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#777777',
  },
  backIcon: {
    width: '50%', 
    fontSize: 50,
    color: "#D9D9D9",
    textAlign: 'left',
    marginBottom: 10, // 可以根据需要调整垂直间距
    paddingHorizontal: 30,
    marginTop: 30,
  },
  pageTitle: {
    fontSize: 32,
    color: '#E2DEDF',
    fontFamily: 'RobotoSlab_700Bold',
    marginBottom: 5, // 可以根据需要调整垂直间距
  },
  block: {
    marginBottom: 40, // 可以根据需要调整垂直间距
    width: '100%',
    paddingHorizontal: 35,
    flex: 1,
  },
  title: {
    fontSize: 18,
    color: '#ECEBE0',
    fontFamily: 'RobotoSlab_700Bold',
    marginBottom: 5, // 可以根据需要调整垂直间距
  },
  content: {
    fontSize: 18,
    color: '#ECEBE0',
    fontFamily: 'RobotoSlab_400Regular',
    marginBottom: 5, // 可以根据需要调整垂直间距
  },
});

type JournalScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Journal'>;

type TProps = {
  navigation: JournalScreenNavigationProp;
};

const Journal = ({navigation}: TProps) => {

  const handleBack = () => {
    navigation.navigate('Space')
  };

  return (
      <ScrollView style={styles.container}>

        <ButtonIconField 
          collection='Entypo' 
          name='arrow-with-circle-left' 
          style={styles.backIcon} 
          onPress={handleBack}
        />  

        {/* Personal Space */}
        <View style={styles.block}>
          <Text style={styles.pageTitle}>Mood Genie</Text>
          <Text style={styles.content}>Hi there! I am here to provide your mood tracker. Everything is good here,  high or low, I am here for you.</Text>
        </View>

        <View style={styles.block}>
          <Text style={styles.title}>August mood record</Text>
        </View>

      </ScrollView>

  );
}

export default Journal;