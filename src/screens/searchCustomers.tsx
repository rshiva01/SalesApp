import React, {useCallback, useMemo, useRef} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Button, Divider, IconButton, Searchbar} from 'react-native-paper';
import BottomSheet from '@gorhom/bottom-sheet';

const SearchCustomers = ({navigation}: any) => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = (query: any) => setSearchQuery(query);
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['25%', '50%'], []);

  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  const openBottomSheet = useCallback(() => {
    bottomSheetRef.current?.snapToIndex(1);
  }, [bottomSheetRef]);

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
            onPress={() => navigation.goBack()}
          />
          <Text style={{color: '#F6B100'}}>Search Customers</Text>
        </View>
        <Button labelStyle={{color: '#F6B100', fontSize: 14}}>Cancel</Button>
      </View>
      <View>
        <Searchbar
          placeholder="Search by customer name, Email Id"
          placeholderTextColor={'#D5EAF1'}
          onChangeText={onChangeSearch}
          value={searchQuery}
          mode="view"
          icon={require('../assets/searchButtonIcon.png')}
          style={styles.searchBar}
          showDivider={false}
          inputStyle={styles.placeHolder}
          theme={{colors: {primary: '#D5EAF1'}}}
          iconColor="#2A677A"
        />
      </View>
      <View
        style={{
          borderWidth: 1,
          borderColor: '#F6B100',
          padding: 30,
          borderRadius: 15,
          marginVertical: 10,
          backgroundColor: '#012E3C',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View
            style={{
              height: 20,
              width: 20,
              backgroundColor: '#2A677A',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
            }}>
            <Image
              source={require('../assets/customerIcon.png')}
              resizeMode="contain"
            />
          </View>
          <Text style={{color: '#D5EAF1', paddingHorizontal: 5}}>
            Customers
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: 10,
          }}>
          <Text style={{color: '#F6B100', fontSize: 32, fontWeight: 'bold'}}>
            8
          </Text>
          <Button
            buttonColor="#2A677A"
            style={{borderRadius: 4}}
            labelStyle={{color: '#F6B100'}}
            onPress={() => {
              navigation.navigate('AddCustomers');
            }}>
            ADD CUSTOMER
          </Button>
        </View>
      </View>
      <View
        style={{
          backgroundColor: '#012E3C',
          borderRadius: 15,
          paddingHorizontal: 15,
        }}>
        <View
          style={{
            flexDirection: 'row',
            marginVertical: 10,
            justifyContent: 'space-between',
          }}>
          <View>
            <Text style={{color: '#FFFFFF', fontSize: 14}}>John Doe</Text>
            <Text style={{color: '#FFFFFF', fontSize: 10}}>XYZ enterprize</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <Button
              style={styles.viewDetailButtonStyle}
              labelStyle={styles.viewDetailButtonLabelStyle}
              onPress={openBottomSheet}>
              View Detail
            </Button>
            <Button
              labelStyle={styles.viewDetailButtonLabelStyle}
              style={styles.createSalesButtonStyle}>
              Create Sales
            </Button>
          </View>
        </View>
        <Divider />
        <View
          style={{
            flexDirection: 'row',
            marginVertical: 10,
            justifyContent: 'space-between',
          }}>
          <View>
            <Text style={{color: '#FFFFFF', fontSize: 14}}>Albert</Text>
            <Text style={{color: '#FFFFFF', fontSize: 10}}>XYZ enterprize</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <Button
              style={styles.viewDetailButtonStyle}
              labelStyle={styles.viewDetailButtonLabelStyle}
              onPress={() => {
                navigation.navigate('SalesDetail');
              }}>
              View Detail
            </Button>
            <Button
              labelStyle={styles.viewDetailButtonLabelStyle}
              style={styles.createSalesButtonStyle}
              onPress={() => {
                navigation.navigate('CreateSales');
              }}>
              Create Sales
            </Button>
          </View>
        </View>
        <Divider />
        <View
          style={{
            flexDirection: 'row',
            marginVertical: 10,
            justifyContent: 'space-between',
          }}>
          <View>
            <Text style={{color: '#FFFFFF', fontSize: 14}}>Donny</Text>
            <Text style={{color: '#FFFFFF', fontSize: 10}}>XYZ enterprize</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <Button
              style={styles.viewDetailButtonStyle}
              labelStyle={styles.viewDetailButtonLabelStyle}
              onPress={() => {
                navigation.navigate('SalesDetail');
              }}>
              View Detail
            </Button>
            <Button
              labelStyle={styles.viewDetailButtonLabelStyle}
              style={styles.createSalesButtonStyle}
              onPress={() => {
                navigation.navigate('CreateSales');
              }}>
              Create Sales
            </Button>
          </View>
        </View>
        <Divider />
        <View
          style={{
            flexDirection: 'row',
            marginVertical: 10,
            justifyContent: 'space-between',
          }}>
          <View>
            <Text style={{color: '#FFFFFF', fontSize: 14}}>Jason</Text>
            <Text style={{color: '#FFFFFF', fontSize: 10}}>XYZ enterprize</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <Button
              style={styles.viewDetailButtonStyle}
              labelStyle={styles.viewDetailButtonLabelStyle}
              onPress={() => {
                navigation.navigate('SalesDetail');
              }}>
              View Detail
            </Button>
            <Button
              labelStyle={styles.viewDetailButtonLabelStyle}
              style={styles.createSalesButtonStyle}
              onPress={() => {
                navigation.navigate('CreateSales');
              }}>
              Create Sales
            </Button>
          </View>
        </View>
        <Divider />
      </View>
      <BottomSheet
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}>
        <View>
          <Text style={{color: '#FFFFFF'}}>Awesome</Text>
        </View>
      </BottomSheet>
    </View>
  );
};

export default SearchCustomers;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#01232D',
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  viewDetailButtonStyle: {
    borderWidth: 1,
    borderColor: '#2A677A',
    borderRadius: 5,
    marginRight: 10,
  },
  viewDetailButtonLabelStyle: {
    color: '#F6B100',
    fontSize: 10,
  },
  createSalesButtonStyle: {
    borderWidth: 1,
    borderColor: '#2A677A',
    borderRadius: 5,
    backgroundColor: '#2A677A',
  },
  searchBar: {
    backgroundColor: '#012E3C',
    borderRadius: 15,
    height: 44,
    alignItems: 'center',
  },
  placeHolder: {
    color: '#D5EAF1',
    alignSelf: 'center',
  },
  bottomSheetMainContainer: {},
});
