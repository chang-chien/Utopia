import { StyleSheet, SafeAreaView, ScrollView, View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import globalStyles from '../../assets/globalStyles';
import colors from '../../assets/colors';
import fonts from '../../assets/font';
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
  'photo',
  'place',
  'shop',
  'selfDescribe',
  'things', // CCTODO: 下拉式選單
  'work', // CCTODOQ: 等介面
  'anyElse',
];

type MoreInfoScreenNavigationProp = StackNavigationProp<RootStackParamList, 'MoreInfo'>;

type TProps = {
  navigation: MoreInfoScreenNavigationProp;
};

const MoreInfo = ({navigation}: TProps) => {

  const { t, i18n } = useTranslation();

  return (
    <SafeAreaView style={globalStyles.safeContainer}>
    <ScrollView style={styles.bodyContainer}>
      {inputItems.map((title, index) => (
        <View style={styles.inputContainer} key={index}>
          <InputField 
            title={t(`poll.MoreInfo.fieldTitle.${title}`)} 
            annotation={i18n.exists(`poll.MoreInfo.fieldAnnotation.${title}`)? 
                        t(`poll.MoreInfo.fieldAnnotation.${title}`): null}
          />
        </View>
      ))}
      <View style={styles.button}>
        <ButtonLargeField 
          title={t('poll.MoreInfo.fieldButton')}
          onPress={() => navigation.push('Poll', { pageType: 'PersonalInfo' })} //堆疊上去 才是往下一頁的感覺
          buttonColor={colors.black3}
          buttonTextColor={colors.white}/>
      </View>
    </ScrollView>
  </SafeAreaView>
  );
}

export default MoreInfo;