import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, ScrollView, View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';

import globalStyles from '../assets/globalStyles';
import colors from '../assets/colors';
import fonts from '../assets/font';

import BlockField from '../share/BlockField';
import BlockQnaField from '../share/BlockQnaField';
import ButtonField from '../share/ButtonField';
import ButtonIconField from '../share/ButtonIconField';
import IconVariant from '../share/IconComponent/IconVariant';
import ButtonLargeField from '../share/ButtonLargeField';
import ButtonLinkField from '../share/ButtonLinkField';
import ButtonSmallField from '../share/ButtonSmallField';
import InputField from '../share/InputField';
import InputAreaField from '../share/InputAreaField';
import TagField from '../share/TagField';
import BlockAvartField from '../share/BlockAvatarField';

import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../App';

const styles = StyleSheet.create({
  bodyContainer: {
    ...globalStyles.pollContainer,
    gap: 20,
  },
  lyingBlock: {
    ...globalStyles.lyingBlock,
    height: 44,
    width: '100%',
    paddingHorizontal: 35,
    gap: 10,
  },
});

type DefaultScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Default'>;

type TProps = {
  navigation: DefaultScreenNavigationProp;
};

const data = {}

const Default = ({navigation}: TProps) => {

  const { t } = useTranslation();

  return (
    <SafeAreaView>
      <ScrollView style={styles.bodyContainer}>
        <View style={styles.lyingBlock}>
          <Text>{t('greeting')}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>

  );
}

export default Default;

