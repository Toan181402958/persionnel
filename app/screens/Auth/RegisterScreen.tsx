import { colors } from '@app/theme'
import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
const RegisterScreen = () => {
  const [input, setInput] = useState('')
  const sendData = () => {}
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={text => {
          setInput(text)
        }}
        placeholder="input data"
      />
      <TouchableOpacity
        onPress={sendData}
        style={styles.button}
        children={<Text style={{ color: 'white' }} children={'Send'} />}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    minHeight: 40,
    minWidth: 200,
    borderWidth: 1,
    paddingHorizontal: 10,
  },
  button: {
    height: 40,
    paddingHorizontal: 10,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 20,
  },
})
export default RegisterScreen
