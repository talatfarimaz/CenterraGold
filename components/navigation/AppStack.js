import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../login/screens/HomeScreen';
import {IconButton} from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import MainPage from '../login/screens/MainPage';
import {useNavigation} from '@react-navigation/native';
import ReportScreen from "../login/screens/ReportScreen";

const Stack = createStackNavigator();

const AppStack = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator initialRouteName={'MainPage'}>
      <Stack.Screen
        name="MainPage"
        component={MainPage}
        options={{
          headerStyle: {
            backgroundColor: '#f4edf9',
          },
          title: 'Rapor Oluşturma ve Görüntüleme',
          headerTintColor: '#000000',
          headerRight: () => (
            <IconButton
              icon="logout"
              iconColor={'#FFFFFF'}
              containerColor={'#6b4fa8'}
              mode={'contained'}
              size={20}
              onPress={async () => {
                try {
                  await auth().signOut();
                } catch (e) {
                  console.log(e);
                }
              }}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerStyle: {
            backgroundColor: '#f4edf9',
          },
          title: 'Ocak Envanteri',
          headerTintColor: '#000000',
          headerRight: () => (
            <IconButton
              icon="logout"
              iconColor={'#FFFFFF'}
              containerColor={'#6b4fa8'}
              mode={'contained'}
              size={20}
              onPress={async () => {
                try {
                  await auth().signOut();
                } catch (e) {
                  console.log(e);
                }
              }}
            />
          ),
          headerLeft: () => (
            <IconButton
              icon="arrow-left"
              iconColor={'#6b4fa8'}
              containerColor={'#ffffff'}
              mode={'outlined'}
              size={20}
              onPress={() => {
                navigation.navigate('MainPage');
              }}
            />
          ),
        }}
      />
      <Stack.Screen
        name="ReportCreate"
        component={ReportScreen}
        options={{
          headerStyle: {
            backgroundColor: '#f4edf9',
          },
          title: 'Rapor',
          headerTintColor: '#000000',
          headerRight: () => (
            <IconButton
              icon="logout"
              iconColor={'#FFFFFF'}
              containerColor={'#6b4fa8'}
              mode={'contained'}
              size={20}
              onPress={async () => {
                try {
                  await auth().signOut();
                } catch (e) {
                  console.log(e);
                }
              }}
            />
          ),
          headerLeft: () => (
            <IconButton
              icon="arrow-left"
              iconColor={'#6b4fa8'}
              containerColor={'#ffffff'}
              mode={'outlined'}
              size={20}
              onPress={() => {
                navigation.navigate('MainPage');
              }}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
