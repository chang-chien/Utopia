import React, { useState } from 'react';
import { Modal, StyleSheet, Text, TouchableOpacity, View, TextStyle, StyleProp } from 'react-native';
import colors from "../assets/colors"
import fonts from "../assets/font"

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
      paddingTop: '35%',
      paddingRight: 25,
      backgroundColor:  '#00000080',
    },
    modalView: {
      margin: 20, // 調整對話框位置
      backgroundColor: colors.ivory3,
      borderRadius: 20,
      paddingHorizontal: 20,
      paddingVertical: 5,
      alignItems: 'flex-start',
      textShadowColor: colors.black4,
      textShadowOffset: { width: 2, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    modalText: {
      ...fonts.body4,
      color: colors.red,
      minWidth: 150,
    },
    textStyle: {
      ...fonts.body4,
      color: colors.black1,
      marginTop: 5, 
    },
  });

const ModalField: React.FC<Props> = ({ title, isVisible, onClose }) => {
  return (
    <Modal
      animationType="fade" //none 無, slide 從底部滑入, fade 淡入淡出
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      {/* CCTODO: 確定的話改成i18n */}
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Report {title}</Text>
          <TouchableOpacity onPress={onClose}>
            <Text style={styles.textStyle}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ModalField;