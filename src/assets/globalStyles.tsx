import { StyleSheet } from 'react-native';
import colors from "./colors"
import Fonts from "./font"

const globalStyles = StyleSheet.create({
  pollContainer: {
    flex: 1,
    backgroundColor: colors.ivory1,
    alignItems: 'center', // 上下對齊
    justifyContent: 'center', // 左右對齊
    marginTop: 44,
    marginBottom: 34,
  },
  screenContainer: {
    flex: 1,
    backgroundColor: colors.ivory1,
    alignItems: 'flex-start', // 上下對齊
    justifyContent: 'center', // 左右對齊
    marginHorizontal: 30,
    marginTop: 10,
  },
//   text: {
//     ...Fonts.heading1,
//     fontSize: 16,
//     color: '#333',
//   }, // example of import font
});

export default globalStyles;