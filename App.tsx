import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import {
  useFonts,
  RobotoSlab_400Regular,
  RobotoSlab_700Bold,
} from '@expo-google-fonts/roboto-slab';
// CCTODO 加上自型 => 文字、顏色、自型用 ENUM 或 i18n

import PersonalInfo from './src/pages/PersonalInfo';
import Poll from './src/pages/Poll';
import Home from './src/pages/Home/Home';
// import Message from './src/pages/Message/Message';
import Match from './src/pages/Match/Match';
// import Feed from './src/pages/Feed/Feed';
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

// TODO: 頁面的 User Journey (1)第一次下載 (2)註冊過登出了 (3)登入中直接進 HOME
// TODO: StatusBar 監控頁面 loading 狀況

/**驗證下面 Stack.Navigator */
export type RootStackParamList = {
  Poll: undefined;
  PersonalInfo: undefined;
  Home: undefined;
  Message: undefined;
  Match: undefined;
  Feed: undefined;
  Profile: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

/** 全部頁面 */
const App = () => {
  let [fontsLoaded, fontError] = useFonts({
    RobotoSlab_400Regular,
    RobotoSlab_700Bold,
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
        {/* <Stack.Screen name="Message">
          {(props) => <Message {...props} />}
        </Stack.Screen> */}
        <Stack.Screen name="Match">
          {(props) => <Match {...props} />}
        </Stack.Screen>
        {/* <Stack.Screen name="Feed">
          {(props) => <Feed {...props} />}
        </Stack.Screen> */}
        <Stack.Screen name="Profile">
          {(props) => <Profile {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;