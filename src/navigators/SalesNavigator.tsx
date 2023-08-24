import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CreateSales from '../screens/createSales';
import SalesDetails from '../screens/salesDetails';
import AddProducts from '../screens/addProducts';
import ReviewOrder from '../screens/reviewOrder';
import AddCustomers from '../screens/addCustomer';
import DashboardFilled from '../screens/HomeScreen/dashboardFilled';
import SearchCustomers from '../screens/searchCustomers';
import AddPayment from '../screens/addPayment';

const Stack = createNativeStackNavigator();

export default function SalesNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        navigationBarColor: 'white',
      }}>
      <Stack.Screen name="CreateSales" component={CreateSales} />
    </Stack.Navigator>
  );
}
