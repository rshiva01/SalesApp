/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {Image, StyleSheet, View} from 'react-native';
import Notifications from '../screens/Notifications';
import {Text} from '@react-native-material/core';
import HomeNavigator from './HomeNavigator';
import SalesNavigator from './SalesNavigator';
const Tab = createMaterialBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          zIndex: 2,
          backgroundColor: '#D5EAF1',
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          height: 70,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: () => (
            <View style={styles.center}>
              <Image
                source={require('../assets/homeIcon.png')}
                resizeMode="contain"
                width={26}
                height={24}
              />
              <Text style={styles.label}>Home</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="My Sales"
        component={SalesNavigator}
        options={{
          tabBarIcon: () => (
            <View style={styles.center}>
              <Image
                source={require('../assets/mysalesIcon.png')}
                resizeMode="contain"
                width={26}
                height={24}
              />
              <Text style={styles.label}>My Sales</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notifications}
        options={{
          tabBarIcon: () => (
            <View style={styles.center}>
              <Image
                source={require('../assets/moreIcon.png')}
                resizeMode="contain"
                width={26}
                height={24}
              />
              <Text style={styles.label}>More</Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  center: {alignItems: 'center', justifyContent: 'center'},
  label: {
    fontSize: 12,
  },
});
