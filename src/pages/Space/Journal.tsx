import React, {useState} from 'react';
import { Text, StyleSheet, View, ScrollView } from 'react-native';

import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../App';

import ButtonIconField from '../../share/ButtonIconField'; // 导入新组件
import ButtonSmallField from '../../share/ButtonSmallField'; // 导入新组件
import InputAreaField from '../../share/InputAreaField'; // 导入新组件
import CustomCalendar from '../../share/CustomCalendar'; // 导入新组件
import FeedbackField from './FeedbackField'; // 导入新组件

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
    paddingHorizontal: 30,
  },
  block: {
    width: '100%',
    padding: 5, // 添加了 padding 属性
    paddingHorizontal: 35,
    flex: 1,
  },
  claenderBlock: {
    width: '100%',
    padding: 5, // 添加了 padding 属性
    paddingHorizontal: 30,
    flex: 1,
  },
  inpuBlock: {
    width: '100%',
    paddingHorizontal: 30,
    flex: 1,
    marginBottom: 5, // 可以根据需要调整垂直间距
    paddingBottom: '30%' // 沒加會吃掉瀏覽空間
  },
  feedbackBlock: {
    width: '100%',
    paddingHorizontal: 35,
    flex: 1,
    paddingBottom: 30 
  },
  dateTitle: {
    fontSize: 22,
    color: '#ECEBE0',
    fontFamily: 'RobotoSlab_700Bold',
    marginBottom: 5, // 可以根据需要调整垂直间距
  },
  title: {
    fontSize: 18,
    color: '#ECEBE0',
    fontFamily: 'RobotoSlab_700Bold',
    marginBottom: 10, // 可以根据需要调整垂直间距
  },
  content: {
    fontSize: 18,
    color: '#ECEBE0',
    fontFamily: 'RobotoSlab_400Regular',
    marginBottom: 10, // 可以根据需要调整垂直间距
  },
  comment: {
    fontSize: 13,
    color: '#ECEBE0',
    fontFamily: 'RobotoSlab_400Regular',
    marginTop: 100, // 可以根据需要调整垂直间距
    marginBottom: 10, // 可以根据需要调整垂直间距
  },
});

type JournalScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Journal'>;

type TProps = {
  navigation: JournalScreenNavigationProp;
};

// TODO: 想一下那這樣 data & logData 有必要分開嗎
// 應該取決於一天會不會有多筆log嗎 & 有沒有需要call兩次API
// 阿或是log data 跟 feedback 併也可以
const data = {
  userId: 3,
  date: ['2023-12-31', '2024-01-01', '2024-01-19']
}

// 用userId&date組鍵查詢()
const logData = [{
  userId: 3,
  date: '2023-12-31',
  logId: 1,
  logContent: 'I feel lost in the sea of fear. I am lost. I am desperate. I need help, but don’t know how.',
}, {
  userId: 3,
  date: '2024-01-01',
  logId: 2,
  logContent: 'I feel lost in the sea of fear. I am lost. I am desperate. I need help, but don’t know how.',
}, {
  userId: 3,
  date: '2024-01-19',
  logId: 3,
  logContent: 'Nigga I feel the same.',
}, ]

const feedbackData = {
  userId: 3,
  logId: 1,
  feedback: [{
    feedbackId: 1,
    logId: 1,
    feedbackUserId: 1,
    feedbackAvatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBngj5Oa8udlkeVBvwD5j-Fe2OFbY1uoC3voc1Pcajqa2iSc5t",
    feedbackContent: 'I feel the same sometimes, don’t worry, we are here for you.',
  }, {
    feedbackId: 2,
    logId: 2,
    feedbackUserId: 1,
    feedbackAvatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBngj5Oa8udlkeVBvwD5j-Fe2OFbY1uoC3voc1Pcajqa2iSc5t",
    feedbackContent: 'I feel the same sometimes, I feel the same sometimes, I feel the same y',
  }, {
    feedbackId: 3,
    logId: 2,
    feedbackUserId: 2,
    feedbackAvatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBngj5Oa8udlkeVBvwD5j-Fe2OFbY1uoC3voc1Pcajqa2iSc5t",
    feedbackContent: 'haha, shame on you',
  }]
}

const Journal = ({navigation}: TProps) => {

  const handleBack = () => {
    navigation.navigate('Space')
  };

  const today = new Date();
  const initialDate = `${today.getFullYear()}-${(today.getMonth() + 1).toString().padStart(2, '0')}-${today.getDate().toString().padStart(2, '0')}`;
  const [selectedDate, setSelectedDate] = useState<string>(initialDate);

  const getFormattedDate = (date: string) => {
    // Convert the date string to a JavaScript Date object
    const originalDate = new Date(date);
      
    // Extract day, month, and year components
    const day = originalDate.getDate();
    const month = originalDate.toLocaleString('en-US', { month: 'short' }); // 月份用英文簡寫
    // const month = originalDate.getMonth() + 1; // 月份用數字
    const year = originalDate.getFullYear();
  
    // Format the date as 'MM/DD/YYYY'
    const formattedDate = `${month}/${day}/${year}`;

    return formattedDate;
  }

  const getLogByDate = (logs, targetDate) => {
    const log = logs.find((entry) => entry.date === targetDate);
    return log ? log.logContent : "you didn't write down anything that day"; // log 沒有內容的時候顯示
  };

  const handleDatePress = (date: string) => {
    setSelectedDate(date);
  };
  
  const logForDate = getLogByDate(logData, selectedDate);
  
  return (
    <View style={styles.container}>
      <ScrollView>
        <ButtonIconField 
          collection='Entypo' 
          name='arrow-with-circle-left' 
          style={styles.backIcon} 
          onPress={handleBack}
        />  

        <Text style={styles.pageTitle}>Journal log</Text>

        <View style={styles.claenderBlock}>
          <CustomCalendar markedDate={data.date} onPress={handleDatePress}/>
        </View>

        <View style={styles.block}>
          <Text style={styles.dateTitle}>{getFormattedDate(selectedDate)}</Text>
          <Text style={styles.content}>{logForDate}</Text>
        </View>

        <View style={styles.inpuBlock}>
          <InputAreaField
            multiline={true}
            numberOfLines={4}
            placeholder= {'Ready to listen when you are ready to talk!'}
          />
        </View>

        <View style={styles.feedbackBlock}>
          <Text style={styles.title}>Feedbacks</Text>
            {feedbackData.feedback.map((data, index) => (
              <FeedbackField key={index} avatar={data.feedbackAvatar} content={data.feedbackContent}/>
            ))}
        </View>

        <View style={styles.block}>
          <Text style={styles.comment}>Anything you can’t face by your own, or anything you can’t wait to share, we are all ears!</Text>
          <ButtonSmallField 
            title='Talk to someone'
            onPress={() => navigation.navigate('Home')} 
            buttonColor='#444344'
            buttonTextColor='#ECEBE0'/>
          <ButtonSmallField 
            title='Talk to Ubot'
            onPress={() => navigation.navigate('Home')} 
            buttonColor='#444344'
            buttonTextColor='#ECEBE0'/>
        </View>
        <Text style={styles.block}></Text>

        
      </ScrollView>
    </View>

  );
}

export default Journal;