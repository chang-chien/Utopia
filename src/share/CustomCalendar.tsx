import React, {useState} from 'react';
import  { Calendar }  from  'react-native-calendars' ;
import { StyleSheet } from 'react-native';
import { MarkedDates } from 'react-native-calendars/src/types';

import CustomDayComponent from './CustomerCalendarComponent/CustomDayComponent';

export type Props = {
  markedDate: string[];
  onPress: (date: string) => void;
};

const styles = StyleSheet.create({
  calendar: {
    marginBottom: 20,
    height:'100%',
  },
  headerContainer: {
    backgroundColor: 'orange',
    position: 'absolute',
    flexDirection: 'row',
    left: 0,
    gap: 20,  // because of the loader spinner 'displayLoadingIndicator' if its active 
  },
  header: {
    backgroundColor: 'purple', 
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 5,
    alignItems: 'center',
  },
  theme: {
    backgroundColor: '#777777', // 目前看不出來
    calendarBackground: '#777777', //日曆底色
    textSectionTitleColor: '#E2DEDF', // 星期幾的文字顏色
    arrowColor: '#AFAFAF', // 上面箭頭顏色
    // CCTODO: 設定截止日期
    disabledArrowColor: '#444343',
    monthTextColor: '#E2DEDF', 
    textMonthFontSize: 14,
    textDayHeaderFontSize: 14,
  },
});

// CCTODO: 加today 按鈕？
const CustomCalendar: React.FC<Props> = ({markedDate, onPress}) => {

  const [selectedDate, setSelectedDate] = useState<string>('');

  // Convert string array to MarkedDates object
  const markedDates: MarkedDates = markedDate.reduce((result, date) => {
    result[date] = { marked: true }; 
    return result;
  }, {});

  const handlePress = (date: string) => {
    setSelectedDate(date);
    onPress(date);
  };

  return (
    <Calendar
      markedDates={markedDates}
      style={styles.calendar}
      theme = {styles.theme}
      dayComponent={({date, state}) => {  
        return <CustomDayComponent 
                  date={date} 
                  state={state} 
                  isMarked={markedDates[date.dateString]?.marked}
                  isSelected={selectedDate === date.dateString}
                  onPress={() => handlePress(date.dateString)}
         />;
      }}
    />
  );
}

export default CustomCalendar;
