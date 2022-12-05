import NavigationUtil from '@app/navigation/NavigationUtil'
import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import { getAccounts } from './AccountApi'

const HomeScreen = () => {
  const [text, setText] = useState<string>()
  useEffect(() => {
    // getAccounts({});
    return () => {}
  }, [])
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <TouchableOpacity
        onPress={() => {
          NavigationUtil.navigate('Settings')
        }}
      >
        <Text>Click me</Text>
      </TouchableOpacity>
      <TextInput
        style={{
          width: '100%',
          height: 80,
          backgroundColor: 'blue',
        }}
        value={text}
        onChangeText={e => {
          setText(e)
        }}
      />
    </View>
  )
}

export default HomeScreen
