import { StyleSheet } from 'react-native';
import colors from "./colors"
import fonts from "./font"

const globalStyles = StyleSheet.create({
  safeContainer: {
    backgroundColor: colors.ivory1,
    height: '100%',
  },
  pollContainer: {
    flex: 1,
    paddingHorizontal: 14,
    height: '100%',
  },
  screenContainer: {
    flex: 1,
    backgroundColor: colors.ivory1,
    // alignItems: 'flex-start', // 水平置左
    // justifyContent: 'center', // 垂直置中
    paddingTop: 10,
    paddingHorizontal: 30,
  },
  lyingBlock: {
    height: 'auto',
    flexDirection: 'row', // 橫向排列
    alignItems: 'center', // 上下置中
    justifyContent: 'space-evenly',
  },
  enableBar: {
    width: '30%',
    height: 5,
    borderRadius: 10, // 圆角半径
    backgroundColor: colors.black4
  },
  disableBar: {
    width: '30%',
    height: 5,
    borderRadius: 10, // 圆角半径
    backgroundColor: colors.ivory4
  },
//   text: {
//     ...fonts.heading1,
//     fontSize: 16,
//     color: '#333',
//   }, // example of import font
});

export default globalStyles;