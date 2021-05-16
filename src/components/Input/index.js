import React, {useState} from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity} from 'react-native';
import Eye from '../../assets/icons/eye.svg';
import EyeSlash from '../../assets/icons/eye-slash.svg';

const Input = ({placeholder, type, password}) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  return (
    <View style={styles.input}>
      <TextInput
        placeholder={placeholder}
        keyboardType={type}
        secureTextEntry={password ? (isPasswordShown ? false : true) : false}
        style={styles.textInput}
      />
      {password && (
        <TouchableOpacity onPress={() => setIsPasswordShown(!isPasswordShown)}>
          {isPasswordShown ? <EyeSlash /> : <Eye />}
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: '#BEBAB3',
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 16,
  },
  textInput: {
    flex: 1,
  },
});
