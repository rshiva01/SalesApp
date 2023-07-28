import React from 'react'
import Login from './screens/login'
import OnBoarding1 from './screens/onBoarding1'
import OnBoarding2 from './screens/onBoarding2'
import OnBoarding3 from './screens/onBoarding3'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import DashboardEmpty from './screens/HomeScreen/dashboardEmpty'
import DashboardFilled from './screens/HomeScreen/dashboardFilled'
import ForgotPassword1 from './screens/forgotPassword1'
import ForgotPassword2 from './screens/forgotPassword2'
import ChangePassword2 from './screens/changePassword2'
import Profile from './screens/profile'
import Notifications from './screens/notifications'
import BottomTab from './navigation/bottomTab'
import AppLock from './screens/appLock'
import FAQ from './screens/faq'


const Stack = createNativeStackNavigator()

 const App = () => {
  //return <OnBoarding1/>
  //return <OnBoarding2/>
  //return <OnBoarding3/>
  //return <Login/>
  //return <NewLogIn/>
  //return <DashboardEmpty/>


  // return(
  //   <NavigationContainer>
  //     <BottomTab/>
  //   </NavigationContainer>
  // )


  //return <DashboardFilled/>
  //return <ForgotPassword1/>
  //return <ForgotPassword2/>
  //return <ChangePassword2/>
  //  return <Profile/>
  //return <Notifications/>
  // return <AppLock/>
  return <FAQ/>

  // return (
  //   <NavigationContainer>
  //     <Stack.Navigator screenOptions={{headerShown: false}}>
  //       <Stack.Screen name = "OnBoarding1" component={OnBoarding1}/>
  //       <Stack.Screen name = "OnBoarding2" component={OnBoarding2}/>
  //       <Stack.Screen name = "OnBoarding3" component={OnBoarding3}/>
  //       <Stack.Screen name = "LogIn" component={Login}/>
  //       <Stack.Screen name="Dashboard" component={DashboardEmpty}/>
  //       <Stack.Screen name="Dashboard2" component={DashboardFilled}/>
  //       <Stack.Screen name = "ForgotPassword" component={ForgotPassword1}/>
  //       <Stack.Screen name = "ForgotPassword2" component={ForgotPassword2}/>
  //       <Stack.Screen name = "ChangePassword" component={ChangePassword2}/>
  //       <Stack.Screen name = "Notifications" component={Notifications}/>
  //     </Stack.Navigator>
  //   </NavigationContainer>
  // )
}

export default App