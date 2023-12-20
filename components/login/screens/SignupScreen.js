import React, {useContext, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import FormInput from '../FormInput';
import FormButton from '../FormButton';
import {AuthContext} from '../../navigation/AuthProvider';

const SignupScreen = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const {register} = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Yeni bir hesap oluştur</Text>

      <FormInput
        labelValue={email}
        onChangeText={userEmail => setEmail(userEmail)}
        placeholderText="Email"
        iconType="user"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />

      <FormInput
        labelValue={password}
        onChangeText={userPassword => setPassword(userPassword)}
        placeholderText="Şifre"
        iconType="lock"
        secureTextEntry={true}
      />

      <FormInput
        labelValue={confirmPassword}
        onChangeText={userPassword => setPassword(userPassword)}
        placeholderText="Şifreyi Tekrarla"
        iconType="lock"
        secureTextEntry={true}
      />

      <FormButton
        buttonTitle="Kaydol"
        onPress={() => register(email, password)}
      />

      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.navButtonText}>Hesabın var mı? Giriş yap</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9fafd',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 28,
    marginBottom: 10,
    color: '#6b4fa8',
  },
  navButton: {
    marginTop: 15,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#6b4fa8',
    fontFamily: 'Lato-Regular',
  },
  textPrivate: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 35,
    justifyContent: 'center',
  },
  color_textPrivate: {
    fontSize: 13,
    fontWeight: '400',
    fontFamily: 'Lato-Regular',
    color: 'grey',
  },
});
