import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {Button, Divider, TextInput, Checkbox} from 'react-native-paper';
import {useTranslation} from '../localization';
import {requests, url, utils} from '../helpers';
import {useRootStore} from '../effects';

const LogoContainer = () => {
  return (
    <View style={styles.logoContainer}>
      <Image
        source={require('../assets/logoNew.png')}
        resizeMode="contain"
        style={styles.logo}
      />
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <Text style={{color: '#F6B100', fontSize: 24, fontWeight: 'bold'}}>
          Mauzo
        </Text>
        <Text style={{color: '#FFFFFF', fontSize: 24, fontWeight: 'bold'}}>
          Track
        </Text>
      </View>
      <View style={{flexDirection: 'row-reverse'}}>
        <Text style={{marginRight: 50, color: '#FFFFFF', fontSize: 10}}>
          by Switch
        </Text>
      </View>
    </View>
  );
};
export {LogoContainer};

const Dividers = () => {
  return <Divider style={styles.divider} />;
};
export {Dividers};

type YellowTextProps = {
  text: string;
};
const YellowText = (props: YellowTextProps) => {
  return <Text style={styles.YellowText}>{props.text}</Text>;
};
export {YellowText};

type ContentProps = {
  text: string;
};
const Content = (props: ContentProps) => {
  return <Text style={styles.content}>{props.text}</Text>;
};
export {Content};

const Login = ({navigation}: any) => {
  const [checked, setChecked] = useState(false);
  const [values, setValues] = useState({});
  const {t} = useTranslation();
  const {auth} = useRootStore();
  const [errorMessage, setErrorMessage] = useState({});

  const setValue = name => value => {
    setValues({...values, [name]: value});
  };

  const onLogin = async password => {
    const {data, ok} = await requests.post(url.auth.login, values, {
      withCredentials: false,
    });
    if (ok && data.access) {
      auth.login(data);
      utils.toast(t('Logged in successfully'));
      navigation.navigate('MainNavigator');
    } else {
      setErrorMessage({
        text: t('Wrong pin') + ' ' + (data.detail || ''),
        type: 'error',
      });
    }
  };

  return (
    <View style={styles.mainContainer}>
      <LogoContainer />
      <Dividers />
      <YellowText text="Login Now" />
      <TextInput
        style={styles.passwordContainer}
        mode="outlined"
        label={t('Mobile Number')}
        placeholder={t('Enter mobile number')}
        outlineColor="#FFF"
        textColor="#D5EAF1"
        activeOutlineColor="#D5EAF1"
        selectionColor="#FFF"
        onChangeText={setValue('username')}
        // placeholderTextColor="#FFFFFF"
        outlineStyle={styles.outline}
      />
      <TextInput
        style={styles.passwordContainer}
        mode="outlined"
        label={'Password'}
        placeholder={'Enter password'}
        secureTextEntry={true}
        outlineColor="#FFF"
        textColor="#D5EAF1"
        activeOutlineColor="#D5EAF1"
        selectionColor="#FFF"
        onChangeText={setValue('password')}
        // placeholderTextColor="#FFFFFF"
        outlineStyle={styles.outline}
      />
      <View style={styles.container}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            color="#D5EAF1"
            uncheckedColor="#D5EAF1"
          />
          <Text style={{color: '#FFFFFF', fontSize: 14}}>Remember me</Text>
        </View>
        <Button
          textColor="#FFE296"
          onPress={() => {
            navigation.navigate('ForgotPassword');
          }}>
          Forgot Password
        </Button>
      </View>
      <Text style={styles.copyRightText}>Copy @ Switch 2023</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.updateButton} onPress={onLogin}>
          <Text style={styles.update}>Log In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#01232D',
    paddingTop: 20,
  },
  logoContainer: {
    alignSelf: 'center',
    marginTop: 30,
  },
  logo: {
    height: 48,
    width: 220,
    margin: 10,
  },
  divider: {
    marginHorizontal: 60,
    marginVertical: 10,
  },
  YellowText: {
    color: '#F6B100',
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
    margin: 5,
  },
  content: {
    color: '#FFFFFF',
    fontSize: 12,
    textAlign: 'center',
    margin: 5,
  },
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
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  updateButton: {
    flex: 1,
    alignSelf: 'flex-end',
    maxHeight: 77,
    width: 375,
    backgroundColor: '#F6B100',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    justifyContent: 'center',
  },
  update: {
    color: '#01232D',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  passwordPlaceholder: {
    backgroundColor: '#01232D',
    borderColor: '#D5EAF1',
    borderWidth: 1,
    height: 58,
    width: 313,
    borderRadius: 10,
    padding: 10,
    margin: 20,
    alignSelf: 'center',
  },
  copyRightText: {
    color: '#FFFFFF',
    alignSelf: 'center',
    marginTop: 100,
  },
  outline: {
    borderRadius: 10,
  },
});
