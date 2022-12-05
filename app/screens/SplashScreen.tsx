import NavigationUtil from '@app/navigation/NavigationUtil'
import AsyncStorage from '@react-native-community/async-storage'
import React from 'react'
import { View, Text, Button } from 'react-native'

import { useDispatch } from 'react-redux'
import { logIn, logOut } from './rootSlice'
const SplashScreen = props => {
  const dispatch = useDispatch()
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        paddingTop: 100,
        backgroundColor: '#3892',
      }}
    >
      <Text style={{ marginBottom: 50 }}>SplashScreen</Text>
      <Button
        onPress={() => {
          console.log('login')
          props.navigation.reset({
            index: 0,
            routes: [{ name: 'MainStack' }],
          })
        }}
        title="Login"
      />
      <Button
        onPress={async () => {
          props.navigation.reset({
            index: 0,
            routes: [{ name: 'MainStack' }],
          })
        }}
        title="Logout"
      />
    </View>
  )
}

export default SplashScreen
