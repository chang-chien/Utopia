import { StyleSheet, SafeAreaView, ScrollView, View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import globalStyles from '../../assets/globalStyles';
import colors from '../../assets/colors';
import InputField from '../../share/InputField';
import ButtonLargeField from '../../share/ButtonLargeField';

import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../App';

const styles = StyleSheet.create({
  bodyContainer: {
    ...globalStyles.pollContainer,
    paddingHorizontal: 30,
    paddingTop: 30,
  },
  inputContainer: {
    paddingBottom: 20,
  },
  button: {
    alignItems: 'center',
    width: '100%',
    paddingTop: 10,
    paddingBottom: '10%',
  },
});

const inputItems = [
  'name',
  'location',
  'gender',
  'interest',
  'mbti',
  'starSign',
  'height',
  'weight',
  'currentStatus',
  'hightestEducation',
];

type BasicInfoScreenNavigationProp = StackNavigationProp<RootStackParamList, 'BasicInfo'>;

type TProps = {
  navigation: BasicInfoScreenNavigationProp;
};

const BasicInfo = ({navigation}: TProps) => {

  const { t } = useTranslation();

  return (
  <SafeAreaView style={globalStyles.safeContainer}>
    <ScrollView style={styles.bodyContainer}>
      {inputItems.map((title, index) => (
        <View style={styles.inputContainer} key={index}>
          <InputField title={t(`poll.BasicInfo.fieldTitle.${title}`)}/>
        </View>
      ))}
      <View style={styles.button}>
        <ButtonLargeField 
          title={t('poll.BasicInfo.fieldButton')}
          onPress={() => navigation.push('Poll', { pageType: 'MoreInfo' })} //堆疊上去 才是往下一頁的感覺
          buttonColor={colors.black3}
          buttonTextColor={colors.white}/>
      </View>
    </ScrollView>
  </SafeAreaView>
  );
}

export default BasicInfo;