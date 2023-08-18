import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DashboardEmpty from '../screens/HomeScreen/dashboardEmpty';
import DashboardFilled from '../screens/HomeScreen/dashboardFilled';
import ForgotPassword1 from '../screens/forgotPassword1';
import ForgotPassword2 from '../screens/forgotPassword2';
import ChangePassword2 from '../screens/changePassword2';
import Profile from '../screens/Profile';

const Stack = createNativeStackNavigator();

export default function HomeNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        navigationBarColor: 'white',
      }}>
      <Stack.Screen name="Dashboard" component={DashboardEmpty} />
      <Stack.Screen name="Dashboard2" component={DashboardFilled} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword1} />
      <Stack.Screen name="ForgotPassword2" component={ForgotPassword2} />
      <Stack.Screen name="ChangePassword" component={ChangePassword2} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}
