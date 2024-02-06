import React, { useState } from 'react';
import { StyleSheet, Text, View, I18nManager  } from 'react-native';
import I18n from 'react-native-i18n';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
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
// 07 CCTODO 加上自型 => 文字、顏色、自型用 ENUM 或 i18n

// Import language files
import en from './src/assets/locales/en.json';
import ch from './src/assets/locales/ch.json';

import Default from './src/pages/Default';
import Poll from './src/pages/Poll/Poll';
import PersonalInfo from './src/pages/Poll/PersonalInfo';
import MoreInfo from './src/pages/Poll/MoreInfo';
import Feed from './src/pages/Feed/Feed';
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
  icon: {
    fontSize: 40,
    color: '#444344',
  },
});

// Define supported languages
I18n.fallbacks = true;
I18n.translations = {
  en,
  ch,
};

// Set initial language
I18n.locale = 'en';

// Support RTL languages
I18nManager.allowRTL(true);

// CCQ: 頁面的 User Journey (1)第一次下載 (2)註冊過登出了 (3)登入中直接進 Feed
// 09 CCTODO: StatusBar 監控頁面 loading 狀況

/**驗證下面 Stack.Navigator */
export type RootStackParamList = {
  Default: undefined;
  Poll: undefined;
  PersonalInfo: undefined;
  MoreInfo: undefined;
  TabScreen: undefined;
  Space: undefined;
  Journal: undefined;
  Mood: undefined;
};

export type RootTabParamList = {
  Feed: undefined;
  Message: undefined;
  Match: undefined;
  Space: undefined;
  Profile: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();
const SpaceStack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<RootTabParamList>();

const SpaceStackScreen = () => (
  <SpaceStack.Navigator >
    <SpaceStack.Screen name="Space"  options={{ headerShown: false }} >
      {(props) => <Space {...props} />}
    </SpaceStack.Screen>
    <SpaceStack.Screen name="Journal"  options={{ headerShown: false }} >
      {(props) => <Journal {...props} />}
    </SpaceStack.Screen>
    <SpaceStack.Screen name="Mood"  options={{ headerShown: false }} >
      {(props) => <Mood {...props} />}
    </SpaceStack.Screen>
  </SpaceStack.Navigator>
);

const TabScreen = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Feed') {
          iconName = 'feed';
        } else if (route.name === 'Message') {
          iconName = 'comment';
        } else if (route.name === 'Match') {
          iconName = 'heart';
        } else if (route.name === 'Space') {
          iconName = 'seedling';
        } else if (route.name === 'Profile') {
          iconName = 'user';
        } else if (route.name === 'Settings') {
          iconName = focused ? 'ios-list' : 'ios-list-outline';
        }

        return <FontAwesome5 name={iconName} style={styles.icon} solid/>;
      },
      // CCTODO 但不要比較好嗎 按下去要有顏色吧
      // tabBarStyle: { backgroundColor: "#F9F8EF" }, // 背景色 
      tabBarShowLabel: false, // 不顯示 bar 的 label
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: '#444344',
    })}
  >
    <Tab.Screen name="Feed">
    {/* <Tab.Screen
      name="Feed"
      options={{
        tabBarIcon: ({ color, size }) => (
          <FontAwesome5 name={'home'} style={styles.icon}/>
        ),
      }}
    > */}
      {(props) => <Feed {...props} />}
    </Tab.Screen>
    <Tab.Screen name="Message">
      {(props) => <Message {...props} />}
    </Tab.Screen>
    <Tab.Screen name="Match">
      {(props) => <Match {...props} />}
    </Tab.Screen>
    <Tab.Screen name="Space" component={SpaceStackScreen} >
    </Tab.Screen>
    <Tab.Screen name="Profile">
      {(props) => <Profile {...props} />}
    </Tab.Screen>
  </Tab.Navigator>
);

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
      <Stack.Navigator
        // screenOptions={{ gestureEnabled: false }} // 鎖住手勢返回
        >
        <Stack.Screen name="Poll" options={{ headerShown: false }} >
          {(props) => <Poll {...props} />}
        </Stack.Screen>
        <Stack.Screen name="PersonalInfo" options={{ headerShown: false }} >
          {(props) => <PersonalInfo {...props} />}
        </Stack.Screen>
        <Stack.Screen name="MoreInfo" options={{ headerShown: false }} >
          {(props) => <MoreInfo {...props} />}
        </Stack.Screen>
        <Stack.Screen name="TabScreen" component={TabScreen} options={{ headerShown: false }} >
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;