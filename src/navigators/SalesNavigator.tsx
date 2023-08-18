import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CreateSales from '../screens/createSales';
import SalesDetails from '../screens/SalesDetails';
import AddProducts from '../screens/addProducts';
import ReviewOrder from '../screens/ReviewOrder';
import AddCustomers from '../screens/addCustomer';
import DashboardFilled from '../screens/HomeScreen/dashboardFilled';

const Stack = createNativeStackNavigator();

export default function SalesNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        navigationBarColor: 'white',
      }}>
      <Stack.Screen name="Dashboard2" component={DashboardFilled} />
      <Stack.Screen name="SalesDetail" component={SalesDetails} />
      <Stack.Screen name="CreateSales" component={CreateSales} />
      <Stack.Screen name="AddProducts" component={AddProducts} />
      <Stack.Screen name="AddCustomers" component={AddCustomers} />
      <Stack.Screen name="ReviewOrder" component={ReviewOrder} />
    </Stack.Navigator>
  );
}
