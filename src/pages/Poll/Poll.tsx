import React from 'react';
import { StyleSheet, SafeAreaView, View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import globalStyles from '../../assets/globalStyles';
import colors from '../../assets/colors';
import fonts from '../../assets/font';
import ButtonLargeField from '../../share/ButtonLargeField';

import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../App';

const styles = StyleSheet.create({
  bodyContainer: {
    ...globalStyles.pollContainer,
    gap: 20,
    alignItems: 'center', // 水平置中
    justifyContent: 'center', // 垂直置中
  },
  titleContainer: {
    width: '100%',
    alignItems: 'center', // 水平置中
  },
  lyingBlock: {
    ...globalStyles.lyingBlock,
    height: 44,
    width: '100%',
    paddingHorizontal: 35,
    gap: 10,
  },
  text: {
    ...fonts.heading1,
    color: colors.black4,
  },
  annotationContainer: {
    alignItems: 'center', // 水平置中
    paddingTop: 30,
    paddingBottom: 10,
  },
  annotation: {
    ...fonts.body3,
    color: colors.black1,
  }
})

type PollScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Poll'>;
type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'Poll'>;

type TProps = {
  navigation: PollScreenNavigationProp;
  route: ProfileScreenRouteProp
};

const Poll = ({ navigation, route }: TProps) => {

  const { pageType } = route.params;
  const { t, i18n } = useTranslation();

  return (
    <SafeAreaView style={globalStyles.safeContainer}>
      <View style={styles.bodyContainer}>
          {/* Title */}
          <View style={styles.titleContainer}>
            <Text style={styles.text}>{t(`poll.${pageType}.transitionLine1`)}</Text>
            <Text style={styles.text}>{t(`poll.${pageType}.transitionLine2`)}</Text>
            {i18n.exists(`poll.${pageType}.transitionAnnotation1`)?
              <View style={styles.annotationContainer}>
                <Text style={styles.annotation}>{t(`poll.${pageType}.transitionAnnotation1`)}</Text>
                <Text style={styles.annotation}>{t(`poll.${pageType}.transitionAnnotation2`)}</Text>
                <Text style={styles.annotation}>{t(`poll.${pageType}.transitionAnnotation3`)}</Text>
              </View> : null
            }
          </View>
          {/* Button */}
          <ButtonLargeField
            title={t(`poll.${pageType}.transitionButton`)}
            onPress={() => navigation.push(pageType)}
            />
      </View>
      
      {/* Status Bar */}
      <View style={styles.lyingBlock}>
        <View style={pageType==='BasicInfo'? globalStyles.enableBar:globalStyles.disableBar}></View>
        <View style={pageType==='MoreInfo'? globalStyles.enableBar:globalStyles.disableBar}></View>
        <View style={pageType==='PersonalInfo'? globalStyles.enableBar:globalStyles.disableBar}></View>
      </View>
    </SafeAreaView>
  );
}

export default Poll;