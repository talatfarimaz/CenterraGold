import * as React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Button, Card} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

const MainPage = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <Card
        style={styles.mainCard}
        onPress={() => {
          navigation.navigate('ReportCreate');
        }}>
        <Card.Cover
          source={require('../../../assets/mainTwo.png')}
          style={{height: 200, width: 200}}
        />
        <Card.Actions style={{alignSelf: 'center'}}>
          <Button mode={'contained'}>Rapor Görüntüle</Button>
        </Card.Actions>
      </Card>
      <Card
        style={styles.mainCard}
        onPress={() => {
          navigation.navigate('Home');
        }}>
        <Card.Cover
          source={require('../../../assets/mainOne.png')}
          style={{height: 200, width: 200}}
        />
        <Card.Actions style={{alignSelf: 'center'}}>
          <Button mode={'contained'}>Rapor Oluştur</Button>
        </Card.Actions>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainCard: {
    backgroundColor: '#ffffff',
    alignItems: 'center',
    margin: 20,
  },
});

export default MainPage;
