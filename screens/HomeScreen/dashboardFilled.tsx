import * as React from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {
  Avatar,
  BottomNavigation,
  Divider,
  FAB,
  IconButton,
} from 'react-native-paper';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {AvatarNBell, SalesSummary, SalesFigBox} from './dashboardEmpty';
import BottomTab from '../../navigation/bottomTab';
import {useTranslation} from '../../localization/

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
        <IconButton icon={require('../../assets/arrowIcon.png')} />
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

const DashboardFilled = () => {
  const {t} = useTranslation();
  return (
    <View style={styles.container}>
      <AvatarNBell />
      <SalesSummary />
      <SalesFigBox tzs="12,450" productSold="20" />
      <View style={styles.yourSales}>
        <Text style={styles.yourSalesText}>Your Sales</Text>
        <TouchableOpacity style={styles.createSalesButton}>
          <Text style={styles.buttonText}>Create Sales</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
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
        <SalesEntry
          name="John Doe"
          tzs="12,450"
          paymentMode="Cash"
          ap="12,450"
          ad="0.0"
        />
      </ScrollView>
      <FAB style={styles.fab} label="New Customer" />
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
  },
});
