import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

import {
  useFonts,
  RobotoSlab_100Thin,
  RobotoSlab_200ExtraLight,
  RobotoSlab_300Light,
  RobotoSlab_400Regular,
  RobotoSlab_500Medium,
  RobotoSlab_600SemiBold,
  RobotoSlab_700Bold,
  RobotoSlab_800ExtraBold,
  RobotoSlab_900Black,
} from '@expo-google-fonts/roboto-slab';
import {
  InriaSerif_300Light,
  InriaSerif_300Light_Italic,
  InriaSerif_400Regular,
  InriaSerif_400Regular_Italic,
  InriaSerif_700Bold,
  InriaSerif_700Bold_Italic,
} from '@expo-google-fonts/inria-serif';
// CCTODO 加上自型 => 文字、顏色、自型用 ENUM 或 i18n

import Default from './src/pages/Default';
import PersonalInfo from './src/pages/PersonalInfo';
import Poll from './src/pages/Poll';
import Home from './src/pages/Home/Home';
import Message from './src/pages/Message/Message';
import Match from './src/pages/Match/Match';
import Space from './src/pages/Space/Space';
import Journal from './src/pages/Space/Journal';
import Mood from './src/pages/Space/Mood';
import Profile from './src/pages/Profile/Profile';
import SignUp from './src/pages/SignUp';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F8EF',
    alignItems: 'center', // 水平置中 // 左右對齊 flex-start, center, flex-end
    justifyContent: 'center', // 垂直置中
  },
  titleContainer: {
    alignItems: 'center', 
    paddingBottom: 30,
  },
  textContainer: {
    fontWeight: 'bold', // 加粗
    fontSize: 32,
    fontFamily: 'RobotoSlab_700Bold',
  },
  buttonContainer: {
    width: 150, // 按钮容器的宽度
    borderRadius: 10, // 圆角半径
    borderColor: '#444344', // 边框颜色
    overflow: 'hidden', // 确保按钮内容不会超出底框
  },
  button: {
    flexDirection: 'row', // 设置水平排列
  },
});

// CCQ: 頁面的 User Journey (1)第一次下載 (2)註冊過登出了 (3)登入中直接進 HOME
// CCTODO: StatusBar 監控頁面 loading 狀況

/**驗證下面 Stack.Navigator */
export type RootStackParamList = {
  Default: undefined;
  Poll: undefined;
  PersonalInfo: undefined;
  Home: undefined;
  Message: undefined;
  Match: undefined;
  Space: undefined;
  Journal: undefined;
  Mood: undefined;
  Profile: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

/** 全部頁面 */
const App = () => {
  let [fontsLoaded, fontError] = useFonts({
    RobotoSlab_400Regular,
    RobotoSlab_700Bold,
    InriaSerif_700Bold,
  });
  
  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Poll">
          {(props) => <Poll {...props} />}
        </Stack.Screen>
        <Stack.Screen name="PersonalInfo">
          {(props) => <PersonalInfo {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Home">
          {(props) => <Home {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Message">
          {(props) => <Message {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Match">
          {(props) => <Match {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Space">
          {(props) => <Space {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Journal">
          {(props) => <Journal {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Mood">
          {(props) => <Mood {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Profile">
          {(props) => <Profile {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Default">
          {(props) => <Default {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;