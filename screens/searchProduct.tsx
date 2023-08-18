import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Button, Divider, IconButton} from 'react-native-paper';

const SearchProducts = () => {
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
          />
          <Text style={{color: '#F6B100'}}>Search Products</Text>
        </View>
        <Button labelStyle={{color: '#F6B100', fontSize: 14}}>Cancel</Button>
      </View>
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
          <Text style={styles.itemNameStyle}>Britannia</Text>
          <Text style={styles.priceStyle}>Unit price - TZS 5000</Text>
          <Divider
            style={styles.dividerStyle}
            theme={{colors: {primary: '#08485C'}}}
          />
        </View>
        <View>
          <Text style={styles.itemNameStyle}>Britannia</Text>
          <Text style={styles.priceStyle}>Unit price - TZS 5000</Text>
          <Divider
            style={styles.dividerStyle}
            theme={{colors: {primary: '#08485C'}}}
          />
        </View>
        <View>
          <Text style={styles.itemNameStyle}>Britannia</Text>
          <Text style={styles.priceStyle}>Unit price - TZS 5000</Text>
          <Divider
            style={styles.dividerStyle}
            theme={{colors: {primary: '#08485C'}}}
          />
        </View>
        <View>
          <Text style={styles.itemNameStyle}>Britannia</Text>
          <Text style={styles.priceStyle}>Unit price - TZS 5000</Text>
          <Divider
            style={styles.dividerStyle}
            theme={{colors: {primary: '#08485C'}}}
          />
        </View>
      </View>
    </View>
  );
};

export default SearchProducts;

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
});
