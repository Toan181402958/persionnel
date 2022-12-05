import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'

import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { Alert, Image, TouchableOpacity } from 'react-native'
import AccountScreen from '../screens/App/Account/AccountScreen'
import HomeScreen from '../screens/App/Home/HomeScreen'
import ProductScreen from '../screens/App/Product/ProductScreen'
import ProductDetailScreen from '../screens/App/Product/ProductDetailScreen'
import SplashScreen from '../screens/SplashScreen'
import LoginScreen from '../screens/Auth/LoginScreen'

import NotificationScreen from '../screens/App/Notification/NotificationScreen'
import NavigationUtil from './NavigationUtil'
import { useDispatch, useState } from 'react-redux'
import RegisterScreen from '@app/screens/Auth/RegisterScreen'

const Tab = createBottomTabNavigator()
const SplashStack = createStackNavigator()
const MainStack = createStackNavigator()
/**
 * @returns
 */

const MainTab = () => (
  <Tab.Navigator
  // screenOptions={({ navigation, route }) => ({
  //   tabBarLabel: 'Search',
  // })}
  // tabBarOptions={{
  //   keyboardHidesTabBar: false,
  // }}
  >
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Notification" component={NotificationScreen} />
    <Tab.Screen
      name="Account"
      component={AccountScreen}
      options={{
        tabBarIcon: ({ focused, color, size }) => (
          <Image
            style={{
              width: 30,
              height: 30,
              tintColor: color,
            }}
            source={{
              uri: 'https://image.flaticon.com/icons/png/512/69/69524.png',
            }}
          />
        ),
        tabBarButton: props => (
          <TouchableOpacity
            {...props}
            activeOpacity={1}
            onPress={e => {
              // NavigationUtil.navigate('LoginScreen');
              // console.log!({ props });
              Alert.alert('login Require', 'Vui lòng đăng nhập', [
                {
                  text: 'Cancel',
                  onPress: () => console.log('Cancel Pressed'),
                  style: 'cancel',
                },
                {
                  text: 'OK',
                  onPress: () => {
                    // props.onPress(e);
                    NavigationUtil.navigate('LoginScreen')
                  },
                },
              ])
            }}
          />
        ),
      }}
    />
  </Tab.Navigator>
)

const forFade = ({ current }) => ({
  cardStyle: {
    opacity: current.progress,
  },
})
const AppNavigator = () => {
  return (
    <NavigationContainer
      ref={navigatorRef => {
        NavigationUtil.setTopLevelNavigator(navigatorRef)
      }}
    >
      <SplashStack.Navigator headerMode="none">
        <SplashStack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{
            animationTypeForReplace: 'pop',
            cardStyleInterpolator: forFade,
          }}
        />
        <MainStack.Screen name="MainStack" component={MainTab} />
        <MainStack.Screen name="Product" component={ProductScreen} />
        <MainStack.Screen
          name="ProductDetail"
          component={ProductDetailScreen}
        />
        <MainStack.Screen name="registerScreen" component={RegisterScreen} />
        <SplashStack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{
            animationTypeForReplace: 'pop',
            cardStyleInterpolator: forFade,
          }}
        />
      </SplashStack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator
