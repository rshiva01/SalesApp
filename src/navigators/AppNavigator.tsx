import React from 'react';
import Login from '../screens/login'
import OnBoarding1 from '../screens/onBoarding1';
import OnBoarding2 from '../screens/onBoarding2';
import OnBoarding3 from '../screens/onBoarding3';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DashboardEmpty from '../screens/HomeScreen/dashboardEmpty';
import DashboardFilled from '../screens/HomeScreen/dashboardFilled';
import ForgotPassword1 from '../screens/forgotPassword1';
import ForgotPassword2 from '../screens/forgotPassword2';
import ChangePassword2 from '../screens/changePassword2';
import Profile from '../screens/Profile';
import Notifications from '../screens/Notifications';
import BottomTab from '../navigators/BottomTabNavigator';
import AppLock from '../screens/appLock';
import FAQ from '../screens/faq';
import AboutUs from '../screens/aboutUs';
import TermsNCondition from '../screens/TermsConditions';
import CreateSales from '../screens/createSales';
import SalesDetails from '../screens/SalesDetails';
import SearchCustomers from '../screens/SearchCustomers';
import CustomerAdded from '../screens/createSales';
import AddProducts from '../screens/addProducts';
import ReviewOrder from '../screens/ReviewOrder';
import AddPayment from '../screens/addPayment';
import SearchProducts from '../screens/SearchProduct';
import AddCustomers from '../screens/addCustomer';
import NewLogIn from '../screens/NewLogIn';
import Profile2 from '../screens/editProfile';
import ChooseCustomer from '../screens/chooseCustomer';
import EditProfile from '../screens/editProfile';
import BottomTabNavigator from './BottomTabNavigator';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
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
    </Stack.Navigator>
  );
}
