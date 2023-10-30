import React, {useMemo, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Button, Chip, Divider, IconButton, Searchbar} from 'react-native-paper';

const SearchAssignment = ({navigation}: any) => {
  const [searchQuery, setSearchQuery] = React.useState('');

  // const isStock = useMemo(()=>{
  //     return selectedStockType === 'allStock';
  // },[selectedStockType])

  const [isStocks, setStocks] = useState('allStocks');

  const onChangeSearch = (query: any) => setSearchQuery(query);
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
          <Text style={{color: '#F6B100'}}>Search Products</Text>
        </View>
        <Button labelStyle={{color: '#F6B100', fontSize: 14}}>Cancel</Button>
      </View>
      <View>
        <Searchbar
          placeholder="Search by product name"
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
      <View style={styles.buttonContainer}>
        <Chip
          textStyle={
            isStocks == 'myStocks'
              ? styles.buttonTextSelected
              : styles.buttonText
          }
          onPress={() => setStocks('myStocks')}
          style={
            isStocks == 'myStocks' ? styles.buttonSelected : styles.buttonStyle
          }>
          My Stock
        </Chip>
        <Chip
          textStyle={
            isStocks == 'allStocks'
              ? styles.buttonTextSelected
              : styles.buttonText
          }
          style={
            isStocks == 'allStocks' ? styles.buttonSelected : styles.buttonStyle
          }
          onPress={() => setStocks('allStocks')}>
          All Stock
        </Chip>
      </View>
      {isStocks == 'allStocks' ? (
        <View
          style={{
            paddingVertical: 20,
            paddingHorizontal: 30,
            borderRadius: 15,
            marginVertical: 10,
            backgroundColor: '#012E3C',
            height: 500,
          }}>
          <View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('ProductsAdded');
              }}>
              <Text style={styles.itemNameStyle}>Britannia</Text>
              <Text style={styles.priceStyle}>Assignment ID - AS-3232</Text>
              <Text style={styles.priceStyle}>Quantity - 10</Text>
              <Text style={styles.priceStyle}>Unit price - TZS 5000</Text>
            </TouchableOpacity>
            <Divider
              style={styles.dividerStyle}
              theme={{colors: {primary: '#08485C'}}}
            />
          </View>
          <View>
            <Text style={styles.itemNameStyle}>Britannia</Text>
            <Text style={styles.priceStyle}>Assignment ID - AS-3232</Text>
            <Text style={styles.priceStyle}>Quantity - 10</Text>
            <Text style={styles.priceStyle}>Unit price - TZS 5000</Text>
            <Divider
              style={styles.dividerStyle}
              theme={{colors: {primary: '#08485C'}}}
            />
          </View>
          <View>
            <Text style={styles.itemNameStyle}>Britannia</Text>
            <Text style={styles.priceStyle}>Assignment ID - AS-3232</Text>
            <Text style={styles.priceStyle}>Quantity - 10</Text>
            <Text style={styles.priceStyle}>Unit price - TZS 5000</Text>
            <Divider
              style={styles.dividerStyle}
              theme={{colors: {primary: '#08485C'}}}
            />
          </View>
          <View>
            <Text style={styles.itemNameStyle}>Britannia</Text>
            <Text style={styles.priceStyle}>Assignment ID - AS-3232</Text>
            <Text style={styles.priceStyle}>Quantity - 10</Text>
            <Text style={styles.priceStyle}>Unit price - TZS 5000</Text>
            <Divider
              style={styles.dividerStyle}
              theme={{colors: {primary: '#08485C'}}}
            />
          </View>
        </View>
      ):(
        <View
        style={{
          paddingVertical: 20,
          paddingHorizontal: 30,
          borderRadius: 15,
          marginVertical: 10,
          backgroundColor: '#012E3C',
          height: 500,
        }}>
        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ProductsAdded');
            }}>
            <View style={{flexDirection:'row', justifyContent:"space-between"}}>
              <View>
                <Text style={styles.itemNameStyle}>Britannia</Text>
                <Text style={styles.priceStyle}>Assignment ID - AS-3232</Text>
                <Text style={styles.priceStyle}>Quantity - 10</Text>
              </View>
              <View>
                <Text style={styles.priceStyle}>Unit price - TZS 5000</Text>
              </View>
            </View>
          </TouchableOpacity>
          <Divider
            style={styles.dividerStyle}
            theme={{colors: {primary: '#08485C'}}}
          />
        </View>
        <View>
        <View style={{flexDirection:'row', justifyContent:"space-between"}}>
              <View>
                <Text style={styles.itemNameStyle}>Britannia</Text>
                <Text style={styles.priceStyle}>Assignment ID - AS-3232</Text>
                <Text style={styles.priceStyle}>Quantity - 10</Text>
              </View>
              <View>
                <Text style={styles.priceStyle}>Unit price - TZS 5000</Text>
              </View>
            </View>
          <Divider
            style={styles.dividerStyle}
            theme={{colors: {primary: '#08485C'}}}
          />
        </View>
        <View>
        <View style={{flexDirection:'row', justifyContent:"space-between"}}>
              <View>
                <Text style={styles.itemNameStyle}>Britannia</Text>
                <Text style={styles.priceStyle}>Assignment ID - AS-3232</Text>
                <Text style={styles.priceStyle}>Quantity - 10</Text>
              </View>
              <View>
                <Text style={styles.priceStyle}>Unit price - TZS 5000</Text>
              </View>
            </View>
          <Divider
            style={styles.dividerStyle}
            theme={{colors: {primary: '#08485C'}}}
          />
        </View>
        <View>
        <View style={{flexDirection:'row', justifyContent:"space-between"}}>
              <View>
                <Text style={styles.itemNameStyle}>Britannia</Text>
                <Text style={styles.priceStyle}>Assignment ID - AS-3232</Text>
                <Text style={styles.priceStyle}>Quantity - 10</Text>
              </View>
              <View>
                <Text style={styles.priceStyle}>Unit price - TZS 5000</Text>
              </View>
            </View>
          <Divider
            style={styles.dividerStyle}
            theme={{colors: {primary: '#08485C'}}}
          />
        </View>
      </View>
      )
}
    </View>
  );
};

export default SearchAssignment;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#01232D',
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  dividerStyle: {
    marginVertical: 10,
  },
  itemNameStyle: {
    color: '#D5EAF1',
    fontSize: 14,
  },
  priceStyle: {
    color: '#D5EAF1',
    fontSize: 10,
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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 10,
  },
  buttonText: {
    color: '#01232D',
  },
  buttonTextSelected: {
    color: '#F6B100',
  },
  buttonStyle: {
    backgroundColor: '#F6B100',
  },
  buttonSelected: {
    backgroundColor: '#2A677A',
  },
});
