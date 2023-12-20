import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import SignupScreen from '../login/screens/SignupScreen';
import LoginScreen from '../login/screens/LoginScreen';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {IconButton} from 'react-native-paper';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="Signup"
        component={SignupScreen}
        options={({navigation}) => ({
          title: '',
          headerStyle: {
            backgroundColor: '#f9fafd',
            shadowColor: '#f9fafd',
            elevation: 0,
          },
          headerLeft: () => (
            <IconButton
              icon="arrow-left"
              iconColor={'#6b4fa8'}
              containerColor={'#ffffff'}
              mode={'outlined'}
              size={25}
              onPress={() => navigation.navigate('Login')}
            />
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
