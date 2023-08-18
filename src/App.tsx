import React from 'react';
import {StyleSheet, useColorScheme} from 'react-native';
import Toast from 'react-native-toast-message';
import Login from './screens/Login';
import OnBoarding1 from './screens/onBoarding1';
import OnBoarding2 from './screens/onBoarding2';
import OnBoarding3 from './screens/onBoarding3';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DashboardEmpty from './screens/HomeScreen/dashboardEmpty';
import DashboardFilled from './screens/HomeScreen/dashboardFilled';
import ForgotPassword1 from './screens/forgotPassword1';
import ForgotPassword2 from './screens/forgotPassword2';
import ChangePassword2 from './screens/changePassword2';
import Profile from './screens/Profile';
import Notifications from './screens/Notifications';
import BottomTab from './navigators/BottomTabNavigator';
import AppLock from './screens/appLock';
import FAQ from './screens/faq';
import AboutUs from './screens/aboutUs';
import TermsNCondition from './screens/TermsConditions';
import CreateSales from './screens/createSales';
import SalesDetails from './screens/SalesDetails';
import SearchCustomers from './screens/SearchCustomers';
import CustomerAdded from './screens/createSales';
import AddProducts from './screens/addProducts';
import ReviewOrder from './screens/ReviewOrder';
import AddPayment from './screens/addPayment';
import SearchProducts from './screens/SearchProduct';
import AddCustomers from './screens/addCustomer';
import NewLogIn from './screens/NewLogIn';
import Profile2 from './screens/editProfile';
import ChooseCustomer from './screens/chooseCustomer';
import EditProfile from './screens/editProfile';
import AppNavigator from './navigators/AppNavigator';
import {CustomLightTheme, CustomDarkTheme} from './theme/rn-paper';
import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import merge from 'deepmerge';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {PaperProvider, adaptNavigationTheme} from 'react-native-paper';

const App = () => {
  //return <OnBoarding1/>
  //return <OnBoarding2/>
  //return <OnBoarding3/>
  //return <Login/>
  //return <DashboardEmpty/>
  //return <DashboardFilled/>
  //return <ForgotPassword1/>
  //return <ForgotPassword2/>
  //return <ChangePassword2/>
  //return <Profile/>
  //return <Profile2/>
  //return <Notifications/>
  // return <AppLock/>
  //return <FAQ/>
  // return <AboutUs/>
  // return <TermsNCondition/>
  //return <CreateSales/>
  //return <ChooseCustomer/>
  //return <SalesDetails/>
  //return <SearchCustomers/>
  //return <EditProfile/>
  //return <CustomerAdded/>
  //return <AddPayment/>
  // return <AddProducts/>
  //return <SearchProducts/>
  //return <ReviewOrder/>
  //return <AddCustomers/>
  //return <AddPayment/>
  const isDarkMode = useColorScheme() === 'dark';
  const {LightTheme, DarkTheme} = adaptNavigationTheme({
    reactNavigationLight: NavigationDefaultTheme,
    reactNavigationDark: NavigationDarkTheme,
  });
  const CombinedDefaultTheme = merge(LightTheme, CustomLightTheme);
  const CombinedDarkTheme = merge(DarkTheme, CustomDarkTheme);
  return (
    <GestureHandlerRootView style={styles.flex1}>
      <PaperProvider
        theme={isDarkMode ? CombinedDarkTheme : CombinedDefaultTheme}>
        <NavigationContainer>
          <BottomSheetModalProvider>
            <SafeAreaProvider>
              <SafeAreaView edges={['top']} style={styles.flex1}>
                <AppNavigator
                // linking={linking}
                // initialState={initialNavigationState}
                // onStateChange={onNavigationStateChange}
                />
              </SafeAreaView>
              <Toast />
            </SafeAreaProvider>
          </BottomSheetModalProvider>
        </NavigationContainer>
      </PaperProvider>
    </GestureHandlerRootView>
  );
};

export default App;
const styles = StyleSheet.create({
  flex1: {flex: 1},
});
