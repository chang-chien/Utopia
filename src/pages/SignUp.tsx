import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import InputField from '../share/InputField';

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
});

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    // 在此处处理注册逻辑
    console.log('Email:', email);
    console.log('Password:', password);
  }

  return (
    <View>
      <InputField
        label="Email"
      />
      <InputField
        label="Password"
      />
    </View>
  );
}

export default SignUp;