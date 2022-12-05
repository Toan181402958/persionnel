import ScreenWrapper from '@app/components/Screen/ScreenWrapper'
import NavigationUtil from '@app/navigation/NavigationUtil'
import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import { getAccounts } from './HomeApi'

const HomeScreen = () => {
  const [text, setText] = useState<string>()
  useEffect(() => {
    // getAccounts({});
    return () => {}
  }, [])
  return (
    <ScreenWrapper
      titleHeader="Home"
      backgroundColor="red"
      back
      children={
        <>
          <Text>Hello</Text>
        </>
      }
    />
  )
}

export default HomeScreen
