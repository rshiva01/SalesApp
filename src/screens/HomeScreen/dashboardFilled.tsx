import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {Avatar, Divider, FAB, IconButton} from 'react-native-paper';
import {SalesSummary} from './dashboardEmpty';
import {useTranslation} from '../../localization';

type SalesProps = {
  name: string;
  tzs: string;
  paymentMode: string;
  ap: string;
  ad: string;
};

const SalesEntry = (props: SalesProps) => {
  var hour = new Date().getHours();
  var min = new Date().getMinutes();
  return (
    <View style={styles.salesLogBox}>
      <View style={styles.boxHeader}>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <View style={styles.paidBox}>
            <Text style={{color: '#FFFFFF', fontSize: 10, textAlign: 'center'}}>
              Paid
            </Text>
          </View>
          <View style={{marginHorizontal: 5}}>
            <Text style={{color: '#F6B100', fontSize: 14}}>{props.name}</Text>
            <Text style={{color: '#D5EAF1', fontSize: 12}}>XYZ Enterprize</Text>
          </View>
        </View>
        <View>
          <Text style={{color: '#F6B100', fontSize: 14}}>TZS {props.tzs}</Text>
          <Text style={{color: '#FFFFFF', fontSize: 12}}>
            {props.paymentMode}
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 10,
          marginVertical: 5,
        }}>
        <Text style={{color: '#D5EAF1', fontSize: 12}}>Amount Paid</Text>
        <Text style={{color: '#D5EAF1', fontSize: 12}}>{props.ap}</Text>
      </View>
      <Divider style={{marginHorizontal: 10}} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 10,
          marginVertical: 5,
        }}>
        <Text style={{color: '#D5EAF1', fontSize: 12}}>Amount Due</Text>
        <Text style={{color: '#D5EAF1', fontSize: 12}}>{props.ad}</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}>
        <Text style={{color: '#D5EAF1', fontSize: 12, fontStyle: 'italic'}}>
          {hour}:{min}
        </Text>
        <IconButton
          icon={require('../../assets/arrowIcon.png')}
          iconColor="#78ADBE"
        />
        <Text style={{color: '#D5EAF1', fontSize: 12}}>ID: 678900</Text>
      </View>
      <View
        style={{
          flexDirection: 'row-reverse',
          marginHorizontal: 10,
          marginBottom: 10,
        }}>
        <Text
          style={{
            textDecorationLine: 'underline',
            color: '#F6B100',
            fontSize: 12,
          }}>
          Edit
        </Text>
      </View>
    </View>
  );
};
export {SalesEntry};

const DashboardFilled = ({navigation}: any) => {
  const {t} = useTranslation();
  return (
    <View style={styles.container}>
      <View style={styles.container3}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Profile');
          }}>
          <View style={styles.avatarContainer}>
            <Avatar.Image
              size={31}
              style={styles.avatar}
              source={require('../../assets/avatarProfilePhoto.png')}
            />
            <Text style={styles.avatarText}>Welcome back, Nick!</Text>
          </View>
        </TouchableOpacity>
        <View>
          <TouchableOpacity>
            <IconButton
              icon={require('../../assets/bellIcon.png')}
              onPress={() => {
                navigation.navigate('Notifications');
              }}
              iconColor="#F6B100"
              size={20}
            />
          </TouchableOpacity>
        </View>
      </View>
      <SalesSummary />
      <View style={styles.salesFigContainer}>
        <View style={styles.container4}>
          <View>
            <Text style={{color: '#FFFFFF', fontSize: 14}}>Total Sales</Text>
            <View style={{flex: 1, flexDirection: 'row', paddingTop: 5}}>
              <Image
                source={require('../../assets/salesGraph.png')}
                resizeMode="contain"
              />
              <Text
                style={{
                  color: '#F6B100',
                  fontSize: 18,
                  paddingVertical: 2,
                  paddingHorizontal: 5,
                }}>
                TZS 12,450
              </Text>
            </View>
          </View>
          <View>
            <Text style={{color: '#FFFFFF', fontSize: 14}}>Product Sold</Text>
            <View style={{flex: 1, flexDirection: 'row', paddingTop: 5}}>
              <Image
                source={require('../../assets/productIcon.png')}
                resizeMode="contain"
              />
              <Text
                style={{
                  color: '#F6B100',
                  fontSize: 18,
                  paddingVertical: 2,
                  paddingHorizontal: 5,
                }}>
                20
              </Text>
            </View>
          </View>
        </View>
        <Divider theme={{colors: {primary: '#F6B100'}}} />
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
          <TouchableOpacity
            style={{flexDirection: 'row', justifyContent: 'center'}}
            onPress={() => {
              navigation.navigate('SalesDetail');
            }}>
            <Text style={{color: '#D5EAF1', paddingTop: 10}}>View Report</Text>
            <IconButton
              icon={require('../../assets/arrowIcon.png')}
              style={{paddingBottom: 10}}
              iconColor="#D5EAF1"
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.yourSales}>
        <Text style={styles.yourSalesText}>Your Sales</Text>
        <TouchableOpacity
          style={styles.createSalesButton}
          onPress={() => {
            navigation.navigate('CreateSales');
          }}>
          <Text style={styles.buttonText}>Create Sales</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <TouchableOpacity onPress={()=>{navigation.navigate('SalesDetails')}}>
          <SalesEntry
            name="John Doe"
            tzs="12,450"
            paymentMode="Cash"
            ap="12,450"
            ad="0.0"
          />
        </TouchableOpacity>
        <SalesEntry
          name="John Doe"
          tzs="12,450"
          paymentMode="Cash"
          ap="12,450"
          ad="0.0"
        />
        <SalesEntry
          name="John Doe"
          tzs="12,450"
          paymentMode="Cash"
          ap="12,450"
          ad="0.0"
        />
        <SalesEntry
          name="John Doe"
          tzs="12,450"
          paymentMode="Cash"
          ap="12,450"
          ad="0.0"
        />
        <SalesEntry
          name="John Doe"
          tzs="12,450"
          paymentMode="Cash"
          ap="12,450"
          ad="0.0"
        />
      </ScrollView>
      <FAB
        style={styles.fab}
        label="My Customers"
        onPress={() => {
          navigation.navigate('AddCustomers');
        }}
      />
    </View>
  );
};

export default DashboardFilled;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#01232D',
    paddingTop: 20,
  },
  container3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    //backgroundColor:'#FFFFFF',
  },
  avatar: {
    borderWidth: 2,
    borderColor: '#F6B100',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    color: '#F6B100',
    alignItems: 'center',
    paddingLeft: 10,
    paddingVertical: 5,
    alignSelf: 'flex-start',
  },
  avatarContainer: {
    flex: 1,
    flexDirection: 'row',
    padding: 13,
    //backgroundColor:'#FFFFFF'
  },
  salesFigContainer: {
    borderWidth: 1,
    borderColor: '#F6B100',
    height: 125,
    width: 341,
    alignSelf: 'center',
    borderRadius: 15,
    marginVertical: 13,
  },
  container4: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 20,
    marginHorizontal: 30,
    justifyContent: 'space-between',
  },
  yourSales: {
    //backgroundColor:'#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  yourSalesText: {
    color: '#D5EAF1',
    fontSize: 14,
    fontWeight: 'bold',
  },
  createSalesButton: {
    backgroundColor: '#F6B100',
    height: 25,
    width: 101,
    borderRadius: 5,
    justifyContent: 'center',
  },
  buttonText: {
    color: '#01232D',
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  salesLogBox: {
    marginHorizontal: 20,
    backgroundColor: '#012E3C',
    borderRadius: 15,
    marginVertical: 10,
  },
  boxHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#2A677A',
    borderTopEndRadius: 15,
    borderTopLeftRadius: 15,
    padding: 10,
  },
  paidBox: {
    backgroundColor: '#2BC871',
    borderRadius: 20,
    height: 19,
    width: 39,
    justifyContent: 'center',
  },
  fab: {
    backgroundColor: '#FFE296',
    alignSelf: 'flex-end',
    borderRadius: 18,
    height: 38,
    textAlign: 'center',
    paddingVertical: 0,
    justifyContent: 'center',
    position: 'absolute',
    bottom: 10,
    right: 10
  },
});
