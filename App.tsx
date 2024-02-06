import React, { useState } from 'react';
import { StyleSheet, Text, View, I18nManager  } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native'; // Import useRoute hook
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
    marginTop: 8, // 調整 icon 位置高度
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
  SpaceScreen: undefined;
  Profile: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<RootTabParamList>();

const TabScreen = () => (

  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color }) => {
        let iconName;

        if (route.name === 'Feed') {
          iconName = 'home';
        } else if (route.name === 'Message') {
          iconName = 'comment';
        } else if (route.name === 'Match') {
          iconName = 'heart';
        } else if (route.name === 'SpaceScreen') {
          iconName = 'seedling';
        } else if (route.name === 'Profile') {
          iconName = 'user';
        } 

        return (<FontAwesome5 name={iconName} 
                              style= {[styles.icon, {color: color}]} 
                              solid/>);
      },
      tabBarActiveTintColor: route.name === 'SpaceScreen' ? '#F4F2E1' : '#323232', // 上排傳進去的color 從這邊吃
      tabBarInactiveTintColor: route.name === 'SpaceScreen' ? '#464646' : '#595959', // 上排傳進去的color 從這邊吃
      tabBarShowLabel: false, // 不顯示 bar 的 label
      tabBarStyle: {
        backgroundColor: route.name === 'SpaceScreen' ? '#777777' : '#F9F8EF',
      },
      headerTitleAlign: 'left', // Align title to the left
      headerStyle: { backgroundColor: route.name === 'SpaceScreen' ? '#777777' : '#F9F8EF'},
      headerTitleStyle: {
        fontSize: 32,
        fontFamily: 'RobotoSlab_700Bold',
        color: route.name === 'SpaceScreen' ? '#E2DEDF' : '#444343'
      },
    })}
  >
    <Tab.Screen name="Feed">
      {(props) => <Feed {...props} />}
    </Tab.Screen>
    <Tab.Screen name="Message">
      {(props) => <Message {...props} />}
    </Tab.Screen>
    <Tab.Screen name="Match">
      {(props) => <Match {...props} />}
    </Tab.Screen>
    <Tab.Screen name="SpaceScreen" options={{ title: 'Personal Space' }}>
      {(props) => <Space {...props} />}
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
        // For Pages in Space
        screenOptions={({ route }) => ({
          headerStyle: { backgroundColor: '#777777' },
          headerTitleStyle: {
            fontSize: 32,
            fontFamily: 'RobotoSlab_700Bold',
            color: '#E2DEDF' 
          },
          headerShown: route.name === 'Space' ? false : true,
        })}
        >
        <Stack.Screen name="Poll" options={{ headerShown: false , gestureEnabled: false}} >
          {(props) => <Poll {...props} />}
        </Stack.Screen>
        <Stack.Screen name="PersonalInfo" options={{ headerShown: false, gestureEnabled: false }} >
          {(props) => <PersonalInfo {...props} />}
        </Stack.Screen>
        <Stack.Screen name="MoreInfo" options={{ headerShown: false, gestureEnabled: false }} >
          {(props) => <MoreInfo {...props} />}
        </Stack.Screen>
        <Stack.Screen name="TabScreen" component={TabScreen} options={{ headerShown: false, gestureEnabled: false }} >
        </Stack.Screen>
        <Stack.Screen name="Journal" options={{ headerBackTitle: 'Space', headerTintColor: '#E2DEDF' }} >
          {(props) => <Journal {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Mood" options={{ headerBackTitle: 'Space', headerTintColor: '#E2DEDF'}} >
          {(props) => <Mood {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;