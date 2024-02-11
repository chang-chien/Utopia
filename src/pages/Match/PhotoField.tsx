import React, { useState } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import PagerView from 'react-native-pager-view';

import colors from '../../assets/colors';
import fonts from '../../assets/font';

import ButtonIconField from '../../share/ButtonIconField';

export type Props = {
  images: string[];
  name: string;
  age: string;
  locate: string;
  reportFunction: () => void;
  favoriteFunction: () => void;
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    width: '100%',
    height: 0,
    paddingBottom: '140%', 
    backgroundColor: colors.ivory1,
    borderRadius: 35, // 圆角半径
    overflow: 'hidden',
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  image: {
    width: '100%',
    height: 0,
    paddingBottom: '140%', // 用比例計算高度 搭配 hight=0 使用
  },
  reportContainer: { // 決定被引用時的大小
    position: 'absolute',
    flex: 1,
    width: '100%',
    height: 0,
    paddingBottom: '20%', 
  },
  statusBarContainer: {
    width: '60%',
    marginHorizontal: '20%',
    position: 'absolute',
    height: 40,
    flexDirection: 'row', // 横向排列
    alignItems: 'center', // 垂直居中
    justifyContent: 'space-evenly',
    shadowOpacity: 0.5, // 阴影透明度 要加才會有陰影
    shadowRadius: 4, // 阴影半径
    shadowColor: colors.black4, // 阴影颜色
    shadowOffset: { width: 0, height: 2 }, // 阴影偏移量
  },
  statusBar: {
    flex: 1, 
    height: 3,
    borderRadius: 3,
    backgroundColor: colors.ivory2, 
    marginHorizontal: 5, 
  },
  activeStatusBar: {
    backgroundColor: colors.black3,
  },
  report: {
    position: 'absolute',
    top: 30,
    right: 25,
    fontSize: 30,
    color: colors.ivory2,
    textShadowRadius: 4,
    textShadowColor: colors.black4,
    textShadowOffset: { width: 2, height: 2 },
  },
  bottomContainer: { // 決定被引用時的大小
    position: 'absolute',
    flex: 1,
    width: '100%',
    height: 0,
    paddingBottom: '30%', 
    bottom: 0,
  },
  textBlock: {
    position: 'absolute',
    width: '100%',
    bottom: 50,
  },
  name: {
    ...fonts.headingInria,
    width: '100%', // 避免陰影被切到
    position: 'absolute',
    bottom: 0,
    left: 25,
    color: colors.ivory1,
    textShadowRadius: 4, // Figma Blur 陰影暈開範圍
    textShadowColor: colors.black4, // 陰影顏色
    textShadowOffset: { width: 2, height: 2 } // 陰影偏移量
  },
  locate: {
    ...fonts.bodyInriaBold,
    width: '100%', // 避免陰影被切到
    position: 'absolute',
    left: 25,
    color: colors.ivory1,
    textShadowRadius: 4,
    textShadowColor: colors.black4,
    textShadowOffset: { width: 2, height: 2 }
  },
  favoriteBlock: {
    position: 'absolute',
    width: '100%',
    height: 'auto',
    bottom: 30, 
  },
  favorite: {
    position: 'absolute',
    bottom: 0,
    right: 25,
    fontSize: 45,
    color: colors.ivory2,
  },
});

const PhotoField: React.FC<Props> = ({ images, name, age, locate, reportFunction, favoriteFunction }) => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleIndexChanged = (index: number) => {
    console.log('Index changed to:', index);
    setCurrentIndex(index);
  };

  return (
    <>
      <View style={styles.wrapper}>
        <PagerView 
          style={styles.wrapper}
          scrollEnabled={true} 
          onPageSelected={(event) => {
            setCurrentIndex(event.nativeEvent.position);
          }}
          >
          {images.map((image, index) => (
            <View key={index} style={styles.slide}>
              <Image source={{ uri: image }} style={styles.image} />
            </View>
          ))}
        </PagerView>
      </View>
      
      <View style={styles.reportContainer}>

        {/* status bar */}
        <View style={styles.statusBarContainer}>
          {Array.from({ length: images.length }, (_, index) => (
            <View
              key={index}
              style={[
                styles.statusBar,
                index === currentIndex ? styles.activeStatusBar : null // 根据当前索引决定是否应用活动样式
              ]}
            ></View>
          ))}
        </View>
        {/* report */}
        <ButtonIconField 
            collection='Feather' 
            name='more-vertical' 
            onPress={reportFunction} 
            style={styles.report} />
      </View>

      <View style={styles.bottomContainer}>
        {/* name & locate */}
        <View style={styles.textBlock}>
          <Text style={styles.name}>{name}, {age}</Text>
          <Text style={styles.locate}>{locate}</Text>
        </View>
            
        {/* favorite */}
        <View style={styles.favoriteBlock}>
          <ButtonIconField 
            collection='Octicons' 
            name='feed-star' 
            onPress={favoriteFunction} 
            style={styles.favorite} />
        </View>
      </View>
    </>
    
  );
}

export default PhotoField;

