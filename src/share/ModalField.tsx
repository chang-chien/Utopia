import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View, TextStyle, StyleProp } from 'react-native';

export type Props = {
    title?: string;
    buttonText?: any;
    style?: StyleProp<TextStyle>;
    isVisible: boolean;
    onClose: () => void;
  };
  
const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'flex-end', // 整個對話框右
      paddingTop: '40%',
      paddingRight: '5%',
    },
    modalView: {
      margin: 20, // 調整對話框位置
      backgroundColor: '#ECEBE0',
      borderRadius: 20,
      paddingHorizontal: 20,
      paddingVertical: 5,
      alignItems: 'flex-start',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    textStyle: {
      color: '#777777',
      fontFamily: 'RobotoSlab_400Regular',
      marginTop: 5, 
    },
    modalText: {
      color: '#E73838',
      fontFamily: 'RobotoSlab_400Regular',
      minWidth: 150,
    },
  });

const ModalField: React.FC<Props> = ({ title, isVisible, onClose }) => {
//   const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="fade" //none 無, slide 從底部滑入, fade 淡入淡出
        transparent={true}
        visible={isVisible}
        onRequestClose={onClose}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Report {title}</Text>
            <Pressable
              onPress={onClose}>
              <Text style={styles.textStyle}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalField;