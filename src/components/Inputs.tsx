import React from 'react';
import {StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';

type TextBoxProps = {
  placeholder: string;
};
const UnsecuredTextBox = (props: TextBoxProps) => {
  return (
    <TextInput
      style={styles.textContainer}
      mode="outlined"
      label={props.placeholder}
      secureTextEntry={false}
      outlineColor="#D5EAF1"
      textColor="#D5EAF1"
      activeOutlineColor="#D5EAF1"
      placeholderTextColor="#D5EAF1"
      outlineStyle={styles.outline}
      theme={{colors: {primary: '#D5EAF1'}}}
    />
  );
};
export {UnsecuredTextBox};

type SecuredTextBoxProps = {
  placeholder: string;
};
const SecuredTextBox = (props: SecuredTextBoxProps) => {
  return (
    <TextInput
      style={styles.passwordContainer}
      mode="outlined"
      label={props.placeholder}
      secureTextEntry={true}
      outlineColor="#D5EAF1"
      textColor="#D5EAF1"
      activeOutlineColor="#D5EAF1"
      placeholderTextColor={'#D5EAF1'}
      outlineStyle={styles.outline}
    />
  );
};
export {SecuredTextBox};

const styles = StyleSheet.create({
  textContainer: {
    backgroundColor: '#012E3C',
    margin: 20,
  },
  passwordContainer: {
    backgroundColor: '#01232D',
    margin: 20,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 30,
  },
  outline: {
    borderRadius: 10,
  },
});
