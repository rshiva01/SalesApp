import React from 'react';
import Login from '../screens/login';
import OnBoarding1 from '../screens/onBoarding1';
import OnBoarding2 from '../screens/onBoarding2';
import OnBoarding3 from '../screens/onBoarding3';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SearchCustomers from '../screens/searchCustomers';
import CustomerAdded from '../screens/customerAdded';
import AddProducts from '../screens/addProducts';
import ReviewOrder from '../screens/reviewOrder';
import AddPayment from '../screens/addPayment';
import AddCustomers from '../screens/addCustomer';
import BottomTabNavigator from './BottomTabNavigator';
import ProductsAdded from '../screens/productsAdded';
import ProductsAdded2 from '../screens/productsAdded2';
import ResetPassword from '../screens/resetPassword';
import ResetPassword2 from '../screens/resetPassword2';
import SearchAssignment from '../screens/searchAssignment';

const Stack = createNativeStackNavigator();

export function AppNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        navigationBarColor: 'white',
      }}>
      <Stack.Screen name="OnBoarding1" component={OnBoarding1} />
      <Stack.Screen name="OnBoarding2" component={OnBoarding2} />
      <Stack.Screen name="OnBoarding3" component={OnBoarding3} />
      <Stack.Screen name="LogIn" component={Login} />
      <Stack.Screen name="App" component={BottomTabNavigator} />
      <Stack.Screen name="SearchCustomers" component={SearchCustomers} />
      <Stack.Screen name="AddProducts" component={AddProducts} />
      <Stack.Screen name="AddCustomers" component={AddCustomers} />
      <Stack.Screen name="CustomerAdded" component={CustomerAdded} />
      {/* <Stack.Screen name="SearchProducts" component={SearchProducts} /> */}
      <Stack.Screen name="SearchAssignment" component={SearchAssignment} />
      <Stack.Screen name="ProductsAdded" component={ProductsAdded} />
      <Stack.Screen name="ProductsAdded2" component={ProductsAdded2} />
      {/* <Stack.Screen name="ProductsAdded2" component={ProductsAdded2} /> */}
      <Stack.Screen name="ReviewOrder" component={ReviewOrder} />
      <Stack.Screen name="AddPayment" component={AddPayment} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
      <Stack.Screen name="ResetPassword2" component={ResetPassword2} />
    </Stack.Navigator>
  );
}
