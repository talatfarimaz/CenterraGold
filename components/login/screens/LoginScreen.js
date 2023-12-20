import React, {useContext, useState} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import FormInput from '../FormInput';
import FormButton from '../FormButton';
import {AuthContext} from '../../navigation/AuthProvider';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const {login} = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/logo.jpg')} style={styles.logo} />
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

      <FormButton buttonTitle="Giriş" onPress={() => login(email, password)} />
      <TouchableOpacity style={styles.forgotButton} onPress={() => {}}>
        <Text style={styles.navButtonText}>Şifremi Unuttum</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.forgotButton}
        onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.navButtonText}>Yeni Hesap Oluştur</Text>
      </TouchableOpacity>
      <View style={{flex: 1, justifyContent: 'flex-end'}}>
        <Text style={{fontWeight: 'bold', fontSize: 11, fontStyle: 'italic'}}>
          Created by Farımaz
        </Text>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9fafd',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    resizeMode: 'stretch',
  },
  text: {
    fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 28,
    marginBottom: 10,
    color: '#051d5f',
  },
  navButton: {
    marginTop: 15,
  },
  forgotButton: {
    marginVertical: 25,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#6b4fa8',
    fontFamily: 'Lato-Regular',
  },
});
