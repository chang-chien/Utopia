import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export type Props = {
  label: string[];
};

const styles = StyleSheet.create({
  container: {
    width: '100%', 
    flexDirection: 'row', // 橫向排列
    flexWrap: 'wrap', // 自動換行
    paddingBottom: 3, // 下 要和 TagField.container 一致
    paddingRight: 10, // 右
  },
  tag: {
    paddingTop: 2, 
    paddingBottom: 2, 
    backgroundColor: '#E2DEDF', 
    marginRight: 5, // 可以根据需要调整垂直间距
    marginBottom: 5, // 可以根据需要调整垂直间距
    borderRadius: 10, 
    // overflow: 'hidden', 
    // justifyContent: 'space-between', 
    // alignItems: 'center', 
    // display: 'flex'
  },
  text: {
    paddingLeft: 12, 
    paddingRight: 12, 
    color: '#444343', 
    fontSize: 13, 
    fontFamily: 'RobotoSlab_400Regular', 
  },
});

const TagField: React.FC<Props> = ({ label }) => {
  return (
    <View style={styles.container}>
      {label.map((tag, index) => (
        <View key={index} style={styles.tag}>
          <Text style={styles.text}>{tag}</Text>
        </View>
      ))}
    </View>
  );
}
export default TagField;