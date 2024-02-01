import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    textContainer: {
      borderWidth: 1,
      borderColor: '#E2DEDF', //日曆外框顏色
      backgroundColor: 'transparent',
      width: 46.2,
      height: 0,
      paddingBottom: '101%',
      marginBottom: -15,
      flex: 1,
    },
    text: {
      width: '100%',
      height: 0,
      paddingBottom: '75%',
      paddingTop: 13,
      textAlign: 'center', //水平置中
      fontSize: 14, 
      fontFamily: 'RobotoSlab_400Regular', 
      color: '#444343',
      backgroundColor: '#777777',
    },
    textDisabled: {
      color: '#E2DEDF',
      backgroundColor: '#444343',
    },
    textToday: {
      color: '#FFFFFF',
      // backgroundColor: '#E2DEDF',
    },
    textSelected: {
      color: '#777777',
      backgroundColor: '#E2DEDF',
    },
    textMarked: {
      textDecorationLine: 'underline',
    }
  });

type DayComponentProps = {
  date: any;
  state: string;
  isMarked: boolean;
  onPress: (dateString: string) => void; // Callback for onPress
  isSelected: boolean;
};

const CustomDayComponent: React.FC<DayComponentProps> = ({ date, state, isMarked, isSelected, onPress}) => {
  const handlePress = () => {
    const dateString = date.dateString;
    onPress(dateString);
  };

  // 09 CCTODO: 如果是disabled 被點到要跳回前一個或後一個月 可以month 或是 <7 & >25
  // 09 calender 的優化自己拉一個待辦事項
  let textComponent;
  switch (state) {
    case 'today':
      textComponent = <Text style={[styles.text, 
                                    styles.textToday, 
                                    isSelected ? styles.textSelected : null, 
                                    isMarked ? styles.textMarked : null]}>{date.day}</Text>;
      break;
    case 'disabled':
      textComponent = <Text style={[styles.text, 
                                    styles.textDisabled, 
                                    isMarked ? styles.textMarked : null]}>{date.day}</Text>;
      break;
    default:
      textComponent = <Text style={[styles.text, 
                                    isSelected ? styles.textSelected : null, 
                                    isMarked ? styles.textMarked : null]}>{date.day}</Text>;
      break;
  }

  return <TouchableOpacity style={styles.textContainer} onPress={() => handlePress()}>{textComponent}</TouchableOpacity>;
};

export default CustomDayComponent;