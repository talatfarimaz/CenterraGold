import * as React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  Button,
  Modal,
  PaperProvider,
  Portal,
  SegmentedButtons,
  TextInput,
} from 'react-native-paper';
import FormInput from '../FormInput';
import {RadioButton} from 'react-native-paper';

const HomeScreen = () => {
  const [value, setValue] = React.useState('keltepe');
  const selectionList = ['Lg', 'Mg', 'Hg', 'PAG-Waste', 'NAG-Waste'];
  const [patern, setPatern] = React.useState(null);
  const [block, setBlock] = React.useState(null);
  const [tonnes, setTonnes] = React.useState(null);
  const [ounces, setOunces] = React.useState(null);
  const [grade, setGrade] = React.useState(null);
  const [oreControl, setOreControl] = React.useState(null);
  const [checked, setChecked] = React.useState(selectionList[0]);

  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 20};

  const selectOreControl = selection => {
    setChecked(selection);
    hideModal();
    setOreControl(selection);
  };

  const resetAllValue = () => {
    setPatern(null);
    setBlock(null);
    setTonnes(null);
    setOunces(null);
    setGrade(null);
    setOreControl(null);
  };

  const addPress = () => {
    if (
      patern != null &&
      block != null &&
      tonnes != null &&
      ounces != null &&
      grade != null &&
      oreControl != null
    ) {
      ToastAndroid.show('Başarılı bir şekilde kaydedildi.', ToastAndroid.LONG);
      resetAllValue();
    } else {
      ToastAndroid.show(
        'Lütfen tüm analiz değerlerini giriniz!',
        ToastAndroid.LONG,
      );
    }
  };

  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        <SegmentedButtons
          value={value}
          onValueChange={setValue}
          density={'regular'}
          style={{marginTop: 10}}
          buttons={[
            {
              value: 'keltepe',
              label: 'Keltepe Ocağı',
              onPress: resetAllValue,
            },

            {
              value: 'guneytepe',
              label: 'Güneytepe Ocağı',
              onPress: resetAllValue,
            },
          ]}
        />

        <ScrollView style={{width: '95%'}}>
          <React.Fragment>
            <FormInput
              labelValue={patern}
              onChangeText={paternVal => setPatern(paternVal)}
              placeholderText="Patern"
              iconType="dingding"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
            />
            <FormInput
              labelValue={block}
              onChangeText={blockVal => setBlock(blockVal)}
              placeholderText="Block"
              iconType="table"
              keyboardType="email-address"
              autoCapitalize="characters"
              autoCorrect={false}
              inputType={'text'}
            />
            <FormInput
              labelValue={tonnes}
              onChangeText={tonnesVal => setTonnes(tonnesVal)}
              placeholderText="Tonnes"
              iconType="dashboard"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="numeric"
            />
            <FormInput
              labelValue={ounces}
              onChangeText={ouncesVal => setOunces(ouncesVal)}
              placeholderText="Ounce"
              iconType="antdesign"
              keyboardType="numeric"
              autoCapitalize="none"
              autoCorrect={false}
            />
            <FormInput
              labelValue={grade}
              onChangeText={gradeVal => setGrade(gradeVal)}
              placeholderText="Grade"
              iconType="edit"
              keyboardType="numeric"
              autoCapitalize="none"
              autoCorrect={false}
            />
            <TouchableOpacity onPress={showModal}>
              <FormInput
                labelValue={oreControl}
                onChangeText={showModal}
                placeholderText="Ore Control"
                iconType="fork"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                pointerEvents="none"
                onTouchStart={showModal}
                editable={false}
                selectTextOnFocus={false}
              />
            </TouchableOpacity>

            <Portal>
              <Modal
                style={{margin: 30}}
                visible={visible}
                onDismiss={hideModal}
                contentContainerStyle={containerStyle}>
                {selectionList.map((selection, index) => {
                  return (
                    <View style={styles.selectionArea} key={index}>
                      <RadioButton
                        value={selection}
                        status={checked === selection ? 'checked' : 'unchecked'}
                        onPress={() => selectOreControl(selection)}
                      />
                      <Text style={styles.selectionText}>{selection}</Text>
                    </View>
                  );
                })}
              </Modal>
            </Portal>
            <Button
              style={styles.addButton}
              onPress={addPress}
              icon={'plus'}
              mode={'contained'}
              labelStyle={{fontSize: 15}}>
              Ekle
            </Button>
          </React.Fragment>
        </ScrollView>
      </SafeAreaView>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  addButton: {
    width: '95%',
  },
  selectionArea: {
    padding: 5,
    borderRadius: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  selectionText: {
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

export default HomeScreen;
