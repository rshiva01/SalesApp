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
      <Stack.Screen name="Dashboard2" component={DashboardFilled} />
      <Stack.Screen name="SalesDetails" component={SalesDetails} />
      <Stack.Screen name="CreateSales" component={CreateSales} />
      <Stack.Screen name="SearchCustomers" component={SearchCustomers} />
      <Stack.Screen name="AddProducts" component={AddProducts} />
      <Stack.Screen name="AddCustomers" component={AddCustomers} />
      <Stack.Screen name="ReviewOrder" component={ReviewOrder} />
      <Stack.Screen name="AddPayment" component={AddPayment} />
    </Stack.Navigator>
  );
}
