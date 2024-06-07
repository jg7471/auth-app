import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { Colors } from '../../constants/styles'; //커스텀 Color 임포트

const Input = ({
  label,
  keyboardType,
  secure,
  onUpdateValue,
  value,
  isInvalid,
}) => {
  return (
    <View>
      style={styles.inputContainer}
      <Text style={isInvalid && styles.labelInvalid}>{label}</Text>
      <TextInput
        //스타일 적용이 2개 이상이면 배열[]로 묶어서 전달
        style={[styles.input, isInvalid && styles.inputInvalid]}
        autoCapitalize='none'
        keyboardType={keyboardType}
        secureTextEntry={secure}
        onChange={onUpdateValue}
        value={value}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginVerical: 8,
  },
  lavelInvalid: {
    color: Colors.error500,
  },
  input: {
    paddingVertical: 8,
    paddingHorizontal: 6,
    backgroundColor: Colors.primary100, //커스텀 Color 임포트
    borderRadius: 4,
    fontSize: 16,
  },
  inputInvalid: {
    backgroundColor: Colors.error100,
  },
});
