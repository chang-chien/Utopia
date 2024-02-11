import React from 'react';
import { View, TextInput, Image, StyleSheet, Text } from 'react-native';
import colors from '../../assets/colors';

export type Props = {
  avatar: string;
  online: boolean;
};

const styles = StyleSheet.create({
  container: {
    position: 'relative', 
    width: 50,
    height: 50,
    marginRight: 25,
    marginVertical: 10,
    alignItems: 'flex-end', // 水平置左
    justifyContent: 'flex-start', // 垂直置中
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  dot: {
    position: 'absolute',
    bottom: 2,
    left: 2,
    backgroundColor: colors.black3,
    width: 10,
    height: 10,
    borderRadius: 10,
  }
});

const AvartField: React.FC<Props> = ({ avatar, online = false }) => {
  return(
    <View style={styles.container}>
      <Image
        style={styles.avatar}
        source={{ uri: avatar }}
      />
      {online && (
        <View style={styles.dot}></View>
      )}
    </View>
  )
};

export default AvartField;