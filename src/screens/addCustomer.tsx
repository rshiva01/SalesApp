import React, {useCallback, useMemo, useRef} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Button, Divider, IconButton, Searchbar} from 'react-native-paper';
import {UnsecuredTextBox} from '../components/Inputs';

const AddCustomers = ({navigation}: any = {}) => {
  return (
    <View style={styles.mainContainer}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <IconButton
            icon={require('../assets/backArrowButton.png')}
            iconColor="#F6B100"
            size={19}
            onPress={() => {
              navigation.goBack();
            }}
          />
          <Text style={{color: '#F6B100'}}>Add Customers</Text>
        </View>
        <Button labelStyle={{color: '#F6B100', fontSize: 14}}>Cancel</Button>
      </View>
      <Text
        style={{
          color: '#FFFFFF',
          fontWeight: 'bold',
          fontSize: 14,
          marginTop: 40,
          marginLeft: 20,
        }}>
        Customer Details
      </Text>
      <ScrollView>
        <UnsecuredTextBox placeholder="Customer First Name" />
        <UnsecuredTextBox placeholder="Customer Last Name" />
        <UnsecuredTextBox placeholder="Email Address" />
        <UnsecuredTextBox placeholder="Mobile Number" />
        <UnsecuredTextBox placeholder="Bussiness Name" />
        <UnsecuredTextBox placeholder="TIN" />
        <UnsecuredTextBox placeholder="Choose Industry" />
      </ScrollView>
      <View style={{height: 77}}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.updateButton}
            onPress={() => {
              navigation.navigate('CreateSales');
            }}>
            <Text style={styles.update}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default AddCustomers;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#01232D',
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  yellowText: {
    color: '#F6B100',
    fontSize: 12,
    paddingTop: 5,
  },
  whiteText: {
    color: '#FFFFFF',
    fontSize: 12,
    paddingTop: 15,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  updateButton: {
    flex: 1,
    alignSelf: 'center',
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
  addMoreButton: {
    height: 32,
    width: 95,
    backgroundColor: '#D5EAF1',
    borderRadius: 5,
    marginBottom: 10,
    flexDirection: 'row',
    alignSelf: 'flex-end',
  },
  addMoreText: {
    color: '#01232D',
    fontSize: 14,
  },
});
