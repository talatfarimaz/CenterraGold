import * as React from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const ReportScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={{alignSelf: 'center'}}>
      <Text
        style={{
          fontSize: 40,
          marginTop: 40,
          textAlign: 'center',
          color: '#6b4fa8',
        }}>
        Oluşturduğunuz raporlar burada görüntülenecektir.
      </Text>
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

export default ReportScreen;
