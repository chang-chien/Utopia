import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, ScrollView, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import globalStyles from '../../assets/globalStyles';
import BlockField from '../../share/BlockField';
import ModalField from '../../share/ModalField';
import MatchStatus from './MatchStatus';

import { StackNavigationProp } from '@react-navigation/stack';
import { RootTabParamList } from '../../../App';
import PhotoField from './PhotoField';

const styles = StyleSheet.create({
  bodyContainer: {
    ...globalStyles.screenContainer,
    gap: 20,
    height: '100%',
  },
  photoContainer: {
    width: '100%',
  },
  container: {
    flex: 1,
    width: '100%',
    height: 0,
    paddingBottom: '140%', 
  },
  wrapper: {

  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    flex: 1,
  },
});

type MatchScreenNavigationProp = StackNavigationProp<RootTabParamList, 'Match'>;

type TProps = {
  navigation: MatchScreenNavigationProp;
};

const profileData = {
  profileUserId: 3,
  images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBngj5Oa8udlkeVBvwD5j-Fe2OFbY1uoC3voc1Pcajqa2iSc5t", 
            "https://i.pinimg.com/564x/b4/cd/3a/b4cd3a73f691ff823a138cc67c5be848.jpg?b=t", 
            "https://pbs.twimg.com/media/EaGRsS1WoAI1P6o.jpg", 
            "https://laurkenkendall.com/wp-content/uploads/2017/01/sl8.jpg"],
  name: "Sabrina",
  age: "28",
  locate: "Las Vegas, United States",  
  qna: [{
    question:"What camera lenses do you like the most?",
  },{
    question:"What is your most ideal relationship?",
    answer: ["Love and understanding", "Connections", "People likes us"]
  }]
}

// CCTODO: 資料庫用雙向配對的方式 寫查詢API的時候要註解配對邏輯
const userData = {
  userId: 5, // 自己的ID 查詢的參數
  profileUserId: 3, // 對方的ID 查詢的參數
  matchStatus: MatchStatus.Unknown, // 以前有沒有滑到他過
}

// CCTODO: 補 report onPress function 要先知道介面
const Match = ({navigation}: TProps) => {

  const { t } = useTranslation();

  const [isModalVisible, setModalVisible] = useState(false);

  const handleReport = () => {
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
  };

  const handleFavorite = () => {
    console.log(MatchStatus.Favorite);
    console.log(userData.matchStatus);
    userData.matchStatus = MatchStatus.Favorite;
  };

  const handleMoreInfo = () => {
    navigation.navigate('Profile')
  };

  return (
    <SafeAreaView style={globalStyles.safeContainer}>
      <ScrollView>
        <View style={styles.bodyContainer}>
          
          {/* Photo */}
          <View style={styles.photoContainer}>
            <PhotoField 
              images={profileData.images}
              name={profileData.name}
              age={profileData.age}
              locate={profileData.locate}
              reportFunction={handleReport}
              favoriteFunction={handleFavorite}/>
          </View>

          {/* QnA */}
          {profileData.qna.map((profileData, index) => (
            profileData.answer ? (
              <BlockField 
              key={index} 
              question={`Q: ${profileData.question}`} 
              tag={profileData.answer}
              />
            ) : (
              <BlockField 
              key={index} 
              question={`Q: ${profileData.question}`} 
              comment={t('match.placeHolder')}
              />
            )
          ))}

          {/* report modal*/}
          <View>
            <ModalField 
              title={profileData.name} 
              isVisible={isModalVisible} 
              onClose={hideModal}/>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Match;

